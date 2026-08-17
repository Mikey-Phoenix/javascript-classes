// const input = document.getElementsByTagName("input")
const input = document.querySelector("input");
const container = document.querySelector("#listCont");

// let tempValue;

function addTask() {
    console.log(input.value)
    const taskCont = document.createElement('section');
    const task = document.createElement('p');
    const button = document.createElement('button')
    task.innerText = input.value;
    button.innerText = "Done";
    taskCont.appendChild(task);
    taskCont.appendChild(button);
    container.appendChild(taskCont);
}

function removeItem() {
    
}