import DetailLayout, { Strong } from "../../Utilities/DetailLayout";

// eslint-disable-next-line react-refresh/only-export-components
export default function IITK() {
  return (
    <DetailLayout
      title="ML Model to estimate Free Energy — Prof. Nisanth Nair, IIT Kanpur"
      bullets={[
        <>Programmed a <Strong>Deep Learning Regression Model</Strong> in <Strong>Python</Strong> using <Strong>PyTorch</Strong> to compute high-dimensional energy surfaces</>,
        <>Explored <Strong>Auto Encoders, LLE and Wavelets</Strong> for dimensionality reduction before pivoting to a Neural Network approach</>,
        <>Devised a novel 2-dimensional data structure to resolve memory issues in analysing the free energies of complex compounds</>,
        <>Developed an NN regression model with <Strong>93% accuracy</Strong> for 6D data and a novel model to extend its scope to 8+ dimensions</>,
      ]}
    />
  );
}
