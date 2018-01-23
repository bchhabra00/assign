'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    let no1 = Number(event.no1);
    let no2 = Number(event.no2);
    let sum = no1 + no2;
    callback(null, sum);  // Echo back the first key value
    //callback('Something went wrong');
};