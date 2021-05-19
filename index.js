function main () {
  const panelsElements=document.querySelector('.wrapper');

  panelsElements.addEventListener('click', (event) => {
    const color = event.target.className.split('-')[0];

    if(color !== 'wrapper'){
      countClick(color);
    }
  });
}

function countClick (color) {
  const counter = document.querySelector(`.${color}-counter`),
    panelCounter = document.querySelector(`.${color}-panel`),
    clicksCount = +counter.textContent;

  counter.textContent = clicksCount + 1;
  panelCounter.textContent = clicksCount + 1;
}

window.onload= main;