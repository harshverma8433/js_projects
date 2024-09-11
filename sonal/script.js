let nav = document.querySelector('nav');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 0){
        nav.classList.add("nav-back")
    }
    else
    nav.classList.remove("nav-back")
})

function show(){
    console.log("h")
    let r = document.getElementById("para");
    if(r.style.display === "block"){
        r.style.display = "none";
    }
    else{
        r.style.display = "block";
    }
}

function show1(){
    console.log("h")
    let r = document.getElementById("para1");
    if(r.style.display === "block"){
        r.style.display = "none";
    }
    else{
        r.style.display = "block";
    }
}

function show2(){
    console.log("h")
    let r = document.getElementById("para2");
    if(r.style.display === "block"){
        r.style.display = "none";
    }
    else{
        r.style.display = "block";
    }
}

function show3(){
    console.log("h")
    let r = document.getElementById("para3");
    if(r.style.display === "block"){
        r.style.display = "none";
    }
    else{
        r.style.display = "block";
    }
}

function show4(){
    console.log("h")
    let r = document.getElementById("para4");
    if(r.style.display === "block"){
        r.style.display = "none";
    }
    else{
        r.style.display = "block";
    }
}

function show5(){
    console.log("h")
    let r = document.getElementById("para5");
    if(r.style.display === "block"){
        r.style.display = "none";
    }
    else{
        r.style.display = "block";
    }
}




const sliders = document.querySelectorAll(".slider11");
let counter = 0;

sliders.forEach(
    (element , index) => {
        element.style.left = `${index*100}%`;
    }
)

const left = () => {
    if(counter == 0){
        counter = sliders.length-1;


    }
    else{
        counter--;
    }
    slider();
}

const right = () => {
    if(counter == sliders.length-1){
        counter = 0;
    }
    else{

        counter++;
    }
    slider();
}

const slider = () => {
    sliders.forEach(
        (element) => {
            element.style.transform = `translate(-${counter*100}%)`
        }
    )
}