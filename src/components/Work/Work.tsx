import { Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { tokens } from "../Utilities/colors";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BlitzImage from "./BlitzImage";

function Work() {
  const [myWork] = useTypewriter({
    words: ["Agentic AI.", "AWS.", "DevOps."],
    loop: true,
  });

  const isScreenMediumPlus = useMediaQuery("(min-width: 700px)");

  return (
    <Container sx={{ mb: 8, mt: 5, minHeight: "100vh" }}>
      <Grid container spacing={4} sx={{ mb: 4, mt: 1 }}>
        <Grid item xs={isScreenMediumPlus ? 9 : 12}>
          <Typography variant="h1" sx={{ mb: 1 }}>
            Blitz
          </Typography>
          <Typography variant="h5" color="text.secondary">
            A tech-driven startup innovating the Indian logistics industry.
          </Typography>
        </Grid>
        {isScreenMediumPlus && (
          <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <BlitzImage />
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="h4" color="text.primary">
            I work on{" "}
            <Typography component="span" variant="inherit" color="primary.main" sx={{ fontWeight: 600 }}>
              {myWork}
            </Typography>
            <Typography component="span" variant="inherit" sx={{ color: tokens.text.secondary }}>
              <Cursor />
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <Typography variant="body1" color="text.primary">
              I am currently working at Blitz as a Software Engineer under the CTO. I work primarily on Agentic AI and Cloud Computing with a good amount of DevOps involved in deploying and maintaining my projects.
            </Typography>
            <Typography variant="body1" color="text.primary">
              I have built a Livekit Agentic Caller, a LangGraph chatbot, automated payment verification using OCR, and worked on revenue automation among other projects.
            </Typography>
            <Typography variant="body1" color="text.primary">
              My voice agent conducts <strong style={{ color: tokens.accent }}>4000+ calls per day</strong> to confirm customer requirements and act on them. My AI chatbot handles around <strong style={{ color: tokens.accent }}>1500 conversations per day</strong> to address customer concerns and raise escalations. My CoD automation has saved hundreds of hours of manual work.
            </Typography>
            <Typography variant="body1" color="text.primary">
              To deploy my projects I use AWS services including Lambda, ECS &amp; ECR, SQS &amp; SNS, OpenSearch, S3, Route 53, EventBridge, IAM, Secrets Manager, and CloudWatch.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Work;
