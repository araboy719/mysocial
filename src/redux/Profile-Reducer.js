const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState =  {
    posts: [
      { id: 1, message: "Hi it is my first post" },
      { id: 2, message: "i am study React" },
      { id: 3, message: "Now i am use 'props'" },
    ],
    newPostText: ''

  }

const profileReducer = (state = initialState, action) => {
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