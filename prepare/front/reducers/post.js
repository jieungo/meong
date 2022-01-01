import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';

const initialState = {
    mainPosts: [],
    imagePaths: [],
    hasMorePost: true,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    likeLoading: false,
    likeDone: false,
    likeError: null,
    unLikeLoading: false,
    unLikeDone: false,
    unLikeError: null,
}

export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id: shortId.generate(),
        User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
        },
        content: faker.lorem.paragraph(),
        Images: [{
            src: '../2.jpeg'
        }],
        Comment: [{
            User: {
                id: shortId.generate(),
                nickname: faker.name.findName(),
            },
            content: faker.lorem.sentence(),
        }],
    Liked: [],
    }));

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LIKE_REQUEST = 'LIKE_REQUEST';
export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const LIKE_FAILURE = 'LIKE_FAILURE';

export const UNLIKE_REQUEST = 'UNLIKE_REQUEST';
export const UNLIKE_SUCCESS = 'UNLIKE_SUCCESS';
export const UNLIKE_FAILURE = 'UNLIKE_FAILURE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
})

const dummyPost = (data) => ({
    id: data.id,
    content: data.content,
    User: {
        id: 1,
        nickname: '펭수',
    },
    Images:[],
    Comment: [],
    Liked: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: '펭수',
    },
});

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LIKE_REQUEST:
                draft.likeLoading = true;
                draft.likeDone = false;
                draft.likeError = null;
                break;
            case LIKE_SUCCESS:
                draft.Liked.push({id: action.data});
                console.log(action.data);
                draft.likeLoading = false;
                draft.likeDone = true;
                break;
            case LIKE_FAILURE:
                draft.loadPostLoading = false;
                draft.loadPostError = action.error;
                break;
            case LOAD_POST_REQUEST:
                draft.loadPostLoading = true;
                draft.loadPostDone = false;
                draft.loadPostError = null;
                break;
            case LOAD_POST_SUCCESS:
                draft.mainPosts = draft.mainPosts.concat(action.data);
                draft.loadPostLoading = false;
                draft.loadPostDone = true;
                draft.hasMorePost = draft.mainPosts.length < 50;
                break;
            case LOAD_POST_FAILURE:
                draft.loadPostLoading = false;
                draft.loadPostError = action.error;
                break;
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.mainPosts.unshift(dummyPost(action.data));
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = false;
                draft.removePostDone = true;
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS: {
                const post = draft.mainPosts.find((v) => v.id === action.data.postId);
                post.Comment.unshift(dummyComment(action.data.content));
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
                // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
                // const post = { ...state.mainPosts[postIndex] };
                // post.Comments = [dummyComment(action.data.content), ...post.Comments];
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = post;
                // return {
                //   ...state,
                //   mainPosts,
                //   addCommentLoading: false,
                //   addCommentDone: true,
                // };
                }
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;
                default:
                break;
            }
            });
}

export default reducer;