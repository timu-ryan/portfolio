const container = document.querySelector('.about-me');
const layoutButton = document.querySelector('.layout-btn');
const mainElement = document.querySelector('.main');
const imageSectionElement = document.querySelector('.main__image-section');

/* 

попользоваться тегом <template>
add links to the projects

*/

layoutButton.addEventListener('click', () => {
  mainElement.classList.add('main_projects');
  imageSectionElement.innerHTML = ``;
  container.innerHTML = `
    <article class="project">
      <div class="project__text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div class="project__image-container">
        <img alt="проект" src="../images/from-stratch.png" class="project__image"/>
      </div>
    </article>
    <article class="project">
      <div class="project__text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div class="project__image-container">
        <img alt="проект" src="../images/from-stratch.png" class="project__image"/>
      </div>
    </article>
  `;


  // container.appendChild(element);
    
  
})
