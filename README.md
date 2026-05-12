# Ex03 To-Do List using JavaScript
## Date: 12.05.26

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
html
```
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Todo Web App</title>

<link rel="stylesheet" href="port.css">

</head>

<body>

<div class="todo-container">

<h1>Todo Web App</h1>

<div class="input-section">

<input type="text" id="taskInput" placeholder="Enter your task">

<button id="addTaskBtn">Add</button>

</div>

<ul id="taskList"></ul>

<div class="task-info">

<span id="taskCount">0 Tasks</span>

<button id="clearCompleted">Clear Completed</button>

</div>

</div>

<script src="port.js"></script>

</body>
</html>
```

css
```
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial;
}

body{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#667eea,#764ba2);
}

.todo-container{
background:white;
padding:30px;
border-radius:10px;
width:380px;
box-shadow:0 10px 25px rgba(0,0,0,0.2);
}

h1{
text-align:center;
margin-bottom:20px;
}

.input-section{
display:flex;
gap:10px;
margin-bottom:20px;
}

input{
flex:1;
padding:10px;
border:1px solid #ccc;
border-radius:5px;
}

button{
padding:10px 15px;
border:none;
background:#667eea;
color:white;
border-radius:5px;
cursor:pointer;
}

button:hover{
background:#5a67d8;
}

ul{
list-style:none;
}

li{
display:flex;
justify-content:space-between;
align-items:center;
padding:10px;
margin-bottom:10px;
background:#f4f4f4;
border-radius:5px;
}

li.completed{
text-decoration:line-through;
color:gray;
}

.task-buttons button{
margin-left:5px;
padding:5px 8px;
font-size:12px;
}

.task-info{
margin-top:15px;
display:flex;
justify-content:space-between;
align-items:center;
}
```

js
```
const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addTaskBtn");
const taskList=document.getElementById("taskList");
const taskCount=document.getElementById("taskCount");
const clearCompleted=document.getElementById("clearCompleted");

let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}

function updateCount(){
taskCount.textContent=tasks.length+" Tasks";
}

function renderTasks(){

taskList.innerHTML="";

tasks.forEach((task,index)=>{

const li=document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

const span=document.createElement("span");
span.textContent=task.text;

span.onclick=()=>{
tasks[index].completed=!tasks[index].completed;
saveTasks();
renderTasks();
};

const btnDiv=document.createElement("div");
btnDiv.className="task-buttons";

const editBtn=document.createElement("button");
editBtn.textContent="Edit";

editBtn.onclick=()=>{
const newTask=prompt("Edit Task",task.text);
if(newTask){
tasks[index].text=newTask;
saveTasks();
renderTasks();
}
};

const deleteBtn=document.createElement("button");
deleteBtn.textContent="Delete";

deleteBtn.onclick=()=>{
tasks.splice(index,1);
saveTasks();
renderTasks();
};

btnDiv.appendChild(editBtn);
btnDiv.appendChild(deleteBtn);

li.appendChild(span);
li.appendChild(btnDiv);

taskList.appendChild(li);

});

updateCount();
}

addBtn.onclick=()=>{

const text=taskInput.value.trim();

if(text===""){
alert("Enter a task");
return;
}

tasks.push({text:text,completed:false});

taskInput.value="";

saveTasks();

renderTasks();

};

clearCompleted.onclick=()=>{

tasks=tasks.filter(task=>!task.completed);

saveTasks();

renderTasks();

};

renderTasks();
```
## OUTPUT

<img width="1916" height="1081" alt="image" src="https://github.com/user-attachments/assets/a690deea-99f6-4584-94f0-887e436d3275" />

## RESULT
The program for creating To-do list using JavaScript is executed successfully.
