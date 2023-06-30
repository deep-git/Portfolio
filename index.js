let cheatsheetProject = document.querySelector(".cheatsheet_info");
let materialsDesignProject = document.querySelector(".materials_info");
let messageMixerProject = document.querySelector(".message_mixer_info");
let movieDatabaseProject = document.querySelector(".movie_database_info");
let todolistProject = document.querySelector(".todolist_info");
let photoOrganizerProject = document.querySelector(".photo_organizer_info");
let todoAppProject = document.querySelector(".todoapp_info");
let caloriesTrackerProject = document.querySelector(".calories_info");
let weatherProject = document.querySelector(".weather_info");
let calculatorProject = document.querySelector(".calculator_info");

let projectClick = document.querySelectorAll(".project");
let infoProject = document.querySelectorAll(".info");

projectClick.forEach(item => {
    item.onclick = (e) => {
        e.preventDefault();
        infoProject.forEach(item => {
            if (item.classList.contains("active-projects") === true) {
                item.classList.remove("active-projects");
            }
        })

        if (e.target.classList.contains("cheatsheet")) {
            cheatsheetProject.classList.toggle("active-projects");

        } else if (e.target.classList.contains("materials")) {
            materialsDesignProject.classList.toggle("active-projects");

        } else if (e.target.classList.contains("message_mixer")) {
            messageMixerProject.classList.toggle("active-projects");

        } else if (e.target.classList.contains("movie_database")) {
            movieDatabaseProject.classList.toggle("active-projects");

        } else if (e.target.classList.contains("todolist")) {
            todolistProject.classList.toggle("active-projects");

        } else if (e.target.classList.contains("photo_organizer")) {
            photoOrganizerProject.classList.toggle("active-projects");

        } else if (e.target.classList.contains("todoapp")) {
            todoAppProject.classList.toggle("active-projects");

        } else if (e.target.classList.contains("calories")) {
            caloriesTrackerProject.classList.toggle("active-projects");
            
        } else if (e.target.classList.contains("weather")) {
            weatherProject.classList.toggle("active-projects");

        } else if (e.target.classList.contains("calculator")) {
            calculatorProject.classList.toggle("active-projects");
        }
    };
});

let scrollDown = document.querySelector(".scroll_down");
let scrollUp = document.querySelector(".scroll_up");
let welcomePage = document.querySelector(".welcome");

scrollDown.addEventListener("click", () => {
    scrollUp.scrollIntoView();
})

scrollUp.addEventListener("click", () => {
    welcomePage.scrollIntoView();
})

/*

let rootTheme = document.querySelector(":root");
let changeTheme = document.querySelector(".colour_theme");

let count = 0;

changeTheme.addEventListener("click", () => {
    count = count + 1;
    if (count % 2 === 0) {
        rootTheme.style.setProperty("--main_background", "#ffffff");
    } else {
        rootTheme.style.setProperty("--main_background", "#3A4750");
    }
});

*/

/*

let welcome = document.querySelector(".welcome");
let projects = document.querySelector(".projects");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");

let welcomeIcon = document.querySelector(".welcome_icon");
let projectsIcon = document.querySelector(".projects_icon");
let aboutIcon = document.querySelector(".about_icon");
let contactIcon = document.querySelector(".contact_icon");

let welcomeY = welcome.getBoundingClientRect().top;
let projectsY = projects.getBoundingClientRect().top;
let aboutY = about.getBoundingClientRect().top;
let contactY = contact.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
    if (window.scrollY === welcomeY) {
        welcomeIcon.style.borderBottom = "5px solid #E23E57";
        welcomeIcon.style.borderRight = "5px solid #E23E57";

        projectsIcon.style.border = "none";
        aboutIcon.style.border  = "none";
        contactIcon.style.border = "none";
    }
    
    if (window.scrollY >= projectsY) {
        projectsIcon.style.borderBottom = "5px solid #E23E57";
        projectsIcon.style.borderRight = "5px solid #E23E57";

        welcomeIcon.style.border = "none";
        aboutIcon.style.border  = "none";
        contactIcon.style.border = "none";
    } 
    
    if (window.scrollY >= aboutY) {
        aboutIcon.style.borderBottom = "5px solid #E23E57";
        aboutIcon.style.borderRight = "5px solid #E23E57";

        welcomeIcon.style.border = "none";
        projectsIcon.style.border = "none";
        contactIcon.style.border = "none";
    } 
    
    if (window.scrollY >= contactY) {
        contactIcon.style.borderBottom = "5px solid #E23E57";
        contactIcon.style.borderRight = "5px solid #E23E57";

        welcomeIcon.style.border = "none";
        projectsIcon.style.border = "none";
        aboutIcon.style.border  = "none";
    }
});

*/

let skillIcons = document.getElementsByClassName("skill");
let showText = document.querySelectorAll(".show_text");

for (let i = 0; i < skillIcons.length; i++) {
    skillIcons[i].addEventListener("mouseenter", () => {
        showText[i].classList.add("active_show_text");
    });
    
    skillIcons[i].addEventListener("mouseleave", () => {
        showText[i].classList.remove("active_show_text");
    });
}
