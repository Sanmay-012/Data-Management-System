import React from 'react'
import { NavLink } from 'react-router-dom';
import searchLogo from '../search.png';
export default function SearchBar(){    
    return(
        <>
        <center>
            <form>
                <table>
                <tr><th>Search:</th> <td><input type="text" placeholder='Tower id/State/Date/District/Block/Village/Cencus code/Project/Appendix no.' style={{width:'500px', height:'20px', borderRadius:'15px'}} required/><button style={{borderRadius:'15px',}}><NavLink to="/searchResult" ><img src={searchLogo} height="18px" width="20px"></img></NavLink></button></td></tr>
                </table>
            </form>
        </center>        
        </>
    )
}