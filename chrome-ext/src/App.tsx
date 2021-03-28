import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import initFirebase from "./firebase";
import Header from "./Header";
import MathInput from "./MathInput";
import MathOutput from "./MathOutput";

function App() {
  useEffect(() => {
    initFirebase();
  }, []);
  const [equation, setEquation] = useState("");
  return (
    <Box width="450px" height="300px">
      <Header></Header>
      <Box paddingLeft="16px" paddingRight="16px">
        <MathInput value={equation} onChange={setEquation}></MathInput>
        <MathOutput raw={equation}></MathOutput>
      </Box>
    </Box>
  );
}

export default App;
