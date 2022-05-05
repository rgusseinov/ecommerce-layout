import "./style.sass";


/* const taskListElement = document.querySelector(".card__lists");
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

  console.log(`activeElement`, activeElement);
  console.log(`currentELement`, currentELement);

  const nextElement =
    currentELement === activeElement.nextElementSibling ? currentELement.nextElementSibling
      : currentELement;

  taskListElement.insertBefore(activeElement, nextElement);
});

 */


const taskListElement = document.querySelectorAll(".card__lists");
const taskElements = document.querySelectorAll(".card__item");

for (const task of taskElements){
  task.draggable = true;
}

taskListElement.forEach(list => {
  list.addEventListener('dragstart', handleDragStart);
  list.addEventListener('dragend', handleDragEnd);
  list.addEventListener('dragover', handleDragOver);
});

function handleDragStart(e){
  e.target.classList.add("selected");
}

function handleDragEnd(e){
  e.target.classList.remove("selected");
}

function handleDragOver(e){
  e.preventDefault();

  // console.log(`activeElement`, e.target.parentElement.querySelector(".selected"));
  // console.log(`currentElement`, e.target);

  // console.log(e.target.parentElement);

  const activeElement = e.target.parentElement.querySelector(".selected")
  const currentElement = e.target;

  const isMoveable =
    activeElement !== currentElement &&
    currentElement.classList.contains("card__item");

  if (!isMoveable) return;

  // console.log(`activeElement`, activeElement);
  // console.log(`currentELement`, currentElement);

  const nextElement =
      currentElement === activeElement.nextElementSibling
      ? currentElement.nextElementSibling
      : currentElement;

  e.target.parentElement.insertBefore(activeElement, nextElement);

}


