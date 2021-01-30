var myObj = Number("1273185387");
var myDate = new Date(1000 * myObj);

console.log(myDate.toString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toUTCString());
// console.log(myDate.getDate());
// console.log(myDate.toLocaleString('default', { month: 'long' }));
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());


console.log(
    myDate.getDate() + ' ' +
    myDate.toLocaleString(
        'default', { month: 'long' }
    ) + ' ' +
    myDate.getFullYear() + ' ' +
    myDate.getHours() + '_' +
    myDate.getMinutes() + '_' +
    myDate.getSeconds()
);
