import type { NextConfig } from "next";

function getSupabaseHostname() {
  try {
    return new URL(
      process.env.NEXT_PUBLIC_SUPABASE_URL ??
        "https://izgxirozmrrqyohqeqvq.supabase.co",
    ).hostname;
  } catch {
    return "izgxirozmrrqyohqeqvq.supabase.co";
  }
}

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: getSupabaseHostname(),
        pathname: "/storage/v1/object/public/Public-Media/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "6mb",
    },
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
