// Accessing the input and button element
let list_container = document.getElementById("list-container");
let input_box = document.getElementById("text-box");

//Function to add task
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
  //Saves the values in local storage
  saveData();
}

//Code to remove added tasks form the list
list_container.addEventListener("click", (el) => {
  if (el.target.tagName === "LI") {
    el.target.classList.toggle("checked");
    saveData();
  } else if (el.target.tagName === "SPAN") {
    el.target.parentElement.remove();
    //Saves the values in local storage
    saveData();
  }
});

//Created the function to save data to local storage
function saveData() {
  localStorage.setItem("tasks", list_container.innerHTML);
}

//Function to show the saved data from local storage
function showData() {
  list_container.innerHTML = localStorage.getItem("tasks");
}

//Function called to show the data
showData();
