const spinHexagon = () => {
  const contacts = document.querySelectorAll(".contact-element");
  contacts.forEach((contact) => {
    const hexagon = contact.querySelector(".hexagon-contact");
    contact.addEventListener('mouseenter', (event) => {
      hexagon.classList.add("spin-contact");
      hexagon.classList.remove("spin-reverse-contact");
    });
    contact.addEventListener('mouseleave', (event) => {
      hexagon.classList.remove("spin-contact");
      hexagon.classList.add("spin-reverse-contact");
    });
  });
};

export { spinHexagon };
