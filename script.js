$(document).ready(function(){

var teacher = ['Aaron', 'Zack', 'Justin'];

$("#teacherButton").click(function() {
    var random = Math.floor(Math.random() * teacher.length);
    $("#teacherDisplay").append(teacher[random]);
});


var students = ['Jennifer', 'Darleny', 'Wayne', 'Zenebou', 'Bradley'];

$("#studentButton").click(function () {
    var random = Math.floor(Math.random() * students.length);
    $("#studentDisplay").append(students[random]);
});
});