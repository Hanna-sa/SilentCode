import { AppBar, Typography, Toolbar, Button } from '@mui/material'
import React from 'react'

const Nav = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{flexGrow:1}} align='left'>APP</Typography>
                <Button variant='text' color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>    
    </div>
  )
}

export default Nav