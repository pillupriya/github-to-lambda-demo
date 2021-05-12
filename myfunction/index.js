const timestamp = require('time-stamp');

exports.handler = function (event, context) {
    console.log('first qa');
    console.log(JSON.parse(event));
	context.succeed('hello ' + event.key);
    console.log('timestamp :'+timestamp());
}