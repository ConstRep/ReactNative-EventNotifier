import StackNav from '../navigator';

const initialState = {
  index: 0,
  routes: [{ key: 'Init', routeName: 'Main' }]
};

export default (state = initialState, action) =>
  StackNav.router.getStateForAction(action, state);
