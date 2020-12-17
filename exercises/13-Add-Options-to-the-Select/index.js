window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	let places = document.querySelector("#mySelect");
	for (let i = 0; i < countries.length; i++) {
		let newElement = document.createElement("OPTION");
		newElement.innerHTML = countries[i];
		places.appendChild(newElement);
	}

	// your code here
};

let add = document.querySelector("#mySelect");
add.addEventListener("change", function() {
	alert(add.value);
});
