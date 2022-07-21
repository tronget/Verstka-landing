const animatedElements = document.querySelectorAll("[data-anim='true']")


const callback = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('anim-show');
			observer.unobserve(entry.target);
		}
	})
}
const options = {
	threshold: [0.5]
}
const animObserver = new IntersectionObserver(callback, options)


animatedElements.forEach(el => {
	el.classList.add('anim')
	animObserver.observe(el);
})
