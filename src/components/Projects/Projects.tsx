import { Container, Grid, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import SurfaceCard from "../Utilities/SurfaceCard";
import type { Project } from "../Utilities/types";
import MERN from "./Details/MERN";
import BlockPe from "./Details/BlockPe";
import Broker from "./Details/Broker";
import SpeechDec from "./Details/SpeechDec";
import Simulator from "./Details/Simulator";
import Portfolio from "./Details/Portfolio";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";


const ProjectList: Project[] = [
    {
        title: "Speech Detection ML Model",
        des: "Neural-Network Model that detects all speech segments in audio using MFCC features",
        date: "Oct-Nov 2023",
        link: "https://github.com/ChinmayPillai/Speech-Detection",
        img: "/project/Microphone2.jpg",
    },
    {
        title: "React Typescript Portfolio Website",
        des: "This website which was made using React, Material UI and Bootstrap using Typescript",
        date: "June 2023 - Present",
        link: "https://github.com/ChinmayPillai/chinmaypillai.github.io",
        img: "/project/Portfolio.jpg",
    },
    {
        title: "Singing Detection ML Model",
        des: "Neural-Network Model that detects segments in audio with singing voices using MFCC features",
        date: "Oct-Nov 2023",
        link: "https://github.com/ChinmayPillai/Singing-Detection",
        img: "/project/Singing.jpg",
    },
    {
        title: "Stroke Detection & Clustering ML Model",
        des: "Neural-Network + K-Means Clustering Model that detects & clusters different musical instrument strokes",
        date: "Oct-Nov 2023",
        link: "https://github.com/ChinmayPillai/Stroke-Detection-and-Clustering",
        img: "/project/Onset.jpg",
    },
    {
        title: "Raytracing & Procedural Generation",
        des: "Implement Raytracing and Procedural Generation for developing Computer Graphics using OOPS",
        date: "May-July 2023",
        link: "https://github.com/ChinmayPillai/Computer-Graphics-and-Rendering",
        img: "/project/RayTrace.jpg",
    },
    {
        title: "Live Focussed Frame Finder",
        des: "Classify frames of a live video feed int focussed or unfocussed. Made for microscope feed",
        date: "Dec 2022",
        link: "https://github.com/ChinmayPillai/Find-Focussed-Frames-of-Video",
        img: "/project/Focus.jpg",
    },
    {
        title: "BASH Image Processing",
        des: "BASH scripts to process/modify images from a microscope feed using imagemagik package",
        date: "Dec 2022",
        link: "https://github.com/ChinmayPillai/Image-Overlay-with-ImageMagick",
        img: "/project/BASH.jpg",
    },
    {
        title: "Blockchain Voting Smart Contract",
        des: "Voting Smart Contract for Decentralised Blockchain using Solidity. IIT Kanpur Workshop",
        date: "Mar 2023",
        link: "https://github.com/ChinmayPillai/Blockchain-Voting-Smart-Contract",
        img: "/project/Solidity.png",
    },
];

const promiment_projects: Project[] = [
    {
        title: "MERN E-Commerce Web Application",
        des: "Full-Stack E-Commerce WebApp using MERN stack with User Authentication & Encryption",
        date: "May-July 2023",
        hostedLink: "https://ecom.chinmaypillai.com",
        link: "https://github.com/ChinmayPillai/MERN-ECommerce-WebApp",
        img: "/project/MERN.jpg",
    },
    {
        title: "BlockPe - Blockchain Contractual Payments",
        des: "Blockchain based DApp on Hyperledger Fabric using GoLang, TypeScript and ReactJS",
        date: "Mar-Apr 2024",
        link: "https://github.com/ChinmayPillai/Blockchain-Cross_Border_Contractual_Payments",
        img: "/project/BlockPe.jpg",
    },
    {
        title: "Real-Estate Broker - Django, React, MySql",
        des: "Real-Estate trading platform maintaining OrderBook updated with market & limit orders",
        date: "Jan-Apr 2024",
        link: "https://github.com/ChinmayPillai/Real_Estate_Broker_WebApp",
        img: "/project/Broker.jpg",
    },
    {
        title: "Solar System Simulator",
        des: "Gravity/Coulomb Force Simulator with any number of particles. Solar System Simulator",
        date: "Oct-Nov 2022",
        link: "https://github.com/ChinmayPillai/Multi-Particle_Force_Simulator",
        img: "/project/Simulator.jpg",
    },
];

type ProjMap = { [key: string]: React.FC };

const projectMap: ProjMap = {
    "MERN E-Commerce Web Application": MERN,
    "Speech Detection ML Model": SpeechDec,
    "Solar System Simulator": Simulator,
    "React Typescript Portfolio Website": Portfolio,
    "BlockPe - Blockchain Contractual Payments": BlockPe,
    "Real-Estate Broker - Django, React, MySql": Broker,
};


function Projects() {
    const [project, setProject] = useState<string>("MERN E-Commerce Web Application");
    const ProjectDetail = projectMap[project];

    return (
        <Container sx={{ mb: 8, mt: 5, minHeight: "100vh" }}>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                        Prominent Projects
                    </Typography>
                </Grid>

                {promiment_projects.map((proj) => (
                    <Grid key={proj.title} item xs={6} md={3}>
                        <SurfaceCard
                            selected={project === proj.title}
                            onClick={() => setProject(proj.title)}
                            media={proj.img ? { src: proj.img, alt: proj.title, aspect: "video" } : undefined}
                            title={proj.title}
                            subtitle={proj.date}
                            description={proj.des}
                            actions={
                                <>
                                    {proj.hostedLink && (
                                        <IconButton
                                            size="small"
                                            href={proj.hostedLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${proj.title} live site`}
                                            sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                                        >
                                            <OpenInNewIcon fontSize="small" />
                                        </IconButton>
                                    )}
                                    <IconButton
                                        size="small"
                                        href={proj.link ?? "https://github.com/chinmaypillai"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${proj.title} on GitHub`}
                                        sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                                    >
                                        <GitHubIcon fontSize="small" />
                                    </IconButton>
                                </>
                            }
                        />
                    </Grid>
                ))}

                <Grid item xs={12} sx={{ m: 4 }}>
                    <ProjectDetail />
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                        Other Projects
                    </Typography>
                </Grid>

                {ProjectList.map((proj) => (
                    <Grid key={proj.title} item xs={12} sm={6} sx={{ mb: 2 }}>
                        <SurfaceCard
                            href={proj.link ?? "https://github.com/chinmaypillai"}
                            media={proj.img ? { src: proj.img, alt: proj.title, aspect: "video" } : undefined}
                            title={proj.title}
                            subtitle={proj.date}
                            description={proj.des}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Projects;
