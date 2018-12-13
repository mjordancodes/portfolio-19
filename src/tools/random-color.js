function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomColor() {
  let allColors = ['#AE70AF', '#F37E43', '#E66565', '#FFD603', '#9FCEB4', '#ACCAE8', '#9295CA'];
  let num = getRandomInt(allColors.length);
  return allColors[num];    
}