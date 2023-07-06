import React , { Component } from 'react'
import TowerService from '../services/TowerService'

class ListTowerComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            towers:[]
        }

        this.addTower=this.addTower.bind(this)
    }

    componentDidMount(){
        TowerService.getTowers().then((res)=>{
            this.setState({towers:res.data});
        });
    }

    addTower(){
        this.props.history.push('/addTwrMannually');
    }

    render(){
        return (
            <div>
                <h4>Everyday's Data of Every Towers</h4>
                <table border="1" align="center">
                    <tr style={{backgroundColor:'yellow'}}>
                        <th>Tower id</th>
                        <th>State</th>
                        <th>District</th>
                        <th>Block</th>
                        <th>Village</th>
                        <th>Commission Date</th>
                        <th>Census Code</th>
                        <th>Project</th>
                        <th>Appendix No.</th>
                        {/* <th>Peak Connected Users</th>
                        <th>Internet Traffic(GB)</th>
                        <th>Voice Traffic(Min)</th>
                        <th>Total Traffic(TB)</th> */}
                    </tr>
                    {/* {props.towers.map((tower)=>{
                        return <tr><TowerData tower={tower}/></tr>
                    })}    */}
                    {
                    this.state.towers.map(
                        tower=>
                        <tr key={tower.sapid}>
                        <td>{tower.sapid}</td>
                        <td>{tower.state}</td>
                        <td>{tower.district}</td>
                        <td>{tower.block}</td>
                        <td>{tower.village}</td>
                        <td>{tower.comm_date}</td>
                        <td>{tower.census_code}</td>
                        <td>{tower.project_id}</td>
                        <td>{tower.app_no}</td>
                        </tr>                        
                    )}
                </table>         
            </div>
        )
    }
}

export default ListTowerComponent
