import { Container, Grid, Typography } from "@mui/material";
import SurfaceCard from "../Utilities/SurfaceCard";
import PageMeta from "../Utilities/PageMeta";
import { useState } from "react";
import { internList, internMap } from "../../data/interns";

function Interns() {
  const [intern, setIntern] = useState<string>("Samsung");
  const InternDetail = internMap[intern];

  return (
    <Container sx={{ mb: 8, mt: 5, minHeight: "100vh" }}>
      <PageMeta
        title="Internships"
        description="Past internships of Chinmay Pillai at Samsung, ACL Digital, IIT Kanpur and Quazar Technologies."
      />
      <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" align="center" sx={{ mb: 2 }}>
            Internships
          </Typography>
        </Grid>

        {internList.map((internProj) => (
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
