import {Route} from "react-router-dom";

import {CustomRouter} from "../types";
import {HomePage} from "../views/pages";
import {MainLayout} from "../views/layouts";

export const vstepRoutes: CustomRouter[] = [
    {
        path: "",
        element: <MainLayout/>,
        children: [
            {
                name: "Home Page",
                path: "",
                element: <HomePage/>,
            }
        ],
    }
];

export const renderRouters = (routes: CustomRouter[], basePath = "") => {
    return routes.map(route => {
        const parentPath = basePath + route.path
        return <Route key={route.path} path={basePath + route.path} element={route.element}>
            {route.children && (
                renderRouters(route.children, parentPath)
            )}
        </Route>
    })
}
