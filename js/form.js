const inputForm = document.querySelector(".sign-up__form input[type='email']")
inputForm.onfocus = function() {
	this.previousElementSibling.classList.add('active')
}
inputForm.onblur = function() {
	this.previousElementSibling.classList.toggle('active', this.value !== '')
}
