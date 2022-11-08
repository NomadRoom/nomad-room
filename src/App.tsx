import React from "react";
import "./app.css";
import { RoutesMain } from "./routes/routes";

import { StyledGlobal } from "./styles/global";

const App = () => {
  return (
    <>
      <RoutesMain />
      <StyledGlobal />
    </>
  );
};

export default App;
