import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon (icône d'onglet) : « k » serif italique sur fond sombre. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          color: "#f4f4f2",
          borderRadius: 14,
          fontFamily: "serif",
          fontStyle: "italic",
          fontSize: 42,
          fontWeight: 500,
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
