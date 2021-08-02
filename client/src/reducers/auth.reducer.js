const authReducer = (state, action) => {
  if (state === undefined) {
    return {
      user: [],
      loading: true,
      error: null,
    };
  }
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        user: [],
        loading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        user: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state.bookList;
  }
};
