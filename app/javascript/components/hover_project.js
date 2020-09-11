const hoverProject = () => {
  const projectElements = document.querySelectorAll('.project-element');

  projectElements.forEach((element) => {
    const borderHexagon = element.querySelector('.hexagon-project-border');
    element.addEventListener('mouseenter', (event) => {
      borderHexagon.style.boxShadow = "0 0 18px rgba(111,249,222,1)";
    });
    element.addEventListener('mouseleave', (event) => {
      borderHexagon.style.boxShadow = "";
    });
  });
};

export { hoverProject };


