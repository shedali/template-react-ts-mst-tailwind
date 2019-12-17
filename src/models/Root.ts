import { useContext, createContext } from "react";
import { types, Instance, onSnapshot } from "mobx-state-tree";

const Task = types.model({
  description: types.string
})


const App = types.model({
  
});

export const rootStore = App.create({
  
});

onSnapshot(rootStore, snapshot => console.log("Snapshot: ", snapshot));

export type RootInstance = Instance<typeof App>;

const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store as RootInstance;
}