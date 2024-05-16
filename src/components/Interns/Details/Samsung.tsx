import { Typography, ThemeProvider } from "@mui/material";
import { headingStyle, textColour, projTextTheme } from "../../Utilities/colors";

export default function Samsung(){
    return(
        <div>
            <Typography variant="h3" align="center" color={headingStyle} sx={{ mb: 2 }}>
                Samsung Reseach Institute - Bangalore
            </Typography>

            <ThemeProvider theme={projTextTheme}>
                <Typography variant="h6" align="left" color={textColour}>
                    <ul>
                        <li>
                            Ongoing MAGPIE Intern at SRIB in Software Developer Role
                        </li>
                    </ul>
                </Typography>
            </ThemeProvider>

        </div>
    )
}