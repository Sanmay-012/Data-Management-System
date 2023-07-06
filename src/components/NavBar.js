import React from 'react'
import { NavLink } from 'react-router-dom';
export default function NavBar(){
    return(
        <>
            <table align="center" cellSpacing="5px">
                <tr>
                    <th style={{background:'red',borderRadius:'5px'}} height="40px" width="170px">
                        <NavLink to="/" style={{color:'white',textDecoration:'none'}} >Home</NavLink>
                    </th> 
                    <th style={{background:'red',borderRadius:'5px',color:'white'}} width="170px"> 
                        <NavLink to="/addOptions" style={{color:'white',textDecoration:'none'}}>Add new Tower</NavLink> 
                    </th>
                    <th style={{background:'red',borderRadius:'5px',color:'white'}} width="170px"> 
                        <NavLink to="/searchBar" style={{color:'white',textDecoration:'none'}}>Search Data</NavLink> 
                    </th>
                    <th style={{background:'red',borderRadius:'5px',color:'white'}} width="170px">
                        <NavLink to="/updateOption" style={{color:'white',textDecoration:'none'}}>Update/Remove Data</NavLink>
                    </th> 
                    <th style={{background:'red',borderRadius:'5px',color:'white'}} width="170px">
                        <NavLink to="/display" style={{color:'white',textDecoration:'none'}}>Display All Data</NavLink>
                    </th>
                </tr>
            </table>
            <hr/>
        </>
    )
}