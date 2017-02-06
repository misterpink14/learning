const configSecret = require('./configSecret');


module.exports = {


getViews() {
    return {
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: './app/views'
    };
},


getSessionStrategy() {
    return {
		password: 'secret_cookie_encryption_password',
		redirectOnTry: true,
		isSecure: false,
        clearInvalid: true
	};
},


getSocialLoginStrategy() {
    return {
        provider: 'foursquare',
        password: 'cookie_encryption_password_secure',
        clientId: configSecret.clientId,
        clientSecret: configSecret.clientSecret,
        isSecure: false,
		forceHttps: false
    };
}


};
