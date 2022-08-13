import * as React from 'react';
import Navbar1 from './components/navbar1/Navbar1';
import Topbar from './components/topbar/Topbar';
import * as mui from "@mui/material";
import "./SuperStore.css";

function SuperStore(){
    return(
        // <Navbar />
        <>
            
                <Navbar1 />
                <Topbar />
            
        </>
    );
}
export default SuperStore;