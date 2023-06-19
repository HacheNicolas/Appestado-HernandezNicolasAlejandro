import { eventsTypes } from '../types';

const { SELECT_EVENT } = eventsTypes;

export const selectEvents = (id) => ({
  type: SELECT_EVENT,
  id: id,
});
