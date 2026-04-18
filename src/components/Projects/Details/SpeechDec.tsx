import DetailLayout, { Strong } from "../../Utilities/DetailLayout";

export default function SpeechDec() {
  return (
    <DetailLayout
      title="Speech Detection Model"
      bullets={[
        <>Developed a Machine Learning model that identifies all speech segments in an audio file</>,
        <>Achieved <Strong>~97% accuracy</Strong> in estimating speech segments</>,
      ]}
    />
  );
}
