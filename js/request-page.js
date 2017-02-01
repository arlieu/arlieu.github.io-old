window.onload = function() {
	url = window.location.search;
	if (url) {
		var tmp = url.split("=");
		var coach = tmp[1];
		coach = coach.replace(/_/g, " ");
		coach += ".";
		document.getElementById("coach-selection").value = coach;
	}
}