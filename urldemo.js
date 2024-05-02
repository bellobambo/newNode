import url from 'url'

const urlString = 'http://www.google.com/search?q=hello+world';

// URL Object

const urlObj = new URL(urlString)

// console.log(urlObj);

// format()

// console.log(url.format(urlObj))

console.log(import.meta.url)

//file urltopath()

console.log(url.fileURLToPath(import.meta.url))

// console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
// console.log(params.get('q'));

params.append('limit' , '5');
params.delete('limit')

console.log(params)