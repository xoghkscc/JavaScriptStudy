console.log('length: '+text.length);//18
console.log('slice: '+text.slice(3,9));//lo, Ja
console.log('substring: '+text.substring(3,9));//lo, Ja
console.log('substr: '+text.substr(3,9));//lo, Javas
console.log('chartAt: '+text.charAt(1));//e
console.log('chartAt: '+text [1]);//e
const arr = text.split(',');
console.log(arr);
console.log(text.search('J.{3}'));//7
console.log(names.match('.{1}민수'));
console.log(names.includes('박민수'));//TRUE