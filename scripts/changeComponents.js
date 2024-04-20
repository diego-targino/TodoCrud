function alterInputAction(inputElement) {
  let editButtonElement = document.getElementById("edit_" + itemId);

  if (inputElement.value && inputElement.value.length > 0)
    editButtonElement.disabled = false;
  else editButtonElement.disabled = true;
}

function alterInput(itemId) {
  let inputElement = document.getElementById("input_" + itemId);

  inputElement.disabled = false;
  inputElement.classList.replace("disabled-description", "description");

  inputElement.onkeyup = () => alterInputAction(inputElement);

  if (newItem.value && newItem.value.length > 0)
    document.getElementById("addItem").disabled = false;
  else document.getElementById("addItem").disabled = true;
}

function alterDeleteButton(closeItemEdit, itemId) {
  let deleteButtonIcon = document.getElementById("remove_icon_" + itemId);
  deleteButtonIcon.classList.replace("fa-trash", "fa-xmark");

  let deleteButtonElement = document.getElementById("remove_" + itemId);
  deleteButtonElement.onclick = closeItemEdit;
  deleteButtonElement.classList.replace(
    "remove-button",
    "remove-button-editable"
  );
}

function alterEditButtom(saveItemChages, itemId) {
  let editButtonIcon = document.getElementById("edit_icon_" + itemId);
  editButtonIcon.classList.replace("fa-pencil", "fa-check");
  editButtonIcon.style.color = "#26ed49";

  let editButtonElement = document.getElementById("edit_" + itemId);
  editButtonElement.onclick = () => saveItemChages(itemId);
  editButtonElement.classList.replace("edit-button", "edit-button-editable");
}

function onDoneTask(updateItem, itemId) {
  let checkbox = document.getElementById("checkbox_" + itemId);
  let valueInput = document.getElementById("input_" + itemId);
  let editionButton = document.getElementById("edit_" + itemId);
  if (checkbox.checked) {
    valueInput.style.textDecoration = "line-through";
    editionButton.style.display = "none";
    updateItem(itemId, null, true);
  } else {
    valueInput.style.textDecoration = "none";
    editionButton.style.display = "block";
    updateItem(itemId, null, false);
  }
}
export { alterInput, alterDeleteButton, alterEditButtom, onDoneTask };
