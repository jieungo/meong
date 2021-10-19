
export const initialState = {
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    changeNicknameLoading: false,
    changeNicknameDone: false,
    changeNicknameError: null,
    user: null,
    signUpData: {},
    loginData: {},
}

export const LOG_IN_REQUEST ='LOG_IN_REQUEST';
export const LOG_IN_SUCCESS ='LOG_IN_SUCCESS';
export const LOG_IN_FAILURE ='LOG_IN_FAILURE';

export const LOG_OUT_REQUEST ='LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS ='LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE ='LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST ='SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS ='SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE ='SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST ='CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS ='CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE ='CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST ='FOLLOW_REQUEST';
export const FOLLOW_SUCCESS ='FOLLOW_SUCCESS';
export const FOLLOW_FAILURE ='FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST ='UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS ='UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE ='UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';


const dummyUser = (data) => ({ //data에 이메일,비밀번호 들어가있음
    ...data,
    nickname: 'jieunnn',
    id: 1,
    Posts: [{id:1}],
    Followings: [{nickname: '하하'},{nickname: '호호'},{nickname: '후후'}],
    Followers: [{nickname: '하하'},{nickname: '호호'},{nickname: '후후'}],
})

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    }
}

export const logoutRequestAction = () => {
    return {
        type: LOG_OUT_REQUEST,
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST :
            return {
                ...state,
                logInLoading: true,
                logInError: null, //로딩할때 에러는 없애줘야한다
                logInDone: false,
            };
        case LOG_IN_SUCCESS :
            return {
                ...state,
                logInLoading: false,
                logInDone: true,
                user: dummyUser(action.data),
            };
        case LOG_IN_FAILURE :
            return {
                ...state,
                logInError: action.error,
                logInLoading: false,
            };
        case LOG_OUT_REQUEST :
            return {
                ...state,
                logOutLoading: true,
                logOutDone: false,
                logOutError: null,
            };
        case LOG_OUT_SUCCESS :
            console.log('logged out!');
            return {
                ...state,
                logOutLoading: false,
                logOutDone: true,
                logOutError: null,
                logInDone: false,
                user: null,
            };
        case LOG_OUT_FAILURE :
            return {
                ...state,
                logOutLoading: false,
                logOutError: action.error
            };
        case SIGN_UP_REQUEST :
            return {
                ...state,
                signUpLoading: true,
                signUpDone: false,
                signUpError: null,
            };
        case SIGN_UP_SUCCESS :
            return {
                ...state,
                signUpLoading: false,
                signUpDone: true,
                signUpError: null,
            };
        case SIGN_UP_FAILURE :
            return {
                ...state,
                signUpLoading: false,
                signUpError: action.error
            };
        case CHANGE_NICKNAME_REQUEST :
            return {
                ...state,
                changeNicknameLoading: true,
                changeNicknameDone: false,
                changeNicknameError: null,
            };
        case CHANGE_NICKNAME_SUCCESS :
            return {
                ...state,
                changeNicknameLoading: false,
                changeNicknameDone: true,
            };
        case CHANGE_NICKNAME_FAILURE :
            return {
                ...state,
                changeNicknameLoading: false,
                changeNicknameError: action.error
            };
        case ADD_POST_TO_ME:
            return {
                ...state,
                user: {
                    ...state.user,
                    Posts: [{id:action.data}, ...state.user.Posts],
                }
            };

        case REMOVE_POST_OF_ME:
            return {
                ...state,
                user: {
                    ...state.user,
                    Posts: state.user.Posts.filter((v) => v.id !== action.data),
                }
            };
        default:
            return state;
    }
};

export default reducer;