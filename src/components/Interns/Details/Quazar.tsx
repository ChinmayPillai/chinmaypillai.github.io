import { Typography, ThemeProvider } from "@mui/material";
import {
  headingStyle,
  textColour,
  projTextTheme,
} from "../../Utilities/colors";

export default function Quazar() {
  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        color={headingStyle}
        sx={{ mb: 2 }}
      >
        Quazar
      </Typography>

      <ThemeProvider theme={projTextTheme}>
        <Typography variant="h6" align="left" color={textColour}>
          <ul>
            <li>
              Programmed an animated <span style={{ fontWeight: 'bold' }}>Solar System/Gravity Simulator</span> in <span style={{ fontWeight: 'bold' }}>Python</span>{" "}
              with <span style={{ fontWeight: 'bold' }}>98.26% accuracy</span> in orbital time periods
            </li>
            <li>
              Developed <span style={{ fontWeight: 'bold' }}>Drivers</span> in <span style={{ fontWeight: 'bold' }}>C++</span> which scan, connect, poll, configure and
              monitor the angular velocity of a graphene spin coater
            </li>
            <li>
              Programmed <span style={{ fontWeight: 'bold' }}>BASH & Python Scripts</span> for <span style={{ fontWeight: 'bold' }}>Image and Video Processing</span>,
              respectively, on the feed from a Microscope
            </li>
            <li>
              Built a <span style={{ fontWeight: 'bold' }}>Data Acquisition Engine</span> & <span style={{ fontWeight: 'bold' }}>GUI</span> in <span style={{ fontWeight: 'bold' }}>C++</span> and 
              processed the <span style={{ fontWeight: 'bold' }}>live feed</span> from microscope using <span style={{ fontWeight: 'bold' }}>BASH & Python</span>
            </li>
          </ul>
        </Typography>
      </ThemeProvider>
    </div>
  );
}
