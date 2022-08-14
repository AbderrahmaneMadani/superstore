import React from "react";
import {Typography, AppBar, Toolbar, Link, FormControl, Select, MenuItem, Box, Fab} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material';
import module from '@mui/material/styles'
import {Phone, MailOutline} from "@mui/icons-material";


function Navbar1 (){

    const theme = createTheme ({
        palette:{
            primary:{
                main:'#0F3460',
            }            
        }
    });
  
    const [language, setlanguage] = React.useState('En');
    
    const handleChangelanguage = (event)=>{
        setlanguage(event.target.value);
    };
    const [devise, setdevise] = React.useState('Usd');
    const handleChangedevise = (event)=>{
        setdevise(event.target.value);
    };
    return(
        <Box sx={{display:'inline-block'}}>
            <header>
               
                <AppBar position="fixed"  sx={{bgcolor:'#0F3460'}}>
    
                    <Box sx={{ display:'flex', justifyContent: 'space-between', padding:'0 18%'}}>
                        <Toolbar>
                            <Phone sx={{marginRight :'3px'}} />
                            <Typography sx={{marginRight :'10px'}} component={'p'} fontSize={12}>+88012 3456 7894</Typography>
                            <MailOutline sx={{marginRight :'3px'}}/>

                            <Typography component={'p'} fontSize={12}>support@ui-lib.com</Typography>

                        </Toolbar> 

                        <Toolbar>
                            <nav>
                                <Link sx={{mr:2 , fontSize:'12px'}} href="https://bazar-react.vercel.app/faq" underline="none" color='#F8F8FF'>Theme FAQ"s</Link>
                                <Link sx={{fontSize:'12px'}}href="https://bazar-react.vercel.app/help" border='none' underline="none" color='#F8F8FF'>Need Help?</Link>
                            </nav>
                            <ThemeProvider theme={theme}>

                                <FormControl sx={{ml:'20px'}}>
                                    <Fab color="primary"   sx={{borderRadius:'0%' , width:'100%'}}>
                                        <Select 
                                            id= "language-select"
                                            value={language}
                                            onChange={handleChangelanguage}
                                            sx={{ color: "#fff",fontSize:'14px', padding:'0'}} 
                                        >
                                            <MenuItem sx={{color:'#000'}} value={'En'}>En</MenuItem>
                                            <MenuItem sx={{color:'#000'}} value={'BN'}>BN</MenuItem>
                                            <MenuItem sx={{color:'#000'}} value={'HN'}>HN</MenuItem>

                                        </Select>
                                    </Fab>
                                </FormControl>

                            
                                <FormControl sx={{ml:'20px'}}>
                                    <Fab color="primary"   sx={{borderRadius:'0%' , width:'100%'}}>
                                        <Select 
                                            id= "devise-select"
                                            value={devise}
                                            onChange={handleChangedevise}
                                            sx={{ color: "#fff",fontSize:'14px', padding:'0' }} 
                                        >
                                            <MenuItem sx={{color:'#000'}} value={'Usd'}>USD</MenuItem>
                                            <MenuItem sx={{color:'#000'}} value={'Eur'}>EUR</MenuItem>
                                            <MenuItem sx={{color:'#000'}} value={'Bdt'}>BDT</MenuItem>
                                            <MenuItem sx={{color:'#000'}} value={'Inr'}>INR</MenuItem>

                                        </Select>
                                    </Fab> 
                                </FormControl>
                                
                            </ThemeProvider>  
                        </Toolbar>     
                    </Box>   
                </AppBar>   
            </header>
        </Box>
    );
}

export default Navbar1;