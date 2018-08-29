export const logger = store => next => action => {
  switch (action.type) {
    case 'USER_DATA':
      next(action);
      console.log(store.getState());
      break;
    default:

  }
  console.groupEnd();
};
