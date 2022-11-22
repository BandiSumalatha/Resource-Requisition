import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Tabs,Tab, Button} from '@mui/material';
import ListIcon from '@mui/icons-material/List';

const NavBar = () => {
  const [value,setValue]=useState()
  return (
    <React.Fragment>
<AppBar sx={{background:"#063970"}}>
<Toolbar>
    <Typography>

      <ListIcon/>
      <Tabs
       textColor="secondary"
       value={value}
       onChange={(e,value)=>setValue(value)}
       indicatorColor="secondary"
    
      >
        <Tab value="one" label="Home" />
        <Tab value="two" label="About" />
      
      </Tabs>
      <Button sx={{marginLeft:"auto"}} variant="contained">Login</Button>
    </Typography>
    </Toolbar>
</AppBar>
    </React.Fragment>

  )
}

export default NavBar