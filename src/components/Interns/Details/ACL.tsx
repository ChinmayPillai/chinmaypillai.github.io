import { Typography, ThemeProvider } from "@mui/material";
import { headingStyle, textColour, projTextTheme } from "../../Utilities/colors";

export default function ACL(){
    return(
        <div>
            <Typography variant="h3" align="center" color={headingStyle}  sx={{ mb: 2 }}>
                ACL Digtal (ALTEN Group)
            </Typography>

            <ThemeProvider theme={projTextTheme}>
                <Typography variant="h6" align="left" color={textColour}>
                    <ul>
                        <li>
                            Programmed Publish-Subscribe Client-Server in NodeJS, C++ and C# for CoAP, LwM2M & Matter protocols  
                        </li>
                        <li>
                            Integrated the simulators in the MERN stack Web Application and optimised the app by developing features
                        </li>
                        <li>
                            Created Video Conferencing application in React which processes audio/video data to send to an ML API 
                        </li>
                        <li>
                            Developed 3 IoT simulators and a Video Conferencing web application for AI Telemedicine as a PoC for clients
                        </li> 
                    </ul>
                </Typography>
            </ThemeProvider>
        </div>
    )
}