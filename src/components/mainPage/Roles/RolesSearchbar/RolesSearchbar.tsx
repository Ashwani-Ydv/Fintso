import React, { Component } from 'react';
import { Input } from 'antd';
import './RolesSearchbar.css'
const { Search } = Input;
class Searchbar extends Component {
    render() {
        return (
            <div className="search">
            <Search
              placeholder="Search Name"
              onSearch={value => console.log(value)}
              style={{ width: 500 }}
            />
          </div>
        );
    }
}

export default Searchbar;