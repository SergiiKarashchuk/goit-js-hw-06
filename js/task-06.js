// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const value = document.querySelector('#validation-input');
const checkLength = value.dataset.length;
value.addEventListener('blur', onBlur)

function onBlur(event) {
    if (event.currentTarget.value.length === Number(checkLength)) {
      value.classList.remove('invalid');
      value.classList.add('valid');
    }
    else {
      value.classList.remove('valid');
      value.classList.add('invalid');
    }
}





// document.getElementById("validation-input").onblur = function() {
//     console.log(this.value.length);
//     if (this.getAttribute('data-length') > this.value.length) { 
//       this.classList.remove('valid');
//       this.classList.add('invalid');
//     } else {
//       this.classList.remove('invalid');
//       this.classList.add('valid');
//     }
//   };
