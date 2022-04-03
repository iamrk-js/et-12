let cl = console.log;
const jump = document.getElementById('jump');

function spanWrapp(text){
  return  [...text].map((letter) => `<span>${letter}</span>`).join('')
}

cl(spanWrapp(jump.textContent))

jump.innerHTML = spanWrapp(jump.textContent);