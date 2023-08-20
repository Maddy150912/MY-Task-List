let addTask = document.getElementById("addButton");
addTask.addEventListener("click", addNewTask);
let parentList = document.getElementById("list");

function addNewTask(e) {
  if (e.currentTarget.previousElementSibling.value == '') {
    alert("Field is empty");
  } else {
    if (parentList.children[0].className == 'emptyQuote' || parentList.children[0].className == 'addNew') {
      parentList.children[0].remove();
    }

    let currentEle = e.currentTarget;
    let currentInputEle = currentEle.previousElementSibling;
    let currentTaskValue = currentInputEle.value;

    let newLi = document.createElement("li");
    newLi.innerHTML = `<h3>${currentTaskValue}</h3>
  <button class="edit-button" onclick="editTask(this)">Edit</button>
  <button class="delete-button" onclick="removeTask(this)">Remove</button>`

    parentList.appendChild(newLi)
    currentInputEle.value = "";
  }
}

function removeTask(currEle) {
  currEle.parentElement.remove();
  if (parentList.children.length <= 0) {
    let emptyMsg = document.createElement("h2");
    emptyMsg.className = "emptyQuote";
    emptyMsg.textContent = "All Tasks Removed: Add new tasks";
    parentList.appendChild(emptyMsg)
  }
}

function editTask(currEle) {
  if (currEle.textContent == "Done") {
    currEle.textContent = "Edit"
    let currentTaskEle = currEle.previousElementSibling.value;
    let currTaskHead = document.createElement("h4");
    currTaskHead.textContent = currentTaskEle;
    currEle.parentElement.replaceChild(
      currTaskHead,
      currEle.previousElementSibling
    );
  } else {
    currEle.textContent = "Done"
    let currentTaskEle = currEle.previousElementSibling.textContent;
    let currTaskInput = document.createElement("input");
    currTaskInput.type = "text";
    currTaskInput.placeholder = "Add Task... "
    currTaskInput.id = "inputText";
    currTaskInput.value = currentTaskEle;
    currTaskInput.maxLength = 50;
    currEle.parentElement.replaceChild(
      currTaskInput,
      currEle.previousElementSibling
    );
  }
}
