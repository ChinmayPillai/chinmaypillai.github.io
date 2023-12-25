import { Container, Typography } from "@mui/material";
import "../Utilities/colors.css"
import { headingStyle } from "../Utilities/colors";

function About() {

    return (
        <Container sx={{ mb: 10}}>
            <Typography variant="h2" align="center" color={headingStyle} sx={{ mb: 2, mt: 2}}>
              About Me
            </Typography>
            <div className="badge text-wrap">
                {/* <h1 className="display-1">About Me</h1> */}
                <p className="text-start lead fs-5 fw-normal lh-base about">
                    I am an IIT Kanpur student pursuing a Double Major in Electrical Engineering + Physics, 
                    and a Minor in Machine Learning. Additionally, 
                    this, I'm a 2x National Medalist in Speed Skating.
                </p>
                <br />
                <br />
                <p className="text-start fs-5 fw-normal lh-base about">
                    I love to learn, improve myself and grow in all aspects that I can and
                    I'm interested in. I actively use the internet to learn things foreign
                    to me and improve upon those I already know a fair bit about. I explore
                    and learn things that are Far and Wide outside the typical educational
                    curriculum because I like to do so and, it helps me grow.
                </p>
                <br />
                <br />
                <p className="text-start fs-5 fw-normal lh-base about">
                    I was the State Champion of Speed Skating in all of Andhra Pradesh in my
                    11th and 12th grades and the State Champion in my age group during the
                    9th and 10th grades. It's a sport that I loved to be a part of. The
                    wonderful experiences, including both successes and failures, that I
                    experienced through this, and the incredibly wise, strong, and inspiring
                    people I met on the way, have played a massive role in making me the
                    person I am today and have had a very positive impact on my
                    perspectives, something I am immensely grateful for. I love playing
                    sports in general and look forward to playing more.
                </p>
                <br />
                <br />
                <p className="text-start fs-5 fw-normal lh-base about">
                    I like solving puzzles and problem-solving. The fastest I've solved a
                    Rubik's cube is within 18.9 sec. I have even taught several people how
                    to solve the Rubik's cube. Teaching is quite enjoyable and extremely
                    rewarding to me. I love showing people the beauty of engineering and 
                    science, which seemingly gets overlooked during schooling.
                </p>
                <br />
                <br />
                <p className="text-start fs-5 fw-normal lh-base about">
                    I look to grow as a person while expanding my knowledge, experience, and
                    skill set, making a considerable impact during the process. The people
                    who help me do that are ones who I'm tremendously grateful for.
                </p>
            </div>
        </Container>
    );
}

export default About;
