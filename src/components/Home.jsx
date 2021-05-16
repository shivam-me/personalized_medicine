import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Container,
  CssBaseline,
  TextField,
  DialogContentText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import Image from "../assets/wp2952291.jpg";
const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    gene: "",
    variation: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setModal((prev) => !prev);
    setFormData({ gene: "", variation: "" });
  };
  const randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const handleModal = () => setModal((prev) => !prev);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Card elevation={3} className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="secondary"
              gutterBottom
            >
              CLASS PREDICATION
            </Typography>

            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <TextField
                variant="outlined"
                value={formData.gene}
                margin="normal"
                label="Gene"
                placeholder="Gene"
                required
                fullWidth
                onChange={handleChange}
                name="gene"
                autoFocus
              />
              <TextField
                variant="outlined"
                value={formData.variation}
                margin="normal"
                label="Variation"
                placeholder="Variation"
                required
                fullWidth
                name="variation"
                onChange={handleChange}
              />
            </form>
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              disabled={
                formData.gene.length > 0 && formData.variation.length > 0
                  ? false
                  : true
              }
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Predict
            </Button>
          </CardActions>
        </Card>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={modal}
        onClose={handleModal}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Personalized Medicine Redefining Cancer Treatment"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            The Predicted Class is [{randomIntFromInterval(1, 10)}]
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleModal} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
export default Home;
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${Image})`,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60,
  },
  root: {
    minWidth: 275,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  predict: {
    marginTop: 12,
    justifyContent: "center",
  },
}));
