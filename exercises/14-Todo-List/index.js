// Your code here
//keycode 13, enter
let input = document.querySelector("#addToDo");
let list = document.querySelector("#list");

input.addEventListener("keyup", function(e) {
	if (e.keyCode === 13) {
		e.preventDefault();
		let element = document.createElement("LI");
		element.innerHTML = `<span><i class="fa fa-trash"></i></span>${input.value}`;
		list.appendChild(element);
		input.value = "";
	}
});
