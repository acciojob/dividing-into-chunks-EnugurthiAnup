const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [];
  let chunk = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] <= n) {
      // add current element to chunk
      chunk.push(arr[i]);
      sum += arr[i];
    } else {
      // push finished chunk, start a new one
      result.push(chunk);
      chunk = [arr[i]];
      sum = arr[i];
    }
  }

  // push last chunk if not empty
  if (chunk.length > 0) {
    result.push(chunk);
  }

  return result;
};

// const n = prompt("Enter n: "); 
alert(JSON.stringify(divide(arr, n)));
