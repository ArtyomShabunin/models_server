
const initialState = {
  books: [
    { id: 1,
      title: 'Книжка 1',
      author: 'Писатель 1'},
    { id: 2,
      title: 'Книжка 2',
      author: 'Писатель 2'
     }
  ]
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      }
    default:
      return state
  }
}

export default reducer
