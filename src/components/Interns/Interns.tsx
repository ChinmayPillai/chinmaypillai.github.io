import { Container, Grid, Typography } from "@mui/material";
import SurfaceCard from "../Utilities/SurfaceCard";
import type { Intern } from "../Utilities/types";
import { useState } from "react";
import Samsung from "./Details/Samsung";
import ACL from "./Details/ACL";
import IITK from "./Details/IITK";
import Quazar from "./Details/Quazar";


const InternList: Intern[] = [
  {
    title: "ML Research Intern, Samsung",
    des: "Upcoming Summer SDE Intern for SRI, Banglore",
    date: "May-July 2024",
    img: "/intern/Samsung.webp",
    name: "Samsung",
  },
  {
    title: "SDE Summer Intern, ACL Digital",
    des: "Worked on IoT, MERN Stack, Computer Networks",
    date: "May-July 2023",
    img: "/intern/ACL.webp",
    name: "ACL",
  },
  {
    title: "Computational Research Intern, IITK",
    des: "Worked on Neural Networks using PyTorch",
    date: "May 22 - May 23",
    img: "/intern/IITK.webp",
    name: "IITK",
  },
  {
    title: "SDE Winter Intern, Quazar Technologies",
    des: "Worked on C++ Drivers, Gravity Simulator, Video Processing",
    date: "Oct-Dec 2022",
    img: "/intern/Quazar.webp",
    name: "Quazar",
  },
];

type InternMap = { [key: string]: React.FC };

const internMap: InternMap = {
  Samsung,
  ACL,
  IITK,
  Quazar,
};


function Interns() {
  const [intern, setIntern] = useState<string>("Samsung");
  const InternDetail = internMap[intern];

  return (
    <Container sx={{ mb: 8, mt: 5, minHeight: "100vh" }}>
      <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center" sx={{ mb: 2 }}>
            Internships
          </Typography>
        </Grid>

        {InternList.map((internProj) => (
          <Grid key={internProj.name} item xs={6} md={3}>
            <SurfaceCard
              selected={intern === internProj.name}
              onClick={() => setIntern(internProj.name)}
              media={internProj.img ? { src: internProj.img, alt: internProj.title, aspect: "video" } : undefined}
              title={internProj.title}
              subtitle={internProj.date}
              description={internProj.des}
            />
          </Grid>
        ))}

        <Grid item xs={12} sx={{ m: 4 }}>
          <InternDetail />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Interns;
