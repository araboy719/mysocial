const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let NewPost = {
                id: 4,
                message: state.newPostText,
            };

            state.posts.push(NewPost);
            state.newPostText = '';

            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = (action.NewText);

            return state;
        default:
            return state;
    }

}


export const AddPostAclionCreator = () => {
    return {
        type: 'ADD-POST',
    }
}
export const changePostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        NewText: text,
    }
}
export default profileReducer;