const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [];

const savedTasks = JSON.parse(localStorage.getItem("tasks"));

//Display Task

function displayTask(task){

    const newTask = document.createElement("li");
    newTask.textContent = task.text;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✓ ";

    newTask.appendChild(deleteButton);
    if(task.completed){
        newTask.textContent = "✓ " + task.text;
        newTask.appendChild(deleteButton);
    }

    deleteButton.addEventListener("click", function(event){
        event.stopPropagation();
        newTask.remove();

        tasks = tasks.filter(function(savedTask){

    return savedTask.text !== task.text;

    });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    newTask.addEventListener("click", function(){
    task.completed = !task.completed;
    if(task.completed){
        newTask.textContent = "✓ " + task.text;
        newTask.classList.add("completed");
    }
    else{
        newTask.textContent = task.text;
        newTask.classList.remove("completed");
    }
    newTask.appendChild(deleteButton);
    localStorage.setItem("tasks", JSON.stringify(tasks));
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

    const taskObject = {
        text: taskInput.value, 
        completed: false
    };

    tasks.push(taskObject);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask(taskObject);

    console.log(tasks);

    taskInput.value = "";

});
