import { Typography } from "@mui/material";
import { headingStyle, textColour } from "../../Utilities/colors";

export default function IITK(){
    return(
        <div>
            <Typography variant="h2" align="center" color={headingStyle} sx={{ mb: 2 }}>
                Under Prof. Nisanth Nair, IIT Kanpur
            </Typography>
            
            <Typography variant="h6" align="left" color={textColour}>
                - Built a model using Neural Networks to compute High-Dimensional analytical Free Energy Surfaces of molecules
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                - Programmed Deep Leaning Regression Model in Python using PyTorch to compute free energy function of molecules
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                - Devised novel 2-Dimensional Data Structure to resolve memory issues in analysing high-dimensional energy surfaces
            </Typography>
            <Typography variant="h6" align="left" color={textColour}>
                - Developed NN Regression Model with 3.53 RMSE for 6D data & novel model to extend scope to 8+ Dimensions
            </Typography>
        </div>
    )
}