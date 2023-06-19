import { STOCK } from '../../constants';
import { stockTypes } from '../types';

const { SELECT_STOCK } = stockTypes;

const initialState = {
  data: STOCK,
  selected: null,
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_STOCK:
      return {
        ...state,
        selected: state.data.find((element) => element.id === action.id),
      };
    default:
      return state;
  }
};

export default stockReducer;
