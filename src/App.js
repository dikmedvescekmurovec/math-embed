import {
  Box,
  Container,
  createMuiTheme,
  Link,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import initFirebase from "./firebase";
import FullPage from "./FullPage";
import Header from "./Header";
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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#329894",
    },
  },
});

function App() {
  const styles = useStyles();
  const [mathRaw, setMathRaw] = useState("");

  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <FullPage>
      <ThemeProvider theme={theme}>
        <Box>
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
                href="https://katex.org/docs/supported.html"
                target="_blank"
                className={styles.support}
              >
                Supported KaTeX commands
              </Link>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </FullPage>
  );
}

export default App;
