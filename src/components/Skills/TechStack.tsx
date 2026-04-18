import { Box, Grid, Typography } from "@mui/material";
import { tokens } from "../Utilities/colors";

const iconSx = {
  width: 60,
  height: 60,
  p: 1,
  borderRadius: 2,
  backgroundColor: tokens.bg.surface,
  border: "1px solid",
  borderColor: tokens.border.subtle,
  transition: tokens.transition.default,
  "&:hover": {
    borderColor: tokens.border.strong,
    transform: "translateY(-2px)",
  },
};

const techData = [
  {
    category: "Programming Languages",
    items: [
      { src: "techStack/progLang/cpp2.svg", alt: "C++" },
      { src: "techStack/progLang/python.svg", alt: "Python" },
      { src: "techStack/progLang/typescript.svg", alt: "TypeScript" },
      { src: "techStack/progLang/javascript.svg", alt: "JavaScript" },
      { src: "techStack/progLang/go.svg", alt: "Go" },
      { src: "techStack/progLang/solidity.svg", alt: "Solidity" },
      { src: "techStack/progLang/csharp.svg", alt: "C#" },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { src: "techStack/aiMl/tensorflow.svg", alt: "TensorFlow" },
      { src: "techStack/aiMl/pytorch.svg", alt: "PyTorch" },
      { src: "techStack/aiMl/pandas.svg", alt: "pandas" },
      { src: "techStack/aiMl/Scikit_learn.svg", alt: "scikit-learn" },
      { src: "techStack/aiMl/opencv.svg", alt: "OpenCV" },
      { src: "techStack/aiMl/seaborn.svg", alt: "seaborn" },
    ],
  },
  {
    category: "DevOps / Cloud",
    items: [
      { src: "techStack/devOps/docker.svg", alt: "Docker" },
      { src: "techStack/devOps/aws.svg", alt: "AWS" },
      { src: "techStack/devOps/linux.svg", alt: "Linux" },
      { src: "techStack/devOps/git.svg", alt: "Git" },
      { src: "techStack/devOps/bash.svg", alt: "Bash" },
    ],
  },
  {
    category: "Backend",
    items: [
      { src: "techStack/backend/node.svg", alt: "Node.js" },
      { src: "techStack/backend/express.svg", alt: "Express" },
      { src: "techStack/backend/django.svg", alt: "Django" },
      { src: "techStack/backend/nginx.svg", alt: "NGINX" },
    ],
  },
  {
    category: "Database",
    items: [
      { src: "techStack/database/postgresql.svg", alt: "PostgreSQL" },
      { src: "techStack/database/redis.svg", alt: "Redis" },
      { src: "techStack/database/mongodb.svg", alt: "MongoDB" },
      { src: "techStack/database/mysql.svg", alt: "MySQL" },
      { src: "techStack/database/sqlite.svg", alt: "SQLite" },
    ],
  },
  {
    category: "Other",
    items: [
      { src: "techStack/other/matlab.png", alt: "MATLAB" },
      { src: "techStack/other/unity.svg", alt: "Unity" },
      { src: "techStack/other/arduino.svg", alt: "Arduino" },
    ],
  },
];

export default function TechStack() {
  return (
    <Grid container spacing={3} sx={{ mt: 1, mb: 2 }}>
      {techData.map((categoryData) => (
        <Grid key={categoryData.category} item xs={12} md={6}>
          <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
            {categoryData.category}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            {categoryData.items.map((item) => (
              <Box
                key={item.alt}
                component="img"
                sx={iconSx}
                src={item.src}
                alt={item.alt}
              />
            ))}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
