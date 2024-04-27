function add(){
    var input = document.getElementById("inputs");
    if (document.getElementById("inputs").value){
        var input = document.getElementById("inputs");
        var list = document.getElementById("ul-list");
        var listElement = document.createElement("li");
        var listText = document.createTextNode(input.value);
        listElement.appendChild(listText);
        list.appendChild(listElement);
        console.log(list);
    
    
        // *****************BUTTON EDIT WORK START*************************************
        var buttonEdit = document.createElement("button");
        var deleteTextBtn = document.createTextNode("Edit");
        buttonEdit.appendChild(deleteTextBtn);
        listElement.appendChild(buttonEdit);
        buttonEdit.setAttribute("onclick","edit(this)")
        buttonEdit.className = "edit-btn"
        // *****************BUTTON EDIT WORK END***************************************
    
        // *****************BUTTON DELETE WORK START*************************************
        var buttonDelete = document.createElement("button");
        var deleteTextBtn = document.createTextNode("Delete");
        buttonDelete.appendChild(deleteTextBtn);
        listElement.appendChild(buttonDelete);
        buttonDelete.setAttribute("onclick","deletee(this)")
        buttonDelete.className = "delete-btn"    
        // *****************BUTTON DELETE WORK END***************************************
    
    
        input.value = " ";
    }else{
        alert("Please full fill your Task");
    }
}

function deleteAll() {
    var list = document.getElementById("ul-list");
    list.remove();
}

function deletee(s){
    console.log(s.parentNode.remove())
}

function edit(f) {
    var editValue = prompt("Enter your currection");
    f.parentNode.firstChild.nodeValue = editValue;
}