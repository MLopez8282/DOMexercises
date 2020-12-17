// Your code here
let input = document.querySelector("#addToDo");
input.addEventListener("keyup", addToDo);

let ul = document.querySelector("ul");

const addToDo = event => {
	if (event.keyCode === 13) {
		let task = event.target.value;
		ul.innerHTML += `<li>
					<span><i class="fa fa-trash"></i></span> ${task}
				</li>`;
	}
};
