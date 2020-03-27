/* document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close')
    const switchModal = () =>{
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click',switchModal);
    });
    closeBtn.addEventListener('click',switchModal)
  }); */

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn =$('[data-toggle=modal]'),
        closelBtn =$('.modal__close');
        
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closelBtn.on('click', function(){
        modal.toggleClass('modal--visible');
    });

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.swiper-pagination',
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left',prev.width()+10+bullets.width() +10)
    bullets.css('left',prev.width()+10)

    new WOW().init()

    // Валидация формы

    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            userEmail: {
                required: true,
                email: true
            }
          },
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не больше 15 букв"
            },
            userPhone: "Заполните поле",
            userEmail: {
              required: "Заполните поле",
              email: "Введите в формате name@domain.com",
            }
          }
    })
    $('.control__form').validate({
        errorClass: "invalid",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
          },
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не больше 15 букв"
            },
            userPhone: "Заполните поле",
          }
    })
    $('.footer__form').validate({
        errorClass: "invalid",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
          },
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не больше 15 букв"
            },
            userPhone: "Заполните поле",
          },
        submitHandler: function(form){
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    console.log('все ок. Ответ сервера' + response);
                    alert('Форма отправлена, мы с вами свяжемся');
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                }
            });
        }
    })

    // Маска для телефона
    $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

});