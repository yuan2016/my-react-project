import React, { Component } from 'react';


class Page1 extends Component {
  state = {
    data: '我是page1'
  };

  render() {
    return (
      <div className="page1">
        {this.state.data}
      </div>
    );
  }
}

export default Page1;
