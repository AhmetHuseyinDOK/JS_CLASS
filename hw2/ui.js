function onGetRandomStudentClicked(){
    let student = database.getRandomStudent();
    display(student);
}

function onGetRandomCourseClicked(){
    let course = database.getRandomCourse().classes.random();
    display(course);
}

function onFindAboveGPAClicked(){
    let students = database.studentsAboveGPA(input.value);
    display(students);
}

function onGetCourcesOfStudentClicked(){
    let courses = database.getLessonsOf(input.value);
    display(courses);
}

function onGetExamScheduleOfStudentClicked(){
    let lessons = database.getLessonsOf(input.value);
    let detailed = lessons.map( id => database.courses.get(id));
    display(detailed);
}

function onGetStudentListOfTakingCourse(){
    let students = database.getStudentsOf(input.value);
    display(students);
}

function getTotalNumberOfCoursesInRoom(){
    let courses = database.getCoursesOf(input.value);
    display(courses.length);
}


function display(data){
    let res = data;
    
    if(Array.isArray(data)){
        res = data.length  + ' result has been found \n' +data.join('\n');
    }

    result.innerText = res;
}