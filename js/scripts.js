window.onload = function() {
  let button1 = document.querySelector('button.button1');
  button1.onclick = function() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  };
  let button2 = document.querySelector('button.button2');
  button2.onclick = function() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'white';
    body.style.color = 'brown';
  };

  let h1 = document.querySelector('h1');
  h1.onmouseover = function() {
    h1.style.backgroundColor = 'yellow';
  };
  h1.onmouseout = function() {
    h1.style.backgroundColor = 'yellow';
  };
};