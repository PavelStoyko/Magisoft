import {
  ADD_NOTE,
  FETCH_NOTES,
  REMOVE_NOTE,
  SHOW_LOADER,
  TOGGLE_COMPLETED_NOTE
} from "../types";

const handlers = {
  [SHOW_LOADER]: state => ({ ...state, loading: true }),
  [ADD_NOTE]: (state, { payload }) => ({
    ...state,
    notes: [...state.notes, payload]
  }),
  [FETCH_NOTES]: (state, { payload }) => ({
    ...state,
    notes: payload || [],
    loading: false
  }),
  [REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter(note => note.id !== payload)
  }),
  [TOGGLE_COMPLETED_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.map(note => {
      if (note.id === payload) {
        return { ...note, completed: !note.completed };
      } else {
        return note;
      }
    })
  }),
  DEFAULT: state => state
};

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
