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
        url: '/public-route1',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:5050",
            changeOrigin: true,
        }
    },
    {
        url: '/private-route2',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost:5555",
            changeOrigin: true,
        }
    }
];

export { ROUTES, Route };