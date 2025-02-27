import React from "react";
import { GridProvider } from "./context/GridContext";
import Grid from "./components/grid";

function App() {
  return (
    <GridProvider>
      <div>
        <Grid />
      </div>
    </GridProvider>
  );
}

export default App;
