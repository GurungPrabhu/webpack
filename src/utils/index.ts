export const generateListElement = (data: any): HTMLElement => {
  const ulElement = document.createElement("ul");
  const liElement: any = data.map((item) => {
    let listElement = document.createElement("li");
    listElement.innerHTML = item;
    ulElement.appendChild(listElement);
  });
  return ulElement;
};
