import { Typography, ThemeProvider } from "@mui/material";
import { headingStyle, textColour, projTextTheme } from "../../Utilities/colors";

export default function Quazar(){
    return(
        <div>
            <Typography variant="h3" align="center" color={headingStyle} sx={{ mb: 2 }}>
                Quazar
            </Typography>

            <ThemeProvider theme={projTextTheme}>
                <Typography variant="h6" align="left" color={textColour}>
                    <ul>
                        <li>
                            Programmed a Multi-Body Gravity Simulator in Python and the code to animate its evolution with time
                        </li>
                        <li>
                            Developed Drivers in C++ which scan, connect, poll and configure angular velocity, of a graphene spin coater
                        </li>
                        <li>
                            Programmed BASH & Python Scripts for Image & Video Processing, respectively, on feed from a Microscope
                        </li>
                        <li>
                            Programmed an animated Solar System Simulator with 98.26% accuracy in the orbital time periods of planets
                        </li> 
                        <li>
                            Built Data Acquisition Engine & GUI in C++ and processed feed from microscope using BASH & Python
                        </li>
                    </ul>
                </Typography>
            </ThemeProvider>
        </div>
    )
}