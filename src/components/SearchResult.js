import React from 'react'
import TowerData from './TowerData'
import SearchBar from './SearchBar'
export default function SearchResult(props){
    return(
        <>
            <SearchBar></SearchBar><br/>
            <table border="1" align="center">
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
                </tr>
                {props.towers.map((tower)=>{
                    return <tr><TowerData tower={tower}/></tr>
                })}   
            </table>         
        </>
    )
}