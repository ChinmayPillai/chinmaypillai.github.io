import DetailLayout, { Strong } from "../../Utilities/DetailLayout";

export default function Quazar() {
  return (
    <DetailLayout
      title="SDE Winter Intern — Quazar Technologies"
      bullets={[
        <>Programmed an animated <Strong>Solar System / Gravity Simulator</Strong> in <Strong>Python</Strong> with <Strong>98.26% accuracy</Strong> in orbital time periods</>,
        <>Developed <Strong>drivers</Strong> in <Strong>C++</Strong> that scan, connect, poll, configure and monitor the angular velocity of a graphene spin coater</>,
        <>Programmed <Strong>Bash and Python scripts</Strong> for <Strong>image and video processing</Strong> on the feed from a microscope</>,
        <>Built a <Strong>data acquisition engine</Strong> and <Strong>GUI</Strong> in <Strong>C++</Strong> and processed the <Strong>live feed</Strong> from a microscope using <Strong>Bash and Python</Strong></>,
      ]}
    />
  );
}
