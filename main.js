let form = document.querySelector('form');
let emailInp = document.querySelector('input');
let main = document.querySelector('main');
let message = document.querySelector('.message');

form.onsubmit = (e) => {
  e.preventDefault();
  check();
}

function check() {
  let pattern = /\w+@\w+.(com|org|net)/g;
  if (emailInp.value.match(pattern)) {
    message.style.display = 'block';
    main.style.display = 'none';
  }
  else {
    form.classList.add('wrong');
  }
}