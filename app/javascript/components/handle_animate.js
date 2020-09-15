const handleAnimate = () => {
  const names = document.querySelectorAll(".project-name");
  names.forEach((name) => {
    name.addEventListener('animationend', () => {
      name.style.position = "fixed";
    });
  });
};

export { handleAnimate };
