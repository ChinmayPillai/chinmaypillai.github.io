import { Typography, ThemeProvider } from "@mui/material";
import { headingStyle, textColour, projTextTheme } from "../../Utilities/colors";

export default function BlockPe(){
    return(
        <div>
            <Typography variant="h3" align="center" color={headingStyle} sx={{ mb: 2 }}>
                BlockPe - Cross-Border Contractual Payment System | CS731 (A* Grade)
            </Typography>


            <ThemeProvider theme={projTextTheme}>
                <Typography variant="h6" align="left" color={textColour}>
                    <ul>
                        <li>
                            Developed a <strong>Blockchain</strong> based <strong>DApp</strong> on <strong>Hyperledger Fabric</strong> with <strong>GoLang chaincode, TypeScript API and ReactJS</strong>
                        </li>
                        <li>
                            Implemented <strong>Smart Contracts</strong> for secure and automated cross-border payments between 2 local or international parties
                        </li>
                        <li>
                            Designed international payments to route through <strong>central and forex banks</strong> with transaction fees and Auto-Tax Deduction
                        </li>
                        <li>
                            Deployed separate chaincodes for each bank and APIs to invoke <strong>cross-chainocde payment</strong> between the different banks
                        </li>
                    </ul>
                </Typography>
            </ThemeProvider>
        </div>
    )
}