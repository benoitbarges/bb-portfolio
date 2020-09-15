const openProject = () => {
  const projectDivs = document.querySelectorAll('.project-div');

  projectDivs.forEach((projectDiv) => {
    const projectName = projectDiv.querySelector('.project-name');
    const projectElement = projectDiv.querySelector('.project-element');
    const projectCard = projectDiv.nextElementSibling;

    if (projectDiv.firstElementChild === projectName) {
      projectName.addEventListener('click', (event) => {
        projectName.classList.add('animate__fadeOutRight');
        projectElement.classList.add('slide-right');
        if (!projectCard.querySelector(".multi-collapse").classList.contains("show")) {
          projectDiv.nextElementSibling.scrollIntoView({behavior: "smooth", block: "center"})
        }
      });

      projectElement.addEventListener('click', (event) => {
        projectName.classList.add('animate__fadeOutRight');
        projectElement.classList.add('slide-right');
        if (!projectCard.querySelector(".multi-collapse").classList.contains("show")) {
          projectDiv.nextElementSibling.scrollIntoView({behavior: "smooth", block: "center"})
        }
      });
    }

    if (projectDiv.firstElementChild === projectElement) {
      projectName.addEventListener('click', (event) => {
        projectName.classList.add('animate__fadeOutLeft');
        projectElement.classList.add('slide-left');
        if (!projectCard.querySelector(".multi-collapse").classList.contains("show")) {
          projectDiv.nextElementSibling.scrollIntoView({behavior: "smooth", block: "center"})
        }
      });
       projectElement.addEventListener('click', (event) => {
        projectName.classList.add('animate__fadeOutLeft');
        projectElement.classList.add('slide-left');
         if (!projectCard.querySelector(".multi-collapse").classList.contains("show")) {
          projectDiv.nextElementSibling.scrollIntoView({behavior: "smooth", block: "center"})
        }
      });
    }
  });
};

export { openProject };


