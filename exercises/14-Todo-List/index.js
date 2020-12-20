// Your code here
let input = document.querySelector("#addToDo");
let list = document.querySelector("ul");

input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		let newItem = document.createElement("LI");
		newItem.innerHTML = `<span><i class="fa fa-trash"></i></span>${input.value}`;
		list.appendChild(newItem);
		input.value = "";
		deleteTask();
	}
});

const deleteTask = () => {
	let tasks = document.querySelectorAll(".fa");
	tasks.forEach(item => {
		item.addEventListener("click", function(event) {
			let deletedItem = item.parentNode.parentNode;
			deletedItem.parentNode.removeChild(deletedItem);
		});
	});
};
deleteTask();
