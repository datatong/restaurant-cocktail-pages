//module for creating the menu page

const createMenuPage = () => {
    //create content and contentpage
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    //create menu
    const heading = document.createElement('h1');
    heading.textContent = "List of Libations"
    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    const menuItem1 = document.createElement('li');
    const imageItem1 = document.createElement('img');
    imageItem1.src = "https://drinkoteket.com/wp-content/uploads/old-fashioned-640x640.jpg";
    const detailItem1 = document.createElement ('div');
    const nameItem1 = document.createElement('h3')
    nameItem1.textContent = "Old Fashioned";
    const descriptionItem1 = document.createElement('h4');
    descriptionItem1.textContent="Rye Whiskey, Sweet Syrup, Bitters.";
    menuItem1.appendChild(imageItem1);
    menuItem1.appendChild(detailItem1);
    detailItem1.appendChild(nameItem1);
    detailItem1.appendChild(descriptionItem1);

    const menuItem2 = document.createElement('li');
    const imageItem2 = document.createElement('img');
    imageItem2.src = "https://www.acouplecooks.com/wp-content/uploads/2019/12/Tom-Collins-001.jpg";
    const detailItem2 = document.createElement ('div');
    const nameItem2 = document.createElement('h3')
    nameItem2.textContent = "Tom Collins";
    const descriptionItem2 = document.createElement('h4');
    descriptionItem2.textContent="Gin, Lemon, Sweet Syrup, Soda Water.";
    menuItem2.appendChild(imageItem2);
    menuItem2.appendChild(detailItem2);
    detailItem2.appendChild(nameItem2);
    detailItem2.appendChild(descriptionItem2);

    const menuItem3 = document.createElement('li');
    const imageItem3 = document.createElement('img');
    imageItem3.src = "https://mixthatdrink.com/wp-content/uploads/2016/03/lemon-drop-martini-735x1103.webp";
    const detailItem3 = document.createElement ('div');
    const nameItem3 = document.createElement('h3')
    nameItem3.textContent = "Lemon Drop";
    const descriptionItem3 = document.createElement('h4');
    descriptionItem3.textContent="Vodka, Lemon, Sweet Syrup, Triple Sec, Sugar Rim.";
    menuItem3.appendChild(imageItem3);
    menuItem3.appendChild(detailItem3);
    detailItem3.appendChild(nameItem3);
    detailItem3.appendChild(descriptionItem3);

    const menuItem4 = document.createElement('li');
    const imageItem4 = document.createElement('img');
    imageItem4.src = "https://winedharma.com/wine-dharma/uploads/2020/10/1593-daiquiri-cocktail-made-rum-lime-and-sugar-most-famous-cocktail-ever-made.jpg";
    const detailItem4 = document.createElement ('div');
    const nameItem4 = document.createElement('h3')
    nameItem4.textContent = "Daiquiri";
    const descriptionItem4 = document.createElement('h4');
    descriptionItem4.textContent="White Rum, Lime, Sweet Syrup.";
    menuItem4.appendChild(imageItem4);
    menuItem4.appendChild(detailItem4);
    detailItem4.appendChild(nameItem4);
    detailItem4.appendChild(descriptionItem4);

    const menuItem5 = document.createElement('li');
    const imageItem5 = document.createElement('img');
    //imageItem5.src = "../assets/img/margarita.jpg";
    imageItem5.src = "https://drinkoteket.com/wp-content/uploads/margarita-1.jpg";
    const detailItem5 = document.createElement ('div');
    const nameItem5 = document.createElement('h3')
    nameItem5.textContent = "Margarita";
    const descriptionItem5 = document.createElement('h4');
    descriptionItem5.textContent="Tequila, Lime, Orange Liqueur, Salt Rim.";
    menuItem5.appendChild(imageItem5);
    menuItem5.appendChild(detailItem5);
    detailItem5.appendChild(nameItem5);
    detailItem5.appendChild(descriptionItem5);

    //append menu items to menu
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem4);
    menuList.appendChild(menuItem5);

    //append menu to page
    content.appendChild(pageContent);
    pageContent.appendChild(heading);
    pageContent.appendChild(menuContainer);
    menuContainer.appendChild(menuList);  
}

export default createMenuPage;