const sliderContainer = document.querySelector(".slider-container");
const sliderRow = document.querySelector(".slider-row");
const prevBtn = document.querySelector(".slider__arrow-prev");
const nextBtn = document.querySelector(".slider__arrow-next");
const slides = document.querySelectorAll(".slider-item");
const slidesCount = slides.length;
// Создание точек переключателей
const sliderDotsCont = document.querySelector(".slider__dots");
sliderDotsCont.innerHTML = '<div class="slider__dot"></div>'.repeat(slidesCount);
const sliderDots = document.querySelectorAll(".slider__dot");
sliderDots[0].classList.add('active');
const widthOfSlide = sliderContainer.clientWidth;
let movePosition = 0;
let dotItem = 0;
prevBtn.addEventListener('click', () => {
	movePosition += widthOfSlide;
	dotItem--;
	showSlides();
})
nextBtn.addEventListener('click', () => {
	movePosition -= widthOfSlide;
	dotItem++;
	showSlides();
})

function showSlides() {
	if (movePosition < -widthOfSlide * (slidesCount - 1)) {
		movePosition = 0;
		dotItem = 0;
	}
	if (movePosition > 0) {
		movePosition = -widthOfSlide * (slidesCount - 1);
		dotItem = slidesCount - 1;
	}
	sliderRow.style.transform = `translateX(${movePosition}px)`
	sliderDots.forEach((i) => i.classList.remove('active'))
	sliderDots[dotItem].classList.add('active');
}


const increaseImgBtns = document.querySelectorAll(".img__cont")
const modal = document.querySelector(".modal");
const modalImg = modal.querySelector('img');
increaseImgBtns.forEach((i) => i.addEventListener('click', increaseImg))
function increaseImg(e) {
	// e.target.parentNode.style.position = 'static';
	modal.classList.add('active');
	modalImg.setAttribute('src', e.target.getAttribute('src'))
}
modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		modal.classList.remove('active');
	}
})

sliderDots.forEach((i) => {i.addEventListener('click', (e) => {
	movePosition = -Array.prototype.indexOf.call(sliderDots, e.target) * widthOfSlide;
	sliderRow.style.transform = `translateX(${movePosition}px)`;
	sliderDots.forEach((i) => i.classList.remove('active'));
	e.target.classList.add('active');
})})