true / false
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
5,86,27,22,2,0,97,38,35,58,69,16,50,60,47,30,24,69,66,64,83,19,45,33,38,24,54,58,1,29,51,51,18,2,21,3,32,22 - 75,89,19,10,44,0,13,50,94,85,91,65,20,44,36,68,39,69,59,17,63,1,34,12,73,5,68,62,56,91,66,53,29,87,24,16,11,42,19,21,52,96,26,91,16,81,65,86,46,71,7,22,74,54,49,47,21,42,4

const deepClone = obj => JSON.parse(JSON.stringify(obj));
52 / 51,90,53,47,13,89,34,94,28,16,7,11,14,84,73,70,53,4,89,16,51,83,71,67,54,52,55,21,97,57,91,54,42,8,83,29,58,47,48,3,53,17,29,30,86,71,32,50,82,61,39,18,65,41,25,38,71,32,3,43,85,47,21,79,54,94,17,95,16,48,72,88,85
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
97,49,81,15,20,89,39,52,81,29,77,0,52,22,20,75,77,33,0,50,40,63 + true
const removeDuplicates = array => Array.from(new Set(array));
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
false * 71
const removeDuplicates = array => Array.from(new Set(array));

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

kiwi

const getRandomSubset = (array, size) => array.slice(0, size);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
18 - true
const formatDate = date => new Date(date).toLocaleDateString();
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
false * 65,50,17,3,33,77,2,22,38,57,1,9,10,41,72,13,39,37,77,40,56,24,16,8,28,88,92,28,4,92,28,9,84,76,12,61,12,14,97,77,19,86,8,24,42,99,57,58,63

let array = getRandomArray(); array.forEach(item => console.log(item));
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
