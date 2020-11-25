/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections =  document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildnav() {
    const nav = document.getElementById('navbar__list');
    // console.log(sections);
    let i =0;
    sections.forEach(element => {
        const list =document.createElement('li');
        const ancr =document.createElement('a');
        //ancr.classList.add("#");
        const secid=sections[i].getAttribute("id");
        //list.id =secid;
        //ancr.classList="";
        ancr.href ='#' + sections[i].getAttribute('id');
       //ancr.appendChild(document.createTextNode("section "+ i++));
         ancr.appendChild(document.createTextNode(sections[i].getAttribute("data-nav")));
        i++
        list.appendChild(ancr);
        nav.appendChild(list);
        list.classList.add("menu__link");
        // list.addEventListener('click', function (event) {
        //     sections[i].scrollIntoView();
        // });
        // list.scrollIntoView()
        // console.log(sections[i].getAttribute("data-nav"));
        // console.log(sections[i].getAttribute("id"));
            // i++;
        // sections.className = 'menu__link';
        
        //sections.data.nav = sections.id;
        //sections.innerText = sections.data.nav;
    });
}
// Add class 'active' to section when near top of viewport
function activateSection (){

    let i =0;
    const menuitems =  document.querySelectorAll('li');

    sections.forEach(element => {
        //  console.log(sections[i].getBoundingClientRect());
          console.log(menuitems[i]);
        //  console.log(screen.height);
         section=sections[i].getBoundingClientRect();
         if(section.top > 0 && section.top < window.innerHeight* .5){
            sections[i].classList.add("your-active-class");
            menuitems[i].classList.add("active");

         } else{
            sections[i].classList.remove("your-active-class");
            menuitems[i].classList.remove("active");
         }
            
         i++;
         //if()
          //sections.innerText = sections.data.nav;
    });
}

// Scroll to anchor ID using scrollTO event
// kamel al goz2 da anta na2slk ank t3ml al nav bar yro7 lal section lma tdos 3leeh

// function scrollOnClick(){
//     let ancors = document.querySelectorAll("a");
//     for(section in sections){
//         ancoo.addEventListener('click', function () {
//             document.getElementById(sections[1].getAttribute("data-nav")).scrollIntoView();
//             //const clicked = document.querySelector( '#' + event.target.dataset.nav)
//             // var clicked = document.getElementById(sections[1].getAttribute("data-nav"))
//             //     clicked.scrollIntoView();
//         });
//     }
//     // 

// }

function scrollUp() {
    let upbtn = document.getElementById('upbtn');
    let sec = document.querySelector('main');
    upbtn.addEventListener('click', function () {
        sec.scrollIntoView(true);
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildnav();
// Scroll to section on link click
// scrollOnClick();
scrollUp();
// Set sections as active
window.addEventListener("scroll", activateSection);



