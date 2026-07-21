import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autorise l'accès au serveur de dev depuis le réseau local (test mobile).
  // Sans ça, Next 16 bloque les assets/JS de dev servis à une origine ≠ localhost.
  allowedDevOrigins: ["192.168.1.25"],

  // En-têtes de sécurité (équivalent .htaccess, version Vercel).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
