const Pusher = require('pusher-client');

let pusher = new Pusher('de504dc5763aeef9ff52');
let chanel = pusher.subscribe('live_orders');

let events = ['order_created', 'order_changed', 'order_deleted'];

events.forEach(eventName => {
    chanel.bind(eventName, function (data) {
        console.log(data);
    });
});
