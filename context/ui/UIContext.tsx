import { createContext } from "react";

interface IContext {
  isSidebarOpen: boolean;
  isAddingEntry: boolean;
  setIsAddingEntry: (value: boolean) => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const UIContext = createContext({} as IContext);
