import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};
//dùng outlet để hiện thị những thứ trong đó
export default Main;