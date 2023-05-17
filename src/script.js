import $ from "jquery";
import * as bootstrap from "bootstrap";
import "popper.js";

var modals = document.querySelector('.modal');

var opened_modal;

var cards = [];

cards.push(document.querySelector('.image_1'));
cards.push(document.querySelector('.image_2'));
cards.push(document.querySelector('.image_3'));
cards.push(document.querySelector('.image_4'));
cards.push(document.querySelector('.image_5'));

var buttons = document.querySelectorAll('.btn.btn-primary')

for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function(event) {

        modals.childNodes[1].childNodes[1].childNodes[1].childNodes[1].textContent = "Карточка №" + event.target.parentNode.parentNode.childNodes[1].className[event.target.parentNode.parentNode.childNodes[1].className.length - 1];
        modals.childNodes[1].childNodes[1].childNodes[3].childNodes[1].textContent = "Изображение №" + event.target.parentNode.parentNode.childNodes[1].className[event.target.parentNode.parentNode.childNodes[1].className.length - 1] + ". Цвет:";
        modals.childNodes[1].childNodes[1].childNodes[3].childNodes[3].style.backgroundColor = $(event.target.parentNode.parentNode.childNodes[1]).css("background-color");
        
        opened_modal = event.target.parentNode.parentNode.childNodes[1].className[event.target.parentNode.parentNode.childNodes[1].className.length - 1];
    });

};

function change_modal() {

    modals.childNodes[1].childNodes[1].childNodes[1].childNodes[1].textContent = "Карточка №" + opened_modal;
    modals.childNodes[1].childNodes[1].childNodes[3].childNodes[1].textContent = "Изображение №" + opened_modal + ". Цвет:";

    var class_name = ".image_" + opened_modal;

    modals.childNodes[1].childNodes[1].childNodes[3].childNodes[3].style.backgroundColor = $(class_name).css("background-color");
}

modals.addEventListener('keydown', function(event) {

    switch(event.which) {

        case 37:

            if (opened_modal == '1')
                opened_modal = '5';

            else {
                opened_modal = Number(opened_modal) - 1;
                opened_modal = String(opened_modal);
            }

            change_modal();

            break;

        case 39:

            if (opened_modal == '5')
                opened_modal = '1';

            else {
                opened_modal = Number(opened_modal) + 1;
                opened_modal = String(opened_modal);
            }

            change_modal();

            break;

        default:
            return;
    }

    event.preventDefault();

});

var toast_button = document.getElementById("toastbtn");
var toast_show = document.querySelector('.toast');

toast_button.onclick = function() {
    toast_show.className = 'toast show';
  };

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {

    return new bootstrap.Popover(popoverTriggerEl);

});