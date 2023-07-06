import React from 'react'
export default function TowerData({tower}){
    return(
        <>
                <td>{tower.date}</td>
                <td>{tower.sapid}</td>
                <td>{tower.state}</td>
                <td>{tower.district}</td>
                <td>{tower.block}</td>
                <td>{tower.village}</td>
                <td>{tower.commissionDate}</td>
                <td>{tower.census_code}</td>
                <td>{tower.project}</td>
                <td>{tower.appendixNo}</td>
                <td>{tower.pcu}</td>
                <td>{tower.it}</td>
                <td>{tower.vt}</td>
                <td>{tower.tt}</td>                
        </>
    )
}