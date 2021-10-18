
const initialState = {
    isLoggingIn: false, //login 시도중
    isLoggedIn: false,
    isLoggingOut: false,
    isSignup: false,
    user: null,
    signUpData: {},
    loginData: {},
}

export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
}

export const loginSuccessAction = (data) => {
    return {
        type: 'LOG_IN_SUCCESS',
        data,
    }
}

export const loginFailureAction = (data) => {
    return {
        type: 'LOG_IN_FAILURE',
        data,
    }
}

export const logoutRequestAction = () => {
    return {
        type: 'LOG_OUT_REQUEST',
    }
}

export const logoutSuccessAction = () => {
    return {
        type: 'LOG_OUT_SUCCESS',
    }
}

export const logoutFailureAction = () => {
    return {
        type: 'LOG_OUT_FAILURE',
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOG_IN_REQUEST':
            return {
                ...state,
                isLoggingIn: true,
                isLoggedIn:false,
                user: action.data,
            }
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn:true,
                user: {...action.data, nickname: 'hohoho'},
            }
        case 'LOG_IN_FAILURE':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
                user: action.data,
            }
        case 'LOG_OUT_REQUEST':
            return {
                    ...state,
                    isLoggingOut: true,
                    isLoggedIn:false,
                    user:null,
            }
        case 'LOG_OUT_SUCCESS':
            return {
                    ...state,
                    isLoggingOut: false,
                    isLoggedIn:false,
                    user:null,
            }
        case 'LOG_OUT_FAILURE':
            return {
                    ...state,
                    isLoggingOut: false,
                    isLoggedIn:false,
                    user:null,
            }
        default :
            return state;
    }
};

export default reducer;