const arr = Array(100).fill(1).map((item, index) => index + 1);

export default getIndex = (index) => {
  return arr[index] || -1;
}