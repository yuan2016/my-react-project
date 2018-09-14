import React, { Component } from 'react';


class Page2 extends Component {
  state = {
    data: '我是page2'
  };

  render() {
    return (
      <div className="page2">
        {this.state.data}
      </div>
    );
  }
}

export default Page2;
