async function loadTasks() {
    const res = await fetch("/tasks");
    const tasks = await res.json();

    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onchange = () => updateTask(task.id, checkbox.checked);

        const span = document.createElement("span");
        span.textContent = task.title;
        if (task.completed) span.style.textDecoration = "line-through";

        const btn = document.createElement("button");
        btn.textContent = "❌";
        btn.onclick = () => deleteTask(task.id);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(btn);
        list.appendChild(li);
    });
}

async function addTask() {
    const input = document.getElementById("taskInput");
    if (!input.value) return;

    await fetch("/tasks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title: input.value})
    });

    input.value = "";
    loadTasks();
}

async function updateTask(id, completed) {
    await fetch(`/tasks/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({completed})
    });
    loadTasks();
}

async function deleteTask(id) {
    await fetch(`/tasks/${id}`, {method: "DELETE"});
    loadTasks();
}

loadTasks();
