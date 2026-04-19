import type { Project } from "../components/Utilities/types";
import MERN from "../components/Projects/Details/MERN";
import BlockPe from "../components/Projects/Details/BlockPe";
import Broker from "../components/Projects/Details/Broker";
import SpeechDec from "../components/Projects/Details/SpeechDec";
import Simulator from "../components/Projects/Details/Simulator";
import Portfolio from "../components/Projects/Details/Portfolio";

export const prominentProjects: Project[] = [
  {
    title: "MERN E-Commerce Web Application",
    des: "Full-Stack E-Commerce WebApp using MERN stack with User Authentication & Encryption",
    date: "May-July 2023",
    hostedLink: "https://ecom.chinmaypillai.com",
    link: "https://github.com/ChinmayPillai/MERN-ECommerce-WebApp",
    img: "/project/MERN.webp",
  },
  {
    title: "BlockPe - Blockchain Contractual Payments",
    des: "Blockchain based DApp on Hyperledger Fabric using GoLang, TypeScript and ReactJS",
    date: "Mar-Apr 2024",
    link: "https://github.com/ChinmayPillai/Blockchain-Cross_Border_Contractual_Payments",
    img: "/project/BlockPe.webp",
  },
  {
    title: "Real-Estate Broker - Django, React, MySql",
    des: "Real-Estate trading platform maintaining OrderBook updated with market & limit orders",
    date: "Jan-Apr 2024",
    link: "https://github.com/ChinmayPillai/Real_Estate_Broker_WebApp",
    img: "/project/Broker.webp",
  },
  {
    title: "Solar System Simulator",
    des: "Gravity/Coulomb Force Simulator with any number of particles. Solar System Simulator",
    date: "Oct-Nov 2022",
    link: "https://github.com/ChinmayPillai/Multi-Particle_Force_Simulator",
    img: "/project/Simulator.webp",
  },
];

export const otherProjects: Project[] = [
  {
    title: "Speech Detection ML Model",
    des: "Neural-Network Model that detects all speech segments in audio using MFCC features",
    date: "Oct-Nov 2023",
    link: "https://github.com/ChinmayPillai/Speech-Detection",
    img: "/project/Microphone2.webp",
  },
  {
    title: "React Typescript Portfolio Website",
    des: "This website which was made using React, Material UI and Bootstrap using Typescript",
    date: "June 2023 - Present",
    link: "https://github.com/ChinmayPillai/chinmaypillai.github.io",
    img: "/project/Portfolio.webp",
  },
  {
    title: "Singing Detection ML Model",
    des: "Neural-Network Model that detects segments in audio with singing voices using MFCC features",
    date: "Oct-Nov 2023",
    link: "https://github.com/ChinmayPillai/Singing-Detection",
    img: "/project/Singing.webp",
  },
  {
    title: "Stroke Detection & Clustering ML Model",
    des: "Neural-Network + K-Means Clustering Model that detects & clusters different musical instrument strokes",
    date: "Oct-Nov 2023",
    link: "https://github.com/ChinmayPillai/Stroke-Detection-and-Clustering",
    img: "/project/Onset.webp",
  },
  {
    title: "Raytracing & Procedural Generation",
    des: "Implement Raytracing and Procedural Generation for developing Computer Graphics using OOPS",
    date: "May-July 2023",
    link: "https://github.com/ChinmayPillai/Computer-Graphics-and-Rendering",
    img: "/project/RayTrace.webp",
  },
  {
    title: "Live Focussed Frame Finder",
    des: "Classify frames of a live video feed into focused or unfocused. Made for microscope feed",
    date: "Dec 2022",
    link: "https://github.com/ChinmayPillai/Find-Focussed-Frames-of-Video",
    img: "/project/Focus.webp",
  },
  {
    title: "BASH Image Processing",
    des: "BASH scripts to process/modify images from a microscope feed using ImageMagick package",
    date: "Dec 2022",
    link: "https://github.com/ChinmayPillai/Image-Overlay-with-ImageMagick",
    img: "/project/BASH.webp",
  },
  {
    title: "Blockchain Voting Smart Contract",
    des: "Voting Smart Contract for Decentralised Blockchain using Solidity. IIT Kanpur Workshop",
    date: "Mar 2023",
    link: "https://github.com/ChinmayPillai/Blockchain-Voting-Smart-Contract",
    img: "/project/Solidity.webp",
  },
];

export const projectMap: { [key: string]: React.FC } = {
  "MERN E-Commerce Web Application": MERN,
  "Speech Detection ML Model": SpeechDec,
  "Solar System Simulator": Simulator,
  "React Typescript Portfolio Website": Portfolio,
  "BlockPe - Blockchain Contractual Payments": BlockPe,
  "Real-Estate Broker - Django, React, MySql": Broker,
};
