import { checkLength } from "./util.js";
window.addEventListener("DOMContentLoaded", () => {
const taskList = document.querySelector(".tasks");
const enter = document.querySelector("#inputBtn");
const textBox = document.getElementById("taskIn");

enter.addEventListener("click", function() {
    if(checkLength(textBox) === true) {
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const editBtn = document.createElement("button");
        delBtn.classList.add("delBtn");
        delBtn.innerText = "Del";
        editBtn.classList.add("editBtn");
        editBtn.innerText = "Edit";
        li.innerText = textBox.value;
        taskList.appendChild(li);
        li.appendChild(delBtn);
        li.appendChild(editBtn);
        textBox.value = "";
    }
});

taskList.addEventListener("click", function(e) {
    const parent = e.target.parentElement;
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
    else if(e.target.className === "delBtn") {
        parent.remove();
    }
    else if(e.target.className === "editBtn" && !checkLength(textBox)) {
        textBox.value = parent.childNodes[0].nodeValue;
        parent.remove();
    }
}, false);

});