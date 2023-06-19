import { ORDERS } from '../../constants';
import { ordersTypes } from '../types';

const { SELECT_ORDERS_TYPE, FILTER_ORDERS, SELECT_ORDER } = ordersTypes;

const initialState = {
  data: ORDERS,
  selectedType: null,
  filteredOrders: [],
  selected: null,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ORDERS_TYPE:
      return {
        ...state,
        selected: state.data.find((order) => order.orderType === action.orderType),
      };
    case FILTER_ORDERS:
      return {
        ...state,
        filteredOrders: state.data.filter((order) => order.orderType === action.orderType),
      };
    case SELECT_ORDER:
      return {
        ...state,
        selected: state.data.find((order) => order.id === action.id),
      };
    default:
      return state;
  }
};

export default ordersReducer;
