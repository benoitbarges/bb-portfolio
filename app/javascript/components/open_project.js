const openProject = () => {
  const projectDivs = document.querySelectorAll('.project-div');

  projectDivs.forEach((projectDiv) => {
    const projectName = projectDiv.querySelector('.project-name');
    const projectElement = projectDiv.querySelector('.project-element');

    if (projectDiv.firstElementChild === projectName) {
      projectName.addEventListener('click', (event) => {
        projectName.classList.add('animate__fadeOutRight');
        projectElement.classList.add('slide-right');
        projectElement.scrollIntoView({behavior: "smooth", block: "start"});
      });

      projectElement.addEventListener('click', (event) => {
        projectName.classList.add('animate__fadeOutRight');
        projectElement.classList.add('slide-right');
        projectElement.scrollIntoView({behavior: "smooth", block: "start"});
      });
    }

    if (projectDiv.firstElementChild === projectElement) {
      projectName.addEventListener('click', (event) => {
        projectName.classList.add('animate__fadeOutLeft');
        projectElement.classList.add('slide-left');
        projectElement.scrollIntoView({behavior: "smooth", block: "start"});
      });
       projectElement.addEventListener('click', (event) => {
        projectName.classList.add('animate__fadeOutLeft');
        projectElement.classList.add('slide-left');
        projectElement.scrollIntoView({behavior: "smooth", block: "start"});
      });
    }
  });
};

export { openProject };


