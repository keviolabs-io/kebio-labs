import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Kevio Labs — Agence web, applications & IA à Lyon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Image de partage (Open Graph / Twitter) : orbe 3D + wordmark, façon hero. */
export default function Image() {
  const orb = readFileSync(join(process.cwd(), "public/hero/object-og.png"));
  const orbSrc = `data:image/png;base64,${orb.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
          background:
            "radial-gradient(120% 130% at 78% 40%, #1b1b20 0%, #08080a 55%, #050505 100%)",
          color: "#f4f4f2",
        }}
      >
        {/* Orbe 3D (visuel de marque) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={orbSrc}
          alt=""
          width={760}
          height={760}
          style={{
            position: "absolute",
            right: -90,
            top: 40,
            width: 760,
            height: 760,
            objectFit: "contain",
          }}
        />

        {/* Voile pour la lisibilité du texte à gauche */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, #050505 20%, rgba(5,5,5,0.4) 55%, transparent 80%)",
          }}
        />

        {/* Texte */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 90px",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              fontFamily: "serif",
              fontStyle: "italic",
              fontSize: 118,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            kevio labs
            <span style={{ fontSize: 36, color: "#8f8f8f", marginLeft: 10 }}>
              ®
            </span>
          </div>
          <div
            style={{
              marginTop: 34,
              fontFamily: "sans-serif",
              fontSize: 38,
              color: "#c9c9c7",
              letterSpacing: "-0.01em",
              maxWidth: 620,
              lineHeight: 1.25,
            }}
          >
            Agence web, applications &amp; IA à Lyon
          </div>
          <div
            style={{
              marginTop: 26,
              display: "flex",
              fontFamily: "sans-serif",
              fontSize: 24,
              color: "#7d7d7d",
            }}
          >
            Sites · Applications · Automatisation IA · Publicité · SEO
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
