var fs = require('fs');
// sync...........

// console.log('start');
// var textsong1 = fs.readFileSync('./song1.txt',{ encoding: 'utf8' });
// console.log(textsong1);
// var textsong2 = fs.readFileSync('./song2.txt',{ encoding: 'utf8' });
// console.log(textsong2);
// console.log('End');

// Async..............  không đồng bộ

console.log('start');
var song1 = fs.readFile('song1.txt',{encoding:'utf8'}, function(err,data){
    console.log(data);
});
// console.log(song1); 
console.log('End');