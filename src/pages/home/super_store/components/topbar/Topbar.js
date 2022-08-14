import * as React from 'react'
import {Typography, AppBar, Toolbar, Link, FormControl, Select, MenuItem, Box, Grid, Paper, InputLabel, Fab} from "@mui/material";
import {Phone, MailOutline} from "@mui/icons-material";
import logo from "./logo.svg";


import { styled, alpha } from '@mui/material/styles';


import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import { flexbox } from '@mui/system';

function Topbar(){

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   // padding: theme.spacing(0),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));


    return(
        <>
         <main>
        <Box flexDirection={'row'} sx={{display:'inline-block',  margin:'100px 0 0 19.5%'}}>
        <Toolbar>
            <a href='https://bazar-react.vercel.app/'>
            <img src={logo} alt='' height={'34px'}  />
            </a>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item xs={8}>
                  {/* <Item><SearchBar/></Item> */}
                  <SearchBar/>
                </Grid>
                <Grid item xs={4}>
                  {/* <Item><SelectCategory/></Item> */}
                  <SelectCategory/>
                </Grid>
              </Grid>
            </Box>
            {/* <Box display={'flex'} sx={{border:'2px solid'}}>
              <SearchBar/>
              <SelectCategory/>
            </Box> */}
            
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
          <Search>
            <SearchIconWrapper>
            <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
           
        </>
    );
}

function SelectCategory(){
  const categoryArray =['Car', 'Clothes', 'Electornics', 'Laptop', 'Camera', 'Toys'];
  const [category,Setcategory]= React.useState('');
  const handleChangeCategory = (event) => {
    Setcategory(event.target.value);
  };
return(
  <FormControl fullWidth>
    <Select
      id="category-select"
      value={category} 
      displayEmpty
      onChange={handleChangeCategory}
    >
      <MenuItem value='' >All Category</MenuItem>
      {
        categoryArray.map((cat,index) => (
          <MenuItem value={index}>{cat}
          </MenuItem>
        ))
      }
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
);
}