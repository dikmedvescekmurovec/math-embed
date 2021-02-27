import { Box, Link, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";

interface MathInputProps {
  value: string;
  onChange: (text: string) => any;
}

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 16,
  },
  mathInput: {
    width: "100%",
    borderColor: "#329894",
    "&:hover, &:focus": {
      borderColor: "#329894",
    },
  },
  randomEquationButton: {
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  randomEquationText: {
    fontFamily: "Poppins",
    color: "#329894",
  },
});

const randomEquations = [
  "x^2 + y^2 = z^2",
  "\\left( {P + \\frac{{an^2 }}{{V^2 }}} \\right)\\left( {V - bn} \\right) = nRT",
  "\\frac{{P_1 V_1 }}{{n_1 T_1 }} = \\frac{{P_2 V_2 }}{{n_2 T_2 }}",
  "a \\Leftrightarrow 2\\pi a\\sum\\limits_{k =  - \\infty }^\\infty  {\\delta (\\omega  + 2\\pi k)} ,( - \\infty  < n < \\infty )",
  "P(A) = \\sum P(\\{ (e_1,\\dotsc,e_N) \\})  =  \\binom{N}{k} \\cdot p^kq^{N-k}",
];

const MathInput: React.FC<MathInputProps> = (props) => {
  const styles = useStyles();
  const [previousRandom, setPreviousRandom] = useState(-1);
  const getRandomEquation = () => {
    var rand = Math.round(Math.random() * (randomEquations.length - 1));
    if (rand === previousRandom) {
      rand = (rand + 1) % (randomEquations.length - 1);
    }

    setPreviousRandom(rand);
    return randomEquations[rand];
  };
  return (
    <Box className={styles.wrapper}>
      <TextField
        label="Math Input"
        title="Math Input"
        aria-label="Input Math in the form of TeX"
        multiline
        variant="outlined"
        className={styles.mathInput}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      ></TextField>
      <Box className={styles.randomEquationButton}>
        <Link
          onClick={() => props.onChange(getRandomEquation())}
          className={styles.randomEquationText}
        >
          Try out a random equation.
        </Link>
      </Box>
    </Box>
  );
};

export default MathInput;
