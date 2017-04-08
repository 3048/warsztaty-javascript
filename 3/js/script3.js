'use strict';

var lastCheckbox = document.getElementById('wszystkie-zgody');

var allCheckboxes = document.querySelectorAll('input[type=checkbox]');


/*funkcja zmieniajaca stan pozostalych checkboxow*/
function checkboxState(state) {


	for (var i = 0; i < allCheckboxes.length - 1; i++) {
		allCheckboxes[i].checked = state;
		allCheckboxes[i].disabled = state;
	}
}

/*zmiana stanu checkboxa wszystkie zgody*/
lastCheckbox.onchange = function () {

	checkboxState(lastCheckbox.checked);

}


document.getElementById('wyslij').onclick = validateForm;

function validateForm(event) {
	
	var firstAgreement = document.getElementById('zgoda-marketingowa-1');
	var textInputs = document.querySelectorAll('input[type=text]');



	for (var i = 0; i < textInputs.length; i++) {
		if (textInputs[i].value == '') {
			event.preventDefault();
			errorMessage(textInputs[i]);
		} else if (textInputs[i].value != '' && textInputs[i].nextElementSibling.tagName != 'SPAN') {
			textInputs[i].nextElementSibling.remove();
		}
	}
	if (firstAgreement.checked == false) {
		event.preventDefault();
		errorMessage(firstAgreement);
	} else if (firstAgreement.checked == false && firstAgreement.nextElementSibling.tagName != 'SPAN') {
		firstAgreement.nextElementSibling.remove();
	}
}

function errorMessage(element) {
	if (element.nextElementSibling.tagName != 'SPAN') {
		var message = document.createElement('span');
		message.innerText = "To pole jest wymagane";
		message.style.color = "red"; //to ma byc w stylach

		element.parentNode.insertBefore(message, element.nextSibling);

	}
}