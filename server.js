console.log('Hello')

// console.log('global:', global)

const os = require('os')
const path = require('path')

console.log('os:', os)
console.log('os:', os)
console.log('os:', os)

console.log('__dirname:', __dirname)
console.log('__filename:', __filename)

// const fs = require('fs')
const fsPromises = require('fs').promises

const fileOps = async () => {
	try {
		const data = await fsPromises.readFile(
			path.join(__dirname, 'files', 'starter.txt'),
			'utf8'
		)
		await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))
		await fsPromises.writeFile(
			path.join(__dirname, 'files', 'starter.txt'),
			'something like this'
		)
		console.log('data:', data)
		await fsPromises.appendFile(
			path.join(__dirname, 'files', 'starter.txt'),
			'\n\nNice to meet you.'
		)
		await fsPromises.rename(
			path.join(__dirname, 'files', 'starter.txt'),
			path.join(__dirname, 'files', 'somethingElse.txt')
		)

		const newData = await fsPromises.readFile(
			path.join(__dirname, 'files', 'somethingElse.txt'),
			'utf8'
		)
		console.log('newData:', newData)
	} catch (error) {
		console.log(error)
	}
}

fileOps()

// fs.readFile('./starter.txt', 'utf8', (err, data) => {
// 	if (err) throw err
// 	console.log('data:', data)
// })

// const text = 'Hello world from writeFile4'
// fs.writeFile(write, text, err => {
// 	if (err) throw err
// 	console.log(`Write complete`)
// })

//exit on uncaught errors
process.on('uncaughtException', err => {
	console.log(`There was an uncaught error ${err}`)
	process.exit(1)
})
