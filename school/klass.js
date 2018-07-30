var student = require('./student');
var teacher = require('./teacher');

function add(teancherName, students){
    students.forEach(function(item, index){
        student.add(item);
    });
    teacher.add(teancherName);

    
}

exports.add = add
