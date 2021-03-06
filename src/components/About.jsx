import React from "react";
import { Card, CardActions, Link, IconButton } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { GitHub, Facebook, Twitter } from "@material-ui/icons";
import { Copyright } from "./";
import Manish from "../assets/wp2952291.jpg";
import Mayank from "../assets/Mayank_Prasad.jpg";
import Shivam from "../assets/Shivam_Sharan.jpg";
import Rutuja from "../assets/Rutuja_sukede.jpg";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const data = [
  {
    name: "Shivam Sharan",
    image: Shivam,
    roll: "COBCO56",
  },
  {
    name: "Rutuja Sukede",
    image: Rutuja,
    roll: "COBCO57",
  },
  {
    name: "Mayank Prasad",
    image: Mayank,
    roll: "COBCO35",
  },
  {
    name: "Manish Ranjan",
    image: Manish,
    roll: "COBCO34",
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="primary"
              gutterBottom
            >
              Sinhgad Academy Of Engineering
            </Typography>
            <Typography variant="h4" align="center" color="textPrimary">
              Personalized Medicine: Redefining Cancer Treatment
            </Typography>
            <div style={{ marginTop: 30, marginRight: 20 }}>
              <Typography variant="h5" align="right" color="textSecondary">
                {"GUIDED BY : Prof. KANCHAN JADHAV"}
              </Typography>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography variant="h5" component="h4">
                      {item.roll}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <Link display="block" variant="body1" href="#">
                        {" "}
                        <GitHub />
                      </Link>
                    </IconButton>
                    <IconButton>
                      <Link display="block" variant="body1" href="#">
                        {" "}
                        <Twitter />
                      </Link>
                    </IconButton>
                    <IconButton>
                      <Link display="block" variant="body1" href="#">
                        {" "}
                        <Facebook />
                      </Link>
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Personalized Medicine Redefining Cancer Treatment
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
