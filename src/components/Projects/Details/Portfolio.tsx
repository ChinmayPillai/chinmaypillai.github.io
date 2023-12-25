import { Typography, ThemeProvider } from "@mui/material";
import { headingStyle, textColour, projTextTheme } from "../../Utilities/colors";

export default function Portfolio(){
    return(
        <div>
            <Typography variant="h3" align="center" color={headingStyle} sx={{ mb: 2 }}>
                Portfolio Website
            </Typography>


            <ThemeProvider theme={projTextTheme}>
                <Typography variant="h6" align="left" color={textColour}>
                    <ul>
                        <li>
                            Developed and deployed a React based portfolio website
                        </li>
                        <li>
                            Utilised Hooks and ContextAPI for complex state management
                        </li>
                    </ul>
                </Typography>
            </ThemeProvider>
        </div>
    )
}