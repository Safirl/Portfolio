import PROJECTS from './projects.js';

const urlParams = new URLSearchParams(window.location.search);
const paramValue = urlParams.get('project');

if (paramValue == false) {
    window.location.href = '../index.html';
}

const project = PROJECTS.find(project => project.id === paramValue);

if (project == undefined) {
    window.location.href = '../index.html';
}

const titleElements = document.getElementsByClassName('title');
const categoryElements = document.getElementsByClassName('category');
const contentElements = document.getElementsByClassName('content');
const projectLinkElements = document.getElementsByClassName('projectLink');
const imagesElements = document.getElementsByClassName('image');

for (let i = 0; i < titleElements.length; i++) {
    titleElements[i].innerHTML = project.title;
}

for (let i = 0; i < categoryElements.length; i++) {
    categoryElements[i].innerHTML = project.category == "development" ? "Design / Développement" : "Films";
    categoryElements[i].href = `projectList.html?category=${project.category}`;;
}

for (let i = 0; i < contentElements.length; i++) {
    contentElements[i].innerHTML = project.content[i];
}

for (let i = 0; i < projectLinkElements.length; i++) {
    projectLinkElements[i].href = project.projectLink;
}

for (let i = 0; i < imagesElements.length; i++) {
    imagesElements[i].src = project.images[i];
    imagesElements[i].alt = "image du projet " + project.title;
}


