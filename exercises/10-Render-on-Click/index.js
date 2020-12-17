let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let div = document.createElement("DIV");
	div.style.background = "yellow";

	div.innerHTML = "Hello World";

	document.body.appendChild(div);
	//your code here
});
