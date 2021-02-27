import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface HeaderProps {}

const useStyles = makeStyles({
  background: {
    minHeight: 50,
    padding: 16,
    backgroundColor: "#329894",
  },
  pageTitle: {
    color: "#FFFFFF",
    fontSize: 48,
    fontFamily: "Poppins",
  },
});
const Header: React.FC<HeaderProps> = (props) => {
  const styles = useStyles();

  return (
    <Box className={styles.background}>
      <Container maxWidth="md">
        <Typography variant="h1" className={styles.pageTitle}>
          Math Embed
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
