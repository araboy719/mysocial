import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setCurrentProfile } from '../../../src/redux/auth';

class HeaderContainerAPI extends React.Component {

    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0//auth/me", {withCredentials: true}).then(response => {
            this.props.setCurrentProfile(response.data.data)
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