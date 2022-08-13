import  React from 'react'
import {Typography, AppBar, Toolbar, Link, FormControl, Select, MenuItem, Box} from "@mui/material";
import {Phone, MailOutline} from "@mui/icons-material";
import logo from "./logo.svg";

function Topbar(){

    return(
        <>
        <Box sx={{display:'inline-block'}}>
            <main style={{marginTop:'',  padding:'0 15%'}}>
            <a href='https://bazar-react.vercel.app/'>
                <img src={logo} alt='' height={'34px'}  />
            </a>
            
        </main>
        </Box>
        
        
        </>
    );
}
export default Topbar;