document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');

    modalBtn.forEach(element => {
        element.addEventListener('click',() =>{
            modal.classList.toggle('modal--visible');
        });
    });
  });