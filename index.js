/*=============== SHOW MENU ===============*/

function myFunction(){
    var element = document.getElementById("nav__menu");
    element.classList.add("show__menu")
}
function myFunction2(){
    var element = document.getElementById("nav__menu");
    element.classList.remove("show__menu")
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')
const navLinkFunction = ()=>{
    const navMenu = document.getElementById('nav__menu')

    navMenu.classList.remove('show__menu')
}
navLink.forEach(n=>n.addEventListener('click',navLinkFunction))


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 

// const scrollUp = () =>{
// 	const scrollUp = document.getElementById('scroll-up')
//     // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
// 	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
// 						: scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
