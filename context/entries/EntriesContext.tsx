import { createContext } from "react";
import { Entry } from "../../interfaces";

interface IContext {
  entries: Entry[];
  addNewEntry: (value: string) => void;
}

export const EntriesContext = createContext({} as IContext);
