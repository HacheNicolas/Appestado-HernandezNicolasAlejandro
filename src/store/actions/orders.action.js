import { ordersTypes } from '../types';

const { SELECT_ORDERS_TYPE, FILTER_ORDERS, SELECT_ORDER } = ordersTypes;

export const selectOrdersType = (name) => ({
  type: SELECT_ORDERS_TYPE,
  orderType: name,
});

export const filterOrders = (name) => ({
  type: FILTER_ORDERS,
  orderType: name,
});

export const selectOrder = (id) => ({
  type: SELECT_ORDER,
  id: id,
});
