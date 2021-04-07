import { Box, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import initFirebase from './firebase';
import Header from './Header';
import MathInput from './MathInput';
import MathOutput from './MathOutput';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#329894',
    },
  },
});

function App() {
  useEffect(() => {
    initFirebase();
  }, []);
  const [equation, setEquation] = useState('');
  return (
    <ThemeProvider theme={theme}>
      <Box width='450px' height='300px'>
        <Header></Header>
        <Box paddingLeft='16px' paddingRight='16px'>
          <MathInput value={equation} onChange={setEquation}></MathInput>
          <MathOutput raw={equation}></MathOutput>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
