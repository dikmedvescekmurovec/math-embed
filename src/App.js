import {
  Box,
  Container,
  createMuiTheme,
  Link,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import FullPage from "./FullPage";
import Header from "./Header";
import { getEquation } from "./helpers/firestore";
import Hero from "./Hero";
import MathInput from "./MathInput";
import MathOutput from "./MathOutput";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
  },
  support: {
    fontFamily: "Poppins",
    color: "#329894",
  },
  equationInputOutput: {
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column",
    },
  },
}));

const getEquationLocal = () => {
  getEquation("xphHHPVevpAQ9ur0ONnu").then(console.log);
};

function App() {
  const styles = useStyles();
  const [mathRaw, setMathRaw] = useState("");

  getEquationLocal();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#329894",
      },
    },
  });

  return (
    <FullPage>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Container maxWidth="md" className={styles.content}>
          <Box display="flex" flexDirection="column" flex={1}>
            <Hero></Hero>
            <Box className={styles.equationInputOutput}>
              <MathInput value={mathRaw} onChange={setMathRaw}></MathInput>
              <MathOutput raw={mathRaw}></MathOutput>
            </Box>
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
      </ThemeProvider>
    </FullPage>
  );
}

export default App;
