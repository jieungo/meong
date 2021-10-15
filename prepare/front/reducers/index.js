import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    user: {
        isLoggedIn: false,
        isSignup: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    posts: {
        mainPosts: [],
    }
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

export const signupAction = (data) => {
    return {
        type: 'SIGN_UP',
        data,
    }
}



const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return {...state, ...action.payload};
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn:true,
                    user: action.data,
                }
            }
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn:false,
                    user:null,
                }
            }
            case 'SIGN_UP':
                return {
                    ...state,
                    user: {
                        ...state.user,
                        isSignup:true,
                    }
                }
        default :
            return state;
    }
};

export default rootReducer;