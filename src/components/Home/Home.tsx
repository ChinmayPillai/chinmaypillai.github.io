import DP from "./DP";
import TechStack from "./TechStack";
import { Container, Grid, Typography } from "@mui/material";
import { headingStyle, textColour } from "../Utilities/colors";

function Home() {

    return (
        <Container sx={{ mb: 10}}>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                {/* <Grid item xs={12} >
                    
                </Grid> */}
                <Grid item xs={8}>  
                    <div className="mt-2 mb-2">
                        <Typography variant="h4" align="left" color={textColour}>
                            Hi, I'm 
                        </Typography>
                        <Typography variant="h1" align="left" color={headingStyle}>
                            Chinmay Pillai
                        </Typography>
                        <Typography variant="h2" align="left" color={headingStyle}>
                            I'm a Developer
                        </Typography>
                    </div>

                    <Typography variant="h6" align="left" color={textColour} >
                        I am a curious developer studying in IIT Kanpur
                        with <span style={{ fontWeight: 'bold' }}>1.5 years</span> of 
                        internship experience in software. I have worked 
                        on <span style={{ fontWeight: 'bold' }}>Full Stack Web Applications, 
                        AI/ML Models, C++ Driver Development</span> and 
                        more during these internships.
                        <br />
                        <br />
                        I am very passionate toward having a significant impact while learning 
                        and developing skills as much as possible.
                        
                    </Typography>
                    <Grid item sx={{ mb: 4, mt: 5 }}>
                        <TechStack />
                    </Grid>
                </Grid>
                <Grid item xs={4} sx={{ mt: 1 }}>
                    <DP />
                </Grid>
                
            </Grid>
        </Container>
    );
}

export default Home;
