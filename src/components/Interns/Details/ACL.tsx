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
                            Programmed Publish-Subscribe <span style={{ fontWeight: 'bold' }}>Client-Server</span> model in <span style={{ fontWeight: 'bold' }}>NodeJS, C++ and C#</span> for CoAP, LwM2M & Matter protocols  
                        </li>
                        <li>
                            Integrated the 3 simulators in a <span style={{ fontWeight: 'bold' }}>MERN</span> stack <span style={{ fontWeight: 'bold' }}>Web Application</span> and optimised the <span style={{ fontWeight: 'bold' }}>React</span> application using lazy loading
                        </li>
                        <li>
                            Created <span style={{ fontWeight: 'bold' }}>Video Conferencing</span> application in <span style={{ fontWeight: 'bold' }}>React</span> which <span style={{ fontWeight: 'bold' }}>processes audio/video</span> data to send to an internal ML API
                        </li>
                        <li>
                            Developed <span style={{ fontWeight: 'bold' }}>3 IoT simulators</span> & a <span style={{ fontWeight: 'bold' }}>Video Conferencing</span> web application for AI Telemedicine to present as PoC for clients
                        </li> 
                    </ul>
                </Typography>
            </ThemeProvider>
        </div>
    )
}