var course = null;
var courseSelected = null;
var courseName = null;

document.getElementById("inputCurso").onclick = function() {
    course = document.getElementById("inputCurso");
    courseSelected = course.options[course.selectedIndex].value;
    courseName = course.options[course.selectedIndex].text;
    if (courseSelected == 1) {
        console.log("Curso selecionado = 1");
    }
    else if (courseSelected == 2) {
        console.log("Curso selecionado = 2");
    } else if (courseSelected == 3) {
        console.log("Curso selecionado = 3");
    } else if (courseSelected == 4) {
        console.log("Curso selecionado = 4");
    } else if (courseSelected == 5) {
        console.log("Curso selecionado = 5");
    } else if (courseSelected == 6) {
        console.log("Curso selecionado = 6");
    }
}