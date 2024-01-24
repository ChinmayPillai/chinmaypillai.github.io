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
                            Programmed <span style={{ fontWeight: 'bold' }}>Deep Leaning Regression Model</span> in <span style={{ fontWeight: 'bold' }}>Python</span> using <span style={{ fontWeight: 'bold' }}>PyTorch</span> to compute high-dimensional energy surfaces
                        </li>
                        <li>
                            Explored <span style={{ fontWeight: 'bold' }}>Auto Encoders, LLE & Wavelets</span> for dimensionality reduction, before pivoting to Neural Network approach
                        </li>
                        <li>
                            Devised novel 2-Dimensional Data Structure to resolve memory issues in analysing the free energies of complex compounds
                        </li>
                        <li>
                            Developed an NN Regression Model with <span style={{ fontWeight: 'bold' }}>93% accuracy</span> for 6D data & novel model to extend its scope to 8+ Dimensions
                        </li> 
                    </ul>
                </Typography>
            </ThemeProvider>
        </div>
    )
}