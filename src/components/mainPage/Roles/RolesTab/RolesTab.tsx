import { Tabs } from 'antd';
import React from 'react'
// import './RolesTab.css'
import '../../Employees/EmpTab/EmpTab.css'
import Searchbar from '../../Employees/EmpSearchbar/EmpSearchbar'
import Role from '../Role'
import Roles from '../RoleTable/Roles'
const {TabPane}=Tabs;

class RoleTab extends React.Component {
  state = { value: 'role/roles' };

  // onChange = e => {
  //   this.setState({ size: e.target.value });
  // };
  render() {
    const {} = this.state;
    return (
      <div className="card-container">
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Roles &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;" key="1">
          <Searchbar/>
          <Roles/>
          </TabPane>
          <TabPane tab="Approval Pending" key="2">
            <Searchbar/>
            <Role/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default RoleTab;