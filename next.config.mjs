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
                       },
                       {
                            protocol: "https",
                            hostname: "people.pic1.co",
                        },
                        {
                             protocol: "https",
                             hostname: "app-uploads-cdn.fera.ai",
                       },
                               ],
              },
            };

export default nextConfig;
