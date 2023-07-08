export const sort = (arr: number[]) => {
  let hold = 0;
  do {
    let min = arr[hold];
    let currIdx = 0;
    for (let i = hold + 1; i <= arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
        currIdx = i;
      }
    }
    if (currIdx > 0) {
      let aux = arr[hold];
      arr[hold] = arr[currIdx];
      arr[currIdx] = aux;
    }
    hold++;
  } while (hold < arr.length);
  return arr;
};
