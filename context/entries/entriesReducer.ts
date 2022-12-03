import { Entry } from "../../interfaces";
import { EntriesState } from "./EntriesProvider";

type EntriesAction = { type: "[New Entry] Add-Entry"; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesAction
): EntriesState => {
  switch (action.type) {
    case "[New Entry] Add-Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    default:
      return state;
  }
};
