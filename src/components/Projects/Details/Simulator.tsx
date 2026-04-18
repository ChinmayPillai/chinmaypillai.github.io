import DetailLayout, { Strong } from "../../Utilities/DetailLayout";

export default function Simulator() {
  return (
    <DetailLayout
      title="Gravity Simulator"
      bullets={[
        <>Programmed a <Strong>multi-body gravity simulator</Strong> in <Strong>Python</Strong> with code to animate its evolution over time</>,
        <>Developed an animated <Strong>Solar System Simulator</Strong> with <Strong>98.26% accuracy</Strong> in the orbital time periods of planets</>,
      ]}
    />
  );
}
