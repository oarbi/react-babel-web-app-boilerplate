const initialState = {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return { ...state, ...action.data };
    default:
      return state;
  }
}
