import { Container, Grid, Typography, createTheme, ThemeProvider, responsiveFontSizes, useMediaQuery } from "@mui/material";
import { headingStyle, textColour } from "../Utilities/colors";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BlitzImage from "./BlitzImage";


let theme = createTheme();
theme = responsiveFontSizes(theme);

function Work() {

    const [myWork] = useTypewriter({
        words: ["Agentic AI.", "AWS.", "DevOps."],
        loop: true,
    })

    const isScreenMediumPlus = useMediaQuery('(min-width: 700px)');
    const isScreenSmallPlus = useMediaQuery('(min-width: 400px)');

    return (
        <Container sx={{ mb: 7, mt: 5, minHeight: "100vh"}}>
            <ThemeProvider theme={theme}>
                <Grid container sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={10}sx={{ mt: 1}}>
                        <div className="mt-2 mb-2">
                            <Typography variant={isScreenSmallPlus ? "h1" : "h2"} align="left" color={headingStyle} sx={{mb:1, whiteSpace: "nowrap"}}>
                                Blitz
                            </Typography>
                            <Typography variant={isScreenSmallPlus ? "h5" : "h6"} align="left" color={textColour}>
                                <span style={{ whiteSpace: "nowrap" }}>
                                    {"A tech driven startup innovating the Indian logistics industry."}
                                </span>
                            </Typography>
                        </div>
                
                    </Grid>
                    {isScreenMediumPlus ? (<Grid item xs={2} sx={{ mt: 1 }}>
                        <BlitzImage />
                    </Grid>) : null }
                    <Grid item xs={12}>
                        <Typography variant={isScreenSmallPlus ? "h4" : "h5"} align="left" color={headingStyle} sx={{ mb: 2}}>
                            {"I work on "}
                            <span style={{fontWeight: "bold", color: "#06d6a0"}}>
                                {myWork}
                            </span>
                            <span style={{color: "white"}}>
                                <Cursor />
                            </span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}  sx={{mb: 4}}>
                        <Typography variant="h6" align="justify" color={textColour} >
                            I am currently working at Blitz as a Software Engineer, directly under the CTO. I work primarily on Agentic AI and Cloud Computing with good amound of DevOps involved in deploying and maintaining my projects.
                            <br />
                            <br />
                            I have made a LangGraph Chatbot, Livekit Agentic Caller, automated payment verifination using OCR, worked on revenue automation and other projects.
                            <br />
                            My chatbot has aroundd 1500 conversation per day and my CoD automation has saved hundreds of hours of manual work.
                            <br />  
                            <br />
                            To deploy my projects, I use AWS services like Lambda, ECS & ECR, SQS & SNS, S3, Route 53, EventBridge, IAM, Secrets Manager, Cloudwatch and more.             
                        </Typography>
                    </Grid>
                
                </Grid>
            </ThemeProvider>
        </Container>
    );
}

export default Work;
