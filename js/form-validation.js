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
		
		alert("Message successfully sent! If you provided an email address, you should receive a reply within 24 hours.");
		
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
	var subjectSelection = null;
	var coachSelection = null;

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
		subjectSelection=document.getElementById("subject").value;
		if (!subjectSelection) {
			document.getElementById("error-label-subject").innerHTML="*Subject required";
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
		coachSelection = document.getElementById("coach").value;
	}

	var check = [validFirstName(), validLastName(), validEmail(), validSubject(), validService()];

	if (check[0] && check[1] && check[2] && check[3] && check[4]) {
		messageValid = "Subject: " + subjectSelection + "\n\n" + "Requested Coach: " + coachSelection + "\n\n" + document.getElementById("message").value + 
		"\n\n" + firstNameValid + " " + lastNameValid;
		document.getElementById("message").value = messageValid;
		alert("Message successfully sent! You should receive a reply within 24 hours.");
		return true;
	}
	else {
		return false;
	}
}