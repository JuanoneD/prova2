/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{protocol:"https",hostname:"static.wikia.nocookie.net"},{protocol:"https",hostname:"disney.fandom.com"}]
    },
    rewrites:()=>{
        return[
            {
                source:"/primeira-rota",
                destination:"/route-one"
            },
            {
                source:"/segunda-rota",
                destination:"/route-two"
            }
        ]
    }
};

export default nextConfig;
