class Course{

    constructor(name,time,date,rooms){
        this.name = name;
        this.time = time;
        this.date = date;
        this.rooms = rooms;
    }

    toString(){
        return `Course ( ${this.name} , ${this.time}, ${this.date}, ${this.rooms} )`
    }

}

class Student{

    constructor(id,name,gpa,courses){
        this.id = id;
        this.name = name;
        this.gpa =gpa;
        this.courses = courses;
    }

    toString(){
        return `Student ( ${this.id} , ${this.name} , ${this.gpa} , ${this.courses})`
    }

}