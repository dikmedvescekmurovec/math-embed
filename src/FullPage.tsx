import { Box, makeStyles } from "@material-ui/core";
import React from "react";

interface FullPageProps {}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
});

const FullPage: React.FC<FullPageProps> = (props) => {
  const styles = useStyles();
  return <Box className={styles.root}>{props.children}</Box>;
};

export default FullPage;
