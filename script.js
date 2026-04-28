const input = document.getElementById('inputList');
const output = document.getElementById('output');
const btn = document.getElementById('addBtn');

btn.addEventListener('click', () => {
    const task = input.value.trim();
    if (task === '') {
        alert('Enter Your Task');
        input.focus();
        return;
    }

    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
    <label class="task-label">
      <input type="checkbox" class="check">
      <span class="taskText">${task}</span>
    </label>
    <div class="actions">
      <button class="editBtn" type="button">Edit</button>
      <button class="deleteBtn" type="button">Delete</button>
    </div>
  `;
  

    output.appendChild(li);

    const checkbox = li.querySelector('.check');
    const editBtn = li.querySelector('.editBtn');
    const deleteBtn = li.querySelector('.deleteBtn');
    const taskText = li.querySelector('.taskText');
    const completedCounter = document.getElementById("completed-counter");
    const uncompletedCounter = document.getElementById("uncompleted-counter");

    deleteBtn.addEventListener('click', () => {
        li.remove();
        input.value = '';
        input.focus();
         updateCounters();
    });

    editBtn.addEventListener('click', () => {
        if (editBtn.textContent === 'Edit') {
            input.value = taskText.textContent;
            input.focus();
            editBtn.textContent = 'Update';
            return;
        }

        const updatedTask = input.value.trim();
        if (updatedTask === '') {
            alert('Enter Your Task');
            input.focus();
            return;
        }

        taskText.textContent = updatedTask;
        input.value = '';
        editBtn.textContent = 'Edit';
    });

    checkbox.addEventListener('change', () => {
        taskText.classList.toggle('completed', checkbox.checked);
         updateCounters();
    });
   

   function updateCounters() {
    const completedTasks = document.querySelectorAll(".taskText.completed").length;
    const totalTasks = document.querySelectorAll("#output li").length;

    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = totalTasks - completedTasks;
}
    input.value = '';
    input.focus();
     updateCounters();
});
