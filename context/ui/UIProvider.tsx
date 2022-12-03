import { FC, useReducer } from "react";
import { UIContext, UIReducer } from "./";

interface IProps {
  children: React.ReactNode;
}

export interface UIState {
  isSidebarOpen: boolean;
  isAddingEntry: boolean;
}

export const UI_INITIAL_STATE: UIState = {
  isSidebarOpen: false,
  isAddingEntry: false,
};

export const UIProvider: FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSidebar = () => {
    dispatch({ type: "OPEN_SIDEBAR" });
  };

  const closeSidebar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };

  const setIsAddingEntry = (value: boolean) =>
    dispatch({ type: "[New Entry] Adding - Entry", payload: value });

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        setIsAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
