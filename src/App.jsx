import React, {Component} from 'react'
// import { BrowserRouter as Router, Route, Link }from 'react-router-dom';
import './App.css';
import axios from '../node_modules/_axios@0.18.0@axios';
import { Table } from '../node_modules/_antd@3.6.6@antd';
// import Page1 from './components/page1/page1'
// import Page2 from './components/page2/page2'

import Path from './router'

const columns = [{
  title: 'ID',
  dataIndex: 'Id',
}, {
  title: '姓名',
  dataIndex: 'names',
}, {
  title: '地址',
  dataIndex: 'Address',
}, {
  title: '城市',
  dataIndex: 'City',
}];

class App extends Component {
  state = {
    data: []
  };

  componentDidMount(){
    axios.post('/api/test').then(res=>{
        console.log(res);
        this.setState({
          data: res.data
        })
    })
  }

  render() {
    return (
      <div>
        <Table columns={columns} dataSource={this.state.data} />
        <Path/>
      </div>
    );
  }
}

export default App;
