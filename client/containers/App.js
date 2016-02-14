import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          test
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, {
  push,
})(App);
