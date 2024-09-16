/** @type {import('next').NextConfig} */
const nextConfig = {

            eslint: {
                ignoreDuringBuilds: true,
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
