'use strict';

const AppController = require('./controllers/AppController');

module.exports = [{
    method: 'GET',
    path: '/',
    handler: AppController.index
},
{
    method: 'GET',
    path: '/home',
    config: {
        auth: { mode: 'try', strategy: 'session' },
        plugins: { 'hapi-auth-cookie': { redirectTo: false } },
        handler: AppController.home
    }
},
{
    method: 'GET',
    path: '/profile',
    config: {
        auth: 'session',
        handler: AppController.profile
    }
},
{
    method: 'GET',
    path: '/profile/{id}',
    config: {
	auth: { mode: 'try', strategy: 'session' }, plugins: { 'hapi-auth-cookie': { redirectTo: false } },
    	handler: AppController.profileUser
    }
},
{
    method: ['GET', 'POST'],
    path: '/login',
    config: {
        auth: 'foursquare',
        handler: AppController.login
    }
},
{
    method: 'GET',
    path: '/logout',
    config: {
        auth: 'session',
        handler: AppController.logout
    }
}];
