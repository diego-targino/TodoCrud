function itemList(item) {
  return `<div class="list-item">
		<div class="description-box"><input id="checkbox_${item.id}" type="checkbox" ${
    item.done ? "checked" : ""
  } onchange='window.onDoneTask("${item.id}")'>
				  <input style="text-decoration:${
            item.done ? "line-through" : "none"
          } " class="disabled-description" id="input_${
    item.id
  }" type="text" id="newItem" value="${item.description}" disabled></div>
			<div class="item-buttons">
				<button type="button" style="display: ${
          item.done ? "none" : "block"
        };" class="edit-button" id = "edit_${
    item.id
  }" onclick="window.editItem('${item.id}')"><i id="edit_icon_${
    item.id
  }" class="fa-solid fa-pencil"></i></button>
				<button type="button" class="remove-button" id = "remove_${
          item.id
        }" onclick="window.removeItem('${item.id}')"><i id="remove_icon_${
    item.id
  }" class="fa-solid fa-trash"></i></button>
			</div>
		</div>`;
}

export { itemList };
