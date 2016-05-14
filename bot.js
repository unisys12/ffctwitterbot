var Twit = require('./node_modules/twit');

var config = require('./config');

var T = new Twit(config);

T.get('search/tweets', { q: '#paeanconfirmed', count: 3 }, function(err, data, response) {

    var tweet = data.statuses;

    var last_id;

    try {

        if (tweet) {
            for (var i = 0; i < tweet.length; i++) {

                var tweet_text = tweet[i].text;
                var tweet_id = tweet[i].id_str;
                var current_id = tweet[i].id;

                T.post('statuses/retweet/:id', { id: tweet_id }, function (err, data, response) {
                    var last_id = current_id;
                    console.log("Retweeted " + tweet_id);
                })

            }
        } else {
            return
        }

    } catch(err) {
        console.log('No data captured because ' + err);
    }
    
});
    

