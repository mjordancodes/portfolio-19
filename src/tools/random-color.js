let allColors = ['#AE70AF', '#F37E43', '#E66565', '#FFD603', '#9FCEB4', '#ACCAE8', '#9295CA'];

let lightRed      = '#f9dcdc',
    lightOrange   = '#ffeede',
    lightYellow   = '#f7f6e2',
    lightGreen    = '#e1f9e4',
    lightBlue     = '#d2e9f9',
    lightPurple   = '#f5e3fc';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor() {
  let num = getRandomInt(allColors.length);
  return allColors[num];    
}