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