let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let list = document.querySelector("#myList");
	let child = document.createElement("LI");
	child.innerHTML = "Fourth Element";
	list.appendChild(child);
});
