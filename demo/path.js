const path = require('path');

console.log('название файла: ', path.basename(__filename));

console.log('имя дериктории: ', path.dirname(__filename));

console.log('расширение файла: ', path.extname(__filename));

console.log('Parse', path.parse(__filename).name)

console.log(path.join(__dirname, 'server', 'index.html'))