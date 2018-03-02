var allStudents = [];
var allTeachers = [];
var allSections  = [];
function initial() {
    allStudents.push(new Student("Kalen", "Pecson", 11));
    allStudents.push(new Student("Philip", "Dierks", 10));
    allStudents.push(new Student("Simpson", "The-Simple", 2));
    allStudents.push(new Student("Ginger", "Ninja", 11));
    allStudents.push(new Student("Old-Man", "Simp", 12));

    allTeachers.push(new Teacher("David", "Goodrich", "Math"));
    allTeachers.push(new Teacher("Robin", "Van-der-Vegt", "History"));
    allTeachers.push(new Teacher("Amanda", "Moreno", "English"));
    allTeachers.push(new Teacher("Matt", "Albinson", "CS"));
    allTeachers.push(new Teacher("Steve", "Beatty", "Physics"));

    allSections.push(new Section("Math", 28));
    allSections.push(new Section("Physics", 25));
    allSections.push(new Section("History", 35));
    allSections.push(new Section("CS", 32));
    allSections.push(new Section("English", 30));

    for (var i = 0; i < allSections.length; i++) {
        document.getElementById("TeacherSubject").innerHTML += "<option value="+allSections[i].name+">"+ allSections[i].name +"</option>";
        document.getElementById("sectGive").innerHTML += "<option value="+allSections[i].name+">"+ allSections[i].name +"</option>";
        document.getElementById("sectTake").innerHTML += "<option value="+allSections[i].name+">"+ allSections[i].name +"</option>";
        document.getElementById("search4Sect").innerHTML += "<option value=" + allSections[i].name+">"+allSections[i].name+"</option>";

    }
    for (var j = 0; j < allStudents.length; j++){
        document.getElementById("stuAdded").innerHTML += "<option value="+allStudents[j].firstName+" "+allStudents[j].lastName+">"+allStudents[j].firstName+" "+allStudents[j].lastName+"</option>";
        document.getElementById("stuRemoved").innerHTML += "<option value="+allStudents[j].firstName+">"+allStudents[j].firstName+" "+allStudents[j].lastName+"</option>";
        //document.getElementById("search4Stu").innerHTML += "<option value="+allStudents[j].firstName+">"+allStudents[j].firstName+" "+allStudents[j].lastName+"</option>";
    }
    for (var z=0; z < allTeachers.length; z++){
        document.getElementById("search4Teach").innerHTML += "<option value="+allTeachers[z].lastName+allTeachers[z].subject+">"+allTeachers[z].lastName+"</option>";

    }
}
var allItems = [allStudents,allTeachers,allSections];

