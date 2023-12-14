import { Container, Grid, Typography } from "@mui/material";
import InternCard, { Intern } from "../Utilities/InternCard";
import { headingStyle } from "../Utilities/colors";

const InternList: Intern[] = [
  {
    title: "SDE Summer Intern, Samsung Banglore",
    des: "Upcoming Summer SDE Intern for SRI, Banglore",
    date: "May-July 2024",
    img: "/Samsung.jpg"
  },
  {
    title: "SDE Summer Intern, ACL Digital",
    des: "Worked on IoT, MERN Stack, Computer Networks",
    date: "May-July 2023",
    img: "/ACL.jpg"
  },
  {
    title: "Computational Research Intern, IITK",
    des: "Worked on Neural Networks using PyTorch",
    date: "May 22 - May 23",
    img: "/IITK.jpg"
  },
  {
    title: "SDE Winter Intern, Quazar Technologies",
    des: "Worked on C++ Drivers, Gravity Simulator, Video Processing",
    date: "Oct-Dec 2022",
    img: "/Quazar.jpg"
  },
]

function Interns() {

  return (
    <Container>
      <Grid container spacing={2} sx={{ mb: 4, mt: 4 }}>
          <Grid item xs={12}>
              <Typography variant="h1" align="center" color={headingStyle} sx={{ mb: 4 }}>
                Internships
              </Typography>
          </Grid>

          {InternList.map((intern) => (
            <Grid item xs={12} sm={6} md={3}>
                <InternCard project={intern} />
            </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Interns;
