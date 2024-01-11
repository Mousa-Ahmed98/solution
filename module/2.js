class Enrollment{
    CourseName;
    Grade;
    constructor(CourseName, Grade){
        this.CourseName = CourseName;
        this.Grade = Grade;
    }
}


let mousaGrades = [
    new Enrollment("Javascript", "Excellent"),
    new Enrollment("Jquery", "Good"),
    new Enrollment("CSS", "Very good"),
];

let aliGrades = [
    new Enrollment("Javascript", "Fail"),
    new Enrollment("Jquery", "Excellent"),
    new Enrollment("CSS", "Good"),
];



let stdMap = new Map();
stdMap.set("Mousa", mousaGrades);

stdMap.set("Ali", aliGrades);
let showInfoDiv = document.getElementById("showInfo");


stdMap.forEach((value, key)=>{
    console.log(`Student ${key}`);
    console.log("=> Courses");
    value.forEach(element=>{
        console.log(`   ${element.CourseName} : ${element.Grade}`);
    })
})

