import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { resetErrorMessage } from '../actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleDismissClick = this.handleDismissClick.bind(this);
    }

    handleDismissClick(e) {
        this.props.resetErrorMessage();
        e.preventDefault();
    }

    renderErrorMsg() {
        const { errorMessage } = this.props;
        if (!errorMessage) {
            return null;
        }

        return (
            <p style={{ backgroundColor: '#e99', padding: 10 }}>
                <b>{errorMessage}</b>
                {' '}
                (<a href="#"
                    onClick={this.handleDismissClick}>
                Dismiss
            </a>)
            </p>
        );
    }


    render() {
        console.log(this.props);
        const { errorMessage } = this.props;
        const { children, inputValue } = this.props;
        return (
            <div>
                testing {this.renderErrorMsg()}
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log('>>', state);
    return {
        errorMessage: state.errorMessage,
        inputValue  : state.routing.location.pathname.substring(1)
    }
}

export default connect(mapStateToProps, {
    push,
    resetErrorMessage
})(App)
