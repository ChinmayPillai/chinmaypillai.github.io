import DetailLayout, { Strong } from "../../Utilities/DetailLayout";

// eslint-disable-next-line react-refresh/only-export-components
export default function MERN() {
  return (
    <DetailLayout
      title="MERN E-Commerce Web App"
      bullets={[
        <>Developed an e-commerce web app using <Strong>React</Strong>, <Strong>ExpressJS</Strong> for API calls and <Strong>MongoDB</Strong> for database management</>,
        <>Implemented <Strong>user authentication</Strong> using <Strong>JWT and data encryption</Strong> through hashing to securely verify and store user data</>,
        <>Integrated <Strong>Redis</Strong> into the architecture to improve performance by caching user data for faster retrieval and reduced latency</>,
        <>Containerised the application using <Strong>Docker and Docker Compose</Strong> and used <Strong>NGINX</Strong> as a reverse proxy</>,
        <>Deployed on <Strong>AWS EC2</Strong> using <Strong>AWS Elastic Beanstalk</Strong> and <Strong>GitHub Actions</Strong> for deployment, scaling and load balancing</>,
        <>Implemented TLS encryption using an <Strong>SSL certificate</Strong> and custom-domain routing using <Strong>AWS Route 53 and Hosted Zones</Strong></>,
      ]}
    />
  );
}
