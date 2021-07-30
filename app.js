let addTodoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let myInput = document.getElementById('myInput');

addTodoButton.addEventListener('click', ()=>{
    var paraghraph = document.createElement('p')
    paraghraph.classList.add('paragraph-styling');
    paraghraph.innerText = myInput.value;
    toDoContainer.appendChild(paraghraph);
    myInput.value = "";
    paraghraph.addEventListener('click', ()=>{
        paraghraph.style.textDecoration = "line-through";
    })
    paraghraph.addEventListener('dblclick', ()=>{
        toDoContainer.removeChild(paraghraph);
    })
})
