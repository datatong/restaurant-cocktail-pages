//restaurant home page module

const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const restaurantHeader = document.createElement('h1');
    restaurantHeader.textContent = "THE THIRSTY HOUSE";
    pageContent.appendChild(restaurantHeader);

    //create and append headline element
    const headLine = document.createElement('h2');
    headLine.textContent = "Crafted Cocktails To Satisfy!";
    pageContent.appendChild(headLine);

    //create and append image element
    const image = document.createElement('img');
    image.src = "https://i0.wp.com/vintagecocktailclub.com/wp-content/uploads/2017/12/VCC-Interior-6.jpg?resize=1400%2C670&ssl=1";
    image.alt = "thirsy house bar";
    pageContent.appendChild(image);

    //create and append copy element
    const copy = document.createElement('h2');
    copy.textContent = '"A place for tasty drinks and good vibes."';
    pageContent.appendChild(copy);

    //append page content (headline, image, and copy) to the content div
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;