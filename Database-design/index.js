var classes = [
    { name: '1A',id: 0},
    { name: '2A',id: 1},
    { name: '3A',id: 2},
    { name: '4A',id: 3}
];

var teacher = [
    {
        id: 0,
        name: 'Nguyet',
        age: 50
    },
    {
        id: 1,
        name: 'Hoa',
        age: 50
    },
    {
        id: 2,
        name: 'Quy',
        age: 50
    },
    {
        id: 3,
        name: 'Hiep',
        age: 50
    }
];

var students = [
    {name: 'tuan',height: 120,id: 0},
    {name: 'son',height: 120,id: 1},
    {name: 'tho',height: 120,id: 2},
    {name: 'khanh',height: 120,id: 3},
    {name: 'tien',height: 120,id: 0}
];

function getStudentsInclass(className){
    var classObj = classes.find(function(a){
        return a.name === className;
    });
    var studentsInclass = students.filter(function(student){
        return student.id === classObj.id;
    });
    return studentsInclass;    
}

console.log(getStudentsInclass('4A'));