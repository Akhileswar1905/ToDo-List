window.addEventListener("load", () => {
  let i = localStorage.length - 1;
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task");
  const list = document.querySelector("#tasks");

  // Load Tasks from localStorage
  for (let j = 0; j < localStorage.length + 1; j++) {
    const task = localStorage.getItem(j);
    if (!task) continue;

    // List
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    // Content class
    const task_content = document.createElement("div");
    task_content.classList.add("content");
    task_el.appendChild(task_content); //Appending Content to Task

    // Input
    const task_input = document.createElement("input");
    task_input.classList.add("text");
    task_input.type = "text";
    task_input.value = task;
    task_input.setAttribute("readonly", "readonly");

    task_content.appendChild(task_input); //Appending Input to Content

    // Actions Class
    const task_actions = document.createElement("div");
    task_actions.classList.add("actions");

    // Edit button
    const edit_btn = document.createElement("button");
    edit_btn.classList.add("edit");
    edit_btn.innerHTML = "Edit";

    // Delete button
    const delete_btn = document.createElement("button");
    delete_btn.classList.add("delete");
    delete_btn.innerHTML = "Delete";

    task_actions.appendChild(edit_btn); //Appending Button to Actions
    task_actions.appendChild(delete_btn); //Appending Button to Actions

    task_el.appendChild(task_actions); //Appending Actions to Tasks

    list.appendChild(task_el);

    edit_btn.addEventListener("click", () => {
      if (edit_btn.innerHTML == "edit") {
        task_input.removeAttribute("readonly");
        task_input.focus();
        edit_btn.innerText = "save";
      } else {
        task_input.setAttribute("readonly", "readonly");
        localStorage.setItem(j, task_input.value);
        edit_btn.innerText = "edit";
      }
    });

    delete_btn.addEventListener("click", () => {
      localStorage.removeItem(j);
      list.removeChild(task_el);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    if (task == "") {
      alert("Please add something");
      return;
    }

    i++;
    localStorage.setItem(i, task);
    // List
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    // Content class
    const task_content = document.createElement("div");
    task_content.classList.add("content");
    task_el.appendChild(task_content); //Appending Content to Task

    // Input
    const task_input = document.createElement("input");
    task_input.classList.add("text");
    task_input.type = "text";
    task_input.value = task;
    task_input.setAttribute("readonly", "readonly");

    task_content.appendChild(task_input); //Appending Input to Content

    // Actions Class
    const task_actions = document.createElement("div");
    task_actions.classList.add("actions");

    // Edit button
    const edit_btn = document.createElement("button");
    edit_btn.classList.add("edit");
    edit_btn.innerHTML = "Edit";

    // Delete button
    const delete_btn = document.createElement("button");
    delete_btn.classList.add("delete");
    delete_btn.innerHTML = "Delete";

    task_actions.appendChild(edit_btn); //Appending Button to Actions
    task_actions.appendChild(delete_btn); //Appending Button to Actions

    task_el.appendChild(task_actions); //Appending Actions to Tasks

    list.appendChild(task_el);

    input.value = "";

    edit_btn.addEventListener("click", () => {
      if (edit_btn.innerHTML == "edit") {
        task_input.removeAttribute("readonly");
        task_input.focus();
        edit_btn.innerText = "save";
      } else {
        task_input.setAttribute("readonly", "readonly");
        edit_btn.innerText = "edit";
      }
    });

    delete_btn.addEventListener("click", () => {
      list.removeChild(task_el);
    });
  });
});
