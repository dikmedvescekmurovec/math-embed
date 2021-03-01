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
import copy from "copy-to-clipboard";
import React, { useState } from "react";
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
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarTitle, setSnackbarTitle] = useState(
    "Link copied to clipboard."
  );
  const [didCopy, setDidCopy] = useState(false);
  const [embedLink, setEmbedLink] = useState("");

  const copyToClipboard = () => {
    saveEquation(props.raw)
      .then((id: string) => {
        setEmbedLink(`https://mathembed.online/embed/${id}`);
        const copySuccessful = copy(`https://mathembed.online/embed/${id}`);
        if (!copySuccessful) {
          setSnackbarTitle("Unable to create embeddable link");
        }
        setDidCopy(copySuccessful);
        setShowSnackbar(true);
      })
      .catch(() => {
        setSnackbarTitle("Unable to create embeddable link");
        setShowSnackbar(true);
      });
  };

  const handleSnackbarClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarTitle("Link copied to clipboard.");
    setShowSnackbar(false);
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
        <Box>
          <Button
            className={styles.button}
            variant="contained"
            color="primary"
            onClick={copyToClipboard}
            disabled={props.raw.length === 0}
          >
            <FontAwesomeIcon
              icon={faClipboard}
              className={`${styles.iconInButton}`}
            ></FontAwesomeIcon>
            Get embeddable link
          </Button>
          {embedLink && !didCopy && <Typography> {embedLink} </Typography>}
        </Box>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={showSnackbar}
          autoHideDuration={5000}
          onClose={handleSnackbarClose}
          message={snackbarTitle}
        />
      </Box>
    </Box>
  );
};

export default MathOutput;
