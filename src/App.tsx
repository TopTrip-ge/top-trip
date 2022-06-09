import { FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuthState, useDocument } from "./firebase";
import { useMemo } from "react";

export const App: FC = () => {
  const pathSegments = useMemo(() => ["S7fdT07MVkyBKOO2JvY2"], []);
  const { value, isLoading, error } = useDocument("test-collection", [
    "S7fdT07MVkyBKOO2JvY2",
  ]);
  // const test = useAuthState();
  // console.log(value?.data());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
