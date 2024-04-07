// Create the contact information elements
const contactInfoDiv = document.createElement('div');
contactInfoDiv.setAttribute('id', 'contactInfo');

const disclaimerParagraph = document.createElement('p');
disclaimerParagraph.textContent = '© This is not a real business';

const contactParagraph = document.createElement('p');
contactParagraph.textContent = 'You can contact us by E-mail or Number at:';

const phoneNumberParagraph = document.createElement('p');
phoneNumberParagraph.textContent = '333-506-3617';

const emailLink = document.createElement('a');
emailLink.setAttribute('href', 'mailto:kingsrecipiess@gmail.com');
emailLink.textContent = 'kingsrecipies@gmail.com';

// Append the elements to the contactInfoDiv
contactInfoDiv.appendChild(disclaimerParagraph);
contactInfoDiv.appendChild(contactParagraph);
contactInfoDiv.appendChild(phoneNumberParagraph);
contactInfoDiv.appendChild(emailLink);

// Append the contactInfoDiv to the footer
const footer = document.querySelector('footer');
footer.appendChild(contactInfoDiv);
