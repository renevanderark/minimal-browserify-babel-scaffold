
document.addEventListener("DOMContentLoaded", () => {
	function log(e) {
		console.log(e);
	}

	var root = document.getElementById("app")

	var input = document.createElement("input");
	input.addEventListener("change", function(ev) { console.log(ev.target.value); });
	root.appendChild(input)
});