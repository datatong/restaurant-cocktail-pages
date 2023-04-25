//module for creating the contact page

const createContactPage = () => {
    //create content and contentpage
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const contactHeader = document.createElement('h1');
    contactHeader.textContent = "Contact Us!"
    pageContent.appendChild(contactHeader);

    //create form
    const form = document.createElement('form');
    form.classList.add('contact-form');

    //create input fields
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.placeholder = "Enter name";
    form.appendChild(nameInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = "Enter email";
    form.appendChild(emailInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.id = 'phone';
    phoneInput.name = 'phone';
    phoneInput.placeholder = "Enter phone";
    form.appendChild(phoneInput);

    const customInput = document.createElement('textarea');
    customInput.id = 'custom-input';
    customInput.name = 'custom-input';
    customInput.placeholder = "Got a Comment or Question?";
    customInput.maxLength = "200";
    form.appendChild(customInput);

    //contact info section
    const contactInfo = document.createElement('div');
    const contactInfoList = document.createElement('ul');
    contactInfoList.classList.add('contact-info-list');
    const hoursInfo = document.createElement('li');
    hoursInfo.textContent = "Hours Infomation: TBA";
    const phoneInfo = document.createElement('li');
    phoneInfo.textContent = "Phone Number: TBA";
    const addressInfo = document.createElement('li');
    addressInfo.textContent = "Address Information: TBA";

    contactInfoList.appendChild(hoursInfo);
    contactInfoList.appendChild(phoneInfo);
    contactInfoList.appendChild(addressInfo);
    contactInfo.appendChild(contactInfoList);

    //add submit button
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    form.appendChild(submitButton);

    pageContent.appendChild(form);
    pageContent.appendChild(contactInfo);
    content.appendChild(pageContent);
}

export default createContactPage;