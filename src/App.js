import { Container, makeStyles } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import FullPage from "./FullPage";
import Header from "./Header";
import Hero from "./Hero";
import MathInput from "./MathInput";
import MathOutput from "./MathOutput";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100%",
  },
});

function App() {
  const styles = useStyles();
  const [mathRaw, setMathRaw] = useState("");
  return (
    <FullPage>
      <Header></Header>
      <Container maxWidth="lg" className={styles.content}>
        <Hero></Hero>
        <MathInput value={mathRaw} onChange={setMathRaw}></MathInput>
        <MathOutput raw={mathRaw}></MathOutput>
      </Container>
    </FullPage>
  );
}

export default App;
