// create svg spritesheets from icons

const fs = require('fs')
const path = require('path')


function genSprites(folder) {

  const dir = path.join(__dirname, 'icons', folder)
  let output = '<svg xmlns="http://www.w3.org/2000/svg">\n\n'

  fs.readdirSync(dir).forEach(file => {
    if (path.extname(file) === '.svg') {

      let svg = fs.readFileSync(path.join(dir, file), 'utf8')
      let fileName = path.basename(file, '.svg')
      svg = svg.replace('<svg', '<symbol id="' + fileName + '"');
      svg = svg.replace('</svg>', '</symbol>');

      // remove not needed tags from each svg string
      svg = svg.replace('xmlns="http://www.w3.org/2000/svg"', 'preserveAspectRatio="xMidYMid meet"');
      svg = svg.replace('width="64"', 'width="100%"');
      svg = svg.replace('height="64"', 'height="100%"');

      // replace multiple consecutive spaces with single space
      svg = svg.replace(/\s{2,}/g, ' ');

      output += svg + '\n\n';

    }
  });

  output += '\n\n</svg>'


  let fileName = 'fusion-' + folder + '.svg'
  let filePath = path.join(__dirname, 'sprites', fileName)
  fs.writeFileSync(filePath, output)

  console.log(`${fileName} generated`)
}


genSprites('coins')
genSprites('interface')
genSprites('web3')