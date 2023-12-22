import { Typography } from "@mui/material";
import { headingStyle, textColour } from "../../Utilities/colors";

export default function Samsung(){
    return(
        <div>
            <Typography variant="h2" align="center" color={headingStyle} sx={{ mb: 2 }}>
                Samsung
            </Typography>
            <Typography variant="h6" align="center" color={textColour}>
                Upcoming Intern at Samsung Research Institute, Bangalore in Software Developer Role
            </Typography>
        </div>
    )
}