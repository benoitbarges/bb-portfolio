const handleAnimate = () => {
  const names = document.querySelectorAll(".project-name");
  if (window.matchMedia("(max-width: 780px)").matches) {
    names.forEach((name) => {
      name.addEventListener('animationend', () => {
        name.style.position = "fixed";
      });
    });
  }
};

export { handleAnimate };
