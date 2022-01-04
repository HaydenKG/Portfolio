const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const furtherprojbtn = document.querySelector('#furtherprojbtn')
const furtherprojectsexpand = document.querySelector('.furtherprojectshidden')
let clicked = false;

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

furtherprojbtn.addEventListener('click', function () {
    furtherprojectsexpand.classList.toggle('active');
    if (clicked) {
        furtherprojbtn.innerHTML = "more";
        clicked = false;
    } else {
        furtherprojbtn.innerHTML = "hide";
        clicked = true;
    }
})