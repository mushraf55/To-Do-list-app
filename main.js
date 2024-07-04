let list_container = document.getElementById("list-container");
let input_box = document.getElementById("text-box");

function addTask() {
  if (input_box.value === "") {
    alert("Please Enter a task");
  } else {
    let task = document.createElement("li");
    task.textContent = input_box.value;
    list_container.appendChild(task);

    let span = document.createElement("span");
    span.textContent = "\u00d7";
    task.appendChild(span);
  }
  input_box.value = "";
  saveData();
}

list_container.addEventListener("click", (el) => {
  if (el.target.tagName === "LI") {
    el.target.classList.toggle("checked");
    saveData();
  } else if (el.target.tagName === "SPAN") {
    el.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("tasks", list_container.innerHTML);
}

function showData() {
  list_container.innerHTML = localStorage.getItem("tasks");
}

showData();
