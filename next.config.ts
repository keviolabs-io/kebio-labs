import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autorise l'accès au serveur de dev depuis le réseau local (test mobile).
  // Sans ça, Next 16 bloque les assets/JS de dev servis à une origine ≠ localhost.
  allowedDevOrigins: ["192.168.1.25"],
};

export default nextConfig;
