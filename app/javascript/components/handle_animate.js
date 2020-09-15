const handleAnimate = () => {
  const names = document.querySelectorAll(".project-name");
  names.forEach((name) => {
    name.addEventListener('animationend', () => {
      if (window.matchMedia("(max-width: 780px)").matches) {
        name.style.position = "fixed";
      }
    });
  });
};

export { handleAnimate };
