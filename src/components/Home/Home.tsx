import DP from "./DP";
import TechStack from "./TechStack";
import { Container, Grid, Typography, createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { headingStyle, textColour, highlightColour } from "../Utilities/colors";
import { useTypewriter, Cursor } from "react-simple-typewriter";


let theme = createTheme();
theme = responsiveFontSizes(theme);

function Home() {

    const [myPassions] = useTypewriter({
        words: ["Full-Stack Web Dev.", "Machine Learning.", "Blockchain."],
        loop: true,
    })

    return (
        <Container sx={{ mb: 7, mt: 5}}>
            <ThemeProvider theme={theme}>
                <Grid container sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={10}sx={{ mt: 1}}>
                        <div className="mt-2 mb-2">
                            <Typography variant="h4" align="left" color={textColour}>
                                Hi, I'm
                            </Typography>
                            <Typography variant="h1" align="left" color={headingStyle} sx={{mb:1}}>
                                Chinmay Pillai
                            </Typography>
                            <Typography variant="h4" align="left" color={headingStyle}>
                                I'm a
                                <span style={{fontWeight: "bold", color: highlightColour, marginInline: "10px"}}>
                                    Developer
                                </span>
                                from
                                <span style={{fontWeight: "bold", color: highlightColour, marginLeft: "10px"}}>
                                    IIT Kanpur
                                </span>
                            </Typography>
                        </div>
                
                    </Grid>
                    <Grid item xs={2} sx={{ mt: 1 }}>
                        <DP />
                    </Grid>
                    <Grid item xs={12} sx={{mb: 4}}>
                        <Typography variant="h4" align="left" color={headingStyle} sx={{ mb: 2}}>
                            I love
                            <span style={{fontWeight: "bold", color: "#06d6a0", marginLeft: "10px"}}>
                                {myPassions}
                            </span>
                            <span style={{color: "white"}}>
                                <Cursor />
                            </span>
                        </Typography>
                        <Typography variant="h6" align="left" color={textColour} >
                            I am a curious developer studying in IIT Kanpur
                            with <span style={{ fontWeight: 'bold' }}>1.5 years</span> of
                            internship experience in software. I have worked
                            on <span style={{ fontWeight: 'bold' }}>Full Stack Web Applications,
                            AI/ML Models, C++ Driver Development</span> and
                            more during these internships.
                            <br />
                            I am very passionate toward having a significant impact while learning
                            and developing skills as much as possible.
                
                        </Typography>
                        <TechStack/>
                    </Grid>
                
                </Grid>
            </ThemeProvider>
        </Container>
    );
}

export default Home;
