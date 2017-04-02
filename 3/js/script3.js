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


document.getElementById('wyslij').onclick = "validateForm()";

function validateForm(event) {




	var firstAgreement = document.getElementById('zgoda-marketingowa-1');


	if (firstAgreement.checked == false) {
		event.preventDefault();
		if (firstAgreement.nextElementSibling.tagName != 'SPAN') {


			var message = document.createElement('span');
			message.innerText = "To pole jest wymagane";
			message.style.color = "red"; //to ma byc w stylach

			firstAgreement.parentNode.insertBefore(message, firstAgreement.nextSibling);
		}

	}
}