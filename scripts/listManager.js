import {
  getItens,
  addItem,
  deleteItem,
  updateItem,
} from "./database/dataManager.js";
import { itemList } from "./componets/itemList.js";
import { noContent } from "./componets/noContent.js";
import {
  alterInput,
  alterDeleteButton,
  alterEditButtom,
  onDoneTask,
} from "./changeComponents.js";

var listBox = document.getElementById("list-box");

window.addEventListener("load", function () {
  displayList();
});

function displayList() {
  listBox.innerHTML = "";
  let savedList = getItens();

  if (savedList && savedList.length > 0) {
    for (let item of savedList) {
      listBox.innerHTML += itemList(item);
    }
  } else listBox.innerHTML += noContent();
}

function onChangeNewItem() {
  let newItem = document.getElementById("newItem");

  if (newItem.value && newItem.value.length > 0)
    document.getElementById("addItem").disabled = false;
  else document.getElementById("addItem").disabled = true;
}

function saveNewItem() {
  var newItem = document.getElementById("newItem");
  if (newItem.value.length > 0) {
    addItem(newItem.value);
    displayList();

    newItem.value = "";
    document.getElementById("addItem").disabled = true;
  } else alert("Insira um valorválido");
}

function removeItem(itemId) {
  deleteItem(itemId);
  displayList();
}

function editItem(itemId) {
  alterInput(itemId);
  alterDeleteButton(closeItemEdit, itemId);
  alterEditButtom(saveItemChages, itemId);
  document.getElementById("checkbox_" + itemId).disabled = true;
}

function saveItemChages(itemId) {
  let valueInput = document.getElementById("input_" + itemId);

  if (valueInput.value && valueInput.value.length > 0)
    updateItem(itemId, valueInput.value);
  else alert("valor inválido");

  displayList();
}

function closeItemEdit() {
  displayList();
}

function checkItem(itemId) {
  onDoneTask(updateItem, itemId);
}

export { onChangeNewItem, saveNewItem, editItem, removeItem, checkItem };
