import { ImageResponse } from "next/og";

export const alt = "Tejas Morkar — I build and write about LLM-powered software.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0b0c0e",
          color: "#eceef0",
        }}
      >
        <div style={{ fontSize: 32, color: "#7c96ff", letterSpacing: "0.02em" }}>
          Tejas Morkar
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            I build and write about LLM-powered software.
          </div>
          <div style={{ fontSize: 32, color: "#9aa0a6" }}>
            RAG pipelines · agentic systems · shipping ML into real products
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#9aa0a6" }}>tejasmorkar.dev</div>
      </div>
    ),
    size,
  );
}
