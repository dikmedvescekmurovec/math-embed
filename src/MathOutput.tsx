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
import { saveEquation } from "./helpers/firestore";
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
    backgroundColor: "#329894",
    "&:hover, &:focus": {
      backgroundColor: "#329894",
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
    saveEquation(props.raw).then((id: string) => {
      // TODO: Implement copy to clipboard
      // TODO: Set rules when this function can be called
      setOpen(true);
      console.log(`https://mathembed.online/embed/${id}`);
    })
    .catch(() => {/* TODO: Inform user of user */})
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
