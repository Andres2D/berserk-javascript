const columnsInput = document.getElementById('columns');
const rowsInput = document.getElementById('rows');
const responseElement = document.getElementById('solution');
const submitAction = document.getElementById('submit').addEventListener('click', () => {
  const columns = +columnsInput.value;
  const rows = +rowsInput.value;
  const resultArray = [];
  let limit = rows - 1;
  let tempArray = [];

  for(let i = 0; i < columns * rows; i++) {
    tempArray.push(i + 1);
    if(i === limit) {
      resultArray.push(tempArray);
      limit = limit + (rows);
      tempArray = [];
    }
  }

  for(let i = 0; i < resultArray.length; i ++){
    if(i % 2 !== 0) {
      resultArray[i] = resultArray[i].reverse();
    }
  }

  console.log(resultArray);
  
  for(let i = 0; i < rows; i++) {
    let tempArrayDisplay = []
    for(let j = 0; j < columns; j++) {
      tempArrayDisplay.push(resultArray[j][i]);
    }
    console.log(tempArrayDisplay.join(' '));

    const itemElement = document.createElement('li');
    itemElement.textContent = tempArrayDisplay.join(' ');
    responseElement.appendChild(itemElement);
    tempArrayDisplay = [];
  }
});
