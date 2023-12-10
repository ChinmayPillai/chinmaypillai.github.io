import About from "./About";
import DP from "./DP";
import { Container, Grid, Typography } from "@mui/material";

function Home() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1" align="center" color="white">
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <About />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <DP />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
