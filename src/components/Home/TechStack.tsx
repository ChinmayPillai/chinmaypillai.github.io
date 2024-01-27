import { Typography, Grid, Chip } from "@mui/material";
import { headingStyle, titleStyle } from "../Utilities/colors";

const imgBg = {
  backgroundColor: headingStyle,
  padding: 5,
};

const imgSize = "60";

const textColour = titleStyle;

const headingSize = "h4";

const chipStyle = {
  fontSize: "18px",
  color: headingStyle,
  backgroundColor: "#01497c",
  m: 0.25,
  mb: 2,
};

const progLang = [
  "C++",
  "C",
  "Python",
  "TypeScript",
  "JavaScript",
  "Java",
  "C#",
];

const aiMl = [
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "Scikit-Learn",
  "OpenCV",
  "Seaborn",
];

const backend = ["NodeJS", "ExpressJS", "Nginx", "Kafka"];

const frontend = [
  "ReactJS",
  "HTML",
  "CSS",
  "Material UI",
  "Bootstrap",
  "Framer Motion",
];

const database = ["MongoDB", "MySQL", "PostgreSQL", "Redis"];

const devOps = ["Docker", "AWS", "Linux", "Git", "Github Actions", "Bash"];

const otherSoftware = ["MATLAB", "Postman", "Arduino", "Unity", "Photoshop"];

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

            <img
              style={imgBg}
              src="techStack/progLang/java.svg"
              alt="java"
              width={imgSize}
              height={imgSize}
            />

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
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg"
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
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
              alt="docker"
              width={imgSize}
              height={imgSize}
            />

            <img
              style={imgBg}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              alt="aws"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
              alt="linux"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
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
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
              alt="matlab"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
              alt="arduino"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg"
              alt="unity"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
              alt="photoshop"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="https://download.blender.org/branding/community/blender_community_badge_white.svg"
              alt="blender"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="https://www.vectorlogo.zone/logos/ifttt/ifttt-ar21.svg"
              alt="ifttt"
              width={imgSize}
              height={imgSize}
            />
            <img
              style={imgBg}
              src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg"
              alt="illustrator"
              width={imgSize}
              height={imgSize}
            />
          </p>
        </Grid>
      </Grid>

      {/* <Grid container spacing={2} sx={{ ml: 0.5 }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            Programming Languages:
          </Typography>
          {progLang.map((label, index) => (
            <Chip key={index} label={label} color="primary" sx={chipStyle}/>
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            Backend Development:
          </Typography>
          {backend.map((label, index) => (
            <Chip key={index} label={label} color="primary" sx={chipStyle} />
          ))}
        </Grid>

        

        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            AI/ML:
          </Typography>
          {aiMl.map((label, index) => (
            <Chip key={index} label={label} color="primary" sx={chipStyle} />
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            Frontend Development:
          </Typography>
          {frontend.map((label, index) => (
            <Chip key={index} label={label} color="primary" sx={chipStyle} />
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            Database:
          </Typography>
          {database.map((label, index) => (
            <Chip key={index} label={label} color="primary" sx={chipStyle} />
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            DevOps:
          </Typography>
          {devOps.map((label, index) => (
            <Chip key={index} label={label} color="primary" sx={chipStyle} />
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant={headingSize}
            color={textColour}
            style={{ textAlign: "left" }}
          >
            Other Software:
          </Typography>
          {otherSoftware.map((label, index) => (
            <Chip key={index} label={label} color="primary" sx={chipStyle} />
          ))}
        </Grid>
      </Grid> */}
    </div>
  );
}
