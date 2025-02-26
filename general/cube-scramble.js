const movements = ['U','F','R','L','D','B'];
const variations = ["'", '2', ''];
const scrambleLength = 21;
const scrambleResultArray = [];

const getRealRandom = (maxLimit) => {
  let byteArray = new Uint8Array(1);
  global.crypto.getRandomValues(byteArray);
  let randomNum = Number('0.' + byteArray[0].toString());
  randomNum = Math.floor(randomNum * (maxLimit + 1));
  return randomNum;
}

for(let i = 0; i < scrambleLength; i++) {
  const randomForMovement = getRealRandom(movements.length - 1);
  const selectedVariation = variations[getRealRandom(variations.length - 1)];
  let selectedMovement = movements[randomForMovement];

  if(i !== 0 && scrambleResultArray[i - 1].includes(selectedMovement)) {
    selectedMovement = movements[randomForMovement + 1] ?? 
    movements[randomForMovement - 1];
  }
  scrambleResultArray.push(`${selectedMovement}${selectedVariation}`);
}

console.log(':::: SCRAMBLE ::::');
console.log(scrambleResultArray.join(' '));
