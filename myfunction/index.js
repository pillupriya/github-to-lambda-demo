const timestamp = require('time-stamp');

exports.handler = function (event, context) {
    console.log('first test1');
    console.log(event.key1);
    console.log('timestamp :'+timestamp());
}
