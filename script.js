function overOnGameItem() {
  const gameItem = document.querySelector('#game-item');
  gameItem.addEventListener('mouseover', () => {
    const randomPosObj = getRandomPositions();
    const randomSidesObj = getRandomSides();
    clearAllSides(gameItem);  

    gameItem.style[randomSidesObj.first] = `${randomPosObj.x}%`;
    gameItem.style[randomSidesObj.second] = `${randomPosObj.y}%`;

    document.querySelector('#wrapper').classList.add('change-cursor');
  });
}

overOnGameItem();
clickOnGameItem();

function clickOnGameItem() {
  const gameItem = document.querySelector('#game-item');
  let i = 0;
  gameItem.addEventListener('click', () => {
     i = i + 1;
     const countNum = document.querySelector('#count-num');
     countNum.innerHTML = i;
  });
}

function clearAllSides(item) {
    item.style.top = "";
    item.style.right = "";
    item.style.bottom = "";
    item.style.left = "";
}

function getRandomPositions () {
  const randomPosObj = {};
  randomPosObj.x = Math.floor(Math.random() * 90);
  randomPosObj.y = Math.floor(Math.random() * 60);

  return randomPosObj;
}

function getRandomSides () {
  const randomSidesIndexObj = {};
  const sidesArr = ['left', 'right', 'top', 'bottom']
  let first = Math.floor(Math.random() * (sidesArr.length));
  let second = Math.floor(Math.random() * (sidesArr.length));

  if (first === second) {
    if (sidesArr[first + 1] === undefined) {
        first = first - 1;
    } else {
        first = first + 1;
    }
  }

  randomSidesIndexObj.first = sidesArr[first];
  randomSidesIndexObj.second = sidesArr[second];

  return randomSidesIndexObj;
}   