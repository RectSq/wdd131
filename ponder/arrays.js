const steps = ['one', 'two', 'three'];

// steps.forEach((item) => { console.log(item); });
steps.forEach(showSteps);

function showSteps(item) {
    console.log(item);
}
let myList = document.querySelector('.myList');
const stepsHtml = steps.map(listTemplate);

function listTemplate(item) {
    return `<li>${item}</li>`;
}

myList.innerHTML = stepsHtml.join('');

let grades = ["A", "B", "C"];
let points;

let gpaPoints = grades.map(convert);

function convert(grade) {
    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
console.log(gpaPoints);

let totalGpa = gpaPoints.reduce(getTotal);
console.log(totalGpa);

function getTotal(total, item) {
    return total + item;
}


let gpaAverage = totalGpa / gpaPoints.length;
console.log(gpaAverage);


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter((word) => { return word.length < 6; });
console.log(shortWords);

const myArray = [84, 15, 95, 56];
const luckyNumber = 95;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex);

const students = [
    { last: 'Andrus', first: 'Aaron' },
    { last: 'Masa', first: 'Manny' },
    { last: 'Tanda', first: 'Tamanda' }
];


let container = document.querySelector('#studentContainer');
students.forEach((item) => {
    let name = document.createElement('div');
    name.className = "format";

    let html = `
     <span>${item.first}</span>
     <span>${item.last}</span>
     <hr>
    `;
    name.innerHTML = html;
    container.appendChild(name);
});
