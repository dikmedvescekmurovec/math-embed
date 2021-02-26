import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Tex } from "react-tex";

interface MathOutputProps {
  raw: string;
}

const useStyles = makeStyles({
  wrapper: {
    paddingTop: 16,
  },
  label: {
    fontWeight: 600,
    fontFamily: "Poppins",
  },
  equationWrapper: {
    padding: 16,
  },
  button: {
    fontFamily: "Poppins",
  },
});

const MathOutput: React.FC<MathOutputProps> = (props) => {
  const styles = useStyles();

  return (
    <Box className={styles.wrapper}>
      <Typography className={styles.label}>Your Equation: </Typography>
      <Box className={styles.equationWrapper}>
        <Tex texContent={props.raw} classNamem={styles.label}></Tex>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button className={styles.button}>Get embeddable link</Button>
      </Box>
    </Box>
  );
};

export default MathOutput;
