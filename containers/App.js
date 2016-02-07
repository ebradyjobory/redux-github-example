import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, inputValue } = this.props;
        return (
            <div>
                test
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        inputValue: state.routing.location.pathname.substring(1)
    }
}

export default connect(mapStateToProps, {
    push
})(App)
