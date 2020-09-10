const animateVerticalLine = () => {
  const verticalLine = document.querySelector(".vertical-line");
  window.addEventListener('scroll', (event) => {
    verticalLine.hidden = false;
  });
};

export { animateVerticalLine };
