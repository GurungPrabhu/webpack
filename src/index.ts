import "./style/style.scss";
import { generateListElement } from "./utils";

let TODO_LIST = ["list one", "list two", "list three"];

const generateTodoList = (list: any): void => {
  const listDiv = document.getElementById("todo-list");
  listDiv.insertAdjacentElement("afterbegin", generateListElement(list));
};
function main(): void {
  generateTodoList(TODO_LIST);
}

window.onload = main;
