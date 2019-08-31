var readlinesync = require('readline-sync'); 

var Data = [];

function showMenu() {
    console.log('1.you want creatData');
    console.log('2.you want editData');
    console.log('3.you want deleteData');
    console.log('4.you want search contact:')
    var option = readlinesync.question('>');
    switch(option) {
        case '1':
            creatData();
            showMenu();
            break;
        case '2':
            editData();
            showMenu();
            break;
        case '3':
            deleteData();
            showMenu();
            break;
        case '4':
            searchData();
            showMenu();
            break;
        default:
            console.log('wrong option!');
            break;
    }
}

function creatData() {
    var data = {};
    var name = readlinesync.question('name:');
    var numberphone = readlinesync.question('numberphone:');
    data.name = name;
    data.numberphone = numberphone;
    Data.push(data);
    console.log(Data);
    return Data;
}

function editData() {
    var answer = readlinesync.question('Who is the person you want to change data?:  ');
    var index;
    for(var i = 0 ; i < Data.length ; i++ ) {
        if (Data[i].name === answer ) {
            index = i;
        }
    }
    var newData = {};
    var name = readlinesync.question('new name:');
    var numberphone = readlinesync.question('new numberphone:');
    newData.name = name;
    newData.numberphone = numberphone;
    Data.splice(index,1,newData);
    console.log(Data);
}

function deleteData() {
    var answer = readlinesync.question('Who is the person you want to delete data?:  ');
    var index;
    for(var i = 0 ; i < Data.length ; i++ ) {
        if (Data[i].name === answer ) {
            index = i;
        }
    }
    Data.splice(index,1);
    console.log(Data);
}

function searchData() {
    var answer = readlinesync.question('Enter the name:  ');
    var index;
    for(var i = 0 ; i < Data.length ; i++ ) {
        if (Data[i].name === answer) {
            index = i;
        }
    }
    console.log(Data[index].name,Data[index].numberphone);
}


function main() {
    // loadData();
    showMenu();
}
main();