const alertButton = document.querySelector('.btn');
const closeButton = document.querySelector('.popup-close');
const resetButton = document.querySelector(".popup-reset");
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const spanCounter = document.querySelector('span');

const showPopup = () => {
  popup.classList.add('active');
  overlay.classList.add('active');
};

const closePopup = () => {
	popup.classList.remove("active");
  overlay.classList.remove("active");
  resetButton.classList.remove("active");
};

popup.addEventListener("click", (e) => {
	const popupClick = e.target.closest(".popup-wraper");
	if (!popupClick) {
		closePopup();
	}
});

let counter = localStorage.getItem("counter");

alertButton.addEventListener('click', function () {
  counter++;
  localStorage.setItem("counter", counter);
  spanCounter.textContent = counter;
  showPopup();

  if (counter > 4) {
    resetButton.classList.add('active')
  }
});

resetButton.addEventListener("click", function () {
  closePopup();
  localStorage.clear;
  counter = 0;
  localStorage.setItem("counter", counter);
	resetButton.classList.remove("active");
});

closeButton.addEventListener('click', closePopup);