import { Typography, ThemeProvider } from "@mui/material";
import { headingStyle, textColour, projTextTheme } from "../../Utilities/colors";

export default function Samsung(){
    return(
        <div>
            <Typography variant="h3" align="center" color={headingStyle} sx={{ mb: 2 }}>
                ML Research Intern, Advanced Research Group - Samsung, Bangalore
            </Typography>

            <ThemeProvider theme={projTextTheme}>
                <Typography variant="h6" align="left" color={textColour}>
                    <ul>
                        <li>
                            Developed ML models, analysed, and denoised UWB phasor data to enhance camera auto focus performance
                        </li>
                        <li>  
                            Programmed <strong>C++ Gradient Boost</strong> model with <strong>76.3% f1 score</strong> using <strong>scikit-learn</strong> & <strong>ONNX</strong> for motion classification
                         </li>

                        <li>
                            Improved predictive score by exploring & comparing <strong>Attention</strong>-based models, <strong>C-SVMs, GMMs, & Random Forests</strong>
                        </li>
                        <li>
                            Created an <strong>LSTM</strong> motion classifier with <strong>85% f1 score</strong> using <strong>PyTorch</strong> & designed an algorithmic object distance predictor
                        </li>
                    </ul>
                </Typography>
            </ThemeProvider>

        </div>
    )
}