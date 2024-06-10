const replaceItemById = (array, newItem) => {
  const index = array.findIndex(item => item.id === newItem.id);

  if (index !== -1) {
    array.splice(index, 1, newItem);
  }
}

export default replaceItemById;