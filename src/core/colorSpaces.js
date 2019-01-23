const rgb = require('color-space/rgb');
const hsv = require('color-space/hsv');
const hsl = require('color-space/hsl');
const cmyk = require('color-space/cmyk');
const xyz = require('color-space/xyz');
const lab = require('color-space/lab');
const lchab = require('color-space/lchab');

const spaces = { rgb, hsv, hsl, cmyk, xyz, lab, lchab };

let fromSpace;

for (const fromSpaceName in spaces) {
  fromSpace = spaces[fromSpaceName];
  for (const toSpaceName in spaces) {
    if (!fromSpace[toSpaceName])
      fromSpace[toSpaceName] = getConvertor(fromSpaceName, toSpaceName);
  }
}

function getConvertor(fromSpaceName, toSpaceName) {
  const fromSpace = spaces[fromSpaceName];

  if (fromSpaceName === toSpaceName) {
    return a => a;
  } else if (fromSpace.xyz && spaces.xyz[toSpaceName]) {
    return arg => spaces.xyz[toSpaceName](fromSpace.xyz(arg));
  } else if (fromSpace.rgb && spaces.rgb[toSpaceName]) {
    return arg => spaces.rgb[toSpaceName](fromSpace.rgb(arg));
  }
}

export { rgb, hsv, hsl, cmyk, xyz, lab, lchab };
