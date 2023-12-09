import { Container, Grid } from "@mui/material";
import ProjectCard, { Project } from "../Utilities/ProjectCard";

const Projects: Project[] = [
  {
    title: "Summer Intern, Samsung Banglore (Upcoming)",
    des: "Upcoming Summer Intern for Samsung Research Institute, Banglore",
    date: "May-July 2024"
  },
  {
    title: "Summer Intern, ACL Digital",
    des: "Summer Inter at ACL Digital",
    date: "May-July 2023"
  },
  {
    title: "Computation Research Intern | Prof. Nisanth Nair, IIT Kanpur",
    des: "Computation Research Intern under Prof. Nisanth Nair",
    date: "May 2022 - May 2023"
  },
  {
    title: "Winter Intern, Quazar Technologies",
    des: "Winter Intern for Quazar Technologies",
    date: "Oct-Dec 2022"
  },
]

function Interns() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <h1 className="display-1 text-center text-white"> Internships</h1>
        </Grid>
        
        {Projects.map((project) => (
          <Grid item xs={12} sm={6} md={4}>
              <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
      
      
      
    </Container>
  );
}

export default Interns;
