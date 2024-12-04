let tmpedit;
let newInput = document.getElementById("new-todo-item-title");
let editInput = document.getElementById("edit-todo-item-title");

function add() {
    let marker = document.createElement("li");
    let span = document.createElement("span");
    let butdel = document.createElement("button");
    let butedit = document.createElement("button");

    let conteneur = document.getElementById("todo-list");
    span.innerText = newInput.value;
    butdel.innerText = "Delete"; butdel.addEventListener("click", ()=>marker.remove());
    butedit.innerText = "Edit"; butedit.addEventListener("click", ()=>startedit(span));
    marker.append(span); marker.append(butdel); marker.append(butedit);
    conteneur.append(marker);
    newInput.value = "";
}

function startedit(tmpspan){
    reset();
    document.getElementById("new-item").hidden=true;
    document.getElementById("edit-item").hidden=false;
    tmpedit = tmpspan;
}

function confirm(){
    tmpedit.innerText = editInput.value;
    reset();
}

function cancel(){
    reset();
}

function reset(){
    editInput.value = "";
    tmpedit = null;

    document.getElementById("new-item").hidden=false;
    document.getElementById("edit-item").hidden=true;
}

function isenterconfirm({key}){
    key === "Enter" && confirm()
}

function isenteradd({key}){
    key === "Enter" && add()
}

function delAll(){
    let conteneur = document.getElementById("todo-list")
    conteneur.innerHTML = "";
    reset();
}

document.getElementById("new-todo-item-add").addEventListener("click", add);
document.getElementById("edit-todo-item-cancel").addEventListener("click", cancel);
document.getElementById("edit-todo-item-confirm").addEventListener("click", confirm);
document.getElementById("delete-all").addEventListener("click", delAll);

document.getElementById("new-todo-item-title").addEventListener("keypress", isenteradd);
document.getElementById("edit-todo-item-title").addEventListener("keypress", isenterconfirm);