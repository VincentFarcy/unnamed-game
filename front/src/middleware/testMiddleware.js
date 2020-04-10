// == Middleware
const demoMiddleware = (store) => (next) => (action) => {
  console.log('demoState :', store.getState());
  console.log('demoMiddleware: ', action);
  next(action);
};

// == Export
export default demoMiddleware;
