import React from "react";
import { borders, padding } from '@mui/system';
import {Typography, AppBar, Toolbar, CssBaseline, Link, FormControl, Select, MenuItem, SelectChangeEvent, InputLabel, FormHelperText, Box, NativeSelect} from "@mui/material"
import {Phone, MailOutline} from "@mui/icons-material"


function Navbar1 (){
    const style = {
        background : '#0F3460'
    };

    const [language, setlanguage] = React.useState('En');
    
    const handleChangelanguage = (event)=>{
        setlanguage(event.target.value);
    };
    const [devise, setdevise] = React.useState('Usd');
    const handleChangedevise = (event)=>{
        setdevise(event.target.value);
    };
    return(
        <header>

            
            <AppBar position="fixed" verticalAlign ='center' sx={{bgcolor:'#0F3460', padding:'0 25vh'}}>
 
                <Box sx={{ display:'flex', justifyContent: 'space-between'}}>
                    <Toolbar>
                        <Phone sx={{marginRight :'3px'}} />
                        <Typography sx={{marginRight :'10px'}} component={'p'}>+88012 3456 7894</Typography>
                        <MailOutline sx={{marginRight :'3px'}}/>

                        <Typography component={'p'}>support@ui-lib.com</Typography>

                    </Toolbar> 

                    <Toolbar>
                        <nav>
                            <Link sx={{mr:2}} href="https://bazar-react.vercel.app/faq" underline="none" color='#F8F8FF'>Theme FAQ"s</Link>
                            <Link href="https://bazar-react.vercel.app/help" border='none' underline="none" color='#F8F8FF'>Need Help?</Link>
                        </nav>
                        
                        <FormControl sx={{ml:'20px'}}>
                            <Select 
                                id= "language-select"
                                value={language}
                                onChange={handleChangelanguage}
                                sx={{ color: "#fff"}} 
                            >
                                <MenuItem sx={{color:'#000'}} value={'En'}>En</MenuItem>
                                <MenuItem sx={{color:'#000'}} value={'BN'}>BN</MenuItem>
                                <MenuItem sx={{color:'#000'}} value={'HN'}>HN</MenuItem>

                            </Select>
                        </FormControl>
                        <FormControl sx={{ml:'20px'}}>
                            <Select 
                                id= "devise-select"
                                value={devise}
                                onChange={handleChangedevise}
                                sx={{ color: "#fff"}} 
                            >
                                <MenuItem sx={{color:'#000'}} value={'Usd'}>USD</MenuItem>
                                <MenuItem sx={{color:'#000'}} value={'Eur'}>EUR</MenuItem>
                                <MenuItem sx={{color:'#000'}} value={'Bdt'}>BDT</MenuItem>
                                <MenuItem sx={{color:'#000'}} value={'Inr'}>INR</MenuItem>

                            </Select>
                        </FormControl>
                    </Toolbar>     
                </Box>
                   
            </AppBar>   

        </header>
    );
}

export default Navbar1;