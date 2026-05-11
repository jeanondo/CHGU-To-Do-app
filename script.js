const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [];

const savedTasks = JSON.parse(localStorage.getItem("tasks"));

//Display Task

function displayTask(taskText){

    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    newTask.appendChild(deleteButton);

    deleteButton.addEventListener("click", function(){
        newTask.remove();
    });

    newTask.addEventListener("click", function(){

        if(newTask.style.textDecoration === "line-through"){
            newTask.style.textDecoration = "none";
        }
        else{
            newTask.style.textDecoration = "line-through";
        }

    });

    taskList.appendChild(newTask);

}


//Saved Tasks

if(savedTasks){

    tasks = savedTasks;
    console.log(tasks);

    tasks.forEach(function(task){

        displayTask(task);

    });

}


addButton.addEventListener("click", function(){

    console.log(taskInput.value);

    if(taskInput.value === ""){
        return;
    }

    tasks.push(taskInput.value);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask(taskInput.value);

    console.log(tasks);

    taskInput.value = "";

});