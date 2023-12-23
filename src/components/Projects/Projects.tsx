import { Container, Grid, Typography } from "@mui/material";
import ProjectCard, { Project } from "../Utilities/ProjectCard";
import { headingStyle } from "../Utilities/colors";
import PromProjCard, {ProminentProj} from "../Utilities/PromProjCard";

const ProjectList: Project[] = [
    {
        title: "Stroke Detection & Clustering ML Model",
        des: "Neural-Network + K-Means Clustering Model that detects & \
              clusters different musical instrument strokes",
        date: "Oct-Nov 2023",
        link: "https://github.com/ChinmayPillai/Stroke-Detection-and-Clustering",
    },
    {
        title: "Singing Detection ML Model",
        des: "Neural-Network Model that detects segments in audio with singing voices using MFCC features",
        date: "Oct-Nov 2023",
        link: "https://github.com/ChinmayPillai/Singing-Detection",
    },
    {
        title: "Raytracing & Procedural Generation",
        des: "Implement Raytracing and Procedural Generation for developing Computer Graphics using OOPS",
        date: "May-July 2023",
        link: "https://github.com/ChinmayPillai/Computer-Graphics-and-Rendering",
    },
    {
        title: "Live Focussed Frame Finder",
        des: "Classify frames of a live video feed int focussed or unfocussed. Made for microscope feed",
        date: "Dec 2022",
        link: "https://github.com/ChinmayPillai/Find-Focussed-Frames-of-Video",
    },
    {
        title: "Blockchain Voting Smart Contract",
        des: "Voting Smart Contract for Decentralised Blockchain using Solidity. IIT Kanpur Workshop",
        date: "Mar 2023",
        link: "https://github.com/ChinmayPillai/Blockchain-Voting-Smart-Contract",
    },
    {
        title: "BASH Image Processing",
        des: "BASH scripts to process/modify images from a microscope feed using imagemagik package",
        date: "Dec 2022",
        link: "https://github.com/ChinmayPillai/Image-Overlay-with-ImageMagick",
    },
]

const promiment_projects: ProminentProj[] = [
    {
        title: "MERN E-Commerce Web Application",
        des: "Full-Stack E-Commerce Web Application using MERN stack with User Authentication and Encryption",
        date: "May-July 2023",
        link: "https://github.com/ChinmayPillai/MERN-ECommerce-WebApp",
    },
    {
        title: "Speech Detection ML Model",
        des: "Neural-Network Model that detects all speech segments in audio using MFCC features",
        date: "Oct-Nov 2023",
        link: "https://github.com/ChinmayPillai/Speech-Detection",
    },
    {
        title: "React Typescript Portfolio Website ",
        des: "This website which was made using React, Material UI and Bootstrap using Typescript",
        date: "June 2023 - Present",
        link: "https://github.com/ChinmayPillai/chinmaypillai.github.io",
    },
    {
        title: "Multi-Particle Gravity Simulator",
        des: "Gravity/Coulomb Force Simulator with any number of particles. Solar System Simulator",
        date: "Oct-Nov 2022",
        link: "https://github.com/ChinmayPillai/Multi-Particle_Force_Simulator",
    },
]

function Projects() {

  return (
      <Container>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12}>
                  <Typography variant="h1" align="center" color={headingStyle} sx={{ mb: 2 }}>
                    Prominent Projects
                  </Typography>
              </Grid>

              {promiment_projects.map((project) => (
                  <Grid item xs={12} sm={6}>
                      <PromProjCard project={project} />
                  </Grid>
            ))}
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12}>
                  <Typography variant="h1" align="center" color={headingStyle} sx={{ mb: 2 }}>
                    Other Projects
                  </Typography>
              </Grid>

              {ProjectList.map((project) => (
                  <Grid item xs={12} sm={6}>
                      <ProjectCard project={project} />
                  </Grid>
            ))}
          </Grid>
      </Container>
  );
}

export default Projects;
