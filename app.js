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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const scrollBtn = document.getElementsByClassName("backToTop")[0];
const navBarList = document.getElementById("navbar__list");
const [...sections] = document.getElementsByTagName("section");
const	navItems = document.getElementsByClassName("navbar__item");

const sectionsIDs = sections.map(sec => sec.id);
const navItemsData = sections.map(sec => sec.getAttribute("data-nav"));



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const scrollTo = (e) => {
	e.preventDefault();
	const target = e.target.getAttribute("data-scroll-to");
	const element = document.querySelector(target);

	element.scrollIntoView({ behavior: "smooth" });
};

const isInViewport = (elem) => {
    const { top, bottom } = elem.getBoundingClientRect();
		const winHeight = window.innerHeight || document.documentElement.clientHeight;

    return bottom >= 0 && top <= winHeight
};

const showBackToTop = () =>	window.addEventListener("scroll", () => scrollBtn.classList.toggle("backToTop--active", window.scrollY > 500));

const scrollToTop = () => window.scrollTo({ top: 0,	behavior: "smooth" });



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
const buildNav = (nav, items, secIDs) => {
	const fragment = document.createDocumentFragment();

	items.map((item, i) => {
	const listItem = document.createElement("li");

    listItem.textContent = item;
	listItem.classList.add("navbar__item");
	listItem.addEventListener("click", scrollTo);
	listItem.setAttribute("data-scroll-to", `#${secIDs[i]}`);

    fragment.appendChild(listItem);
    });

	nav.appendChild(fragment);
};


// build the nav
buildNav(navBarList, navItemsData, sectionsIDs);

// Add class 'active' to section when near top of viewport
const activateSec = () => {
    sections.map((sec) => {
        window.addEventListener("scroll", (event) => {
        isInViewport(sec)
            ? sec.classList.add("section--active")
            : sec.classList.remove("section--active");
        });
    });
};


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
activateSec()
