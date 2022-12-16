import { checkLength, appendAllChildren, removeChildren, removeByIndex } from "./util.js";
window.addEventListener("DOMContentLoaded", () => {
const taskList = document.querySelector(".tasks");
const enter = document.querySelector("#inputBtn");
const textBox = document.getElementById("taskIn");
const pLvl = document.getElementById("pLvl");

let highArr = [];
let midArr = [];
let lowArr = [];

var black = "#010d01";
var green = "#4ff141";
var red = "#c95555";
var yellow = "#eeca19";

function checkStyle() {
    const style = pLvl.style;
    style.backgroundColor = black;
    if(pLvl.selectedIndex === 0) {
        style.borderColor = red;
        style.color = red;
    }
    if(pLvl.selectedIndex === 1) {
        style.borderColor = yellow;
        style.color = yellow;
    }
    if(pLvl.selectedIndex === 2) {
        style.borderColor = green;
        style.color = green;
    }
}


checkStyle();

pLvl.addEventListener("click", function() {
    checkStyle()
})

pLvl.addEventListener("keyup", function() {
    checkStyle()
})

enter.addEventListener("click", function() {
    let fullArr = [];
    if(checkLength(textBox) === true) {

        taskList.innerHTML = "";
        const li = document.createElement("li");
        
        li.innerText = textBox.value;

        if(pLvl.value === "High") {
            li.classList.add("High");
            highArr.push(li);
        }
        if(pLvl.value === "Medium") {
            li.classList.add("Medium");
            midArr.push(li);
        }
        if(pLvl.value === "Low") {
            li.classList.add("Low");
            lowArr.push(li);
        }

        fullArr = fullArr.concat(highArr, midArr, lowArr);
        appendAllChildren(taskList, fullArr);

        console.log(fullArr);

        textBox.value = "";
    }
});

taskList.addEventListener("click", function(e) {
    const target = e.target;
    const parent = target.parentElement;

    if(target.tagName === "LI") {
        target.classList.toggle("done");
    } 
    else if(target.className === "delBtn") {
        if(parent.classList.contains("High")) {
            removeByIndex(highArr, parent);
        }
        else if(parent.classList.contains("Medium")) {
            removeByIndex(midArr, parent);
        }
        else {
            removeByIndex(lowArr, parent);
        }
        parent.remove();
    } 
    else if(target.className === "editBtn" && !checkLength(textBox)) {
        if(parent.classList.contains("High")) {
            removeByIndex(highArr, parent);
            pLvl.value = "High";
        }
        else if(parent.classList.contains("Medium")) {
            removeByIndex(midArr, parent);
            pLvl.value = "Medium";
        }
        else {
            removeByIndex(lowArr, parent);
            pLvl.value = "Low";
        }
        textBox.value = parent.childNodes[0].nodeValue;
        checkStyle();
        parent.remove();
    }
}, false);
});