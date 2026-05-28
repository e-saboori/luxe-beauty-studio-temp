const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "luxe-beauty-studio-temp";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
        images: {
          unoptimized: true
        }
      }
    : {})
};

export default nextConfig;
