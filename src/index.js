const button = document.getElementById('button');

const uList = document.getElementById('tasks');

const form = document.getElementById('create-task-form')

const priority = document.getElementById('priority-selector')

function addTaskToList(eventObj) {
  eventObj.preventDefault();
  const listItem = document.createElement('li');
  const newText = eventObj.target['new-task-description'].value

  listItem.textContent = newText
  if (priority.id === "high") {
    newText.style.color = "red"
  }

  uList.append(listItem)


}

form.addEventListener('submit', addTaskToList);

document.addEventListener("DOMContentLoaded", () => {
  // your code here

});

// function setPriority(event) {
//   event.preventDefault()
//   const newText = document.querySelector(li)
//   const priority = event.target['priority'].value
//   if (priority === "high") {
//     newText.style.color = "red"
//   }

// }

// function assignPriority() {
//   if (priotity === "high") {
//     listItem.id = "red"
//   }
// }
