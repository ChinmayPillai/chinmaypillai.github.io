import { Typography, Grid } from "@mui/material";
import { headingStyle, titleStyle } from "../Utilities/colors";

const imgBg = {
  backgroundColor: headingStyle,
  padding: 5,
};

const imgSize = "60";

const textColour = titleStyle;

const headingSize = "h4";

const techData = [
  {
    category: "Programming Languages",
    items: [
      { src: "techStack/progLang/cpp.svg", alt: "cplusplus" },
      { src: "techStack/progLang/c.svg", alt: "c" },
      { src: "techStack/progLang/python.svg", alt: "python" },
      { src: "techStack/progLang/typescript.svg", alt: "typescript" },
      { src: "techStack/progLang/javascript.svg", alt: "javascript" },
      { src: "techStack/progLang/java.svg", alt: "java" },
      { src: "techStack/progLang/csharp.svg", alt: "csharp" },
    ],
  },
  {
    category: "AI/ML",
    items: [
      { src: "techStack/aiMl/tensorflow.svg", alt: "tensorflow" },
      { src: "techStack/aiMl/pytorch.svg", alt: "pytorch" },
      { src: "techStack/aiMl/pandas.svg", alt: "pandas" },
      { src: "techStack/aiMl/Scikit_learn.svg", alt: "scikit_learn" },
      { src: "techStack/aiMl/opencv.svg", alt: "opencv" },
      { src: "techStack/aiMl/seaborn.svg", alt: "seaborn" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { src: "techStack/backend/node.svg", alt: "nodejs" },
      { src: "techStack/backend/express.svg", alt: "express" },
      { src: "techStack/backend/django.svg", alt: "django" },
      { src: "techStack/backend/nginx.svg", alt: "nginx" },
      { src: "techStack/backend/kafka.svg", alt: "kafka" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { src: "techStack/frontend/react.svg", alt: "react" },
      { src: "techStack/frontend/html.svg", alt: "html5" },
      { src: "techStack/frontend/css.svg", alt: "css3" },
      { src: "techStack/frontend/bootstrap.svg", alt: "bootstrap" },
    ],
  },
  {
    category: "Database",
    items: [
      { src: "techStack/database/mongodb.svg", alt: "mongodb" },
      { src: "techStack/database/mysql.svg", alt: "mysql" },
      { src: "techStack/database/postgresql.svg", alt: "postgresql" },
      { src: "techStack/database/redis.svg", alt: "redis" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { src: "techStack/devOps/docker.svg", alt: "docker" },
      { src: "techStack/devOps/aws.svg", alt: "aws" },
      { src: "techStack/devOps/linux.svg", alt: "linux" },
      { src: "techStack/devOps/git.svg", alt: "git" },
      { src: "techStack/devOps/bash.svg", alt: "bash" },
    ],
  },
  // {
  //   category: "Frameworks",
  //   items: [
  //     { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg", alt: "dotnet" },
  //   ]
  // },
  {
    category: "Other Software",
    items: [
      { src: "techStack/other/matlab.png", alt: "matlab" },
      { src: "techStack/other/arduino.svg", alt: "arduino" },
      { src: "techStack/other/unity.svg", alt: "unity" },
      { src: "techStack/other/photoshop.svg", alt: "photoshop" },
    ],
  },
];

export default function TechStack() {
  return (
    <div>
      <Typography
        variant="h3"
        color={headingStyle}
        style={{ textAlign: "left" }}
        sx={{ textDecoration: "underline", mb: 2, mt: 5 }}
      >
        Tech Stack:
      </Typography>

      <Grid container spacing={2} sx={{ ml: 0.5 }}>
        {techData.map((categoryData, index) => (
          <Grid key={index} item xs={12} md={6}>
            <Typography
              variant={headingSize}
              color={textColour}
              style={{ textAlign: "left" }}
            >
              {categoryData.category}
            </Typography>
            <p style={{ textAlign: "left" }}>
              {categoryData.items.map((item, itemIndex) => (
                <img
                  key={itemIndex}
                  style={imgBg}
                  src={item.src}
                  alt={item.alt}
                  width={imgSize}
                  height={imgSize}
                />
              ))}
            </p>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
