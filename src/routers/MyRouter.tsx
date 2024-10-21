import {BrowserRouter, Navigate, Outlet, Route, Routes, useLocation} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../redux";
import {renderRouters, vstepRoutes} from "./routes";
import {Suspense} from "react";
import {Loader} from "../components/core";
import {NotFoundPage} from "../views/pages";

const RemoveTrailingSlash = () => {
    const { pathname } = useLocation();
    if (pathname !== "/" && pathname.endsWith('/')) {
        return <Navigate to={`${pathname.slice(0, -1)}`} />;
    }
    return <Outlet />;
}

const MyRouter = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route element={<RemoveTrailingSlash/>}>
                            {renderRouters(vstepRoutes)}
                            <Route path={"*"} element={<NotFoundPage/>}/>
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </Provider>
    )
}
export default MyRouter