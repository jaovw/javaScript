const fs = require('fs').promises
// const { verify } = require('crypto')
// const { stat, readdir } = require('fs')
const path = require('path')

// fs.readdir(path.resolve(__dirname)).then(files => console.log(files)).catch(e => console.log(e))

async function read(root) {

    root = root || path.resolve(__dirname)
    const files = await fs.readdir(root)

    walk(files, root)
}

async function walk(files, root) {
    for(let file of files) {
        const  fileFullPath = path.resolve(root, file)
        const stats = await fs.stat(fileFullPath )


        if(/\.git/g.test(fileFullPath)) continue
        if(/node_modules/g.test(fileFullPath)) continue

        if(stats.isDirectory()){
            read(fileFullPath)
            continue
        }

        if(!/\.js$/g.test(fileFullPath)) continue

        console.log(fileFullPath)
    }
}

read('../javaScript') 