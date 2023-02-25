import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './Main';
import Choice from './Choice';
import Contents from './Contents';
import Records from './Records';
import Auth from './Auth';

import { AnimatePresence } from "framer-motion";
import LoginPage from "./LoginPage";


function isUserLoggedIn() {
    return localStorage.getItem('memberId') !== null;
}

function Router(){
    return (
        <BrowserRouter>
            <AnimatePresence>
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    {/* 로그인이 필요한 페이지 */}

                    {/*<Route exact path="/choice" element={<Choice />}/>
                    <Route exact path="/contents" element={<Contents />}/>
                    <Route exact path="/Records" element={<Records />}/>*/}
                    {/*<Route path="/oauth/kakao/callback" element={<Auth />}/>*/}

                    {/* 로그인이 필요한 페이지 */}
                    <Route exact path="/choice" element={isUserLoggedIn() ? <Choice /> : <Navigate to="/" />} />
                    <Route exact path="/contents" element={isUserLoggedIn() ? <Contents /> : <Navigate to="/" />} />
                    <Route exact path="/records" element={isUserLoggedIn() ? <Records /> : <Navigate to="/" />} />
                    {/* 모든 다른 경로에 대한 리다이렉트 */}
                    <Route path="*" element={<Navigate to="/" />} />

                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    )
}

export default Router;