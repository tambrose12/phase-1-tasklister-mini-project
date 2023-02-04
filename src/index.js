const button = document.getElementById('button');

const uList = document.getElementById('tasks');

const form = document.getElementById('create-task-form')

let priority = document.getElementById('priority-select')

function addTaskToList(eventObj) {
  eventObj.preventDefault();
  const listItem = document.createElement('li');
  const newText = eventObj.target['new-task-description'].value
  const deleteBtn = document.createElement('button')
  deleteBtn.innerHTML = `&times;`
  listItem.textContent = newText
  if (priority.value === "high") {
    listItem.style.color = "red"
  } else if (priority.value === "med") {
    listItem.style.color = "#F5C800"
  } else if (priority.value === "low") {
    listItem.style.color = "green"
  }

  deleteBtn.addEventListener('click', (event) => {
    listItem.remove()
  })

  listItem.append(deleteBtn)
  uList.append(listItem)
}


form.addEventListener('submit', addTaskToList);

document.addEventListener("DOMContentLoaded", () => {
  // your code here

});


// 
// if (priority.id === "high") {
//   newText.style.color = "red"
// }


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
