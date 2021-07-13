import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { SendMessage} from '../../../redux/Message-Reducer';
import Message from './Message';




let mapStateToProps = (state) => {
    return {
        PageMessage: state.PageMessage,
        isAuth: state.authData.loged,
    }
}
export default compose(
    connect(mapStateToProps, {SendMessage}),
    withAuthRedirect
)(Message);