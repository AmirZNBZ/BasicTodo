//  Selector inputs And Button
const todoTitle = document.getElementById("todo-title");
const todoDescription = document.getElementById("todo-description");
const todoPriority = document.getElementById("todo-priority");
const todoWhen = document.getElementById("todo-when");
const addTodo = document.getElementById("add-todo");

// Functions
addTodo.addEventListener("click", (e) => {
  e.preventDefault();

  const todoCardsContainer = document.querySelector(".todo-cards-container");

  const todoCard = createElementFunction("div");
  getAddClassFunction(todoCard, "card");

  const cardTitle = createElementFunction("div");
  todoCard.appendChild(cardTitle);
  getAddClassFunction(cardTitle, "card-title");

  const titleHeader = createElementFunction("h3");

  const priorityIcons = createElementFunction("i");
  getAddClassFunction(priorityIcons, "fa");

  // Check Todo priority
  checkTodoPriorityFunction(todoPriority, priorityIcons);

  // Check if Title is Empty
  if (!todoTitle.value) {
    errFieldName = todoTitle.placeholder.replace("...", " ");
    msg = "Empty, Please Fill The" + errFieldName;
    createToastFunction(errFieldName, msg, 3000);
    return;
  }

  titleHeader.textContent = todoTitle.value;
  cardTitle.appendChild(titleHeader);
  cardTitle.appendChild(priorityIcons);

  const actionIcons = createElementFunction("div");
  getAddClassFunction(actionIcons, "icons");

  // Trash And Complete Icon
  const checkCircle = createElementFunction("i");
  getAddClassFunction(checkCircle, "fa");
  getAddClassFunction(checkCircle, "fa-check-circle");

  const trash = createElementFunction("i");
  getAddClassFunction(trash, "fa");
  getAddClassFunction(trash, "fa-trash");

  actionIcons.appendChild(checkCircle);
  actionIcons.appendChild(trash);
  cardTitle.appendChild(actionIcons);

  trash.addEventListener("click", deleteFunction);
  checkCircle.addEventListener("click", doneFunction);

  // Divider
  const divider = createElementFunction("hr");
  todoCard.appendChild(divider);

  //  card content
  const cardContentMain = createElementFunction("div");
  getAddClassFunction(cardContentMain, "card-content");

  const cardContent = createElementFunction("p");
  cardContent.textContent = todoDescription.value;

  cardContentMain.appendChild(cardContent);
  todoCard.appendChild(cardContentMain);

  // Card Footer
  const cardFooter = createElementFunction("div");
  getAddClassFunction(cardFooter, "card-footer");

  // Close icon in Buttons
  const close = createElementFunction("i");
  getAddClassFunction(close, "fa");
  getAddClassFunction(close, "fa-times");

  const forWhenBtn = createElementFunction("button");
  getAddClassFunction(forWhenBtn, "footer-btn");
  forWhenBtn.setAttribute("type", "button");
  forWhenBtn.textContent = todoWhen.value;
  forWhenBtn.insertBefore(close, forWhenBtn.firstChild);

  const completedBtn = createElementFunction("button");
  getAddClassFunction(completedBtn, "footer-btn");
  getAddClassFunction(completedBtn, "uncompleted");
  completedBtn.setAttribute("type", "button");
  completedBtn.textContent = "UNComplete";
  const closeComplete = close.cloneNode(true);
  completedBtn.insertBefore(closeComplete, completedBtn.firstChild);

  cardFooter.appendChild(forWhenBtn);
  cardFooter.appendChild(completedBtn);
  // cardFooter.appendChild(activeBtn);

  todoCard.appendChild(cardFooter);

  todoCardsContainer.appendChild(todoCard);

  // Clear Input Value After Add Todo
  clearFunction(todoTitle);
  clearFunction(todoDescription);
  clearFunction(todoPriority);
  clearFunction(todoWhen);
  todoTitle.focus();
});

const clearFunction = (element) => {
  element.value = "";
};

const deleteFunction = (e) => {
  const todoCard = e.target.closest(".card");
  getAddClassFunction(todoCard, "todo-delete");

  if (todoCard) {
    todoCard.addEventListener("transitionend", function () {
      todoCard.remove();
    });
  }
};

const doneFunction = (e) => {
  const containerDone = document.querySelector(".container-done");
  const btnUncompleted = document.querySelector(".uncompleted");
  const todoCard = e.target.closest(".card");

  getAddClassFunction(btnUncompleted, "completed")
  btnUncompleted.classList.remove("uncompleted");
  btnUncompleted.textContent = "Completed";

  e.target.style.color = "rgb(2, 153, 65)";
  e.target.style.pointerEvents = "none";

  todoCard.classList.add("todo-done");

  containerDone.appendChild(todoCard);

  console.log("==>", e.target);
};

// Create Toast Function
const createToastFunction = (fieldErr, msg, duration) => {
  const main = document.querySelector(".body");
  const toastContainer = createElementFunction("div");
  toastContainer.classList.add("toast-container");

  const toastContent = createElementFunction("div");

  setTimeout(function () {
    toastContainer.classList.add("toast-container__show");
  }, 200);

  setTimeout(function () {
    toastContainer.classList.remove("toast-container__show");
    setTimeout(function () {
      toastContainer.removeChild(toastContent);
    }, 500);
  }, duration);

  toastContent.textContent = fieldErr + msg;
  toastContainer.appendChild(toastContent);

  main.appendChild(toastContainer);
};

const checkTodoPriorityFunction = (todoPriorityInput, icons) => {
  if (todoPriorityInput.value === "high") {
    icons.classList.add("fa-angle-double-up");
    icons.style.color = "red";
    icons.style.fontSize = "24px";
  } else if (todoPriorityInput.value === "medium") {
    icons.classList.add("fa-angle-up"); //change to -- ro ham 
    icons.style.color = "orange";
    icons.style.fontSize = "24px";
  } else {
    icons.classList.add("fa-angle-down");
    icons.style.color = "#007fff";
    icons.style.fontSize = "24px";
  }
};

const createElementFunction = (elementName) => {
  return document.createElement(elementName);
};

const getAddClassFunction = (element, className) => {
  element.classList.add(className);
};
