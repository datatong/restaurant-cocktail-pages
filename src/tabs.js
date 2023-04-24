//module for creating tabs for the website
import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";


const createTabs = () => {
    const content = document.querySelector('#content');
    
    const tabsContainer = document.createElement('div');
    tabsContainer.setAttribute('id', 'tabs-container');
    tabsContainer.classList.add('tabs-container');

    //create three tabs as divs
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    //set ids for the divs
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div2.setAttribute('id', 'contact-btn');

    //set classes for the divs
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    //set text content for the tabs
    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact";

    //append the divs to the content
    tabsContainer.appendChild(div1);
    tabsContainer.appendChild(div2);
    tabsContainer.appendChild(div3);

    content.appendChild(tabsContainer);

    //add event listeners
    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    })

    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    })

    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    })
};

function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default createTabs;