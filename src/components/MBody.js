import React from 'react'
import { NavLink } from 'react-router-dom';
export default function MBody(){  
    const mainTable={
        marginTop:"90px",
        height:"100px",
    };
    const redcolour={
        backgroundColor:'red',
        color:'white',
        borderRadius:'10px',
    }; 
    const bluecolour={
        backgroundColor:'blue',
        color:'white',
        borderRadius:'10px',

    };     
    return(        
                <div>            
                    <table style={mainTable} align="center" width="50%" height="10%">
                        <tr>
                            <th style={redcolour} width="50%"><NavLink style={{color:'white',textDecoration:'none'}} to="/addOptions">Add New Tower</NavLink></th>
                            <th style={{background:'#cc0000', borderRadius:'10px'}}><NavLink style={{color:'white',textDecoration:'none'}} to="/searchBar">Search Data</NavLink></th>
                        </tr>
                        <tr>
                            <th style={{background:'#cc0000', borderRadius:'10px'}}><NavLink style={{color:'white',textDecoration:'none'}} to="/updateOption">Update/Remove Data</NavLink></th>
                            <th style={redcolour}><NavLink style={{color:'white',textDecoration:'none'}} to="/display">Display All Data</NavLink></th>
                        </tr>
                    </table>
                </div>
           
    )
}