import { 
  mainPageAboutMeLayout,
  mainPageImageLayout,
  layoutProjects,
} from '../utils/constants.js'

const container = document.querySelector('.about-me');
const layoutButton = document.querySelector('.layout-btn');
const mainPageButton = document.querySelector('.main-page-btn');
const mainElement = document.querySelector('.main');
const imageSectionElement = document.querySelector('.main__image-section');

function generateCardLayout(project) {
  // const { name, description, githubPageLink, projectLink, imagePath, imageAlt, imageSize } = project;
  const { name, cardDescription, githubPageLink, projectLink, imagePath, imageAlt, imageSize } = project;
  return `
    <article class="project project_image-size_${imageSize}">
      <div class="project__text">
        <div>
          <h3>${name}</h3>
          <p>${cardDescription}</p>
        </div>
        <div>
          <a href="${githubPageLink}" target="_blank" class="link">github pages</a>
          <a href="${projectLink}" target="_blank" class="link">project</a>
        </div>
      </div>
      <div class="project__image-container">
        <img alt="${imageAlt}" src="${imagePath}" class="project__image"/>
      </div>
    </article>
  `
}

// TODO: add link_active class
function generateProjectsPage(projectsList) {
  mainElement.classList.add('main_projects');
  imageSectionElement.innerHTML = ``; // очистка главной страницы
  imageSectionElement.setAttribute("hidden", true);
  container.innerHTML = '' // очистка страницы
  container.classList.add("about-me_projects")
  projectsList.forEach(project => {
    container.innerHTML += generateCardLayout(project)
  })
  // container.innerHTML = generateCardLayout(fromStrathProject)
}

function generateMainPage() {
  mainElement.classList.remove('main_projects');
  container.classList.remove("about-me_projects")
  imageSectionElement.removeAttribute("hidden");
  imageSectionElement.innerHTML = mainPageImageLayout;
  container.innerHTML = mainPageAboutMeLayout;
}

mainPageButton.addEventListener('click', generateMainPage)

layoutButton.addEventListener('click', () => {
  generateProjectsPage(layoutProjects);
})
