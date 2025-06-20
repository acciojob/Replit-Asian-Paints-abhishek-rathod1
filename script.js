//your JS code here. If required.

const color = document.getElementById('color-id');
const container = document.getElementById('container');
let colorInput = "#000000";
handleSubmit = () =>{
	colorInput = color.value;
}

container.addEventListener('click',(e)=>{
	e.target.style.backgroundColor = colorInput;
})

