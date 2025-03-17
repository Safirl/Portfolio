import PROJECTS from "./projects.js";
import {DEV_CONTENT, FILM_CONTENT} from "./projectListContents.js";

const urlParams = new URLSearchParams(window.location.search);
const paramValue = urlParams.get('category');
console.log(paramValue);

if (paramValue == null || (paramValue != "development" && paramValue != "movies")) {
    window.location.href = '../index.html';
}


const content = paramValue == "development" ? DEV_CONTENT : FILM_CONTENT;

const projects = PROJECTS.filter(project => project.category === paramValue);

if (projects == undefined) {
    window.location.href = '../index.html';
}

const titleElements = document.getElementsByClassName('contentTitle');
const descriptionElement = document.getElementsByClassName('description');
const accountLinkElements = document.getElementsByClassName('accountLink');
const secondAccountLinkElements = document.getElementsByClassName('secondAccountLink');

for (let i = 0; i < titleElements.length; i++) {
    titleElements[i].innerHTML = content.title;
}

for (let i = 0; i < descriptionElement.length; i++) {
    descriptionElement[i].innerHTML = content.description;
}

for (let i = 0; i < accountLinkElements.length; i++) {
    accountLinkElements[i].href = content.accountLink;
    accountLinkElements[i].innerHTML = content.accountLinkText;
}

//hide second account link if it's empty
if (content.secondAccountLink == "") {
    for (let i = 0; i < secondAccountLinkElements.length; i++) {
        secondAccountLinkElements[i].style.display = "none";
    }
}
else {
    for (let i = 0; i < secondAccountLinkElements.length; i++) {
        secondAccountLinkElements[i].href = content.secondAccountLink;
        secondAccountLinkElements[i].innerHTML = content.secondAccountLinkText;
    }
}

const projectList = document.getElementsByClassName('card-container')[0];

projects.forEach(project => {
    const card = document.createElement("section");
    card.classList.add("card");
    const cardLink = document.createElement("a");
    cardLink.href = `project.html?project=${project.id}`;
    const cardImage = document.createElement("img");
    cardImage.src = project.images[0];
    cardImage.alt = `image du projet ${project.title}`;
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("text-projet");
    cardTitle.innerHTML = project.title;
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("text-projet");
    cardDescription.innerHTML = project.description;

    cardLink.appendChild(cardImage);
    cardLink.appendChild(cardTitle);
    cardLink.appendChild(cardDescription);
    card.appendChild(cardLink);
    projectList.appendChild(card);
});