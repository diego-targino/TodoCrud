import { getItens, addItem, deleteItem, updateItem } from "./database/dataManager.js"
import { itemList } from "./componets/itemList.js"
import { noContent } from "./componets/noContent.js"

var listBox = document.getElementById("list-box");

window.addEventListener('load', function() {
	displayList()
});

function displayList() {
	listBox.innerHTML = "";
	let savedList = getItens();

	if (savedList && savedList.length > 0) {
		for (let item of savedList) {
			listBox.innerHTML += itemList(item);
		}
	}
	else {
		listBox.innerHTML += noContent();
	}
}

function onChangeNewItem() {
	let newItem = document.getElementById("newItem");
	if (newItem.value && newItem.value.length > 0)
		document.getElementById("addItem").disabled = false;
	else
		document.getElementById("addItem").disabled = true;
}

function saveNewItem() {
	var newItem = document.getElementById("newItem");
	if (newItem.value.length > 0) {
		addItem(newItem.value);
		displayList();
	}
	else
		alert("Insira um valorválido");
}

function removeItem(itemId) {
	deleteItem(itemId);
	displayList();
}

function editItem(itemId) {
	let valueInput = document.getElementById("input_" + itemId);
	alterInput(valueInput);

	let deleteButton = document.getElementById("remove_" + itemId);
	alterDeleteButton(deleteButton);

	let editionButton = document.getElementById("edit_" + itemId);
	alterEditButtom(editionButton, itemId);
	document.getElementById("checkbox_" + itemId).disabled = true;

	valueInput.onkeyup = function() {
		if (valueInput.value && valueInput.value.length > 0)
			editionButton.disabled = false;
		else
			editionButton.disabled = true;
	}
	if (newItem.value && newItem.value.length > 0)
		document.getElementById("addItem").disabled = false;
	else
		document.getElementById("addItem").disabled = true;
}

function alterInput(inputElement) {
	inputElement.disabled = false;
	inputElement.classList.replace("disabled-description", "description");
}

function alterEditButtom(editButtonElement, itemId) {
	editButtonElement.textContent = "save";
	editButtonElement.onclick = () => saveItemChages(itemId)
	editButtonElement.classList.replace("edit-button", "edit-button-editable");
}

function alterDeleteButton(deleteButtonElement) {
	deleteButtonElement.textContent = "fechar";
	deleteButtonElement.onclick = closeItemEdit;
	deleteButtonElement.classList.replace("remove-button", "remove-button-editable");
}

function saveItemChages(itemId) {
	let valueInput = document.getElementById("input_" + itemId);
	if (valueInput.value && valueInput.value.length > 0)
		updateItem(itemId, valueInput.value);
	else
		alert("valor inválido");

	displayList();
}

function closeItemEdit() {
	displayList();
}

function onDoneTask(itemId) {
	let checkbox = document.getElementById("checkbox_" + itemId);
	let valueInput = document.getElementById("input_" + itemId);
	let editionButton = document.getElementById("edit_" + itemId);
	if (checkbox.checked) {
		valueInput.style.textDecoration = 'line-through';
		editionButton.style.display = 'none';
		updateItem(itemId, null, true);
	}
	else {
		valueInput.style.textDecoration = 'none';
		editionButton.style.display = 'block';
		updateItem(itemId, null, false);
	}
}
export { onChangeNewItem, saveNewItem, editItem, removeItem, onDoneTask }
