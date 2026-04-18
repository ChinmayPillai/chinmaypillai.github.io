import DetailLayout, { Strong } from "../../Utilities/DetailLayout";

export default function Portfolio() {
  return (
    <DetailLayout
      title="Portfolio Website"
      bullets={[
        <>Developed and deployed a <Strong>React</Strong> and <Strong>Material UI</Strong> portfolio site using Hooks and the Context API for complex state management</>,
        <>Used <Strong>Framer Motion</Strong> to develop engaging animations</>,
      ]}
    />
  );
}
