import "./style.sass";

/* const handleDragEnter = (e) => {
  e.preventDefault();
  e.target.classList.add("drag-over");
};

const handleDragOver = (e) => {
  e.preventDefault();
  e.target.classList.add("drag-over");
};

const handleDragLeave = (e) => {
  e.target.classList.remove("drag-over");
};

const handleDrop = (e) => {
  e.target.classList.remove("drag-over");

  // get the draggable element
  const className = e.dataTransfer.getData("text/plain");
  const draggable = document.querySelector(className);

  // add it to the drop target
  e.target.appendChild(draggable);
  // display the draggable element
  draggable.classList.remove("hide");
};

const handleDragStart = (e) => {
  e.dataTransfer.setData("text/plain", e.target.className);
  console.log(e.target.className);

  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
};

const cardContents = document.querySelectorAll(".card__content");
cardContents.forEach((cardContent) => {
  cardContent.addEventListener("dragenter", handleDragEnter);
  cardContent.addEventListener("dragover", handleDragOver);
  cardContent.addEventListener("dragleave", handleDragLeave);
  cardContent.addEventListener("drop", handleDrop);
});

const cardItems = document.querySelectorAll(".card__item");
cardItems.forEach((cardItem) => {
  cardItem.addEventListener("dragstart", handleDragStart);
});
 */

const taskListElement = document.querySelector(".card__lists");
const taskElements = document.querySelectorAll(".card__item");

for (const task of taskElements) {
  task.draggable = true;
}

taskListElement.addEventListener("dragstart", (e) => {
  e.target.classList.add("selected");
});

taskListElement.addEventListener("dragend", (e) => {
  e.target.classList.remove("selected");
});

taskListElement.addEventListener("dragover", (e) => {
  e.preventDefault();

  const activeElement = taskListElement.querySelector(".selected");
  const currentELement = e.target;

  const isMoveable =
    activeElement !== currentELement &&
    currentELement.classList.contains("card__item");

  if (!isMoveable) return;

  const nextElement =
    currentELement === activeElement.nextElementSibling
      ? currentELement.nextElementSibling
      : currentELement;

  taskListElement.insertBefore(activeElement, nextElement);
});
