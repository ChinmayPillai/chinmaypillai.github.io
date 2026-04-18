import DetailLayout, { Strong } from "../../Utilities/DetailLayout";

// eslint-disable-next-line react-refresh/only-export-components
export default function ACL() {
  return (
    <DetailLayout
      title="SDE Summer Intern — ACL Digital (ALTEN Group)"
      bullets={[
        <>Programmed a Publish-Subscribe <Strong>Client-Server</Strong> model in <Strong>NodeJS, C++ and C#</Strong> for CoAP, LwM2M and Matter protocols</>,
        <>Integrated three simulators in a <Strong>MERN</Strong> stack <Strong>web application</Strong> and optimised the <Strong>React</Strong> app using lazy loading</>,
        <>Created a <Strong>video conferencing</Strong> application in <Strong>React</Strong> that <Strong>processes audio/video</Strong> data to send to an internal ML API</>,
        <>Developed <Strong>3 IoT simulators</Strong> and a <Strong>video conferencing</Strong> web application for AI Telemedicine, presented as PoC for clients</>,
      ]}
    />
  );
}
