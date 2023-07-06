import React from 'react'
import logo from './logo.png';
export default function Header(props){
    const title1 = {
        marginLeft:'60%',
      };
    return(
        <div>
            <table width="100%" border="1"> 
                <tr>
                    <td width="15%">
                        <img src={logo} height="20%" width="20%"/>
                    </td>                
                    <td><h3 style={title1}>{props.title}</h3></td>
                </tr>                
            </table>            
        </div>
    )
}