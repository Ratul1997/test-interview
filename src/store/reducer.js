const initialState = {
  bookMarks: [],
  uid: null,
};
const addNewNews = (prevState, id) => {
  prevState.push(id);
  return [...prevState];
};
const removeNews = (prevState, id) => {
  const index = prevState.findIndex(i => i === id);
  if (index > -1) prevState.splice(index, 1);

  return [...prevState];
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Login':
      return {...state, uid: action.id};
    case 'ADD_BOOKMARK':
      return {...state, bookMarks: addNewNews(state.bookMarks, action.id)};
    case 'REMOVE_BOOKMARK':
      return {...state, bookMarks: removeNews(state.bookMarks, action.id)};
    default:
      return {...state};
  }
};

export default userReducer;
