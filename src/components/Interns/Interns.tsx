import { Container, Grid } from "@mui/material";
import ProjectCard, { Project } from "../Utilities/ProjectCard";

const Projects: Project[] = [
  {
    title: "SDE Summer Intern, Samsung Banglore",
    des: "Upcoming Summer SDE Intern for Samsung Research Institute, Banglore",
    date: "May-July 2024",
    img: "/Samsung.jpg"
  },
  {
    title: "SDE Summer Intern, ACL Digital",
    des: "Summer Inter at ACL Digital",
    date: "May-July 2023",
    img: "/ACL.jpg"
  },
  {
    title: "Computation Research Intern, IITK",
    des: "Computation Research Intern under Prof. Nisanth Nair",
    date: "May 2022 - May 2023",
    img: "/IITK.jpg"
  },
  {
    title: "SDE Winter Intern, Quazar Technologies",
    des: "Winter Intern for Quazar Technologies",
    date: "Oct-Dec 2022",
    img: "/Quazar.jpg"
  },
]

function Interns() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1 className="display-1 text-center text-white"> Internships</h1>
        </Grid>
        
        {Projects.map((project) => (
          <Grid item xs={12} sm={6} md={3}>
              <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
      
      
      
    </Container>
  );
}

export default Interns;
