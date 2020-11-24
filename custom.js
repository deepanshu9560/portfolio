let example0 = new Typed("#dev", {
    // strings: ["Developer.", "Designer.", "Freelancer."],
    strings: ["Developer.", "Freelancer.", "Designer.","Hacker."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    smartBackspace: false,
});
let example1 = new Typed("#dev1", {
    strings: ["Developer.", "Designer.", "Freelancer."],
    // strings: ["Developer.", "Freelancer.", "Designer.","Hacker."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    smartBackspace: false,
});





// burger
function burger(){
    let x = document.getElementById("menu");
    if(x.style.display != "block"){
        x.style.display = "block"
    }    
    else{
        x.style.display = "none"
    }
}



