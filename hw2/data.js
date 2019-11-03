async function fetchCourseData(){
    let bytes = await fetch("https://maeyler.github.io/JS/data/Courses.txt");
    let text = await bytes.text();
    let lines  =  text.split('\n');
    return lines.map(mapLineToCourse);
}

async function fetchStudentData(){
    let bytes = await fetch("https://maeyler.github.io/JS/data/Students.txt");
    let text = await bytes.text();
    let lines  =  text.split('\n');
    return lines.map(mapLineToStudent);
}	

function mapLineToStudent(line){
    let [id,name,gpa, ...lessons] = line.split('\t');
    return new Student(id,name,gpa,lessons);
}

function mapLineToCourse(line){
    let [courseName,time,date, ...classes] = line.split('\t'); 
    return new Course(courseName,time,date,classes);
}

function indexer(data){
    let map =  new Map();
    data.forEach(element => {
        map.set(element[Object.keys(element)[0]],element);
    });
    return map;
}

class Student{

    constructor(id,name,gpa,lessons){
        this.id = id;
        this.name = name;
        this.gpa = gpa;
        this.lessons = lessons;
    }

    toString(){
        return `ID: ${this.id} NAME: ${this.name} GPA: ${this.gpa} LESSONS: ${this.lessons} `
    }

}


class Course{

    constructor(courseName,time,date,classes){
        this.courseName = courseName;
        this.time = time;
        this.date  = date;
        this.classes = classes;
    }

    toString(){
        return `COURSE NAME: ${this.courseName} EXAM TIME: ${this.time} EXAM DATE: ${this.date} CLASSES: ${this.classes} `
    }

}

class Database{

    constructor(students,courses){
        this.students = students;
        this.courses = courses;
    }

    getRandomStudent(){
        return students.random();
    }

    getRandomCourse(){
        return courses.random();
    }

    studentsAboveGPA(gpa){
        return students.filter(student => student.gpa > gpa);
    }

    getLessonsOf(id){
        let student = this.students.get(id);
        if(student)
            return student.lessons;
        return null;    
    }

    getStudentsOf(courseName){
        return students.filter(student => student.lessons.includes(courseName));
    }

    getCoursesOf(room){
        return courses.filter(course => course.classes.includes(room));
    }


}

var database;
var students;
var courses;

async function init(){
    students = await fetchStudentData();
    courses =  await fetchCourseData();
    database = new Database(indexer(students),indexer(courses));
}

init();