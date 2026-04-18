import TechStack from "./TechStack";
import { Container, Stack, Typography } from "@mui/material";
import Courses from "./Courses";

function Skills() {
  return (
    <Container sx={{ mb: 8, mt: 5, minHeight: "100vh" }}>
      <Typography variant="h2" align="center" sx={{ mb: 4 }}>
        Skills and Courses
      </Typography>
      <Stack spacing={6}>
        <section>
          <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
            A conservative list of technologies I have worked with to a decent degree.
          </Typography>
          <TechStack />
        </section>
        <section>
          <Courses />
        </section>
      </Stack>
    </Container>
  );
}

export default Skills;
