import DetailLayout, { Strong } from "../../Utilities/DetailLayout";

export default function Samsung() {
  return (
    <DetailLayout
      title="ML Research Intern, Advanced Research Group — Samsung, Bangalore"
      bullets={[
        <>Developed ML models, analysed and denoised UWB phasor data to enhance camera auto-focus performance</>,
        <>Programmed a <Strong>C++ Gradient Boost</Strong> model with <Strong>76.3% F1 score</Strong> using <Strong>scikit-learn</Strong> and <Strong>ONNX</Strong> for motion classification</>,
        <>Improved predictive score by exploring and comparing <Strong>Attention</Strong>-based models, <Strong>C-SVMs, GMMs, and Random Forests</Strong></>,
        <>Created an <Strong>LSTM</Strong> motion classifier with <Strong>85% F1 score</Strong> using <Strong>PyTorch</Strong> and designed an algorithmic object distance predictor</>,
      ]}
    />
  );
}
