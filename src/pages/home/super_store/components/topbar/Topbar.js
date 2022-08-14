import * as React from 'react'
import {IconButton, Badge,  Avatar, Stack, Autocomplete, TextField,Typography, AppBar, Toolbar, Link, FormControl, Select, MenuItem, Box, Grid , Paper, InputLabel, Fab} from "@mui/material";
import {Phone, MailOutline, Directions} from "@mui/icons-material";
import logo from "./logo.svg";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


import { styled, alpha } from '@mui/material/styles';


import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import { flexbox } from '@mui/system';

function Topbar(){
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:'none'
  }));
  const shapeStyles = { bgcolor: 'none', width: 40, height: 40 };
  const shapeCircleStyles = { borderRadius: '50%' };
  const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }}>
      <ShoppingBagIcon sx={{ fontSize: 40 }}/>
    </Box>

  );
  
  function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }

    return(
        <>
         <main>
         <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{padding:'100px 19.5% 0 19.5%'}}
        >
            <Item>
              <a href='https://bazar-react.vercel.app/'>
                <img src={logo} alt='' height={'34px'}  />
              </a>
            </Item>

            <Item>
              <Box  sx={{ flexGrow: 1 , border:'1px solid gray' , borderRadius:'50px', "&:hover":{borderColor:'red'} , width:'100%'}}>
                <Grid container spacing={4}>
                  <Grid item xs={8}>
                    <SearchBar/>
                  </Grid>
                  <Grid item xs={4} >
                    <SelectCategory sx={{bgcolor:'gray', borderRadius:'50px'}}/>
                  </Grid>
                </Grid>
              </Box>
              
            </Item>
            <Item>
                <Grid container spacing={0}>
                  <Item>
                    <IconButton sx={{ padding: 0}}>
                    <Avatar  src="/broken-image.jpg" />
                    </IconButton>
                  </Item>
                  
                  <Item>
                    <IconButton sx={{ padding: 0}} aria-label={notificationsLabel(100)}>
                      <Badge badgeContent={100} color="error">
                        {circle}
                      </Badge>
                    </IconButton>
                  </Item>
                  
                </Grid>     
            </Item>
        </Grid>
        </main>
        </>
    );
}
export default Topbar;

// I need to add methods when I clicked into any search result get a page of products have the same words with resulte.
function SearchBar(){
    const [searchValue,setSearchValue] =React.useState('');
    const handleChangeSearchValue = (event) => {
      setSearchValue(event.target.value);
    };
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        height:'100%',
        margin:0
        ,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
      
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

      // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];


    return(
        <>
         <FormControl  >
            <Search sx={{minWidth:'400px',}}>
                <SearchIconWrapper >
                <SearchIcon  />
                </SearchIconWrapper>

                {/* <Stack spacing={2} sx={{ width: 300 }}> */}
                  <Autocomplete
                     
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={top100Films.map((option) => option.title)}
                      renderInput={(params) => (
                        <TextField
                          sx={{ paddingLeft:'30px',
                            paddingRight:'100px',
                            
                            "&& fieldset": {
                              // border:"1px solid red"
                              border:'none'
                            } 
                          }}
                          {...params}
                          
                          InputProps={{
                            
                            ...params.InputProps,
                            type: 'search',

                            
                          }}
                        />
                      )}
                    />
                  
                {/* </Stack> */}

              {/*                 
                <StyledInputBase sx={{height:'100%',}}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                /> */}
              </Search>
         </FormControl>
          
           
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
  <FormControl sx={{border:' none', display:'inline-block', borderLeft:'1px solid gray',    backgroundColor: '#F6F9FC' , borderTopRightRadius:'27.5px',borderBottomRightRadius:'27.5px' , marginRight:'5px', width:'99%'}}>
    <Select
      id="category-select"
      value={category} 
      displayEmpty
      onChange={handleChangeCategory}
      sx={{
        "&& fieldset": {
          // border:"1px solid red"
          border:'none'
        },
        
      }}
    >
      <MenuItem value=''>All Category</MenuItem>
      {
        categoryArray.map((cat,index) => (
          <MenuItem value={index}>{cat}
          </MenuItem>
        ))
      }
    </Select>
  </FormControl>
);
}