import path from 'path';
import url from 'url'


const filepath = './dir1/dir2/text.txt';

// console.log(path.basename(filepath));

// console.log(path.dirname(filepath));

const __filename = url.fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename);

// console.log(__filename, __dirname);

//join()

const filepath2 = path.join(__dirname, 'dir1' , 'dir2' , 'text.txt')
console.log(filepath2)


const filepath3 = path.resolve(__dirname, 'dir1' , 'dir2' , 'text.txt')
console.log(filepath3)

