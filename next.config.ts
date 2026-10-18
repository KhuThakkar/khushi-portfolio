import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old addresses from the previous layout keep working.
  async redirects() {
    return [
      { source: "/projects", destination: "/work", permanent: false },
      { source: "/projects/premo-ventures", destination: "/work/premo-ventures", permanent: false },
      { source: "/projects/uniflex-nvc-finalist", destination: "/work/uniflex-nvc-finalist", permanent: false },
      { source: "/projects/geo-filtered-news-discovery", destination: "/appendix/geo-filtered-news-discovery", permanent: false },
      { source: "/projects/oasis-medication-reminder", destination: "/appendix/oasis-medication-reminder", permanent: false },
      { source: "/projects/:slug", destination: "/appendix", permanent: false },
    ];
  },
};

export default nextConfig;
