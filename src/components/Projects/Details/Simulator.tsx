import { Typography } from "@mui/material";
import { headingStyle, textColour } from "../../Utilities/colors";

export default function Simulator(){
    return(
        <div>
            <Typography variant="h2" align="center" color={headingStyle} sx={{ mb: 2 }}>
                Gravity Simulator
            </Typography>
            <Typography variant="h6" align="center" color={textColour}>
                - Programmed a Multi-Body Gravity Simulator in Python and the code to animate its evolution with time
            </Typography>
            <Typography variant="h6" align="center" color={textColour}>
                - Developed an animated Solar System Simulator with 98.26% accuracy in the orbital time periods of planets
            </Typography>
        </div>
    )
}