import { ImageResponse } from "next/og";

export const alt = "Tejas Morkar | Software engineer with a strong interest in deep learning.";
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
          <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Software engineer with a strong interest in deep learning.
          </div>
          <div style={{ fontSize: 32, color: "#9aa0a6" }}>
            Software Engineer at Cohesity | Deep Learning and LLMs
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#9aa0a6" }}>tejasmorkar.dev</div>
      </div>
    ),
    size,
  );
}
