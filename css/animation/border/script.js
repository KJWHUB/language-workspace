console.log("border animation", gsap);

document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card-container");
  const border = document.querySelector(".card-border rect");

  console.log(card, border);

  card.addEventListener("mouseenter", () => {
    console.log("mouseenter");
    gsap.to(border, { strokeDasharray: "1000 0", duration: 1 });
  });

  card.addEventListener("mouseleave", () => {
    console.log("mouseleave");
    gsap.to(border, { strokeDasharray: "0 1000", duration: 0.3 });
  });
});
