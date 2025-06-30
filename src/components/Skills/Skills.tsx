import TechStack from "./TechStack";
import { Container, Grid, Typography, createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { headingStyle, textColour } from "../Utilities/colors";
import Courses from "./Courses";


let theme = createTheme();
theme = responsiveFontSizes(theme);

function Skills() {

    return (
        <Container sx={{ mb: 7, mt: 4, minHeight: "100vh"}}>
            <ThemeProvider theme={theme}>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" color={headingStyle} sx={{ mb: 2 }}>
                        Skills and Courses
                    </Typography>
                </Grid>
                <Grid container sx={{ mb: 2, mt: 3 }}>
                    <Grid item xs={12}  sx={{mb: 5}}>
                        <Typography variant="h6" align="justify" color={textColour} >
                            Below is a conservative list of some of the technologies I have worked a with to a decent degree. 
                        </Typography>
                        <TechStack/>
                    </Grid>
                    <Grid item xs={12}  sx={{mb: 10}}>
                        <Courses/>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Container>
    );
}

export default Skills;
