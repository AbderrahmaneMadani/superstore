import * as React from 'react'
import {Typography, AppBar, Toolbar, Link, FormControl, Select, MenuItem, Box} from "@mui/material";
import {Phone, MailOutline} from "@mui/icons-material";
import logo from "./logo.svg";


import { styled, alpha } from '@mui/material/styles';


import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';

function Topbar(){



    return(
        <>
         <main>
        <Box flexDirection={'row'} sx={{display:'inline-block',  margin:'100px 0 0 19.5%'}}>
        <Toolbar>
            <a href='https://bazar-react.vercel.app/'>
            <img src={logo} alt='' height={'34px'}  />
            </a>
                
            <SearchBar/>
        </Toolbar>
        </Box>
        
        </main>
        </>
    );
}
export default Topbar;


function SearchBar(){

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
       
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            borderColor: 'red',        
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        border: '2px solid black',

        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
        }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));


    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
        
            <Toolbar>
                        
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            
            </Toolbar>
        
        </Box>
        </>
    );
}