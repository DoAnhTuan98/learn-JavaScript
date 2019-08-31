// var fs = require('promise-fs');

// function onDone(song1) {
//     console.log(song1);
// }
// function onErr(err) {
//     console.log(err);
// }
// function readFile(path) {
//     return fs.readFile(path,{ encoding: 'utf8' });
// }

// readFile('song1.txt')
//     .then(onDone)
//     .then(function(){
//         return fs.readFile('song2.txt',{ encoding: 'utf8' });
//     })
//     .then(onDone)
//     .catch(onErr);

var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolve, reject){
        fs.readFile(path,{ encoding: 'utf8' },function(err,data){
            if(err){
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
readFilePromise('song2.txt')
    .then(function(body){
        console.log(body);
    })
    .catch(function(err){
        console.log(err);
    });
    