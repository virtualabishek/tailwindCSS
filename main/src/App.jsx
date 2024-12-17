import React from "react";
import First from "./components/First";
import Second from "./components/Second";

const App = () => {
  return (
    <>
      <First />
      <hr className="border-none outline-none h-0.5 m-auto bg-black" />
      <Second />
    </>
  );
};

export default App;
