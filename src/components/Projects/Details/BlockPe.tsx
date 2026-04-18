import DetailLayout, { Strong } from "../../Utilities/DetailLayout";

export default function BlockPe() {
  return (
    <DetailLayout
      title="BlockPe — Cross-Border Contractual Payment System | CS731 (A* Grade)"
      bullets={[
        <>Developed a <Strong>Blockchain</Strong>-based <Strong>DApp</Strong> on <Strong>Hyperledger Fabric</Strong> with <Strong>GoLang chaincode, TypeScript API and ReactJS</Strong></>,
        <>Implemented <Strong>smart contracts</Strong> for secure and automated cross-border payments between two local or international parties</>,
        <>Designed international payments to route through <Strong>central and forex banks</Strong> with transaction fees and auto tax deduction</>,
        <>Deployed separate chaincodes for each bank and APIs to invoke <Strong>cross-chaincode payments</Strong> between the different banks</>,
      ]}
    />
  );
}
