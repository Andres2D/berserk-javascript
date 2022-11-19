console.log('Cross challenge');

const drawCross = (n) => {  
  for (let index = -1; index < n; index++) {
    const row = Array.from({length: n+1});
    row[index + 1] = 'x';
    row[(row.length - 1) - (index + 1)] = 'x';
    console.log(row.join(' '));
  }
}

drawCross(4);
drawCross(5);
drawCross(6);
drawCross(7);
drawCross(8);
drawCross(9);
drawCross(10);
drawCross(11);
