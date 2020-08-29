import { Table,Checkbox} from 'antd';
import React from 'react';
import axios from 'axios';
// import '../../mainpage.css'
import './RolesTable.css'
  class TableComponent extends React.Component{
    state={
         persons : [],
      }
      componentDidMount=()=> {
        axios.get(`https://api.jsonbin.io/b/5e575436b383ea294af06fab/4`,
        {
          headers:{
            "secret-key":"$2b$10$071GJdMX1C4JMwSt3y1R1ulgy/cgR04molQpe8SsbUw4gMrW1.0ge" 
          }
        }
        )
          .then(res => {
            // const persons = res.data;
            console.log(res);
            this.setState({ persons:res.data });
          }).catch(error=>{
            console.log('error',error)
          })
      }
    render(){
      const expandedRowRender = () => {
        const columns = [
          { title: 'MODULE', dataIndex: 'module', key: 'module' },
          { title: 'Operation1', dataIndex: 'operation1', key: 'operation1',
        render:()=>(
         <Checkbox.Group style={{ width: '100%' }}>
                 <Checkbox></Checkbox>
         </Checkbox.Group>
        )
        },
          {
            title: 'Operation2',
            key: 'operation2',
            render:()=>(
              <Checkbox.Group style={{ width: '100%' }}>
                      <Checkbox></Checkbox>
              </Checkbox.Group>
             )
          },
          { title: 'Operation3', dataIndex: 'operation3', key: 'operation3',
          render:()=>(
            <Checkbox.Group style={{ width: '100%' }}>
                    <Checkbox></Checkbox>
            </Checkbox.Group>
           )
        },
          { title: 'Operation4', dataIndex: 'operation4', key: 'operation4',
          render:()=>(
            <Checkbox.Group style={{ width: '100%' }}>
                    <Checkbox></Checkbox>
            </Checkbox.Group>
           )
        },
        ];
        const data = [];
        for (let i = 1; i <= 4; ++i) {
          data.push({
            key: i,
            module: `M${i}`,
          });
        }
        return <div className="expand">
          <div className="data">
            <b>Role Name</b> :Back Office<br/><br/>
            <b>Created Date</b> :12/02/2020<br/><br/>
            <b>Created By</b> : Rahul Kumar<br/>
           
          </div>
          <div className="ap_expand_data">
          <Table columns={columns} dataSource={data} pagination={false} />
          </div>
          <div className="approvals">
          <div className="approved-by">Approved By<br/></div>
          <div className="approver-detail"><b>Gauthom on 20/02/2020</b></div>
          </div>
        </div>
      }
      const columns = [
        { 
          title: 'Roles',
          dataIndex: 'roles',
          // render: text => <a>{text}</a>,
        },
        {
          title: 'Created Date',
          dataIndex: 'created_date',
        },
        {
          title: 'Created By',
          dataIndex: 'created_by',
        },
        {
          title:'Approved By',
          dataIndex:'approved_by'
        },
    
      ]
      // const rowSelection = {
      //   onChange: (
      //     selectedRowKeys, selectedRows) => {
      //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      //   },
      // };
      return(
        <Table 
        // rowSelection={rowSelection} 
        columns={columns} 
        // pagination={false}

        expandedRowRender={
          // record => 
            // <p style={{ margin: 0 }}>
            //     {record.description}
            //     </p>
            expandedRowRender
                }
        dataSource={this.state.persons} className="table"
        // displayRowCheckbox='off'
        // adjustForCheckbox={false} 
        // displaySelectAll={false}
        />
      )
    }
  }
export default TableComponent;