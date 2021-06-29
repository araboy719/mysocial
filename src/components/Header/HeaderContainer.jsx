import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../../src/redux/auth';

class HeaderContainerAPI extends React.Component {

    componentDidMount(){
        this.props.setCurrentUser();
    }

    render() {
        return <Header profile = {this.props} />
    }
}
let mapStateToProps = (state) =>{
    return{
        userData: state.authData.usersProfile,
        loged: state.authData.loged
    }

}

export default connect(mapStateToProps, {setCurrentUser})(HeaderContainerAPI)