import TechStack from "./TechStack";
import { Container, Grid, Typography, createTheme, ThemeProvider, responsiveFontSizes, useMediaQuery } from "@mui/material";
import { headingStyle, textColour, highlightColour } from "../Utilities/colors";


let theme = createTheme();
theme = responsiveFontSizes(theme);

function Skills() {

    return (
        <Container sx={{ mb: 7, mt: 4, minHeight: "100vh"}}>
            <ThemeProvider theme={theme}>
                <Grid container sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12}  sx={{mb: 10}}>
                        <Typography variant="h6" align="justify" color={textColour} >
                            Below is a conservative list of some of the technologies I have worked a with to a decent degree. 
                        </Typography>
                        <TechStack/>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Container>
    );
}

export default Skills;
