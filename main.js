let addListItemButton = document.getElementById("addListItem");
let listItemContainer = document.getElementById("addToDo");
let inputField = document.getElementById("inputField");

addListItemButton.addEventListener("click", function(){
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value; 
    listItemContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    }) 
    paragraph.addEventListener("dblclick", function(){
        listItemContainer.removeChild(paragraph);
    }) 
})