import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Icône iOS (ajout à l'écran d'accueil). */
export default function AppleIcon() {
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
          fontFamily: "serif",
          fontStyle: "italic",
          fontSize: 110,
          fontWeight: 500,
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
