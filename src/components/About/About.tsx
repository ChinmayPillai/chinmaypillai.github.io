import { Container, Stack, Typography } from "@mui/material";
import { Reveal } from "../Utilities/Reveal";
import PageMeta from "../Utilities/PageMeta";

const paragraphs = [
  "I'm an IIT Kanpur graduate with a double major in Electrical Engineering and Physics. I've obtained a minor in Machine Learning, Computer Systems, and Philosophy. Additionally, I'm a 2× national medalist in speed skating.",
  "I have always had a strong affinity for technology and computers. I decided to double major in Electrical Engineering because I wanted to understand how the electronics around us functioned and how to build fascinating things using them. My passion for computer science led me to pursue several CS and ML courses during my degree, as well as pursue a career in development, artificial intelligence, DevOps, and cloud computing.",
  "I love to learn, improve myself, and grow in all aspects that I can and am interested in. I actively use the internet to learn things foreign to me and to improve upon those I already know a fair bit about. I explore and learn things that are far and wide outside the typical educational curriculum because I like to do so and it helps me grow.",
  "I was the State Champion of Speed Skating in all of Andhra Pradesh in my 11th and 12th grades, and the State Champion in my age group during the 9th and 10th grades. It's a sport I loved being a part of. The wonderful experiences — both successes and failures — and the incredibly wise, strong, inspiring people I met on the way have played a massive role in making me the person I am today. I'm immensely grateful for the positive impact they've had on my perspectives. I love sports in general and look forward to playing more.",
  "I like solving puzzles and problem-solving. The fastest I've solved a Rubik's Cube is 18.9 seconds. I have even taught several people how to solve it. Teaching is enjoyable and extremely rewarding to me — I love showing people the beauty of engineering and science, which seemingly gets overlooked during schooling.",
  "I look to grow as a person while expanding my knowledge, experience, and skill set, making a considerable impact during the process. The people who help me do that are ones I'm tremendously grateful for.",
];

function About() {
  return (
    <Container sx={{ mb: 8, mt: 5, minHeight: "100vh" }}>
      <PageMeta
        title="About"
        description="About Chinmay Pillai — IIT Kanpur graduate, developer, 2× national medalist in speed skating, Rubik's cube enthusiast."
      />
      <Reveal>
        <Typography variant="h2" align="center" sx={{ mb: 4 }}>
          About Me
        </Typography>
      </Reveal>
      <Stack spacing={3}>
        {paragraphs.map((p, i) => (
          <Reveal key={i}>
            <Typography variant="body1" align="center" color="text.primary">
              {p}
            </Typography>
          </Reveal>
        ))}
      </Stack>
    </Container>
  );
}

export default About;
