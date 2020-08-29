import React from 'react'
import Navbar from './Layout/Layout'
import Logo from '../Fintso/Logo'
import './mainpage.css'
class Mainpage extends React.Component {
    render(){
        return(
            <div className="main">
                <Navbar/>
                    <Logo/>
            </div>
        )
    }
}

export default Mainpage;