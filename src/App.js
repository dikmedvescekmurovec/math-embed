import { Container, makeStyles } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import FullPage from "./FullPage";
import Header from "./Header";
import Hero from "./Hero";
import MathInput from "./MathInput";
import MathOutput from "./MathOutput";
import { getEquation } from './helpers/firestore';

const useStyles = makeStyles({
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100%",
  },
});

const getEquationLocal = () => {
  getEquation('xphHHPVevpAQ9ur0ONnu')
    .then(console.log);
}

function App() {
  const styles = useStyles();
  const [mathRaw, setMathRaw] = useState("");

  getEquationLocal();

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
