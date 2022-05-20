document.getElementById("submit").addEventListener("click", add)

var array = JSON.parse(localStorage.getItem("students")) || [];

function add(event){
    event.preventDefault()
    var name = document.getElementById("name").value;
    var course = document.getElementById("course").value;
    var unit = document.getElementById("unit").value;
    var image = document.getElementById("image").value;
    var batch = document.getElementById("batch").value;

    var obj = {
        name: name,
        course: course,
        unit: unit,
        image: image,
        batch: batch,
    }
    array.push(obj)
    localStorage.setItem("students", JSON.stringify(array))

}

document.getElementById("dashboard").addEventListener("click", function(){
    window.location.href = "./dashboard.html"
})