console.info("Hello from the file")
document.getElementById("myHeading").innerHTML = "Ella Wythe"
document.querySelector("nav ul li").setAttribute("class", "currentPage")
//document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk")
let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);
for (let i = 0; i < colourButtons.length; i++) {
    colourButtons[i].style.backgroundColor = "lightGrey";
    colourButtons[i].addEventListener("click", changeColour)
}

function changeColour(ev){
    console.info(ev.target.classList[0])
    let colourClass = ev.target.classList[0]+"Back"
    document.body.setAttribute("class", colourClass)
}

document.getElementById('myTestBtn').addEventListener('click', function() {
    console.info('hi');
});

//colour picker
