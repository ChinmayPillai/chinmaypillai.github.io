import DetailLayout, { Strong } from "../../Utilities/DetailLayout";

export default function Broker() {
  return (
    <DetailLayout
      title="Real-Estate Broker | CS253 (A Grade)"
      bullets={[
        <>Developed a trading platform using <Strong>Django, React and MySQL</Strong> maintaining an OrderBook updated with market and limit orders</>,
        <>Implemented the <Strong>Waterfall Model</Strong> with extensive documentation on Requirements, Design, Implementation and Testing</>,
        <>Designed an intricate system architecture using defensive programming and <Strong>90 unit tests</Strong> to rigorously test the backend</>,
      ]}
    />
  );
}
