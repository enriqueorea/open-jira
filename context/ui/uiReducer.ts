import { UIState } from "./UIProvider";

type UIAction =
  | { type: "OPEN_SIDEBAR" }
  | { type: "CLOSE_SIDEBAR" }
  | { type: "[New Entry] Adding - Entry"; payload: boolean };

export const UIReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: true,
      };
    case "CLOSE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: false,
      };

    case "[New Entry] Adding - Entry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    default:
      return state;
  }
};
