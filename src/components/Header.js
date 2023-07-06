import React from 'react'
import logo from '../logo.png';
export default function Header(props){    
    return(
        <div>
            <table width="100%" border="1"> 
                <tr>
                    <td width="15%">
                        <img src={logo} height="20%" width="20%"/>
                    </td>                
                    <td width="100%"><h3>{props.title}</h3></td>
                </tr>                
            </table>            
        </div>
    )
}