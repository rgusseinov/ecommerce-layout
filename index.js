import "./style.sass";

const handleDragEnter = (e) => {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

const handleDragOver = (e) => {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

const handleDragLeave = (e) => {
  e.target.classList.remove('drag-over');
}


const handleDrop = (e) => {
  // e.target.classList.remove('drag-over');

  // get the draggable element
  // const id = e.dataTransfer.getData('text/plain');
  // const draggable = document.getElementById(id);

  console.log(`e`, e.dataTransfer.getData('text/plain'));

  // add it to the drop target
  // e.target.appendChild(draggable);

  // display the draggable element
  // draggable.classList.remove('hide');
}

const handleDragStart = (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);

  
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}


const cardContents = document.querySelectorAll('.card__content');
cardContents.forEach(cardContent => {
  cardContent.addEventListener('dragenter', handleDragEnter);
  cardContent.addEventListener('dragover', handleDragOver);
  cardContent.addEventListener('dragleave', handleDragLeave);
  cardContent.addEventListener('drop', handleDrop);
});


const cardItems = document.querySelectorAll('.card__item');
cardItems.forEach(cardItem => { 
  cardItem.addEventListener('dragstart', handleDragStart);
});


/*

  onDragStart
  onDragLeave
  onDragOver
  onDragEnter
  onDragOut
  onDrop

*/