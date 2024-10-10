const container = document.querySelector('.about-me');
const layoutButton = document.querySelector('.layout-btn');
const mainElement = document.querySelector('.main');
const imageSectionElement = document.querySelector('.main__image-section');

/* 

попользоваться тегом <template>
add links to the projects

*/

const layoutProjects = [
  {
    name: "С чистого листа",
    cardDescription: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    githubPageLink: "https://timu-ryan.github.io/from-scratch/",
    projectLink: "https://github.com/timu-ryan/from-scratch",
    imagePath: "../images/from-stratch.png",
    imageAlt: "изображение сайта \"с чистого листа\"",
    imageSize: "small",
  },
  {
    name: "С чистого листа",
    cardDescription: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    githubPageLink: "https://timu-ryan.github.io/from-scratch/",
    projectLink: "https://github.com/timu-ryan/from-scratch",
    imagePath: "../images/from-stratch.png",
    imageAlt: "изображение сайта \"с чистого листа\"",
    imageSize: "small",
  },
  {
    name: "С чистого листа",
    cardDescription: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    githubPageLink: "https://timu-ryan.github.io/from-scratch/",
    projectLink: "https://github.com/timu-ryan/from-scratch",
    imagePath: "../images/from-stratch.png",
    imageAlt: "изображение сайта \"с чистого листа\"",
    imageSize: "small",
  },
]


// class Project {
//   constructor(projectName, cardDescription, githubPageLink, projectLink, imagePath, imageAlt, imageSize) {
//     this.name = projectName;
//     this.description = cardDescription;
//     this.githubPageLink = githubPageLink;
//     this.projectLink = projectLink;
//     this.imagePath = imagePath;
//     this.imageAlt = imageAlt;
//     this.imageSize = imageSize;
//   }
// };

// const fromStrathProject = new Project(
//   "С чистого листа",
//   "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   "https://timu-ryan.github.io/from-scratch/",
//   "https://github.com/timu-ryan/from-scratch",
//   "../images/from-stratch.png",
//   "изображение сайта \"с чистого листа\"",
//   "small",
// )


function generateCardLayout(project) {
  // const { name, description, githubPageLink, projectLink, imagePath, imageAlt, imageSize } = project;
  const { name, cardDescription, githubPageLink, projectLink, imagePath, imageAlt, imageSize } = project;
  return `
    <article class="project">
      <div class="project__text">
        <h3>${name}</h3>
        <p>${cardDescription}</p>
        <a href="${githubPageLink}">github pages</a>
        <a href="${projectLink}">project</a>
      </div>
      <div class="project__image-container">
        <img alt="${imageAlt}" src="${imagePath}" class="project__image project__image_${imageSize}"/>
      </div>
    </article>
  `
}


function generateProjectsPage() {
  mainElement.classList.add('main_projects');
  imageSectionElement.innerHTML = ``; // очистка главной страницы
  container.innerHTML = '' // очистка страницы
  layoutProjects.forEach(project => {
    container.innerHTML += generateCardLayout(project)
  })
  // container.innerHTML = generateCardLayout(fromStrathProject)
}

function generateMainPage() {

}

layoutButton.addEventListener('click', () => {
  generateProjectsPage();
})
