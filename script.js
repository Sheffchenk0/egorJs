let example = document.getElementById('example');
let button = document.getElementById('checkButton');
let done = document.getElementById('done');
let left = document.getElementById('left');
let answer = document.getElementById('answer');
let countLeft = 10;
let countDone = 0;
let exampleObj = getExample();
buildExample(exampleObj);

button.addEventListener('click', resume);
answer.addEventListener('keydown', function (key) {
  if (key.keyCode === 13) {
    console.log(1);
    resume();
  }
});

function resume() {
  let feedBack = document.getElementById('feedBack');
  let answer = +document.getElementById('answer').value;
  if (exampleObj.answer === answer) {
    button.style.background = 'rgb(79, 212, 39)';
    setTimeout(() => {
      button.style.background = 'white';
    }, 300);
    countLeft--;
    countDone++;
  } else {
    button.style.background = 'red';
    setTimeout(() => {
      button.style.background = 'white';
    }, 300);
    countLeft = countLeft + 2;
  }
  document.getElementById('answer').value = '';
  if (countLeft === 0) {
    let form = document.getElementById('form');
    let succces = document.getElementById('succces');
    form.classList.add('display-none');
    succes.classList.remove('display-none');
  } else {
    exampleObj = getExample();
    buildExample(exampleObj);
  }
}

function buildExample(exampleObj) {
  if (random(0, 1)) {
    example.textContent =
      exampleObj.num[0] + ' ' + exampleObj.operator + ' ' + exampleObj.num[1] + ' = ';
  } else {
    example.textContent =
      exampleObj.num[0] + ' ' + exampleObj.operator + ' ' + exampleObj.num[1] + ' = ';
  }

  done.textContent = 'Решено : ' + countDone;
  left.textContent = 'Осталось : ' + countLeft;
}

function getExample() {
  let arr = [random(20, 150), random(20, 150)];
  let operator = '-';
  let answer = null;
  arr.sort((a, b) => b - a);
  if (random(0, 1)) {
    operator = '+';
    answer = arr[0] + arr[1];
  } else {
    answer = arr[0] - arr[1];
  }
  return { num: arr, operator: operator, answer: answer };
}

function random(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
