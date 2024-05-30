const firebaseConfig = {
    apiKey: "AIzaSyDex2Md3k0v5rKXe-RmwY6dHJliAjAuJos",
    authDomain: "saif-all-project.firebaseapp.com",
    databaseURL: "https://saif-all-project-default-rtdb.firebaseio.com",
    projectId: "saif-all-project",
    storageBucket: "saif-all-project.appspot.com",
    messagingSenderId: "756915273549",
    appId: "1:756915273549:web:5e82540024069aced60104"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);



function add(){
    var input = document.getElementById("inputs");

    var key = Date.now().toString(31);

    var todos = {
        value: input.value,
        key,
    };

    firebase.database().ref("todos/" + key).set(todos);

    input.value = "";
}

    firebase.database().ref("todos").on("child_added", function (data){
        
    if (document.getElementById("inputs").value){
        var input = document.getElementById("inputs");
        var list = document.getElementById("ul-list");
        var listElement = document.createElement("li");
        var listText = document.createTextNode(data.val().value);
        listElement.appendChild(listText);
        list.appendChild(listElement);
        console.log(list);
    
    
        //BUTTON EDIT WORK START
        var buttonEdit = document.createElement("button");
        var deleteTextBtn = document.createTextNode("Edit");
        buttonEdit.appendChild(deleteTextBtn);
        listElement.appendChild(buttonEdit);
        buttonEdit.setAttribute("onclick","edit(this)")
        buttonEdit.setAttribute("id", data.val().key);
        buttonEdit.className = "edit-btn"
        //BUTTON EDIT WORK END
    
        //BUTTON DELETE WORK START
        var buttonDelete = document.createElement("button");
        var deleteTextBtn = document.createTextNode("Delete");
        buttonDelete.appendChild(deleteTextBtn);
        // listElement.appendChild(buttonDelete);
        buttonDelete.setAttribute("onclick","deletee(this)")
        buttonDelete.setAttribute("id", data.val().key)
        buttonDelete.className = "delete-btn";  
        
        var list = document.getElementById("ul-list");

        listElement.appendChild(buttonDelete);

        list.appendChild(listElement);
        //BUTTON DELETE WORK END
    
    
        // input.value = " ";
    }
    // else{
    //     alert("Please full fill your Task");
    // }
})


function deleteAll() {
    firebase.database().ref("todos").remove()
    var list = document.getElementById("ul-list");
    list.innerHTML = " ";
}

function deletee(s){
    firebase.database().ref(`todos/${s.id}`).remove()
    s.parentNode.remove();
}

function edit(s) {
    var editValue = prompt(
        "Enter updated value",
        s.parentNode.firstChild.nodeValue
    );

    // var editValue = prompt("Enter your currection");
    firebase.database().ref(`todos/${s.id}`).set({key: s.id, value: editValue,});
    s.parentNode.firstChild.nodeValue = editValue;
}