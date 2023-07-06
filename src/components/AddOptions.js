import React from 'react'
import { NavLink } from 'react-router-dom';
export default function AddOptions(){
    return(
        <>
            <table align="center" cellSpacing="5px">
                <tr>
                    <th style={{backgroundColor:'red',color:'white',borderRadius:'5px'}}>
                        <NavLink style={{color:'white',textDecoration:'none'}} to="/addTwrMannually">Add Tower Manually</NavLink>
                    </th>
                    <th style={{backgroundColor:'blue',color:'white',borderRadius:'5px'}}>
                        <NavLink style={{color:'white',textDecoration:'none'}} to="/addTwrFile">Add Tower with xls/csv file</NavLink>
                    </th>
                </tr>                                
            </table>
        </>
    )
}