const toggleMenuBtn = document.querySelector(".menu-toggle");
const buttonSvg = document.querySelector(".button-svg");
const navBar = document.querySelector(".navbar");
const closingSvg = `<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99982 6.79271L1.2823 0.0751953L0.575195 0.782302L7.29271 7.49982L0.575195 14.2173L1.2823 14.9244L7.99982 8.20692L14.7173 14.9244L15.4244 14.2173L8.70692 7.49982L15.4244 0.782302L14.7173 0.0751953L7.99982 6.79271Z" fill="black"/>
</svg>`;
const openingSvg = `<svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="20" height="1" fill="black"/>
  <rect y="5" width="20" height="1" fill="black"/>
</svg>`;
const overlay = document.querySelector(".overlay");
let isOpen = false;

toggleMenuBtn.addEventListener("click", () => {
  if (!isOpen) {
    navBar.style.display = "flex";
    overlay.classList.add("visible");
    toggleMenuBtn.innerHTML = closingSvg;
    isOpen = true;
  } else {
    navBar.style.display = "none";
    overlay.classList.remove("visible");
    toggleMenuBtn.innerHTML = openingSvg;
    isOpen = false;
  }
});

const circleBtn = document.querySelector(".circle-svg");
const monthText = document.querySelector(".monthly-text");
const yearText = document.querySelector(".yearly-text");
const dollars = document.querySelectorAll(".pricing-text");
const proPrice = document.querySelector(".pro-pricing-text");
const paymentPerText = document.querySelectorAll(".per-text");
const paymentPerTextPro = document.querySelector(".pro-per-text");
const circle = document.querySelector(".circle");
const rectCircle = document.querySelector(".rect-circle");
let toggled = false;
circleBtn.addEventListener("click", () => {
  toggled = !toggled;

  if (toggled) {
    monthToYear();
  } else {
    yearToMonth();
  }
});

function monthToYear() {
  monthText.style.opacity = "0.5";
  yearText.style.opacity = "1";
  dollars.forEach((dollar) => {
    const value = parseFloat(dollar.textContent.replace("$", ""));
    const newValue = value * 10;
    dollar.textContent = `$${newValue.toFixed(2)}`;
  });
  proPrice.textContent = "$390.00";
  paymentPerText.textContent = "per year";
  paymentPerTextPro.textContent = "per year";
  circle.setAttribute("cx", 48);
  circle.classList.add("active");
  rectCircle.classList.add("active");
}

function yearToMonth() {
  monthText.style.opacity = "1";
  yearText.style.opacity = "0.5";
  dollars.forEach((dollar) => {
    const value = parseFloat(dollar.textContent.replace("$", ""));
    const newValue = value / 10;
    dollar.textContent = `$${newValue.toFixed(2)}`;
  });
  proPrice.textContent = "$39.00";
  paymentPerText.textContent = "per month";
  paymentPerTextPro.textContent = "per month";
  circle.setAttribute("cx", 16);
  circle.classList.remove("active");
  rectCircle.classList.remove("active");
}
