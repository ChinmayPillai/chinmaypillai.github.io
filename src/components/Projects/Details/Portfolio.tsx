import { Typography } from "@mui/material";
import { headingStyle, textColour } from "../../Utilities/colors";

export default function Portfolio(){
    return(
        <div>
            <Typography variant="h2" align="center" color={headingStyle} sx={{ mb: 2 }}>
                Portfolio Website
            </Typography>


            <Typography variant="h6" align="left" color={textColour}>
                
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                
            </Typography>
        </div>
    )
}