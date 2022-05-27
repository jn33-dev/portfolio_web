'use strict';

//make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(scrollY);
    // console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

// Handle scrolling when tapping on the contact me button
const contactMeBtn = document.querySelector('.home__contact');
contactMeBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});



// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY * 0.55 / homeHeight;
});


// show arrow-up btn when scroll down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window,scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    }else {
        arrowUp.classList.remove('visible');
    }
});

// scroll to top when clicking on the arrow-up btn
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

//Projects
const workBtnCotainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnCotainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    console.log(filter);
    if(filter==null) {
        return;
    }
    projectContainer.classList.add('anim-out');
        setTimeout(() => {
            projects.forEach((project) => {
                console.log(project.dataset.type);
                if(filter==='*' || filter===project.dataset.type) {
                    project.classList.remove('invisible');
                } else {
                    project.classList.add('invisible');
                }
            });
            projectContainer.classList.remove('anim-out');
    }, 300);

    
});




function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth', block: 'center'});
}


