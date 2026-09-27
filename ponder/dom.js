const title = document.querySelector('h1');
// title.textContent = "10";
title.textContent = "Web Page Componenets";

let topics = document.querySelector('#topics');
// topics.style.fontWeight = "bold";


let options = ["html", "css", "js"];
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function () {
    let codeValue = selectElem.value;
    console.log(codeValue);
    options.forEach((option) => { document.getElementsByClassName(option)[0].style.border = "none"; });
    document.getElementsByClassName(codeValue)[0].style.border = "2px solid black";
});
