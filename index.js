const colors = require('colors')

let colorList = ['black','red','green','yellow','blue','magenta','cyan','white','gray']
let bgList = ['bgBlack','bgRed','bgGreen','bgYellow','bgBlue','bgMagenta','bgCyan','bgWhite']

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()"

module.exports = () => {
	while(true) {
		let str = ""
		for(let i=0;i<100;i++) {
			str += chars[Math.floor(Math.random()*71)][colorList[Math.floor(Math.random()*9)]][bgList[Math.floor(Math.random()*8)]]
		}
		console.log(str)
	}
}