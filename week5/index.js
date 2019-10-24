
class Course {

    constructor(){
        this.code = '';
        this.time = '';
        this.date = "";
        this.classes = []
    }

    toString(){
        return `${this.code} ${this.time}\n${this.date}\n${this.classes}`        
    }

}

var list;

fetch('https://maeyler.github.io/JS/data/Courses.txt').then((res)=> {
    res.text().then((text) => {
        var courses = [];
        let lines = text.split('\n');

        for(let line of lines){
            let data = line.split('	');
            
            let course = new Course();
            course.code = data[0];
            course.time = data[1];
            course.date = data[2];
            course.classes = data.slice(3);
    
            courses.push(course);
        }
        

        list = courses;
    })    
})

function getCourse(code){
    let filter = list.filter((course)  => code == course.code);
    if(filter[0]){
        return filter[0];
    }

    return null;
}

function query(code){
    let course = getCourse(code);
    if(course){
        result.innerText = course;
    }else{
        result.innerText = 'Course is not found'
    }
}