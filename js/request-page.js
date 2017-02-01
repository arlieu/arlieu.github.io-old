window.onload = function() {
	url = window.location.search;
	if (url) {
		var coach = url.get("coach");
		coach = coach.replace(/_/g, " ");
		coach += ".";
		document.getElementById("coach-selection").value = coach;
	}
}