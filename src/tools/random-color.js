function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomColor() {
  let allColors = [
    '#AE70AF', // purple
    '#F37E43', // orange
    '#E66565', // red
    '#FFD603', // yellow
    '#9FCEB4', // green
    '#ACCAE8', // blue
    '#9295CA' // lavender
  ];
  let num = getRandomInt(allColors.length);
  return allColors[num];    
}