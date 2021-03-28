import { Box, makeStyles, TextField } from "@material-ui/core";
import React from "react";

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
});

const MathInput: React.FC<MathInputProps> = (props) => {
  const styles = useStyles();

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
    </Box>
  );
};

export default MathInput;
