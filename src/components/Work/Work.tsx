import { Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import type { ReactNode } from "react";
import { tokens } from "../Utilities/colors";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BlitzImage from "./BlitzImage";
import PageMeta from "../Utilities/PageMeta";
import { Strong } from "../Utilities/DetailLayout";

interface Section {
  heading: string;
  body: ReactNode;
}

const sections: Section[] = [
  {
    heading: "Agentic AI",
    body: (
      <>
        I built end-to-end Livekit + LangGraph voice and chat support agents
        sharing a single MCP server — they handle 3K+ users a day at 90%
        successful closure, read sentiment to raise 18 different ticket types,
        and escalate to humans when the conversation stalls, saving roughly{" "}
        <Strong>Rs. 1 Cr+/yr</Strong>. A second outbound voice agent calls
        customers to confirm trip-cancellation reasons; an LLM-driven Lambda
        diarizes the transcripts and classifies intent asynchronously,
        replacing an outsourced calling team for another{" "}
        <Strong>Rs. 1 Cr/yr</Strong>. Both ship on AWS ECS with Redis caching
        and asyncio task groups to keep I/O latency low.
      </>
    ),
  },
  {
    heading: "Algorithms & ML",
    body: (
      <>
        I designed an EMA-based order-ranking algorithm that maximises
        throughput of our weight-scanning infrastructure — Python Lambdas
        triggered by SNS and crons update a Redis score, with DB writes
        deferred to an SQS queue polled by a Java Spring-Boot consumer. Net
        impact: <Strong>+Rs. 6.5 Cr/yr in revenue</Strong>. I also trained a
        PyTorch ANN binary classifier that predicts customer unavailability at
        80% recall, using 57 numerical and 5 categorical features and a pipeline of 2 Spring-Boot services, 6 Lambdas, 4
        EventBridge crons, Step Functions and SQS — lifting delivery rate by
        1.1% and saving <Strong>Rs. 36 L/yr</Strong>. Additionally, a
        periodic algorithm that warns and blacklists fraudulent riders, plus
        LLM-driven plugs for loopholes in our zero-fake system — added a 2.5%
        lift in on-time delivery and FASR.
      </>
    ),
  },
  {
    heading: "Infrastructure",
    body: (
      <>
        Everything deploys through AWS — Lambda, ECS/ECR, SNS/SQS, OpenSearch,
        S3, Route 53, EventBridge, IAM, Secrets Manager, CloudWatch —
        provisioned inside VPCs via Terraform, deployment BASH scripts using AWS CLI, the console, and/or
        CircleCI.
      </>
    ),
  },
];

function Work() {
  const [myWork] = useTypewriter({
    words: ["Agentic AI & Machine Learning.", "AWS & DevOps.", "System Design & Backend."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
  });

  const isScreenMediumPlus = useMediaQuery("(min-width: 700px)");

  return (
    <Container sx={{ mb: 8, mt: 5, minHeight: "100vh" }}>
      <PageMeta
        title="Work"
        description="Software Engineer at Blitz building Agentic AI voice/chat agents, ML-driven delivery automation, and AWS infrastructure."
      />
      <Grid container spacing={4} sx={{ mb: 4, mt: 1 }}>
        <Grid item xs={isScreenMediumPlus ? 9 : 12}>
          <Typography variant="h1" component="h1" sx={{ mb: 1 }}>
            Blitz
          </Typography>
          <Typography variant="h5" component="p" color="text.secondary">
            A tech-driven startup innovating the Indian logistics industry.
          </Typography>
        </Grid>
        {isScreenMediumPlus && (
          <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <BlitzImage />
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" color="text.primary">
            I work on{" "}
            <Typography component="span" variant="inherit" color="primary.main" sx={{ fontWeight: 600 }}>
              {myWork}
            </Typography>
            <Typography component="span" variant="inherit" aria-hidden="true" sx={{ color: tokens.text.secondary }}>
              <Cursor />
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <Typography variant="body1" color="text.primary">
              I'm a Software Engineer at Blitz, working under the CTO on
              agentic AI, ML pipelines, and AWS-deployed automation. My
              projects this past year have driven{" "}
              <Strong>roughly Rs. 9 Cr+ in combined annual revenue and savings</Strong>.
            </Typography>
          </Stack>
        </Grid>
        {sections.map((section) => (
          <Grid key={section.heading} item xs={12}>
            <Stack spacing={1.5}>
              <Typography
                variant="h5"
                component="h3"
                sx={{ color: tokens.text.heading, fontWeight: 600 }}
              >
                {section.heading}
              </Typography>
              <Typography variant="body1" color="text.primary">
                {section.body}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Work;
