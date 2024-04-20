function addItem(description) {
  let list = getItens();
  if (!list || list.length === 0) list = [];

  let item = {
    description,
    id: crypto.randomUUID(),
    done: false,
  };

  list.push(item);
  saveList(list);
}

function getItens() {
  let list = JSON.parse(localStorage.getItem("list"));
  return list ?? [];
}

function updateItem(id, description, done) {
  let list = getItens();
  let itemIndex = list.findIndex((item) => item.id === id);
  list[itemIndex].description = description ?? list[itemIndex].description;
  list[itemIndex].done = done;
  saveList(list);
}

function deleteItem(id) {
  let list = getItens();
  list = list.filter((item) => item.id !== id);
  saveList(list);
}

function saveList(newlist) {
  localStorage.setItem("list", JSON.stringify(newlist));
}

export { addItem, getItens, updateItem, deleteItem };
