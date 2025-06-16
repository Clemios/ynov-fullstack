interface Route {
    url: string;
    auth: boolean;
    creditCheck: boolean;
    rateLimit?: {
        windowMs: number;
        max: number;
    };
    proxy: {
        target: string;
        router?: { [key: string]: string };
        changeOrigin: boolean;
        pathFilter?: string;
        pathRewrite?: { [key: string]: string };
    };
}

const ROUTES: Route[] = [
    {
        url: '/login',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost:5051",
            changeOrigin: true,
        }
    },
    {
        url: '/public-rest-ressource',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost:5052",
            changeOrigin: true,
        }
    }
];

export { ROUTES, Route };