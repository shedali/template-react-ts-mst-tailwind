import React from "react";
import { Provider, rootStore } from "./models/Root";
import { observer } from "mobx-react-lite";
import { useMst } from "./models/Root";
import GitHubButton from "react-github-btn";

import logo from "./assets/mstlogo.png";
interface Props {}
const Counter: React.FC<Props> = observer(() => {
  const {  } = useMst();
  return (
    <div className="mt-20 flex flex-col items-center">
      what
    </div>
  );
});

const App: React.FC = () => {
  return (
    <Provider value={rootStore}>
      <div className="container mx-auto">
        <Counter/>
      </div>
    </Provider>
  );
};

export default App;
