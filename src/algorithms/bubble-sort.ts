export const sort = (arr: number[]) => {
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - 1; j++) {
      if (newArr[i] < newArr[j]) {
        let aux = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = aux;
      }
    }
  }
  return newArr;
};
