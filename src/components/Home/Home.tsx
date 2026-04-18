import DP from "./DP";
import { Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { tokens } from "../Utilities/colors";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SurfaceCard from "../Utilities/SurfaceCard";
import type { Item } from "../NavBar/types";

const items: Item[] = [
  {
    name: "My Work",
    link: "/work",
    internal: true,
    desc: "Read about my current work and impacts I've made at Blitz.",
    img: "/pages/blitz.webp",
  },
  {
    name: "My Internships",
    link: "/interns",
    internal: true,
    desc: "Read about my past internships, technologies I used, and the skills I developed.",
    img: "/intern/Samsung.webp",
  },
  {
    name: "My Projects",
    link: "/projects",
    internal: true,
    desc: "View my projects from courses and personal exploration.",
    img: "/project/MERN.webp",
  },
  {
    name: "My Skills and Courses",
    link: "/skills",
    internal: true,
    desc: "Explore my skills in programming languages, frameworks, and tools.",
    img: "/pages/skills.webp",
  },
];

function Home() {
  const [myPassions] = useTypewriter({
    words: ["Agentic AI.", "DevOps/Cloud Computing.", "Blockchain."],
    loop: true,
  });

  const isScreenMediumPlus = useMediaQuery("(min-width: 700px)");

  return (
    <Container sx={{ mb: 8, mt: 5, minHeight: "100vh" }}>
      <Grid container spacing={4} sx={{ mb: 4, mt: 1 }}>
        <Grid item xs={isScreenMediumPlus ? 9 : 12}>
          <Typography variant="h4" color="text.secondary" sx={{ mb: 0.5 }}>
            Hi, I'm
          </Typography>
          <Typography variant="h1" sx={{ mb: 1 }}>
            Chinmay Pillai
          </Typography>
          <Typography variant="h4" color="text.primary">
            A{" "}
            <Typography component="span" variant="inherit" color="primary.main" sx={{ fontWeight: 600 }}>
              Developer
            </Typography>
            {" from "}
            <Typography component="span" variant="inherit" color="primary.main" sx={{ fontWeight: 600 }}>
              IIT Kanpur
            </Typography>
          </Typography>
        </Grid>
        {isScreenMediumPlus && (
          <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <DP />
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="h4" color="text.primary">
            I love{" "}
            <Typography component="span" variant="inherit" color="primary.main" sx={{ fontWeight: 600 }}>
              {myPassions}
            </Typography>
            <Typography component="span" variant="inherit" sx={{ color: tokens.text.secondary }}>
              <Cursor />
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="text.primary">
            I am a curious developer graduate of IIT Kanpur with{" "}
            <Typography component="strong" sx={{ color: "primary.main", fontWeight: 600 }}>
              2 years
            </Typography>{" "}
            of internship experience in software. I have worked on{" "}
            <Typography component="strong" sx={{ color: "primary.main", fontWeight: 600 }}>
              Agentic AI, ML Models, DevOps / Cloud Computing, Full Stack Web Applications, C++ Driver Development
            </Typography>{" "}
            and more. I am passionate about having a significant impact while learning and developing skills as much as possible.
          </Typography>
        </Grid>
      </Grid>

      <Stack spacing={2} sx={{ mt: 4 }}>
        {items.map((item) => (
          <SurfaceCard
            key={item.name}
            to={item.link}
            orientation="horizontal"
            media={item.img ? { src: item.img, alt: item.name } : undefined}
            title={item.name}
            description={item.desc}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default Home;
