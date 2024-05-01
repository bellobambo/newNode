// import fs from 'fs';
import fs from 'fs/promises'

// fs.readFile('./text.txt' ,  'utf8' , (err, data) => {
// if(err) throw err;
// console.log(data)
// });


// const data = fs.readFileSync('./test.txt' , 'utf8');
// console.log(data);

// fs.readFile('./text.txt' , 'utf8').then((data) => console.log(data)).catch((err) => console.log(err))

const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}

// readFile()

// write file

const writeFile = async () => {
    try {
        await fs.writeFile('./text.txt', 'Hello i am writing here');
        console.log('File Written to...');
    } catch (error) {
        console.log(error);
    }
}

// writeFile();

const appendFile = async () => {
    try {
        await fs.appendFile('./text.txt', '\n This is An Appended File');
        console.log('File Appended to...');
    } catch (error) {
        console.log(error);
    }
}

appendFile()