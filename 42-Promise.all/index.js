var fs = require('fs');
var axios = require('axios');

function loadData(path) {
    return new Promise (function(resolve, reject){
        fs.readFile(path,{ encoding: 'utf8' }, function(err, data){
            if(err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}


Promise.all([
    loadData('song1.txt'),
    loadData('song2.txt'),
    loadData('song3.txt')
]).then(function(body){
    console.log(body);
}).catch(function(err){
    console.log(err);
});
