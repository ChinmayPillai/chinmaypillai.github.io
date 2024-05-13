import { Typography, ThemeProvider } from "@mui/material";
import {
  headingStyle,
  textColour,
  projTextTheme,
} from "../../Utilities/colors";

export default function MERN() {
  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        color={headingStyle}
        sx={{ mb: 2 }}
      >
        MERN Ecommerce WebApp
      </Typography>

      <ThemeProvider theme={projTextTheme}>
        <Typography variant="h6" align="left" color={textColour}>
          <ul>
            <li>
              Developed E-Commerce web app using <span style={{ fontWeight: 'bold' }}>React</span> utilising <span style={{ fontWeight: 'bold' }}>ExpressJS</span> for
              API calls & <span style={{ fontWeight: 'bold' }}>MongoDB</span> for database management
            </li>
            <li>
              Implemented <span style={{ fontWeight: 'bold' }}>User Authentication</span> using <span style={{ fontWeight: 'bold' }}>JWT & Data Encryption</span>{" "}
              through hashing to securely verify & store user data
            </li>
            <li>
              Integrated <span style={{ fontWeight: 'bold' }}>Redis</span> into architechture to improve app performace by
              caching user data for faster retrival and reduced latency
            </li>

            <li>
              Containerized the application using <span style={{ fontWeight: 'bold' }}>Docker and Docker-Compose</span> and
              utilised <span style={{ fontWeight: 'bold' }}>NginX</span> to act as a reverse proxy server
            </li>

            <li>
              Deployed on <span style={{ fontWeight: 'bold' }}>AWS EC2</span> using <span style={{ fontWeight: 'bold' }}>AWS Elastic Beanstalk</span> & <span style={{ fontWeight: 'bold' }}>GitHub Actions</span>{" "}
              for deployment, scaling & load balancing
            </li>
            <li>
              Implemented TLS encryption using <strong>SSL Certificate</strong> & custom-domain routing using <strong>AWS Route 53 & Hosted Zones</strong>
            </li>
          </ul>
        </Typography>
      </ThemeProvider>
    </div>
  );
}
