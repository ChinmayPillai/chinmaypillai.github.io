import { Typography, ThemeProvider } from "@mui/material";
import { headingStyle, textColour, projTextTheme } from "../../Utilities/colors";

export default function IITK(){
    return(
        <div>
            <Typography variant="h4" align="center" color={headingStyle} sx={{ mb: 2 }}>
                ML Model to estimate Free-Energy | Prof. Nisanth Nair, IIT Kanpur
            </Typography>

            <ThemeProvider theme={projTextTheme}>
                <Typography variant="h6" align="left" color={textColour}>
                    <ul>
                        <li>
                            Built a model using Neural Networks to compute High-Dimensional analytical Free Energy Surfaces of molecules
                        </li>
                        <li>
                            Programmed Deep Leaning Regression Model in Python using PyTorch to compute free energy function of molecules
                        </li>
                        <li>
                            Devised novel 2-Dimensional Data Structure to resolve memory issues in analysing high-dimensional energy surfaces
                        </li>
                        <li>
                            Developed NN Regression Model with 3.53 RMSE for 6D data & novel model to extend scope to 8+ Dimensions
                        </li> 
                    </ul>
                </Typography>
            </ThemeProvider>
        </div>
    )
}