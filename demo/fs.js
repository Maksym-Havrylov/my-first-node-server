const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err
//   }
//     console.log('папка создана');
// });

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello Node JS', (err) => {
//   if (err) {
//     throw err
//   }
//   console.log('Файл создан')
// })

// fs.appendFile(filePath, '\nHello Node JS Again', (err) => {
//   if (err) {
//     throw err
//   }
//   console.log('Файл создан')
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }
  console.log(content)
  // const data = Buffer.from(content)
  // console.log('Content: ', data.toString())
})