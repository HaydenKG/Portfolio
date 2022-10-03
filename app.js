const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const webSelectionBtn = document.querySelector("#webBtn");
const threeDSelectionBtn = document.querySelector("#threeDBtn");
const projectContainer = document.querySelector(".projectscontainer");

let clicked = false;

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function switchProjectSelection(selection){
    if(selection === "web"){
        webSelectionBtn.classList.add("selectedSectionBtn");
        threeDSelectionBtn.classList.remove("selectedSectionBtn");
        projectContainer.classList.remove("otherSelectionSelected");
    } else {
        threeDSelectionBtn.classList.add("selectedSectionBtn");
        webSelectionBtn.classList.remove("selectedSectionBtn");
        projectContainer.classList.add("otherSelectionSelected");
    }
}