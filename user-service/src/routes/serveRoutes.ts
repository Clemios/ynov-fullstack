import type { Application, Request, Response, NextFunction } from "express";

import { ROUTES } from './user';
// A finir
const generateRoutes = (app: Application) => {
    ROUTES.forEach((route: any) => {
        const { url, reqType, callback } = route;
        if (reqType === 'GET') {
            // Handle GET request
            app.get(url, callback);
        } else if (reqType === 'POST') {
            app.post(url, callback);            
        } else if (reqType === 'PUT') {
            app.put(url, callback);                  
        } else if (reqType === 'DELETE') {
            app.delete(url, callback);         
        } else {
            console.log(`No specific request type defined for ${url}`);
        }
    })
}

export { generateRoutes };