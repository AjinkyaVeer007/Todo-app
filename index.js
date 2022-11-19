const button = document.querySelector(".addButton");
const inputText = document.querySelector(".input");
const todo = document.querySelector(".container");

let newdiv;
let newP;
let button1;
let button2;
let todoContent;
let deleteButton;
let editButton;

const addtodo = () => {
  if (inputText.value) {
    newdiv = document.createElement("div");
    newdiv.classList.add("item");
    newP = document.createElement("p");
    newP.classList.add("item_input");
    button1 = document.createElement("button");
    button1.classList.add("editButton", "edit");
    button2 = document.createElement("button");
    button2.classList.add("deleteButton", "delete");

    todo.appendChild(newdiv);
    newdiv.appendChild(newP);
    newdiv.appendChild(button1);
    newdiv.appendChild(button2);

    button1.innerHTML = "Edit";
    button2.innerHTML = "Delete";

    newP.innerHTML = inputText.value;

    inputText.value = "";
    todoContent = document.querySelectorAll(".item");
    deleteButton = document.querySelectorAll(".delete");
    deleteButton.forEach((item) => {
      item.removeEventListener;
      item.addEventListener("click", () => {
        item.parentElement.remove();
      });
    });

    editButton = document.querySelectorAll(".edit");
    editButton.forEach((item) => {
      item.removeEventListener;
      item.addEventListener("click", () => {
        inputText.value = item.previousElementSibling.innerHTML;
        item.parentElement.remove();
      });
    });
  }
};

button.addEventListener("click", addtodo);
