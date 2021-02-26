import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface HeroProps {}
const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    marginTop: 16,
  },
  bigText: {
    fontSize: 24,
    fontFamily: "Poppins",
  },
  smallText: {
    fontFamily: "Poppins",
  },
});
const Hero: React.FC<HeroProps> = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.wrapper}>
      <Typography className={styles.bigText}>
        Make your TeX math simply embeddable.
      </Typography>
      <Typography className={styles.smallText}>
        Input math equations using LaTeX and then simply embed it wherever you
        want.
      </Typography>
    </Box>
  );
};

export default Hero;
