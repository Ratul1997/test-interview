export const userLogin = id => ({
  type: 'Login',
  id: id,
});

export const addBookMark = id => ({
  type: 'ADD_BOOKMARK',
  id: id,
});
export const removeBookMark = id => ({
  type: 'REMOVE_BOOKMARK',
  id: id,
});
