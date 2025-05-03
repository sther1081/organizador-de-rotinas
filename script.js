function adicionarTarefa() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        li.innerHTML = `${taskValue} <button onclick="removerTarefa(this)">Remover</button>`;
        
        taskList.appendChild(li);
        taskInput.value = ""; // Limpa o campo de input
    } else {
        alert("Por favor, insira uma tarefa.");
    }
}

function removerTarefa(button) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}
