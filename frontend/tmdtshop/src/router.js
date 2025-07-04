import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import HomePage from "./pages/users/homePage";
import MasterLayout from "./pages/users/theme/masterLayout";

import ProfilePage from "./pages/users/profilePage";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage/>
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage/>
        }
    ]
    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.component}
                        />
                    ))  
                }
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
};
export default RouterCustom;