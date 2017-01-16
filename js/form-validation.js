function submitContact() {
	function validFirstName() {
		var firstName = document.getElementById("first-name").value;
		if (!/^[A-Za-z]+$/.test(firstName) && !/^\s*$/.test(firstName)) {
			document.getElementById("error-label-first-name").innerHTML="*Alphabetical characters only";
			return false;
		}

		document.getElementById("error-label-first-name").innerHTML="";
		return true;
	}

	function validLastName() {
		var lastName = document.getElementById("last-name").value;
		if (!/^[A-Za-z]+$/.test(lastName) && !/^\s*$/.test(lastName)) {
			document.getElementById("error-label-last-name").innerHTML="*Alphabetical characters only";
			return false;
		}

		document.getElementById("error-label-last-name").innerHTML="";
		return true;
	}

	function validEmail() {
		var email = document.getElementById("sender-email").value;
		if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email) && !/^\s*$/.test(email)) {
			document.getElementById("error-label-email").innerHTML="*Valid email required";
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
			document.getElementById("error-label-subject").innerHTML="*Subject required";
			return false;
		}

		subjectValid = subject;
		document.getElementById("error-label-subject").innerHTML="*";
		return true;
	}

	function validMessage() {
		var message = document.getElementById("message").value;
		if (!message) {
			document.getElementById("error-label-message").innerHTML="*Message required";
			return false;
		}

		document.getElementById("error-label-message").innerHTML="*";
		return true;
	}

	var check = [validFirstName(), validLastName(), validEmail(), validSubject(), validMessage()];

	if (check[0] && check[1] && check[2] && check[3] && check[4]) {
		messageValid = "Subject: " + subjectValid + "\n\n" + document.getElementById("message").value;
		document.getElementById("message").value=messageValid;
		alert("Message successfully sent!");
		
		return true;
	}
	else {
		return false;
	}
}

function submitRequest() {
	var firstNameValid = "";
	var lastNameValid = "";
	var messageValid = "";

	function validFirstName() {
		var firstName = document.getElementById("first-name").value;
		if (!/^[A-Za-z]+$/.test(firstName)) {
			document.getElementById("error-label-first-name").innerHTML="*Alphabetical characters only";
			return false;
		}

		document.getElementById("error-label-first-name").innerHTML="*";
		firstNameValid = firstName;
		return true;
	}

	function validLastName() {
		var lastName = document.getElementById("last-name").value;
		if (!/^[A-Za-z]+$/.test(lastName)) {
			document.getElementById("error-label-last-name").innerHTML="*Alphabetical characters only";
			return false;
		}

		document.getElementById("error-label-last-name").innerHTML="*";
		lastNameValid = lastName;
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

	function validSubject() {
		var subject = document.getElementById("subject").value;
		if (!subject) {
			document.getElementById("error-label-subject").innerHTML="*Select service";
			return false;
		}

		document.getElementById("_subject").value=document.getElementById("subject").value
		document.getElementById("error-label-subject").innerHTML="*";
		return true;
	}

	var check = [validFirstName(), validLastName(), validEmail(), validSubject()];

	if (check[0] && check[1] && check[2] && check[3]) {
		messageValid = document.getElementById("message").value + "\n\n" + firstNameValid + " " + lastNameValid;
		document.getElementById("message").value = messageValid;
		alert("Message successfully sent!");
		
		return true;
	}
	else {
		return false;
	}
}