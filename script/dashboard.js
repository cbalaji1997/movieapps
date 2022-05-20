var data = JSON.parse(localStorage.getItem("students"))
displayData()
function displayData() {
    data.map(function (element,index) {
        var div = document.createElement("div")
        var img_div = document.createElement("div")
        var h4 = document.createElement("h4");
        h4.innerText = element.name;
        var h3 = document.createElement("h3")
        h3.innerText = element.course;
        var p = document.createElement("p")
        p.innerText = element.unit;
        var img = document.createElement("img")
        img.setAttribute("src", element.image)
        var btn = document.createElement("button")
        btn.innerText = "Trash"
        btn.addEventListener("click", function () {
            remove(data,index)
        })
        img_div.append(img)
        div.append(img_div, h4, h3, p,btn)
        document.getElementById("student_data").append(div)
    })
}
document.getElementById("add_details").addEventListener("click", function () {
    window.location.href = "./index.html"
})

function remove(data,index) {
    data.splice(index,1)
    var data1 = data;
    localStorage.setItem("students", JSON.stringify(data1))
    document.getElementById("student_data").innerHTML = "";
    displayData();
}