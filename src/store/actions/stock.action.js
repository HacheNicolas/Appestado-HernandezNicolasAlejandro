import { stockTypes } from '../types';

const { SELECT_STOCK } = stockTypes;

export const selectStock = (id) => ({
  type: SELECT_STOCK,
  id: id,
});
