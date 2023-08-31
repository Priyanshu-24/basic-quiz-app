export const decodeEntities = (s) => {
  var str,
    temp = document.createElement("p");
  temp.innerHTML = s;
  str = temp.textContent || temp.innerText;
  temp = null;
  return str;
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
