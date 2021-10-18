import { all, fork, put, delay, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) { //실제 서버에 데이터를 보내는 부분. *붙이지 않는다. data는 action.data
	return axios.post('/api/login', data)
}

function* logIn(action) { //LOG_IN_REQUEST에 대한 매개변수가 여기로 전달이 된다. action.data는 로그인리퀘스트의 데이터
try {
	// const result = yield call(logInAPI, action.data) //loginAPI 실행하고 결괏값을 result로 받음.
	yield delay(1000); //아직 서버가 없으니 delay 효과
    yield put({ //put은 디스패치!
		type: 'LOG_IN_SUCCESS',
        data: action.data,
		// data: result.data	//result.data는 API에서의 요청 성공 결과
	});
} catch (err) {
	yield put({
		type: 'LOG_IN_FAILURE',
		data: err.response.data, //실패결과
	})
}}

function logOutAPI(data) {
	return axios.post('/api/logout')
}

function* logOut(action) {
try {
	// const result = yield call(logOutAPI)
    yield delay(1000);
	yield put({
		type: 'LOG_OUT_SUCCESS',
		data: action.data,
	});
} catch (err) {
	yield put({
		type: 'LOG_OUT_FAILURE',
		data: err.response.data,
	})
}}

function* watchLogIn() { // LOG_IN 액션 실행하면 뒤의 logIn 함수를 실행한다.
	yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
	yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}