import React from 'react'
import { NavLink } from 'react-router-dom';
export default function AddTwrFile(){    
    return(
        <>
            <center>
                <div style={{borderStyle:'solid', width:'50%'}}>
                    <form>
                        <table width='50%'>
                            <tr>
                                <th>
                                    <span style={{color:'red'}}>*</span>csv/xls File:
                                </th>
                                <td>
                                    <input type="file" accept=".csv,.xls,.xlsx" required/>
                                </td>
                            </tr>
                            <tr>
                            <td colspan='2'><hr></hr></td>
                        </tr>                        
                        <tr>                            
                            <td> 
                                <center><input type="submit" id="submitTower" Value="Add Tower"/> </center>                                  
                            </td>
                            <td> 
                                <center><input type="reset" id="resetTower" Value="Reset"/></center>                                    
                            </td>
                        </tr>                                                
                        </table>
                    </form>
                </div>
            </center>        
        </>
    )
}