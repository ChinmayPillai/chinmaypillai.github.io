import { Container, Grid, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import SurfaceCard from "../Utilities/SurfaceCard";
import PageMeta from "../Utilities/PageMeta";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { prominentProjects, otherProjects, projectMap } from "../../data/projects";

function Projects() {
  const [project, setProject] = useState<string>("MERN E-Commerce Web Application");
  const ProjectDetail = projectMap[project];

  return (
    <Container sx={{ mb: 8, mt: 5, minHeight: "100vh" }}>
      <PageMeta
        title="Projects"
        description="Projects by Chinmay Pillai across MERN, blockchain, ML, raytracing, and microscope automation."
      />
      <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" align="center" sx={{ mb: 2 }}>
            Prominent Projects
          </Typography>
        </Grid>

        {prominentProjects.map((proj) => (
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

        {otherProjects.map((proj) => (
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
