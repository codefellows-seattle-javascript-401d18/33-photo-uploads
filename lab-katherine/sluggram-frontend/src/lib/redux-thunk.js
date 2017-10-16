
export default store => next => action => {
  console.log('thunk', action);
  return typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
};
