import { Typography, ThemeProvider } from "@mui/material";
import { headingStyle, textColour, projTextTheme } from "../../Utilities/colors";

export default function SpeechDec(){
    return(
        <div>
            <Typography variant="h3" align="center" color={headingStyle} sx={{ mb: 2 }}>
                Speech Detection Model
            </Typography>
            
            <ThemeProvider theme={projTextTheme}>
                <Typography variant="h6" align="left" color={textColour}>
                    <ul>
                        <li>
                            Developed a Machine Learning model that identifies all speech segments in an audio file. 
                        </li><li>
                             Achieved ~97% accuracy in estimating all speech segments
                        </li>
                    </ul>
                </Typography>
            </ThemeProvider>

        </div>
    )
}