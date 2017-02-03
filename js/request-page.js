window.onload = function() {
	url = window.location.search;
	if (url) {
		var tmp = url.replace("?", "");
		tmp = tmp.split("=");

		if (tmp[0] == "service") {
			var service = tmp[1];
			service = service.replace(/_/g, " ");
			if (service == "Homework Help") {
				document.getElementById("service").value = "Homework/Project Help";
			}
			else if (service == "Test Prep") {
				document.getElementById("service").value = "Test Preparation";
			}
			else if (service == "Advanced Coaching") {
				document.getElementById("service").value = "Getting Ahead/Skill Mastery";
			}
		}
		else if (tmp[0] == "coach") {
			var coach = tmp[1];
			coach = coach.replace(/_/g, " ");
			coach += ".";
			document.getElementById("coach-selection").value = coach;
		}

	}
}