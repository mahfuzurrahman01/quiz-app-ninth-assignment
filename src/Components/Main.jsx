import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
export const ItemsContext = createContext([]);
const Main = () => {
    const items = useLoaderData();
    const itemsData = items.data;
    return (
        <ItemsContext.Provider value={itemsData}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </ItemsContext.Provider>
    );
};

export default Main;