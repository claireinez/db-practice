var handlers = require('./handlers.js');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: handlers.homeHandler
    },

    {
        method: 'POST',
        path: '/addData',
        handler: handlers.addData
    },

    {
        method: 'GET',
        path: '/static/{path*}',
        handler:  {
            directory: {
                path: './'
            }
        }
    }
];