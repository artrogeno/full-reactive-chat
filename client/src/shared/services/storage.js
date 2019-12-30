export const getItem = key => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key))
  }
  return null
}

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const removeItem = key => {
  localStorage.removeItem(key)
}

export const clear = () => {
  localStorage.clear()
}
