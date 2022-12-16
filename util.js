export {checkLength, appendAllChildren, removeChildren, removeByIndex};
//See if a string is not empty
function checkLength(str) {
    if(str.value.length > 0) return true;
}

//Loop through a given array and append them to an element
function appendAllChildren(elem, someArr) {
    for(let i = 0; i < someArr.length; i++) {
        const child1 = document.createElement("button");
        const child2 = document.createElement("button");
        child1.classList.add("delBtn");
        child1.textContent = "Del";
        child2.classList.add("editBtn");
        child2.textContent = "Edit";
        elem.appendChild(someArr[i]);
        if(someArr[i].childNodes.length === 1) {
            someArr[i].appendChild(child1);
            someArr[i].appendChild(child2);
        }
    }
}

//removing all children of a node
function removeChildren(node) {
    while(node.firstChild) {
        node.removeChild(node.lastChild);
    }
}

//remove index in an array

function removeByIndex(myArr, val) {
    const x = myArr.indexOf(val);
    const y = myArr.splice(x, 1);
}