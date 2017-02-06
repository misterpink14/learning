'use strict';

const path = require('path');
const views = path.resolve('./app/views');
const Users = require(path.resolve('./app/models/users'));
const https = require('https');
const config = require(path.resolve('./config'));


const API_URL = "https://api.foursquare.com/v2/";
const USERS_BASE_URL = API_URL + "users/";
const API_VERSION = "20170205";


const getCheckinData = (token, userID, profile, reply) => {

    const limit = (userID? "1" : "100");
    const checkinRequestUrl = USERS_BASE_URL + (userID? userID : "self") +
                            "/checkins?sort=newestfirst&limit=" + limit +
                            "&oauth_token=" + token +
                            "&v=" + API_VERSION;

    https.get(checkinRequestUrl, (res) => {
        let s = '';
        res.on('data', (d) => { s += d; });
        res.on('end', () => {
            let checkins = [];
            const checkinData = JSON.parse(s).response.checkins.items;
            checkinData.forEach((element) =>  {
                checkins.push({
                    venue: element.venue.name,
                    city: element.venue.location.city,
                    state: element.venue.location.state,
                    country: element.venue.location.country,
                    category: element.venue.categories.name });
            }, this);

            const user = {
                displayName: profile.displayName,
                email: profile.email,
                url: profile.url };
            reply.view('profile', {
                user: user,
                checkins: checkins,
                isAuth: userID? true : false });
        });
    }).on('error', (e) => { console.error(e); }).end();
};



module.exports = {


index(request, reply) { return reply.redirect('/home'); },


home(request, reply) {
    return reply.view('home', {
        users: Users.loadUsers(),
        isAuth: request.auth.isAuthenticated });
},


login(request, reply) {
    if (!request.auth.isAuthenticated) {
        return reply('Authentication failed: ' + request.auth.error.message);
    }
    const profile = request.auth.credentials.profile;
    const checkins = profile.raw.checkins.items;
    checkins.sort((a, b) => { return a.createdAt - b.createdAt; });

    const user = {
        id: profile.id,
        email: profile.email,
        displayName: profile.displayName,
        url: profile.raw.canonicalUrl,
        token: request.auth.credentials.token,
        checkin: [checkins[0]] };

    let users = Users.loadUsers();
    users[profile.id] = user;
    Users.saveUsers(users);

    request.cookieAuth.set({
        id: profile.id,
        email: profile.email,
        displayName: profile.displayName,
        url: profile.raw.canonicalUrl,
        token: request.auth.credentials.token });
    return reply.redirect('/home');
},


logout(request, reply) {
    request.cookieAuth.clear();
    return reply.redirect('/');
},


profile(request, reply) {
    getCheckinData(
        request.auth.credentials.token,
        null,
        request.auth.credentials,
        reply);
},


profileUser(request, reply) {
    const userId = request.params.id;
    if (request.auth.isAuthenticated && request.auth.credentials.id === userId) {
        return reply.redirect("/profile");
    }

    if (request.auth.isAuthenticated) {
        const fsUserData = getCheckinData(
            request.auth.credentials.token,
            userId,
            request.auth.credentials,
            reply);
    }
    else {
        reply.view('profile', {
                user: user,
                checkins: Users.loadUsers()[userId].checkin });
    }
} };