import { Typography } from "@mui/material";
import { headingStyle, textColour } from "../../Utilities/colors";

export default function Quazar(){
    return(
        <div>
            <Typography variant="h2" align="center" color={headingStyle} sx={{ mb: 2 }}>
                Quazar
            </Typography>


            <Typography variant="h6" align="left" color={textColour}>
                - Programmed a Multi-Body Gravity Simulator in Python and the code to animate its evolution with time
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                - Developed Drivers in C++ which scan, connect, poll and configure angular velocity, of a graphene spin coater
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                - Programmed BASH & Python Scripts for Image & Video Processing, respectively, on feed from a Microscope
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                - Programmed an animated Solar System Simulator with 98.26% accuracy in the orbital time periods of planets
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                - Built Data Acquisition Engine & GUI in C++ and processed feed from microscope using BASH & Python
            </Typography>
        </div>
    )
}