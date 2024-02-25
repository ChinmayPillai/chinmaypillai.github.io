import { Typography, Grid } from "@mui/material";
import { headingStyle, titleStyle } from "../Utilities/colors";

const imgBg = {
  backgroundColor: headingStyle,
  padding: 5,
};

const imgSize = "60";

const textColour = titleStyle;

const headingSize = "h4";

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
        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            Programming Languages:
          </Typography>
          <p style={{ textAlign: "left" }}>
            <img
              style={imgBg}
              src="techStack/progLang/cpp.svg"
              alt="cplusplus"
              width={imgSize}
              height={imgSize}
            />

            <img
              style={imgBg}
              src="techStack/progLang/c.svg"
              alt="c"
              width={imgSize}
              height={imgSize}
            />

            <img
              style={imgBg}
              src="techStack/progLang/cpp.svg"
              alt="python"
              width={imgSize}
              height={imgSize}
            />

            <img
              style={imgBg}
              src="techStack/progLang/typescript.svg"
              alt="typescript"
              width={imgSize}
              height={imgSize}
            />

            <img
              style={imgBg}
              src="techStack/progLang/javascript.svg"
              alt="javascript"
              width={imgSize}
              height={imgSize}
            />

            {/* <img
              style={imgBg}
              src="techStack/progLang/java.svg"
              alt="java"
              width={imgSize}
              height={imgSize}
            /> */}

            <img
              style={imgBg}
              src="techStack/progLang/csharp.svg"
              alt="csharp"
              width={imgSize}
              height={imgSize}
            />
          </p>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            AI/ML:
          </Typography>
          <p style={{ textAlign: "left" }}>
            <img
              style={imgBg}
              src="techStack/aiMl/tensorflow.svg"
              alt="tensorflow"
              width={imgSize}
              height={imgSize}
            />

            <img
              style={imgBg}
              src="techStack/aiMl/pytorch.svg"
              alt="pytorch"
              width={imgSize}
              height={imgSize}
            />

            <img
              style={imgBg}
              src="techStack/aiMl/pandas.svg"
              alt="pandas"
              width={imgSize}
              height={imgSize}
            />

            <img
              style={imgBg}
              src="techStack/aiMl/Scikit_learn.svg"
              alt="scikit_learn"
              width={imgSize}
              height={imgSize}
            />

            <img
              style={imgBg}
              src="techStack/aiMl/opencv.svg"
              alt="opencv"
              width={imgSize}
              height={imgSize}
            />

            <img
              style={imgBg}
              src="techStack/aiMl/seaborn.svg"
              alt="seaborn"
              width={imgSize}
              height={imgSize}
            />
          </p>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            Backend Development:
          </Typography>
          <p style={{ textAlign: "left" }}>
            <img
              style={imgBg}
              src="techStack/backend/node.svg"
              alt="nodejs"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/backend/express.svg"
              alt="express"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/backend/django.svg"
              alt="django"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/backend/nginx.svg"
              alt="nginx"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/backend/kafka.svg"
              alt="kafka"
              width={imgSize}
              height={imgSize}
            />
          </p>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            Frontend Development:
          </Typography>
          <p style={{ textAlign: "left" }}>
            <img
              style={imgBg}
              src="techStack/frontend/react.svg"
              alt="react"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/frontend/html.svg"
              alt="html5"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/frontend/css.svg"
              alt="css3"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/frontend/bootstrap.svg"
              alt="bootstrap"
              width={imgSize}
              height={imgSize}
            />
          </p>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            Database:
          </Typography>
          <p style={{ textAlign: "left" }}>
            <img
              style={imgBg}
              src="techStack/database/mongodb.svg"
              alt="mongodb"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/database/mysql.svg"
              alt="mysql"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/database/postgresql.svg"
              alt="postgresql"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/database/redis.svg"
              alt="redis"
              width={imgSize}
              height={imgSize}
            />
          </p>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            DevOps:
          </Typography>
          <p style={{ textAlign: "left" }}>
            <img
              style={imgBg}
              src="techStack/devOps/docker.svg"
              alt="docker"
              width={imgSize}
              height={imgSize}
            />

            <img
              style={imgBg}
              src="techStack/devOps/aws.svg"
              alt="aws"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/devOps/linux.svg"
              alt="linux"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/devOps/git.svg"
              alt="git"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/devOps/bash.svg"
              alt="bash"
              width={imgSize}
              height={imgSize}
            />
          </p>
        </Grid>

        {/* <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            Frameworks:
          </Typography>
          <p style={{ textAlign: "left" }}>
            
              <img
                style={imgBg}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
                alt="dotnet"
                width={imgSize}
                height={imgSize}
              />
          </p>
        </Grid> */}

        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            Other Software:
          </Typography>
          <p style={{ textAlign: "left" }}>
            <img
              style={imgBg}
              src="techStack/other/matlab.png"
              alt="matlab"
              width={imgSize}
              height={imgSize}
            />
            {/* <img
              style={imgBg}
              src="techStack/other/postman.svg"
              alt="postman"
              width={imgSize}
              height={imgSize}
            /> */}
            <img
              style={imgBg}
              src="techStack/other/arduino.svg"
              alt="arduino"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/other/unity.svg"
              alt="unity"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/other/photoshop.svg"
              alt="photoshop"
              width={imgSize}
              height={imgSize}
            />
            {/* <img
              style={imgBg}
              src="techStack/other/blender.svg"
              alt="blender"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/other/ifttt.svg"
              alt="ifttt"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="techStack/other/illustrator.svg"
              alt="illustrator"
              width={imgSize}
              height={imgSize}
            /> */}
          </p>
        </Grid>
      </Grid>

    </div>
  );
}
