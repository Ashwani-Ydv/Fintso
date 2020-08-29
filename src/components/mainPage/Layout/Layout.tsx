import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import './Layout.css';
import RoleTab from '../Roles/RolesTab/RolesTab'
import Demo from '../Employees/EmpTab/EmpTab'
import { BrowserRouter as Router, Link, Route} from "react-router-dom";
const { Header,Content} = Layout;

// const Navbar = ()=>(
// )
class Navbar extends Component<any>{
  render(){
    return(
<Layout className="layout">
    <Header className="navHeader">
      <div className="logo"/>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }} 
      >
         <Menu.Item className="emp" key="1"><Link to ="/emp">Employees</Link></Menu.Item>
         <Menu.Item  className="roles" key="2"><Link to="/role">Roles</Link></Menu.Item>
        <div className="log">Logout</div>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
    {/* <Router> */}
    <Route  exact path='/role' component={RoleTab}/>
    <Route path='/emp'  component={Demo}/>
      
    {/* </Router> */}
    </Content>
  </Layout>
    )
  }
}
export default Navbar;