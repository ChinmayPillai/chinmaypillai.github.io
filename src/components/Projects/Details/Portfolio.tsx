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
                            Developed and deployed a React and Material UI based portfolio website utilising Hooks and ContextAPI for complex state management
                        </li>
                        <li>
                            Utilised Framer Motion to develop engaging animations
                        </li>
                    </ul>
                </Typography>
            </ThemeProvider>
        </div>
    )
}