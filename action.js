
function hideAllDivs() {
    document.getElementById("newStu").innerHTML = "";
    document.getElementById("list").innerHTML = "";
    document.getElementById("okiedokie").innerHTML ="";
}

function addStudent() {
    hideAllDivs();
    var firstName = document.getElementById("StudentFirstName").value;
    var lastName = document.getElementById("StudentLastName").value;
    var grade = document.getElementById("StudentGrade").value;
    var newStu = new Student(firstName, lastName, grade);
    allStudents.push(newStu);
    document.getElementById("newStu").innerHTML = "Student Added.";
    document.getElementById("stuAdded").innerHTML += "<option value="+newStu.firstName+">"+newStu.firstName+"</option>";
    document.getElementById("stuRemoved").innerHTML += "<option value="+newStu.firstName+">"+newStu.firstName+"</option>";
    //document.getElementById("search4Stu").innerHTML += "<option value="+newStu.firstName+newStu.lastName+">"+newStu.firstName+newStu.lastName+"</option>";

}

function addTeacher(){
    hideAllDivs();
    var firstName = document.getElementById("TeacherFirstName").value;
    var lastName = document.getElementById("TeacherLastName").value;
    var subject = document.getElementById("TeacherSubject").value;
    var newTeach= new Teacher(firstName,lastName,subject);
    allTeachers.push(newTeach);
    document.getElementById("newStu").innerHTML = "Teacher Added.";
    document.getElementById("search4Teach").innerHTML += "<option value="+newTeach.lastName+newTeach.subject+ ">" + newTeach.lastName+ "</option>";

}

function addSection(){
    hideAllDivs();
    var name = document.getElementById("SectionName").value;
    var count = document.getElementById("SectionCount").value;
    var newSect= new Section(name,count);
    allSections.push(newSect);
    document.getElementById("TeacherSubject").innerHTML += "<option value="+newSect.name+">"+newSect.name+"</option>";
    document.getElementById("newStu").innerHTML = "Section Added.";
    document.getElementById("sectGive").innerHTML += "<option value="+newSect.name+">"+newSect.name+"</option>";
    document.getElementById("sectTake").innerHTML += "<option value="+newSect.name+">"+newSect.name+"</option>";
    document.getElementById("search4Sect").innerHTML += "<option value="+newSect.name+ ">" + newSect.name+ "</option>";

}

function listStudent(){
    hideAllDivs();
    for(var i=0; i<allStudents.length; i++){
        document.getElementById("list").innerHTML += allStudents[i].firstName +" "+ allStudents[i].lastName +" "+ allStudents[i].grade +"<br>";
    }

}

 function listTeacher(){
     hideAllDivs();
     for(var i=0; i<allTeachers.length; i++){
         document.getElementById("list").innerHTML += allTeachers[i].firstName +" "+ allTeachers[i].lastName +"-"+" " + allTeachers[i].subject+"<br>";
     }
}

 function listSection(){
     hideAllDivs();
     for(var i=0; i<allSections.length; i++){
         document.getElementById("list").innerHTML += allSections[i].name + "<br>";
             //+ " taught by " + whichever teacher is assigned to it
     }
 }



function addStudentToSection(student,section){
     hideAllDivs();
     for(var j=0; j< allStudents.length; j++) {
         if (allStudents[j].firstName == student ) {
             student = allStudents[j];
             for (var z=0; z<allSections.length; z++){
             allStudents[j].sections.push(allSections[z])
             }
         }
     }
     console.log(student);
    for (var i = 0; i < allSections.length; i++) {
        if (allSections[i].name == section) {
            allSections[i].addStudent(student);

        }
    }
   document.getElementById("okiedokie").innerHTML = "<img src='img/check-mark-1292787_960_720.png' width='400' height='300'/>";
}

function removeStudentFromSection() {
    hideAllDivs();
    //make the parameters not undefined
    var Student = document.getElementById("stuRemoved").selectedIndex;
    //var Student = allStudents[Stud];
    var section = document.getElementById("sectTake").selectedIndex;
    //var section = allSections[sect];
    //section.removeStudent(Student);
     //for (var i = 0; i < allStudents.length; i++) {
         //if (allStudents[i].firstName == Student) {
            // Student = allStudents[i];
         //}

     for (var j = 0; j < allSections.length; j++) {
         if (allSections[j].name == section) {
             allSections[j].removeStudent(Student);
         }
     }
     //}
    document.getElementById("okiedokie").innerHTML = "<img src='img/image2.png' width='400' height='250'/>";
}



//function searchForStudent(){
    //var student = document.getElementById("search4Stu").value;
    //console.log(student);
    //hideAllDivs();
    //for(var i=0; i<allStudents.length; i++){
        //for(var j=0; j<allStudents[i].sections.length; j++){
          //  if(document.getElementById("search4Stu").value == allStudents[i].firstName) {
        //        document.getElementById("list").innerHTML +=  allStudents[i].sections[j].name + "<br>";
      //      }
    //    }
  //  }
//}

function searchForTeacher(){
    hideAllDivs();
    for(var i=0; i<allTeachers.length; i++){
        if(document.getElementById("search4Teach").value == allTeachers[i].lastName+allTeachers[i].subject) {
            document.getElementById("list").innerHTML = allTeachers[i].subject;
        }
    }
}

function searchForSections(){
    hideAllDivs();
    for(var i=0; i<allSections.length; i++){
        for(var j=0 ; j<allSections[i].students.length; j++) {
            document.getElementById("list").innerHTML += allSections[i].students[j].firstName +" " +allSections[i].students[j].lastName+" "
            + allSections[i].students[j].grade + " "+"<br>";
        }
    }


}

//
// function getStudentObjFromId(studentId){
//
// }
//
// function getTeacherObjFromId(teacherId){
//
// }
//
// function getSectionObjFromId(sectionId){
//
// }
