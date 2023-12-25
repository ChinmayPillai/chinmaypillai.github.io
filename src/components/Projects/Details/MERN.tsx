import { Typography, ThemeProvider } from "@mui/material";
import { headingStyle, textColour, projTextTheme } from "../../Utilities/colors";

export default function MERN(){
    return(
        <div>
            <Typography variant="h3" align="center" color={headingStyle}  sx={{ mb: 2 }}>
                MERN Ecommerce WebApp
            </Typography>

            <ThemeProvider theme={projTextTheme}>
                <Typography variant="h6" align="left" color={textColour}>
                    <ul>
                        <li>
                            Created the frontend for an E-commerce web app using React
                        </li>
                        <li>
                            Utilised MongoDB & ExpressJS to manage user database, creating & updating documents upon user interaction
                        </li>
                        <li>
                            Implemented User Authentication and Encryption using JWT & hashing to securely store & verify user data
                        </li>
                        <li>
                            Cached data using Redis for faster retrival and lower latency for frequently accessed data
                        </li>
                        <li>
                            Integrated NginX to act as a reverse proxy for the web application
                        </li>
                        <li>
                            Containerized the MERN stack application using Docker
                        </li>
                    </ul>
                </Typography>
            </ThemeProvider>
        </div>
    )
}