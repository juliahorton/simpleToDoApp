const taskInput = document.body.querySelector("#task-input");
const tasks = document.body.querySelector(".tasks");

if (localStorage.User_Tasks) {
    tasks.innerHTML = localStorage.User_Tasks;
}

taskInput.addEventListener("submit", function(e) {
    e.preventDefault();
    const newTask = document.body.querySelector('input[name="new-task"]');
    const newLi = document.createElement("li");
    newLi.innerText = newTask.value;
    const newButton = document.createElement("button");
    newButton.innerText = "remove";
    newLi.appendChild(newButton);
    tasks.appendChild(newLi);
    if (!localStorage.User_Tasks) {
        localStorage.setItem("User_Tasks", tasks.innerHTML);
    } else {
        localStorage.User_Tasks = tasks.innerHTML;
    }
    newTask.value = "";
})

// Mark a task as important on double-click
tasks.addEventListener("dblclick", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("important");
        localStorage.User_Tasks = tasks.innerHTML;
    }
})

// Remove a task from the list on button click or strikethrough task on click
tasks.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        localStorage.User_Tasks = tasks.innerHTML;
    }
    else if (e.target.tagName === "LI") {
        e.target.classList.toggle("strikethrough");
        localStorage.User_Tasks = tasks.innerHTML;
    }
})