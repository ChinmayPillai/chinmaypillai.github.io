import { Typography } from "@mui/material";
import { headingStyle, textColour } from "../../Utilities/colors";

export default function ACL(){
    return(
        <div>
            <Typography variant="h2" align="center" color={headingStyle}  sx={{ mb: 2 }}>
                ACL Digtal (ALTEN Group)
            </Typography>

            <Typography variant="h6" align="left" color={textColour}>
                - Programmed Publish-Subscribe Client-Server in NodeJS, C++ and C# for CoAP, LwM2M & Matter protocols
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                - Integrated the simulators in the MERN stack Web Application and optimised the app by developing features
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                - Created Video Conferencing application in React which processes audio/video data to send to an ML API
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                - Developed 3 IoT simulators and a Video Conferencing web application for AI Telemedicine as a PoC for clients
            </Typography>
        </div>
    )
}