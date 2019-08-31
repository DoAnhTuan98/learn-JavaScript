var fs = require('fs');
var readFileSync = require('readline-sync');

var students = [];
function loadData() {   
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);// student la mot object
    // console.log(showstudent[0].name,showstudent[0].age);
}
function showMenu() {
    console.log('1.show all students');
    console.log('2.Creat a new student');
    console.log('3.save and exit');
    var option = readFileSync.question('>');
    switch(option) {
        case '1':
            showStudent();
            showMenu();
            break;
        case '2':
            creatStudent();
            showMenu();
            break;
        case '3':
            saveAndexit();
            showMenu();
            break;
        default:
            console.log('wrong option');
            showMenu();
            break;
    }
}

function showStudent() {
    // var students = [];
    for(var student of students) {
        console.log(student.name,student.age);
    }
}

function creatStudent() {
    
    var newstudents  = {};
    var name = readFileSync.question('name:');
    var age = readFileSync.question('age:');
    newstudents.name = name;
    newstudents.age = parseInt(age);
    students.push(newstudents);//
    console.log(students);
}

function saveAndexit() {
    var stringstudent = JSON.stringify(students);
    fs.writeFileSync('./data.json',stringstudent,{ encoding:'utf8'});
}

function main() {
    loadData();
    showMenu();
}

main();
