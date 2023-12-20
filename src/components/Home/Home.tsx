import About from "./About";
import DP from "./DP";
import TechStack from "./TechStack";
import { Container, Grid, Typography } from "@mui/material";
import { headingStyle } from "../Utilities/colors";

function Home() {

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} >
          <Typography variant="h1" align="center" color={headingStyle}>
            Chinmay Pillai
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <About />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <DP />
        </Grid>
        <Grid item sx={{ mb: 4, mt: 4 }}>
          <TechStack />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
