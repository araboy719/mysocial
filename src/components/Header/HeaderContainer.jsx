import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logOut } from 'redux/auth';

class HeaderContainerAPI extends React.Component {

    render() {
        return <Header login={this.props.login} logOut={this.props.logOut} />
    }
}
let mapStateToProps = (state) => {
    return {
        login: state.authData.login
    }

}

export default connect(mapStateToProps, {logOut})(HeaderContainerAPI)