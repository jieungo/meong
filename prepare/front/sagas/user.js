import { all, fork, put, delay, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    LOG_OUT_SUCCESS, LOG_OUT_REQUEST, LOG_OUT_FAILURE,
    SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS,
    UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS,
    FOLLOW_FAILURE, FOLLOW_SUCCESS, FOLLOW_REQUEST} from '../reducers/user';

function logInAPI(data) { //실제 서버에 데이터를 보내는 부분. *붙이지 않는다. data는 action.data
	return axios.post('/user/login', data, { withCredentials: true })
}

function* logIn(action) { //LOG_IN_REQUEST에 대한 매개변수가 여기로 전달이 된다. action.data는 로그인리퀘스트의 데이터
try {
	const result = yield call(logInAPI, action.data) //loginAPI 실행하고 결괏값을 result로 받음.
    yield put({ //put은 디스패치!
		type: LOG_IN_SUCCESS,
        data: result.data,
		// data: result.data	//result.data는 API에서의 요청 성공 결과
	});
} catch (err) {
    console.log(err);
	yield put({
		type: LOG_IN_FAILURE,
		data: err.response.data, //실패결과
	})
}}

function logOutAPI() {
	return axios.post('/user/logout', null, { withCredentials: true });
}

function* logOut() {
try {
	yield call(logOutAPI)
	yield put({
		type: LOG_OUT_SUCCESS,
	});
} catch (err) {
	yield put({
		type: LOG_OUT_FAILURE,
		data: err.response.data,
	})
}}

function signUpAPI(data) {
    return axios.post('http://localhost:3065/user', data); //여긴 제너레이터X. 실제로 서버에 요청을 보냄
}

function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data) //위의 리턴값을 result에 받음
        console.log(result);
        yield put({
            type: SIGN_UP_SUCCESS,
        })
    } catch(err) {
        yield put({ // put은 dispatch. 밑의 action을 dispatch
            type: SIGN_UP_FAILURE,
            error:err.response.data,
        })
    }
}

function unFollowAPI() {
    return axios.post('/api/unFollow')
}

function* unFollow(action) {
    try {
        yield delay(1000);
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: action.data,
        })
    } catch(err) {
        yield delay(1000);
        yield put({ 
            type: UNFOLLOW_FAILURE,
            error:err.response.data
        })
    }
}

function followAPI() {
    return axios.post('/api/follow')
}

function* follow(action) {
    try {
        yield delay(1000);
        yield put({
            type: FOLLOW_SUCCESS,
            data: action.data,
        })
    } catch(err) {
        yield delay(1000);
        yield put({ 
            type: FOLLOW_FAILURE,
            error:err.response.data
        })
    }
}

function* watchLogIn() { // LOG_IN 액션 실행하면 뒤의 logIn 함수를 실행한다.
	yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
	yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp); //take, call 등 이펙트 앞에는 꼭 yield 붙임
}

function* watchFollow() {
	yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnFollow() {
	yield takeLatest(UNFOLLOW_REQUEST, unFollow);
}


export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
		fork(watchSignUp),
		fork(watchFollow),
		fork(watchUnFollow),
    ])
}