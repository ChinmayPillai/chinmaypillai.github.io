import { Typography, ThemeProvider } from "@mui/material";
import { headingStyle, textColour, projTextTheme } from "../../Utilities/colors";

export default function Simulator(){
    return(
        <div>
            <Typography variant="h3" align="center" color={headingStyle} sx={{ mb: 2 }}>
                Gravity Simulator
            </Typography>

            <ThemeProvider theme={projTextTheme}>
                <Typography variant="h6" align="left" color={textColour}>
                    <ul>
                        <li>
                            Programmed a Multi-Body Gravity Simulator in Python and the code to animate its evolution with time
                        </li>
                        <li>
                            Developed an animated Solar System Simulator with 98.26% accuracy in the orbital time periods of planets
                        </li>
                    </ul>
                </Typography>
            </ThemeProvider>

        </div>
    )
}