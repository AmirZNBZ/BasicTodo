//  Selector inputs And Button
const todoTitle = document.getElementById("todo-title");
const todoDescription = document.getElementById("todo-description");
const todoPriority = document.getElementById("todo-priority");
const todoWhen = document.getElementById("todo-when");
const addTodo = document.getElementById("add-todo");

//  Selector Todo Container
// const todoCardsContainer = document.getElementsByClassName("todo-cards-container");
// const todoCard = document.getElementsByClassName("card");
// const cardTitle = document.getElementsByClassName("card-title");
// const actionIcons = document.getElementsByClassName("icons");
// const cardContent = document.getElementsByClassName("card-content");
// const cardFooter = document.getElementsByClassName("card-footer");

// Functions
addTodo.addEventListener("click", (e) => {
  e.preventDefault();

  const todoCardsContainer = document.querySelector(".todo-cards-container");

  const todoCard = document.createElement("div");
  todoCard.classList.add("card");

  const cardTitle = document.createElement("div");
  todoCard.appendChild(cardTitle);
  cardTitle.classList.add("card-title");

  const titleHeader = document.createElement("h3");

  const priorityIcons = document.createElement("i");
  priorityIcons.classList.add("fa");
  if (todoPriority.value === "high") {
    priorityIcons.classList.add("fa-angle-double-up");
    priorityIcons.style.color = "red";
    priorityIcons.style.fontSize = "28px";
  } else if (todoPriority.value === "medium") {
    priorityIcons.classList.add("fa-angle-double-up");
    priorityIcons.style.color = "yellow";
    priorityIcons.style.fontSize = "26px";
  } else {
    priorityIcons.classList.add("fa-angle-up");
    priorityIcons.style.color = "green";
    priorityIcons.style.fontSize = "24px";
  }
  // Check if Title is Empty
  if (!todoTitle.value) {
    errFieldName = todoTitle.placeholder.replace("...", " ");
    msg = "Empty, Please Fill The" + errFieldName;
    createToast(errFieldName, msg, 3000);
    return;
  }
  
  titleHeader.innerText = todoTitle.value;
  cardTitle.appendChild(titleHeader);
  cardTitle.appendChild(priorityIcons);

  const actionIcons = document.createElement("div");
  actionIcons.classList.add("icons");

  // Trash And Complete Icon
  const checkCircle = document.createElement("i");
  checkCircle.classList.add("fa");
  checkCircle.classList.add("fa-check-circle");

  const trash = document.createElement("i");
  trash.classList.add("fa");
  trash.classList.add("fa-trash");

  actionIcons.appendChild(checkCircle);
  actionIcons.appendChild(trash);
  cardTitle.appendChild(actionIcons);

  trash.addEventListener("click", deleteFunction);
  checkCircle.addEventListener("click", doneFunction);

  const divider = document.createElement("hr");
  todoCard.appendChild(divider);

  //  card content
  const cardContentMain = document.createElement("div");
  cardContentMain.classList.add("card-content");

  const cardContent = document.createElement("p");
  cardContent.innerText = todoDescription.value;

  cardContentMain.appendChild(cardContent);
  todoCard.appendChild(cardContentMain);

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  // Close icon in btns
  const close = document.createElement("i");
  close.classList.add("fa");
  close.classList.add("fa-times");

  const forWhenBtn = document.createElement("button");
  forWhenBtn.classList.add("footer-btn");
  forWhenBtn.setAttribute("type", "button");
  forWhenBtn.innerText = todoWhen.value;
  forWhenBtn.insertBefore(close, forWhenBtn.firstChild);

  const completedBtn = document.createElement("button");
  completedBtn.classList.add("footer-btn");
  completedBtn.classList.add("uncompleted");
  completedBtn.setAttribute("type", "button");
  completedBtn.innerText = "UNComplete";
  const closeComplete = close.cloneNode(true);
  completedBtn.insertBefore(closeComplete, completedBtn.firstChild);

  // const activeBtn = document.createElement("button");
  // activeBtn.classList.add("footer-btn");
  // activeBtn.setAttribute("type", "button");
  // activeBtn.innerText = "active";
  // const closeActive = close.cloneNode(true);
  // activeBtn.insertBefore(closeActive, activeBtn.firstChild);

  cardFooter.appendChild(forWhenBtn);
  cardFooter.appendChild(completedBtn);
  // cardFooter.appendChild(activeBtn);

  todoCard.appendChild(cardFooter);

  todoCardsContainer.appendChild(todoCard);

  todoTitle.value = "";
  todoDescription.value = "";
  todoPriority.value = "";
  todoWhen.value = "";
  todoTitle.focus();
});

const deleteFunction = (e) => {
  const todoCard = e.target.closest(".card");
  todoCard.classList.add("todo-delete");

  if (todoCard) {
    todoCard.addEventListener("transitionend", function () {
      todoCard.remove();
    });
  }
};

const doneFunction = (e) => {
  const containerDone = document.querySelector(".container-done");
  const todoCard = e.target.closest(".card");
  const btnUncompleted = document.querySelector(".uncompleted");

  btnUncompleted.classList.add("completed");
  btnUncompleted.classList.remove("uncompleted");
  btnUncompleted.innerText = "Completed";

  e.target.style.color = "rgb(2, 153, 65)";
  e.target.style.pointerEvents = "none";

  todoCard.classList.add("todo-done");

  containerDone.appendChild(todoCard);

  console.log("==>", e.target);
};

// Create Toast Function
const createToast = (fieldErr, msg, duration) => {
  const main = document.querySelector(".body");
  const toastContainer = document.createElement("div");
  toastContainer.classList.add("toast-container");

  const toastContent = document.createElement("div");

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
