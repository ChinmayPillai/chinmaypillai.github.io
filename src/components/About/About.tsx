import { Container, Typography } from "@mui/material";
import "../Utilities/colors.css"
import { headingStyle } from "../Utilities/colors";
import { Reveal } from "../Utilities/Reveal";
import { useLayoutEffect } from "react";

function About() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <Container sx={{ mb: 10, minHeight: "100vh"}}>
            <Reveal>
                <Typography variant="h2" align="center" color={headingStyle} sx={{ mb: 2, mt: 2}}>
                  About Me
                </Typography>
            </Reveal>
            <div className="badge text-wrap">
                {/* <h1 className="display-1">About Me</h1> */}
                <Reveal>
                    <p className="text-center lead fs-5 fw-normal lh-base about ">
                        I'm an IIT Kanpur graduate with a double major in Electrical Engineering and Physics.
                        I've obtained a minor in Machine Learning, Computer Systems, and Philosophy. Additionally,
                        I'm a 2x national medalist in speed skating.
                    </p>
                </Reveal>
                <br />
                <br />
                <Reveal>
                    <p className="text-center fs-5 fw-normal lh-base about ">
                        I have always had a strong affinity for technology and computers. 
                        I decided to double major in Electrical Engineering because I wanted to understand how the electronics around us 
                        functioned and how to build fascinating things using them. 
                        My passion for computer science led me to pursue several CS and ML courses during my degree, 
                        as well as pursue a career in development, artificial intelligece, DevOps, and Cloud Computing.
                    </p>
                </Reveal>
                <br />
                <br />
                <Reveal>
                    <p className="text-center fs-5 fw-normal lh-base about ">
                        I love to learn, improve myself and grow in all aspects that I can and
                        I'm interested in. I actively use the internet to learn things foreign
                        to me and improve upon those I already know a fair bit about. I explore
                        and learn things that are far and wide outside the typical educational
                        curriculum because I like to do so and, it helps me grow.
                    </p>
                </Reveal>
                    <br />
                    <br />
                <Reveal>
                    <p className="text-center fs-5 fw-normal lh-base about ">
                        I was the State Champion of Speed Skating in all of Andhra Pradesh in my
                        11th and 12th grades and the State Champion in my age group during the
                        9th and 10th grades. It's a sport that I loved to be a part of. The
                        wonderful experiences, including both successes and failures, that I
                        experienced through this, and the incredibly wise, strong, and inspiring
                        people I met on the way, have played a massive role in making me the
                        person I am today. They have had a very positive impact on my
                        perspectives, something I am immensely grateful for. I love playing
                        sports in general and look forward to playing more.
                    </p>
                </Reveal>
                    <br />
                    <br />
                <Reveal>
                    <p className="text-center fs-5 fw-normal lh-base about ">
                        I like solving puzzles and problem-solving. The fastest I've solved a
                        Rubik's cube is within 18.9 sec. I have even taught several people how
                        to solve the Rubik's cube. Teaching is quite enjoyable and extremely
                        rewarding to me. I love showing people the beauty of engineering and
                        science, which seemingly gets overlooked during schooling.
                    </p>
                </Reveal>
                    <br />
                    <br />
                <Reveal>
                    <p className="text-center fs-5 fw-normal lh-base about ">
                        I look to grow as a person while expanding my knowledge, experience, and
                        skill set, making a considerable impact during the process. The people
                        who help me do that are ones who I'm tremendously grateful for.
                    </p>
                </Reveal>
            </div>
        </Container>
    );
}

export default About;
