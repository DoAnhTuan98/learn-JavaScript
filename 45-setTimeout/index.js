console.log('start');
var timeout = setTimeout(function(){
    console.log('finish');
},2000);
console.log('done');
clearTimeout(timeout);