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
        url: '/users',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://user_app:9000",
            changeOrigin: true,
        }
    },
    {
        url: '/private',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost:5555",
            changeOrigin: true,
        }
    }
];

export { ROUTES, Route };