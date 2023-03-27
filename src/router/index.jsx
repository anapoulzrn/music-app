import React from "react";
import Main from "../pages/main";
import Login from "../pages/login";
import Register from "../pages/register";
import SidePlaylist from "../pages/sidePlaylists";
import Favorites from "../pages/favorites";


export const privateRoutes = [
    {path:'/main', component: <Main/>},
    {path:'/playlist/my_library', component: <Favorites/>},
    {path:'/playlist/:id', component: <SidePlaylist/>},

];

export const publicRoutes = [
    {path:'/login', component: <Login/>},
    {path:'/register', component: <Register/>},
];
