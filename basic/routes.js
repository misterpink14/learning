module.exports = [

    /* VIEWs */

    {
        method: 'GET',
        path:   '/',
        handler: function(request, reply) {
            reply.file('./src/views/index.html');
        }
    },

    /* GETs */

    {
        method: 'GET',
        path:   '/hello',
        handler: function (request, reply) {

            return reply('hello world');
        }
    },
    {
        method: 'GET',
        path:    '/{name}',
        handler: function (request, reply) {
            reply('Hello ' + encodeURIComponent(request.params.name) + '!');
        }
    }
];