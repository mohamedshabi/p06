let cartcount = 0;
const carticon = document.getElementById ("cartcount");
const addtocartbuttons = document.querySelectorAll(".addtocart");

addtocartbuttons.forEach(button => {
    button.addEventListener("click", () =>{
        cartcount++;
        carticon.textContent = cartcount;
        alert("Added to cart");
    });
});

const form = document.getElementById("newsletterform");
const emailinput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(emailinput.value.includes("@")){
        message.textContent = "Thanks for subscribing !";
        message.style.color = "green";
        emailinput.value = "";
    }
    else{
        message.textContent = "Please Enter a valid Email !";
        message.style.color= "red";
    }
});

const menu = document.getElementById("menutoggle");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", () =>{
    if(navbar.style.display==="block"){
        navbar.style.display = "none";
    }

    else{
        navbar.style.display = "block";
    }
});

let currentindex = 0;
const slides = document.getElementById("slides");
const allslides = document.querySelectorAll(".slide").length;

function showslide(index){
    if(index >= allslides) currentindex = 0;
    else if (index < 0) currentindex = allslides - 1;
    else currentindex = index;
    slides.style.transform = `translateX(${-currentindex * 100}%)`;
}

function next() { showslide(currentindex + 1); }
function prev() { showslide(currentindex - 1); }

setInterval(next, 4000);