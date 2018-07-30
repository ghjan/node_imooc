
var klass = require('./klass');

exports.add = function(klasses){
    klasses.forEach(function(item, index){
        var _klass = item
        var teacherName = item.teancherName;
        var students = item.students;
        klass.add(teacherName, students);        
    })
}

