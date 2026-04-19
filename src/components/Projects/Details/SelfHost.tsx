import DetailLayout, { Strong } from "../../Utilities/DetailLayout";

export default function SelfHost() {
  return (
    <DetailLayout
      title="Self Hosing LLMs and Servers"
      bullets={[
        <>Self-hosted open-source LLMs and Stable Diffusion through Ollama, OpenWebUI and ComfyUI</>,
        <>Self-hosted a server on Raspberry Pi using Nginx and <Strong>Cloudflare Tunnels</Strong></>
      ]}
    />
  );
}
