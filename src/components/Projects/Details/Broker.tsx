import { Typography, ThemeProvider } from "@mui/material";
import { headingStyle, textColour, projTextTheme } from "../../Utilities/colors";

export default function Broker(){
    return(
        <div>
            <Typography variant="h3" align="center" color={headingStyle} sx={{ mb: 2 }}>
                Real-Estate Broker | CS253 (A Grade)
            </Typography>


            <ThemeProvider theme={projTextTheme}>
                <Typography variant="h6" align="left" color={textColour}>
                    <ul>
                        <li>
                        Developed trading platform using <strong>Django, React & MySQL</strong> maintaining OrderBook updated with market & limit orders
                        </li>
                        <li>
                        Implemented <strong>Waterfall Model</strong> with extensive documention on Requirements, Design, Implementation and Testing
                        </li>
                        <li>
                        Designed an intricate system architechture utilising defensive programming and <strong>90 unit tests</strong> to rigorously test the backend
                        </li>
                    </ul>
                </Typography>
            </ThemeProvider>
        </div>
    )
}