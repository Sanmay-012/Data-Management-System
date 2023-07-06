import React from 'react'
export default function UpdateManually(props){
    return(
        <center>
            <div style={{borderStyle:'solid', width:'50%'}}>
                <form>
                    <table align='center'>
                        <tr>
                            <th><span style={{color:'red'}}>*</span>Date: </th><td><input type="date" defaultValue={props.towers[0].date} required/></td>
                        </tr>
                        <tr>
                            <th><span style={{color:'red'}}>*</span>Tower ID: </th><td><input type="text" defaultValue={props.towers[0].sapid} required/></td>
                        </tr>
                        <tr>
                            <th>
                                <label><span style={{color:'red'}}>*</span>State: </label>                            
                            </th>
                            <td>
                                <select id="state" name="state" selected={props.towers[0].state} required>
                                    <option value={props.towers[0].state}>{props.towers[0].state}</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="district"><span style={{color:'red'}}>*</span>District: </label>
                            </th>
                            <td>
                                <select id="district" selected={props.towers[0].district} required>
                                    <option value={props.towers[0].district}>{props.towers[0].district}</option>
                                    <option value="Ahmedabad">Ahmedabad</option>
                                    <option value="Amreli">Amreli</option>
                                    <option value="Anand">Anand</option>
                                    <option value="Aravalli">Aravalli</option>
                                    <option value="Banaskantha">Banaskantha</option>
                                    <option value="Bharuch">Bharuch</option>
                                    <option value="Bhavnagar">Bhavnagar</option>
                                    <option value="Botad">Botad</option>
                                    <option value="Chhota Udaipur">Chhota Udaipur</option>
                                    <option value="Dahod">Dahod</option>
                                    <option value="Dang">Dang</option>
                                    <option value="Devbhoomi Dwarka">Devbhoomi Dwarka</option>
                                    <option value="Gandhinagar">Gandhinagar</option>
                                    <option value="Gir Somnath">Gir Somnath</option>
                                    <option value="Jamnagar">Jamnagar</option>
                                    <option value="Junagadh">Junagadh</option>
                                    <option value="Kutch">Kutch</option>
                                    <option value="Kheda">Kheda</option>
                                    <option value="Mahisagar">Mahisagar</option>
                                    <option value="Mehsana">Mehsana</option>
                                    <option value="Morbi">Morbi</option>
                                    <option value="Narmada">Narmada</option>
                                    <option value="Navsari">Navsari</option>
                                    <option value="Panchmahal">Panchmahal</option>
                                    <option value="Patan">Patan</option>
                                    <option value="Porbandar">Porbandar</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Sabarkantha">Sabarkantha</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Surendranagar">Surendranagar</option>
                                    <option value="Tapi">Tapi</option>
                                    <option value="Vadodara">Vadodara</option>
                                    <option value="Valsad">Valsad</option>                            
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th><span style={{color:'red'}}>*</span>Blocks: </th>
                            <td> 
                                <select id="blocksList" selected={props.towers[0].block}required>
                                    <option value={props.towers[0].block}>{props.towers[0].block}</option>
                                    <option value="Nandod">Nandod</option>
                                    <option value="Dediyapada">Dediyapada</option>
                                    <option value="Garudeshwar">Garudeshwar</option>
                                    <option value="Sagbara">Sagbara</option>
                                    <option value="Tilakwada">Tilakwada</option>
                                    <option value="Narmada">Narmada</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th><span style={{color:'red'}}>*</span>Village: </th>
                            <td> 
                                <select id="villageList" selected={props.towers[0].village} required>
                                    <option value={props.towers[0].village}>{props.towers[0].village}</option>
                                    <option value="Village 1">Village 1</option>
                                    <option value="Village 2">Village 2</option>
                                    <option value="Village 3">Village 3</option>
                                    <option value="Village 4">Village 4</option>  
                                    <option value="Village 5">Village 5</option>                                                                      
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th><span style={{color:'red'}}>*</span>Commission Date: </th>
                            <td> 
                                <input type="date" id="commission_date" required/>                                    
                            </td>
                        </tr>
                        <tr>
                            <th><span style={{color:'red'}}>*</span>Census Code: </th>
                            <td> 
                                <input type="number" defaultValue={props.towers[0].census_code} id="census_code" required/>                                    
                            </td>
                        </tr>
                        <tr>
                            <th><span style={{color:'red'}}>*</span>Project: </th>
                            <td> 
                                <input type="text" defaultValue={props.towers[0].project} id="project" required/>                                    
                            </td>
                        </tr>    
                        <tr>
                            <th><span style={{color:'red'}}>*</span>Appendix no: </th>
                            <td> 
                                <input type="number" defaultValue={props.towers[0].appendixNo} id="appendix_no" required/>                                    
                            </td>
                        </tr>
                        <tr>
                            <th><span style={{color:'red'}}>*</span>Peak Connected Users: </th>
                            <td> 
                                <input type="number" defaultValue={props.towers[0].pcu} id="appendix_no" required/>                                    
                            </td>
                        </tr>
                        <tr>
                            <th><span style={{color:'red'}}>*</span>Internet Traffic(GB): </th>
                            <td> 
                                <input type="number" defaultValue={props.towers[0].it} id="InternetTraffic" required/>                                    
                            </td>
                        </tr>
                        <tr>
                            <th><span style={{color:'red'}}>*</span>Voice Traffic(Min): </th>
                            <td> 
                                <input type="number" defaultValue={props.towers[0].vt} id="VoiceTraffic" required/>                                    
                            </td>
                        </tr>
                        <tr>
                            <th><span style={{color:'red'}}>*</span>Total Traffic: </th>
                            <td> 
                                <input type="number" defaultValue={props.towers[0].tt} id="TotalTraffic" required/>                                    
                            </td>
                        </tr>
                        <tr>
                            <td colspan='2'><hr></hr></td>
                        </tr>                        
                        <tr>                            
                            <td> 
                                <center><input type="submit" id="submitTowerdata" Value="Update"/> </center>                                  
                            </td>
                            <td> 
                                <center><input type="reset" id="resetTowerdata" Value="Reset"/></center>                                    
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </center>
    )
}