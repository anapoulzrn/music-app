import { Routes, Route } from 'react-router-dom';
import React, {  useContext } from 'react';
import { privateRoutes, publicRoutes } from './router';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './context';


export function AppRoutes() {

    const { auth, loading  } = useContext(AuthContext);

    if (loading) {
      return <div/>
    }

    return auth ? (
      <Routes>
        {privateRoutes.map((route) => (
          <Route path={route.path} element={route.component} key={route.path} />
        ))};
        <Route path="*" element={<Navigate replace to="/main" />} />
      </Routes>
    ) : 
    (<Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))};
        <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
    ) 

}

