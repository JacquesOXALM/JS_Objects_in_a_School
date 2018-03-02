
function Student(firstName,lastName,grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.sections = [];

}


function Teacher(firstName,lastName,subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.sections = [];



}


function Section(name,count){
    this.name = name;
    this.count = count;
    this.students = [];
    this.teachers = [];
    this.currentNum = this.students.length;
    this.seatsLeft= this.count-this.currentNum;
    //var MaxStud = this.limit;
    this.teacher="";
    this.addStudent = function(student){
        this.students.push(student);
        this.seatsLeft--;
        //if(this.seatsLeft>this.count){
          //  document.getElementById("wrong").innerHTML = "No student to be removed."
        //}

       // }
    };
    this.addTeacher = function(teacherparam){
        this.teachers.push(teacherparam);
    };
    this.removeStudent = function(student){
        //check if student is there
        for(var i=0; i<this.students.length; i++) {
            if(this.students[i].firstName == student) {
                this.students.splice(student);
                this.seatsLeft++;

            }
        }

    };

}