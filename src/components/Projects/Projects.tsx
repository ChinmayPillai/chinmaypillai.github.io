import { Container, Grid, Typography } from "@mui/material";
import ProjectCard, { Project } from "../Utilities/ProjectCard";

const ProjectList: Project[] = [
  {
    title: "Speech Detection ML Model",
    des: "Neural-Network Model that detects speech segments of audio using MFCC features",
    date: "Oct-Nov 2023",
  },
  {
    title: "Stroke Detection & Clustering ML Model",
    des: "Neural-Network + K-Means Clustering Model that detects & \
          clusters different musical instrument strokes",
    date: "Oct-Nov 2023",
  },
  {
    title: "MERN E-Commerce Web Application",
    des: "Full-Stack E-Commerce Web Application using MERN stack with User Authentication and Encryption",
    date: "May-July 2023",
  },
  {
    title: "Multi-Particle Gravity Simulator",
    des: "Gravity/Coulomb Force Simulator with any number of particles. Solar System Simulator",
    date: "Oct-Nov 2022",
  },
  {
    title: "React Typescript Portfolio Website ",
    des: "This website which was made using React, Material UI and Bootstrap using Typescript",
    date: "June 2023 - Present",
  },
  {
    title: "Singing Detection ML Model",
    des: "Neural-Network Model that detects segments in audio with singing voices using MFCC features",
    date: "Oct-Nov 2023",
  },
  {
    title: "Raytracing & Procedural Generation",
    des: "Implement Raytracing and Procedural Generation for developing Computer Graphics using OOPS",
    date: "May-July 2023",
  },
  {
    title: "Live Focussed Frame Finder",
    des: "Classify frames of a live video feed int focussed or unfocussed. Made for microscope feed",
    date: "Dec 2022",
  },
  {
    title: "Blockchain Voting Smart Contract",
    des: "Voting Smart Contract on Solana Blockchain using Solidity Blockcahin. IIT Kanpur Workshop",
    date: "Mar 2023",
  },
  {
    title: "BASH Image Processing",
    des: "BASH scripts to process images from a microscope using imagemagik package",
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
