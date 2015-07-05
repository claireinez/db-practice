var redis = {
    // var client,

    redisSetup: function () {
        var redis = require('redis');
        var url = require('url');

        var redisURL = url.parse(process.env.REDIS_URL);

        client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
    },

    addData: function (data, callback) {
        redisSetup();
        client.select(0, function() {
            client.set(data.id, data.text, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    callback(data);
                }
            });
        });
    },

    pullData: function (callback) {
        var returned = [];
        redisSetup();
        var callbackFunction = function (err, data) {
            if (err) {
                console.log(err);
            } else {
                returned.push(data);
            }
        };
        client.select(0, function() {
            client.keys("*", function (err, keys) {
                if (err) {
                    console.log(err);
                } else {
                    for (var i = 0; i < keys.length; i++) {
                        client.get(keys[i]);
                    }
                }
            });
        });
    }
};

module.exports = redis;