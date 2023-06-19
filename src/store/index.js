import { createStore, combineReducers } from 'redux';
import { eventsReducer, ordersReducer, stockReducer } from './reducers/index';

const rootReducer = combineReducers({
  events: eventsReducer,
  orders: ordersReducer,
  stock: stockReducer,
});

export default createStore(rootReducer);
