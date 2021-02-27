import { faSuperscript } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface HeaderProps {}

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 16,
    backgroundColor: "#329894",
  },
  pageTitle: {
    color: "#FFFFFF",
    fontSize: 48,
    fontFamily: "Poppins",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: 32,
    },
  },
  icon: {
    paddingRight: 16,
  },
}));
const Header: React.FC<HeaderProps> = (props) => {
  const styles = useStyles();

  return (
    <Box className={styles.background}>
      <Container maxWidth="md">
        <Typography variant="h1" className={styles.pageTitle}>
          <FontAwesomeIcon
            icon={faSuperscript}
            className={styles.icon}
          ></FontAwesomeIcon>
          Math Embed
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
