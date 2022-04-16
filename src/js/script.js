const navOpener = document.getElementById("nav-open");
const navCloser = document.getElementById("nav-close");
const nav = document.querySelector("nav");
const tabs = document.querySelectorAll(".tab");

const weaponsBtn = document.getElementById("wpn");
const buildsBtn = document.getElementById("bld");
const vehiclesBtn = document.getElementById("veh");
const othersBtn = document.getElementById("oth");

const weapons = document.getElementById("weapons");
const builds = document.getElementById("builds");
const vehicles = document.getElementById("vehicles");
const others = document.getElementById("others");

const reveals = document.querySelectorAll('.reveal');
const windowheight = window.innerHeight;
const revealpoint = 150;

navOpener.addEventListener("click", () => {
    if(nav.classList == "active") return;
    nav.classList.add("active");
})

navCloser.addEventListener("click", () => {
    if(!nav.classList == "active") return;
    nav.classList.remove("active");
})

function handleAddActive(elem) {
    elem.classList.add("active");
}

function handleRemoveActive() {
    tabs.forEach(tab => {
        tab.classList.remove("active");
    })
}

weaponsBtn.addEventListener("click", () => {
    handleRemoveActive();
    handleAddActive(weapons);
})

buildsBtn.addEventListener("click", () => {
    handleRemoveActive();
    handleAddActive(builds);
})

vehiclesBtn.addEventListener("click", () => {
    handleRemoveActive();
    handleAddActive(vehicles);
})

othersBtn.addEventListener("click", () => {
    handleRemoveActive();
    handleAddActive(others);
})

window.addEventListener('scroll', () => {
    for(let i = 0; i < reveals.length; i++) {
        let revealtop = reveals[i].getBoundingClientRect().top;
        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('reveal-on');
        }
    }
});