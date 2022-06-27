const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const tasksContainer = document.querySelector(".tasks-container");

const validadeInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsvalid = validadeInput();

    console.log(inputIsvalid);

    if(!inputIsvalid) {
       return inputElement.classList.add("error");
    }

    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;


    const deleteItem = document.createElement("i");
    deleteItem.classList.add("fa-solid");
    deleteItem.classList.add("fa-trash");

    deleteItem.addEventListener("click", () => handleDeleteClick(taskItemContainer, taskContent))
   

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = "";
};

const handleDeleteClick = (taskItemContainer, taskContent) => {
 const tasks = tasksContainer.childNodes;

  for(const task of tasks) {
    if(task.firstChild === taskContent) {
     taskItemContainer.remove()
    }
  }
}



addTaskButton.addEventListener("click", () => handleAddTask());
