const button = document.querySelector('button');
const modal = document.querySelector('.modal_wrapper');

button.addEventListener('click', openModal);

function openModal(event){
  event.preventDefault();

  console.log('clicked')
  modal.style.display = "flex";
}

function closeModal(event){
  event.preventDefault();

  console.log('clicked')
  closeBtn.style.display = "none";
}