
const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'pengsu',
        },
        content: '더미데이터로 작성하는 게시글! #신기하다 #오왕',
        Images: [{
            src: 'https://image-notepet.akamaized.net/resize/620x-/seimage/20210412%2F22e34e42be76bbe02c263465d4e557a9.jpg'
        }, {
            src: 'https://img.insight.co.kr/static/2017/06/16/700/9vke1kznh4m13yp31118.jpg'
        }, {
            src: 'https://pbs.twimg.com/media/Crkdy0QUsAA66MR.jpg'
        }],
        Comment: [{
            User: {
                nickname: 'penggu'
            },
            content: '펭수당',
        }, {
            User: {
                nickname: 'pengsun'
            },
            content: '무야호',
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';

export const addPost = {
    type: ADD_POST,
} 

const dummyPost = {
    id: 2,
    content: '이것은 더미데이터',
    User: {
        id: 2,
        nickname: 'pengpeng',
    },
    Images: [{
        
    }],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST :
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default :
            return state;
    }
};

export default reducer;