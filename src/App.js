import React from "react";
import {Route, Routes} from "react-router-dom";
import {Test} from "./page/Test";
import {Header} from "./page/Header";
import {Dashboard} from "./page/Dashboard";
import {HeaderNav} from "./page/HeaderNav";
import { FaBeer } from 'react-icons/fa';
import './scss/app.scss'
import SideBar from "./page/SideBar";
const App = () => {
    return (

        <div className='wrapper'>
                <SideBar/>
            <div className='container'>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Dashboard/>}/>
                        <Route path='detail' element={<Test/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
};
export default App;
