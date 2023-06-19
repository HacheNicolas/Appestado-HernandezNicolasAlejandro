import { EVENTS } from '../../constants';
import { eventsTypes } from '../types';

const { SELECT_EVENT } = eventsTypes;

const initialState = {
  data: EVENTS,
  selected: null,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_EVENT:
      return {
        ...state,
        selected: state.data.find((event) => event.id === action.id),
      };
    default:
      return state;
  }
};

export default eventsReducer;
