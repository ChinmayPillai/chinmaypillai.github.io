import DP from "./DP";
import { Container, Grid, Typography, createTheme, ThemeProvider, responsiveFontSizes, useMediaQuery } from "@mui/material";
import { headingStyle, textColour, highlightColour } from "../Utilities/colors";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Pages from "./Pages";
import { Item } from "../NavBar/Item";


let theme = createTheme();
theme = responsiveFontSizes(theme);

const items: Item[] = [
    {
        name: "My Work",
        link: "/work#",
        internal: true,
        desc: "Read about my current work and imapacts I've made at Blitz.",
        img: "/pages/blitz.png"
    },
    {
        name: "My Internships",
        link: "/interns#",
        internal: true,
        desc: "Read about my past internships, technologies I used, and the skills I developed.",
        img: "/intern/Samsung.jpg"
    },
    {
        name: "My Projects",
        link: "/projects#",
        internal: true,
        desc: "View my projects from courses and personal exploration.",
        img: "/project/MERN.jpg"
    },
    {
        name: "My Skills and Courses",
        link: "/skills#",
        internal: true,
        desc: "Explore my skills in programming languages, frameworks, and tools.",
        img: "/pages/skills.jpg"
    }
];

function Home() {

    const [myPassions] = useTypewriter({
        words: ["Agentic AI.", "DevOps/Cloud Computing.", "Blockchain."],
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
                            <Typography variant="h4" align="left" color={textColour}>
                                Hi, I'm
                            </Typography>
                            <Typography variant={isScreenSmallPlus ? "h1" : "h2"} align="left" color={headingStyle} sx={{mb:1, whiteSpace: "nowrap"}}>
                                Chinmay Pillai
                            </Typography>
                            <Typography variant={isScreenSmallPlus ? "h4" : "h5"} align="left" color={headingStyle}>
                                <span style={{ whiteSpace: "nowrap" }}>
                                    {isScreenMediumPlus ? "I'm a " : "A "}
                                    <span style={{ fontWeight: "bold", color: highlightColour}}>
                                        Developer
                                    </span>
                                    {" from "}
                                    <span style={{ fontWeight: "bold", color: highlightColour}}>
                                        IIT Kanpur
                                    </span>
                                </span>
                            </Typography>
                        </div>
                
                    </Grid>
                    {isScreenMediumPlus ? (<Grid item xs={2} sx={{ mt: 1 }}>
                        <DP />
                    </Grid>) : null }
                    <Grid item xs={12}>
                        <Typography variant={isScreenSmallPlus ? "h4" : "h5"} align="left" color={headingStyle} sx={{ mb: 2}}>
                            {"I love "}
                            <span style={{fontWeight: "bold", color: "#06d6a0"}}>
                                {myPassions}
                            </span>
                            <span style={{color: "white"}}>
                                <Cursor />
                            </span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}  sx={{mb: 4}}>
                        <Typography variant="h6" align="justify" color={textColour} >
                            I am a curious developer graduate of IIT Kanpur
                            with <span style={{ fontWeight: 'bold' }}>2 years</span> of
                            internship experience in software. I have worked
                            on <span style={{ fontWeight: 'bold' }}>Agentic AI, ML Models, DevOps / Cloud Computing, 
                            Full Stack Web Applications, C++ Driver Development</span> and
                            more. I am very passionate toward having a significant impact while learning
                            and developing skills as much as possible.
                
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {items.map( (item, index) => (
                            <Pages key={index} item={item} /> 
                        ) )}
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Container>
    );
}

export default Home;
