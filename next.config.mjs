/** @type {import('next').NextConfig} */
const nextConfig = {

            eslint: {
                ignoreDuringBuilds: true,
            },
            experimental: {
                workerThreads: false,
                cpus: 1,
            },
               images: {
                   remotePatterns: [
                       {
                           protocol:"https",
                           hostname:"images.pexels.com"
                        },
                        {
                           protocol:"https",
                           hostname:"media.istockphoto.com"
                       },
                      {
                          protocol:"https",
                          hostname:"static.wixstatic.com"
                       }
                               ]
              }
            };

export default nextConfig;
