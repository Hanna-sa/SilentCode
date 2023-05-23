import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Taple = () => {
    var name=[{"Willy"},"Sam","hema","josna"]
  return (
    <div style={{paddingTop:"50px"}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell style={{color:"blue",fontSize:"20px"}}>Name</TableCell> 
                        <TableCell style={{color:"blue",fontSize:"20px"}}>Class</TableCell>                                        
                    </TableRow>                    
                 </TableHead>                  
                 <TableBody>
                        {name.map((value,index)=>{
                            return(
                            <TableRow >
                              <TableCell >{value}</TableCell>                              
                            </TableRow>
                        )
                        })}
               </TableBody>        
            </Table>
        </TableContainer>

    </div>
  )
}

export default Taple