function submitContact() {
	function validFirstName() {
		var firstName = document.getElementById("first-name").value;
		firstName = firstName.replace(/\s/g, "");
		if (firstName == "") {
			document.getElementById("error-label-first-name").innerHTML="*Required field";
			return false;
		}

		if (!/^[A-Za-z]+$/.test(firstName)) {
			document.getElementById("error-label-first-name").innerHTML="*Alphabetical characters only";
			return false;
		}

		document.getElementById("error-label-first-name").innerHTML="*";
		return true;
	}

	function validLastName() {
		var lastName = document.getElementById("last-name").value;
		lastName = lastName.replace(/\s/g, "");
		if (lastName == "") {
			document.getElementById("error-label-last-name").innerHTML="*Required field";
			return false;
		}

		if (!/^[A-Za-z]+$/.test(lastName)) {
			document.getElementById("error-label-last-name").innerHTML="*Alphabetical characters only";
			return false;
		}

		document.getElementById("error-label-last-name").innerHTML="*";
		return true;
	}

	function validEmail() {
		var email = document.getElementById("sender-email").value;
		if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email) && !/^\s*$/.test(email)) {
			document.getElementById("error-label-email").innerHTML="*Not a valid email";
			return false;
		}

		document.getElementById("error-label-email").innerHTML="";
		return true;
	}

	var subjectValid = "";
	var messageValid = "";
	function validSubject() {
		var subject = document.getElementById("subject").value;
		if (!subject) {
			document.getElementById("error-label-subject").innerHTML="*Required field";
			return false;
		}

		subjectValid = subject;
		document.getElementById("error-label-subject").innerHTML="*";
		return true;
	}

	function validMessage() {
		var message = document.getElementById("message").value;
		if (!message) {
			document.getElementById("error-label-message").innerHTML="*Required field";
			return false;
		}

		document.getElementById("error-label-message").innerHTML="*";
		return true;
	}

	var check = [validFirstName(), validLastName(), validEmail(), validSubject(), validMessage()];

	if (!validFirstName() && !validLastName()) {
		document.getElementById("error-label-first-name").style.color="red";
		document.getElementById("error-label-last-name").style.color="red";
	}
	else if (!validFirstName() && validLastName()) {
		document.getElementById("error-label-last-name").style.color="red";
		document.getElementById("error-label-last-name").style.color="white";
		document.getElementById("error-label-last-name").innerHTML="*";
	}
	else if (validFirstName() && !validLastName()) {
		document.getElementById("error-label-first-name").style.color="red";
		document.getElementById("error-label-first-name").style.color="white";
		document.getElementById("error-label-first-name").innerHTML="*";
	}

	if (check[0] && check[1] && check[2] && check[3] && check[4]) {
		document.getElementById("contact-form").setAttribute("action", "https://formspree.io/" + "contact" + "@" + "pstemcoaching" + ".com");
		return true;
	}
	else {
		return false;
	}
}


function validPaymentMethod() {
	if (document.getElementById("payment-method-1").checked) {
		document.getElementById("payment-username-label").innerHTML="Your Square Cash Username";
		document.getElementById("payment-username-label").style.display="inline-block";
		document.getElementById("payment-username").name="Square Cash Username";
		document.getElementById("payment-username").type="text";
	}
	else if (document.getElementById("payment-method-2").checked) {
		document.getElementById("payment-username-label").innerHTML="Your Venmo Username";
		document.getElementById("payment-username-label").style.display="inline-block";
		document.getElementById("payment-username").name="Venmo Username";
		document.getElementById("payment-username").type="text";
	}
}


function submitRequest() {
	function validFirstName() {
		var firstName = document.getElementById("first-name").value;
		firstName = firstName.replace(/\s/g, "");
		if (firstName == "") {
			document.getElementById("error-label-first-name").innerHTML="*Required field";
			return false;
		}

		if (!/^[A-Za-z]+$/.test(firstName)) {
			document.getElementById("error-label-first-name").innerHTML="*Alphabetical characters only";
			return false;
		}

		document.getElementById("error-label-first-name").innerHTML="*";
		return true;
	}

	function validLastName() {
		var lastName = document.getElementById("last-name").value;
		lastName = lastName.replace(/\s/g, "");
		if (lastName == "") {
			document.getElementById("error-label-last-name").innerHTML="*Required field";
			return false;
		}

		if (!/^[A-Za-z]+$/.test(lastName)) {
			document.getElementById("error-label-last-name").innerHTML="*Alphabetical characters only";
			return false;
		}

		document.getElementById("error-label-last-name").innerHTML="*";
		return true;
	}

	function validEmail() {
		var email = document.getElementById("sender-email").value;
		if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)) {
			document.getElementById("error-label-email").innerHTML="*Valid email required";
			return false;
		}

		document.getElementById("error-label-email").innerHTML="*";
		return true;
	}

	function validPaymentOption() {
		if (!document.getElementById("payment-method-1").checked && !document.getElementById("payment-method-2").checked) {
			document.getElementById("error-label-payment-method").innerHTML="*Payment method required";
			return false;
		}

		document.getElementById("error-label-payment-method").innerHTML="*";
		return true;
	}

	function validPaymentUsername() {
		if (validPaymentOption()) {
			var paymentUsername=document.getElementById("payment-username").value.replace(/\s/g, "");
			if (paymentUsername.length==0) {
				document.getElementById("payment-username-label").style.display="inline-block";
				document.getElementById("error-label-payment-username").style.display="inline";
				document.getElementById("error-label-payment-username").innerHTML="*Required field";
				return false;
			}

			document.getElementById("payment-username-label").style.display="inline-block";
			document.getElementById("error-label-payment-username").style.display="inline";
			document.getElementById("error-label-payment-username").innerHTML="*";
			return true
		}

		document.getElementById("payment-username-label").style.display="none";
		document.getElementById("error-label-payment-username").style.display="none";
		document.getElementById("error-label-payment-username").innerHTML="*";
		return false;
	}

	function validSubject() {
		var subjectSelection=document.getElementById("topic").value;
		if (!subjectSelection) {
			document.getElementById("error-label-subject").innerHTML="*Required field";
			return false;
		}

		document.getElementById("error-label-subject").innerHTML="*";
		return true;
	}

	function validService() {
		var service = document.getElementById("service").value;
		if (!service) {
			document.getElementById("error-label-service").innerHTML="*Select a service";
			return false;
		}

		document.getElementById("_subject").value=document.getElementById("service").value;
		document.getElementById("error-label-service").innerHTML="*";
		return true;
	}

	function validCoach() {
		var coachSelection = document.getElementById("coach-selection").value;
	}

	var check = [validFirstName(), validLastName(), validEmail(), validPaymentOption(), validPaymentUsername(), validSubject(), validService()];

	if (check[0] && check[1] && check[2] && check[3] && check[4] && check[5] && check[6]) {
		document.getElementById("request-form").setAttribute("action", "https://formspree.io/" + "requests" + "@" + "pstemcoaching" + ".com");
		return true;
	}
	else {
		return false;
	}
}