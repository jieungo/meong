import shortId from 'shortid';

const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'pengsu',
        },
        content: '더미데이터로 작성하는 게시글! #신기하다 #오왕',
        Images: [{
            id:shortId.generate(),
            src: '../2.jpeg'
        }, {
            id:shortId.generate(),
            src: 'https://img.insight.co.kr/static/2017/06/16/700/9vke1kznh4m13yp31118.jpg'
        }, {
            id:shortId.generate(),
            src: 'https://pbs.twimg.com/media/Crkdy0QUsAA66MR.jpg'
        }],
        Comment: [{
            id:shortId.generate(),
            User: {
                id:shortId.generate(),
                nickname: 'penggu'
            },
            content: '펭수당',
        }, {
            id:shortId.generate(),
            User: {
                id:shortId.generate(),
                nickname: 'pengsun'
            },
            content: '무야호',
        }]
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

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
        nickname: '감',
    },
    Images:[],
    Comment: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: '감',
    },
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            }
        case ADD_POST_SUCCESS:
          return {
                ...state,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
          };
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            };
        case REMOVE_POST_REQUEST:
            return {
                ...state,
                removePostLoading: true,
                removePostDone: false,
                removePostError: null,
            }
        case REMOVE_POST_SUCCESS:
          return {
                ...state,
                mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
                removePostLoading: false,
                removePostDone: true,
          };
        case REMOVE_POST_FAILURE:
            return {
                ...state,
                removePostLoading: false,
                removePostError: action.error,
            };
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            }
        case ADD_COMMENT_SUCCESS:
          return {
                ...state,
                addCommentLoading: false,
                addCommentDone: true,
          };
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error,
            };
    default: {
        return {
          ...state,
        };
      }
  }
}

export default reducer;