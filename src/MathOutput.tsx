import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  colors,
  makeStyles,
  Snackbar,
  Typography,
} from "@material-ui/core";
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
    paddingBottom: 24,
  },
  equationPlaceholder: {
    color: colors.grey[600],
  },
  button: {
    fontFamily: "Poppins",
    fontSize: 16,
    backgroundColor: colors.blue[500],
    "&:hover, &:focus": {
      backgroundColor: colors.blue[500],
    },
  },
  iconInButton: {
    paddingRight: 16,
    fontSize: 16,
  },
});

const MathOutput: React.FC<MathOutputProps> = (props) => {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box className={styles.wrapper}>
      <Typography className={styles.label}>Your Equation: </Typography>
      <Box
        className={`${styles.equationWrapper}  ${
          props.raw ? "" : styles.equationPlaceholder
        }`}
      >
        <Tex texContent={props.raw || "your\\times equation = here"}></Tex>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          className={styles.button}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          <FontAwesomeIcon
            icon={faClipboard}
            className={`${styles.iconInButton}`}
          ></FontAwesomeIcon>
          Get embeddable link
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Link copied to clipboard."
        />
      </Box>
    </Box>
  );
};

export default MathOutput;
