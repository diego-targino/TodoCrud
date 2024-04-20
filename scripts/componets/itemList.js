function itemList(item) {
	return (
		`<div class="list-item">
		<input id="checkbox_${item.id}" type="checkbox" ${item.done ? "checked" : ""} onchange='window.onDoneTask("${item.id}")'>
		  <input class="disabled-description" id="input_${item.id}" type="text" id="newItem" value="${item.description}" disabled>
			<div class="item-buttons">
				<button style="display: ${item.done ? "none" : "block"};" class="edit-button" id = "edit_${item.id}" onclick="window.editItem('${item.id}')">edit</button>
				<button class="remove-button" id = "remove_${item.id}" onclick="window.removeItem('${item.id}')">delete</button>
			</div>
		</div>`
	);
}

export { itemList }