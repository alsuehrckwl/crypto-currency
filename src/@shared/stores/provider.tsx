import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { createStore } from ".";
import { TStore } from "./createStore";

export const Context = React.createContext<TStore | null>(null);

export const Provider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore);

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
