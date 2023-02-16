const taskForm = document.querySelector("#new-task-form");
const task = document.querySelector("#new-task");
const taskList = document.querySelector("#tasks");

const createTask = (event) => {
  event.preventDefault();

  if (!task.value) {
    alert("Enter something");
    return;
  }

  const taskId = Date.now(); // Generate a unique id for the task
  localStorage.setItem(taskId, task.value);

  // Task Container
  const taskContainer = document.createElement("div");
  taskContainer.className = "task";

  // Task
  const taskInput = document.createElement("input");
  taskInput.classList.add("text");
  taskInput.type = "text";
  taskInput.value = task.value;
  taskInput.setAttribute("readonly", "readonly");

  //   Actions
  const taskActions = document.createElement("div");
  taskActions.className = "actions";
  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.innerHTML = "Edit";
  // Delete Button
  const delBtn = document.createElement("button");
  delBtn.className = "delete";
  delBtn.innerHTML = "Delete";
  // Appending buttons into Task actions
  taskActions.appendChild(editBtn);
  taskActions.appendChild(delBtn);

  //   Task into task container
  taskContainer.appendChild(taskInput);
  // Appending Task Actions into task container
  taskContainer.appendChild(taskActions);

  // Task Container into task box
  taskList.append(taskContainer);

  task.value = "";

  editBtn.addEventListener("click", () => {
    if (editBtn.innerHTML == "edit") {
      taskInput.removeAttribute("readonly");
      taskInput.focus();
      editBtn.innerText = "save";
    } else {
      taskInput.setAttribute("readonly", "readonly");
      editBtn.innerText = "edit";
    }
  });

  delBtn.addEventListener("click", () => {
    taskList.removeChild(taskContainer);
    localStorage.removeItem(taskId);
    tasks--;
  });
};

window.addEventListener("load", () => {
  // event.preventDefault();
  const tasks = localStorage.length;
  for (let i = 0; i < localStorage.length + 1; i++) {
    console.log(localStorage.key(i));
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    // const taskValue = localStorage.getItem;
    if (localStorage.getItem(localStorage.key(i)) !== null) {
      // Task Container
      const taskContainer = document.createElement("div");
      taskContainer.className = "task";
      taskContainer.id = key;

      // Task
      const taskInput = document.createElement("input");
      taskInput.classList.add("text");
      taskInput.type = "text";
      taskInput.value = value;
      taskInput.setAttribute("readonly", "readonly");

      //   Actions
      const taskActions = document.createElement("div");
      taskActions.className = "actions";
      // Edit Button
      const editBtn = document.createElement("button");
      editBtn.className = "edit";
      editBtn.innerHTML = "Edit";
      // Delete Button
      const delBtn = document.createElement("button");
      delBtn.className = "delete";
      delBtn.innerHTML = "Delete";
      // Appending buttons into Task actions
      taskActions.appendChild(editBtn);
      taskActions.appendChild(delBtn);

      //   Task into task container
      taskContainer.appendChild(taskInput);
      // Appending Task Actions into task container
      taskContainer.appendChild(taskActions);

      // Task Container into task box
      taskList.append(taskContainer);

      task.value = "";

      editBtn.addEventListener("click", () => {
        if (editBtn.innerHTML == "edit") {
          taskInput.removeAttribute("readonly");
          taskInput.focus();
          editBtn.innerText = "save";
        } else {
          taskInput.setAttribute("readonly", "readonly");
          localStorage.setItem(key, taskInput.value);
          editBtn.innerText = "edit";
        }
      });

      delBtn.addEventListener("click", () => {
        localStorage.removeItem(key);
        console.log(key);
        taskList.removeChild(taskContainer);
        updateLocalStorage();
        tasks--;
      });
    }
  }
  // localStorage.clear();
});

taskForm.addEventListener("submit", createTask);
