import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setCurrentProfile } from '../../../src/redux/auth';
import { authMe } from 'redux/axios/requestApi';

class HeaderContainerAPI extends React.Component {

    componentDidMount(){
        authMe().then(data => {
            this.props.setCurrentProfile(data.data)
        });
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

const HeaderComponent = connect(mapStateToProps, {setCurrentProfile})(HeaderContainerAPI)


export default HeaderComponent;