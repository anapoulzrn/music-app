import React from "react";
import Main from "../pages/main";
import Login from "../pages/login";
import Register from "../pages/register";
import Playlist from "../pages/playlist";

export const privateRoutes = [
    {path:'/main', component: <Main/>},
    {path:'/playlist/:id', component: <Playlist/>},
];

export const publicRoutes = [
    {path:'/login', component: <Login/>},
    {path:'/register', component: <Register/>},
];
