import { ImageResponse } from "next/og";

export const alt = "Alnajjar Firm — Creative Media Agency in Lebanon";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#171717",
          position: "relative",
          fontFamily: "system-ui, -apple-system, Arial, sans-serif",
        }}
      >
        {/* Gold top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #deb841, #c9a530, #deb841)",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-3px",
            marginBottom: 14,
            lineHeight: 1,
          }}
        >
          Alnajjar Firm
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 80,
            height: 3,
            backgroundColor: "#deb841",
            borderRadius: 2,
            marginBottom: 28,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 30,
            color: "#deb841",
            fontWeight: 700,
            marginBottom: 28,
            letterSpacing: "-0.5px",
          }}
        >
          Creative Media Agency in Lebanon
        </div>

        {/* Services row */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: 900,
            marginBottom: 40,
          }}
        >
          {[
            "Social Media",
            "Content Creation",
            "Reels Production",
            "Branding",
            "Video Editing",
          ].map((s) => (
            <div
              key={s}
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid rgba(222,184,65,0.4)",
                color: "#c5c5c5",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 20,
            color: "#666",
            letterSpacing: "0.5px",
          }}
        >
          alnajjarfirmlb.com
        </div>

        {/* Bottom gold bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            backgroundColor: "rgba(222,184,65,0.3)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
