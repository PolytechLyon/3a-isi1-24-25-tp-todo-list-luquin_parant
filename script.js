function addNewItemToTodoList() {
    const input=document.getElementById("new-todo-item-title"),
    text=input.value,
    conteneur=document.getElementById("todo-list"),
    li=document.createElement("li"),
    span=document.createElement("span"),
    delButton=document.createElement("button"),
    editButton=document.createElement("button");

    span.innerText = text,
    delButton.innerText = "Delete",
    editButton.innerText = "Edit",
    delButton.addEventListener("click", () => li.remove()),
    editButton.addEventListener("click", () => startEditItem(span)),
    li.append(span),
    li.append(delButton),
    li.append(editButton),
    conteneur.append(li),

    input.value = "";
}

let valueInputDuringEdit;

function startEditItem(text) {
    document.getElementById("edit-todo-item-title").value = text.innerText,
    document.getElementById("edit-item").hidden = false,
    document.getElementById("new-item").hidden = true,
    valueInputDuringEdit = text;
}

function reset() {
    document.getElementById("edit-todo-item-title").value = "",
    valueInputDuringEdit = null,
    document.getElementById("edit-item").hidden = true,
    document.getElementById("new-item").hidden = false;
}

function cancelEditItem() {
    reset()
}

function confirmEditItem() {
    valueInputDuringEdit.innerText = document.getElementById("edit-todo-item-title").value,
    reset();
}

function newOnEnter(charEntered) {
    charEntered.which === 13 && addNewItemToTodoList()
}

function editOnEnter(charEntered) {
    charEntered.which === 13 && confirmEditItem()
}

function deleteAll() {
    const conteneur = document.getElementById("todo-list");

    conteneur.innerHTML = "";
    reset();
}

document.getElementById("new-todo-item-add").addEventListener("click", addNewItemToTodoList);
document.getElementById("edit-todo-item-confirm").addEventListener("click", confirmEditItem);
document.getElementById("edit-todo-item-cancel").addEventListener("click", cancelEditItem);

document.getElementById("new-todo-item-title").addEventListener("keypress", newOnEnter);
document.getElementById("edit-todo-item-title").addEventListener("keypress", editOnEnter);

document.getElementById("todo-list-delete-all").addEventListener("click", deleteAll);