import React from 'react'
import TowerData from './TowerData'
import edit from '../edit.png'
import Delete from '../delete.png'
import { NavLink } from 'react-router-dom';
export default function UpdateManually(props){
    const handleButtonClick = () => {
        const result = window.confirm('Are you sure?, You want to delete data of tower?');
    
        if (result) {          
          console.log('User confirmed');
        } else {          
          console.log('User canceled');
        }
      };
    return(
        <>
            <table border="1" align="center" width="65%">
                <tr style={{backgroundColor:'yellow'}}>
                    <th>Date</th>
                    <th>Tower id</th>
                    <th>State</th>
                    <th>District</th>
                    <th>Block</th>
                    <th>Village</th>
                    <th>Commission Date</th>
                    <th>Census Code</th>
                    <th>Project</th>
                    <th>Appendix No.</th>
                    <th>Peak Connected Users</th>
                    <th>Internet Traffic(GB)</th>
                    <th>Voice Traffic(Min)</th>
                    <th>Total Traffic(TB)</th>  
                    <th>Update</th>
                    <th>Delete</th>                  
                </tr>
                {props.towers.map((tower)=>{
                    return <tr><TowerData tower={tower}/><td><button><NavLink to="/updateForm"><img src={edit} height="20px" width="20px"/></NavLink></button></td><td><button onClick={handleButtonClick}><img src={Delete} height="20px" width="20px"/></button></td></tr>
                })}   
            </table>         
        </>
    )
}