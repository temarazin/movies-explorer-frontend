const storage = {
  getItem: (item) => {
    return JSON.parse(localStorage.getItem(item));
  },
  setItem: (item, value) => {
    localStorage.setItem(item, JSON.stringify(value));
  }
}

export {storage};
