import React from 'react'
import { NavLink } from 'react-router-dom';
export default function UpdateOption(){
    return(
        <>
            <table align="center" cellSpacing="5px">
                <tr>
                    <th style={{backgroundColor:'red',color:'white',borderRadius:'5px'}}>
                        <NavLink style={{color:'white',textDecoration:'none'}} to="/UpdateManually">Update/Delete data Manually</NavLink>
                    </th>
                    <th style={{backgroundColor:'blue',color:'white',borderRadius:'5px'}}>
                        <NavLink style={{color:'white',textDecoration:'none'}} to="/UpdateTwrFile">Update data with xls/csv file</NavLink>
                    </th>
                </tr>                                
            </table>
        </>
    )
}