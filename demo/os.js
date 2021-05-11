const os = require('os')

console.log('Операционная система: ', os.platform())

console.log('Архитектура процеса: ', os.arch())

console.log('Информация по процесорам: ', os.cpus())

console.log('Свободная память: ', os.freemem())

console.log('Вся память: ', os.totalmem())

console.log('Домашняя дериктория: ', os.homedir())

console.log('Сколько работает система: ', os.uptime())


