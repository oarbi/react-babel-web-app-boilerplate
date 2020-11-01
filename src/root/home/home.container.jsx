import { connect } from 'react-redux';

import { fetchUser } from '#/common/actions';

import Home from './home.component';

const mapStateToProps = (state) => ({
  user: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => {
    dispatch(fetchUser());
  },
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
