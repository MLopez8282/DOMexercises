//you code here
//hard-coded
document.body.innerHTML = "<h1>Hello World</h1><img src='http://placehold.it/350x150'/>";

//not hard-coded
let image = document.createElement("IMG");

image.src = "http://placehold.it/350x150";

document.body.appendChild(image);
