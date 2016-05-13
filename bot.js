var Twit = require('./node_modules/twit');

var config = require('./config')

var T = new Twit(config);

T.get('search/tweets', { q: '#paeanconfirmed', count: 25 }, function(err, data, response) {
  console.log(data);
});
