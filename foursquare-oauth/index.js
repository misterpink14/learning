'use strict';

const Hapi = require('hapi');
const routes = require('./app/routes');
const config = require('./config');

const server = new Hapi.Server();

server.connection({port: 8080});

server.register([
        require('hapi-auth-cookie'),
        require('bell'),
        require('vision'),
        require('inert')], function (err) {

    if (err) {
        throw err;
    }

	server.views(config.getViews());
	server.auth.strategy('session', 'cookie', config.getSessionStrategy());
    server.auth.strategy('foursquare', 'bell', config.getSocialLoginStrategy());
    server.route(routes);

    server.start((err) => {

		if (err) {
			throw err;
		}
		console.log('Server running at:', server.info.uri);
	});
});
