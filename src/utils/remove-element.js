const removeById = (array, id) => {
  const index = array.findIndex((item) => item.id === id)

  if (index !== -1) {
    array.splice(index, 1)
  }
}

export default removeById
