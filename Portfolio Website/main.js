/**
 * ! This is very basic javaScript just to help me with the aside bar without waiting much time on the css.
 */

// GETTING ELEMENTS FROM THE DOM
let openBar = document.querySelector('.fa-bars');
let closeBar = document.querySelector('.fa-close');
let nav = document.getElementById('nav');
let menu = document.querySelector('.asidebarMenu');
let home_description1 = document.getElementById('goForTransformaion1');
let homeDescription = document.getElementById('ForTransformaion');
let idArticleTransformationend = document.getElementById('idArticleTransformationend');
const service_box = document.querySelectorAll('.service-box');

//FUNCTION FOR ASIDE BAR
let openAsideBar = () => {
    setTimeout(() => {
        nav.style.right = '0';
        nav.style.transition = 'all 0.5s ease';
        openBar.style.display = 'none';
    }, 1000)
};

// Function for close aside bar
let closeAsideBar = () => {
    nav.style.right = '-260px';
    nav.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        openBar.style.display = 'block';
    }, 1000)

};

// EVENTHANDLERS FOR ASIDE BAR
menu.addEventListener('click', () => closeAsideBar());
openBar.addEventListener('click', openAsideBar);
closeBar.addEventListener('click', closeAsideBar);

/**
 * ! This event is to keep tract of the scrolling of the mouse
 * ? And if this happen, I will just animate some HTML elements
 */

window.addEventListener('scroll', () => {

    // Getting the viewport height of the screen
    let windowHeight = window.innerHeight / 5 * 4;

    // Getting the height of the element from the top of the viewport to the top of the element
    let TransformationHeight = homeDescription.getBoundingClientRect().top;
    let htmlElementTransformationHeight1 = home_description1.getBoundingClientRect().top;
    let idArticleTransformationendF = idArticleTransformationend.getBoundingClientRect().top;

    transformationMasterFunction(htmlElementTransformationHeight1, TransformationHeight, idArticleTransformationendF, windowHeight);

    let serviceBoxHeight;
    service_box.forEach(image => {
        serviceBoxHeight = image.getBoundingClientRect().top;

        if (serviceBoxHeight < windowHeight) {
            image.classList.add('transformationend')
        } else {
            image.classList.remove('transformationend')
        }
    });
});

// A helper function
let transformationMasterFunction = (he1, he2, he3, windowHeight) => {
    if (he1 < windowHeight) {
        home_description1.classList.add('home_transformationend1');
    } else {
        home_description1.classList.remove('home_transformationend1');
    };

    if (he2 < windowHeight) {
        homeDescription.classList.add('transformationend')
    } else {
        homeDescription.classList.remove('transformationend')
    };

    if (he3 < windowHeight) {
        idArticleTransformationend.classList.add('idArticleTransformationend')
    } else {
        setTimeout(() => {
            idArticleTransformationend.classList.remove('idArticleTransformationend')
        }, 800)
    };
};