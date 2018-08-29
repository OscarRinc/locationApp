import { createStore, applyMiddleware } from 'redux'
import reducers from './Reducers'
import { logger, catchError } from './Middleware/login'

const store = createStore(
  reducers,
  applyMiddleware(logger)
)

export default store;
