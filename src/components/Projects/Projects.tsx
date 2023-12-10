import { Container, Grid, Typography } from "@mui/material";
import ProjectCard, { Project } from "../Utilities/ProjectCard";

const ProjectList: Project[] = [
  {
    title: "Speech Detection ML Model",
    //des: "Upcoming Summer SDE Intern for SRI, Banglore",
    date: "Oct-Nov 2023",
  },
  {
    title: "Music Stroke Detection & Clustering ML Model",
    //des: "Worked on IoT, MERN Stack, Computer Networks",
    date: "Oct-Nov 2023",
  },
  {
    title: "MERN E-Commerce Web Application",
    //des: "Worked on Neural Networks using PyTorch",
    date: "May-July 2023",
  },
  {
    title: "Multi-Particle Force Simulator",
    //des: "Worked on C++ Drivers, N-Body Simulator, Video Processing",
    date: "Oct-Nov 2022",
  },
  {
    title: "Singing Detection ML Model",
    //des: "Worked on C++ Drivers, N-Body Simulator, Video Processing",
    date: "Oct-Nov 2023",
  },
  {
    title: "Raytracing",
    //des: "Worked on C++ Drivers, N-Body Simulator, Video Processing",
    date: "May-July 2023",
  },
  {
    title: "Live Focussed Frame Finder",
    //des: "Worked on C++ Drivers, N-Body Simulator, Video Processing",
    date: "Dec 2022",
  },
  {
    title: "Blockchain Voting Smart Contract",
    //des: "Worked on C++ Drivers, N-Body Simulator, Video Processing",
    date: "Mar 2023",
  },
  {
    title: "BASH Image Processing",
    //des: "Worked on C++ Drivers, N-Body Simulator, Video Processing",
    date: "Dec 2022",
  },
]

function Projects() {
  return (
    <Container>
      <Grid container spacing={2}>
          <Grid item xs={12}>
              <Typography variant="h1" align="center" color="white" sx={{ m: 4 }}>
                Projects
              </Typography>
          </Grid>

          {ProjectList.map((project) => (
            <Grid item xs={12} sm={6} md={3}>
                <ProjectCard project={project} />
            </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
