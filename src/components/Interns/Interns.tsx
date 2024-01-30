import { Container, Grid, Typography } from "@mui/material";
import InternCard, { Intern } from "../Utilities/InternCard";
import { headingStyle } from "../Utilities/colors";
import { useState } from "react";
import Samsung from "./Details/Samsung";
import ACL from "./Details/ACL";
import IITK from "./Details/IITK";
import Quazar from "./Details/Quazar";
import { createContext } from "react";


const InternList: Intern[] = [
  {
    title: "SDE Summer Intern, Samsung Banglore",
    des: "Upcoming Summer SDE Intern for SRI, Banglore",
    date: "May-July 2024",
    img: "/Samsung.jpg",
    name: "Samsung"
  },
  {
    title: "SDE Summer Intern, ACL Digital",
    des: "Worked on IoT, MERN Stack, Computer Networks",
    date: "May-July 2023",
    img: "/ACL.jpg",
    name: "ACL"
  },
  {
    title: "Computational Research Intern, IITK",
    des: "Worked on Neural Networks using PyTorch",
    date: "May 22 - May 23",
    img: "/IITK.jpg",
    name: "IITK"
  },
  {
    title: "SDE Winter Intern, Quazar Technologies",
    des: "Worked on C++ Drivers, Gravity Simulator, Video Processing",
    date: "Oct-Dec 2022",
    img: "/Quazar.jpg",
    name: "Quazar"
  },
]

type InternMap = {
  [key: string]: React.FC; // or React.ComponentType, depending on your components
};

const internMap: InternMap = {
  "Samsung": Samsung,
  "ACL": ACL,
  "IITK": IITK,
  "Quazar": Quazar,
};


export const internContext = createContext<string>("Samsung")

function Interns() {

  const [intern, setIntern] = useState<string>("Samsung");


  const InternDetail = internMap[intern]

  function handleClick(name: string){
    setIntern(name)
  }

  return (
    <Container sx={{ mb: 10, minHeight: "100vh"}}>
      <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12}>
              <Typography variant="h2" align="center" color={headingStyle} sx={{ mb: 2 }}>
                Interns
              </Typography>
          </Grid>

          {InternList.map((internProj) => (
            <internContext.Provider value={intern}>
              <Grid item xs={6} md={3} onClick={() => handleClick(internProj.name)}>
                <InternCard project={internProj} />
              </Grid>
            </internContext.Provider>
        ))}

          <Grid item xs={12} sx={{ m: 4 }} >
            <InternDetail/>
          </Grid>
      </Grid>
    </Container>
  );
}

export default Interns;
