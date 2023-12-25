import { Typography, ThemeProvider } from "@mui/material";
import { headingStyle, textColour, projTextTheme } from "../../Utilities/colors";

export default function Samsung(){
    return(
        <div>
            <Typography variant="h3" align="center" color={headingStyle} sx={{ mb: 2 }}>
                Samsung
            </Typography>

            <ThemeProvider theme={projTextTheme}>
                <Typography variant="h6" align="left" color={textColour}>
                    <ul>
                        <li>
                            Upcoming Intern at Samsung Research Institute, Bangalore in Software Developer Role
                        </li>
                    </ul>
                </Typography>
            </ThemeProvider>

        </div>
    )
}