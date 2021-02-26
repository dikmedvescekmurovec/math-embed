import { Box, Button, Link, makeStyles, Typography } from "@material-ui/core";
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
  },
  equationWrapper: {
    padding: 16,
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
      <Button>Embed JS</Button>
      <Button>Embed HTML</Button>
      <Box>
        <Link href="https://katex.org/docs/supported.html" target="_blank">
          Supported LaTeX commands
        </Link>
      </Box>
    </Box>
  );
};

export default MathOutput;
