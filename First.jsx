import React from 'react'
import { Button, Checkbox, TextField, Typography } from '@mui/material';

const First = () => {
  return (
    <div>
    <h1>Are You Ready ?</h1>
    <input type='Text' placeholder='Name'></input> 
    <br/>
    <input type='Text' placeholder='Course'></input>
    <br/>
    <button>Submit</button>    
    <Typography variant='h4'>Hanna</Typography>
    <br/>
    <TextField variant ='outlined' label='Enter'></TextField>
    <br/>
    <br/>
    <Button variant='contained'>Submit</Button>
  </div>
  )
}

export default First