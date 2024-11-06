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

let imageAr = [
    'images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg'
];

let currentIndex = 0;

function chgImage() {
  currentIndex++;
  if (currentIndex >= imageAr.length) {
    currentIndex = 0;
  }
  document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
}

setInterval(chgImage, 2000);

//colour picker
