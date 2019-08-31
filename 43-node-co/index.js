var fs = require('fs');
var co = require('co');

function load(path) {
    return new Promise (function(resolve, reject){
        fs.readFile(path,{encoding:'utf8'},function(err,data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
}

// co(function*(){
//     // var song1 =  yield load('song1.txt');
//     // var song2 = yield load('song2.txt');
//     // var song3 = yield load('song3.txt');
//     var values = yield [
//         load('./song1.txt'),
//         load('./song2.txt'),
//         load('./song3.txt')
//     ];
//     return values;
// }).then(function(values){
//     console.log(values);
// }).catch(function(err){
//     console.log(err);
// });

var readFiles = co.wrap(function*(files){
    var values = yield files.map(function(file){
        return load(file);
    });
    return values;
});

readFiles(['song1.txt','song2.txt','song3.txt'])
    .then(function(data){
        console.log(data);
    });