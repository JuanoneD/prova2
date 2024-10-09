/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{protocol:"https",hostname:"static.wikia.nocookie.net"}]
    },
    rewrites:()=>{
        return[
            {
                source:"/primeira-rota",
                destination:"/route-one"
            }
        ]
    }
};

export default nextConfig;
