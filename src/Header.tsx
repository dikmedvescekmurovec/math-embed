import {
  Box,
  colors,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

interface HeaderProps {}

const useStyles = makeStyles({
  background: {
    minHeight: 50,
    backgroundColor: colors.indigo[300],
    padding: 16,
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
      <Container maxWidth="lg">
        <Typography variant="h1" className={styles.pageTitle}>
          Math Embed
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
