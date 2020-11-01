import { getUser } from '#/common/services';

export function fetchUser() {
  return (dispatch) => {
    getUser().then((response) => dispatch({ type: 'FETCH_USER', data: { currentUser: response } }));
  };
}
