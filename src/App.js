import { Box, colors, Container, Link, makeStyles } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import FullPage from "./FullPage";
import Header from "./Header";
import { getEquation } from "./helpers/firestore";
import Hero from "./Hero";
import MathInput from "./MathInput";
import MathOutput from "./MathOutput";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
  },
  support: {
    fontFamily: "Poppins",
    color: colors.blue[500],
  },
});

const getEquationLocal = () => {
  getEquation("xphHHPVevpAQ9ur0ONnu").then(console.log);
};

function App() {
  const styles = useStyles();
  const [mathRaw, setMathRaw] = useState("");

  getEquationLocal();

  return (
    <FullPage>
      <Header></Header>
      <Container maxWidth="md" className={styles.content}>
        <Box display="flex" flexDirection="column" flex={1}>
          <Hero></Hero>
          <MathInput value={mathRaw} onChange={setMathRaw}></MathInput>
          <MathOutput raw={mathRaw}></MathOutput>
        </Box>
        <Box display="flex" justifyContent="center" padding={1}>
          <Link
            textAlign="center"
            href="https://katex.org/docs/supported.html"
            target="_blank"
            className={styles.support}
          >
            Supported KaTeX commands
          </Link>
        </Box>
      </Container>
    </FullPage>
  );
}

export default App;
