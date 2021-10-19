import { all, fork, takeLatest, delay, put} from 'redux-saga/effects';
import axios from 'axios';
import {
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS,
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,} from '../reducers/post';
import { ADD_POST_TO_ME } from '../reducers/user';
import shortId from 'shortid';

function addPostAPI(data) {
    return axios.post('/api/post', data)
}

function* addPost(action) {
    try {
        yield delay(1000);
        const id = shortId.generate();
        // const result = yield call(addPostAPI, action.data)
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                id,
                content: action.data
            },
        });
        yield put({
            type: ADD_POST_TO_ME, //saga는 동시에 여러 액션을 디스패치 가능. 어떤 액션이 여러 리듀서의 데이터를 동시에 바꿔야 한다면 이렇게 액션 여러 번 호출
            data: id,
        })
    } catch(err) {
        yield put({
            type:ADD_POST_FAILURE,
            data:err.response.data,
        });
    }
}

function removePostAPI(data) {
    return axios.delete('/api/post', data)
}

function* removePost(action) {
    try {
        yield delay(1000);
        // const result = yield call(addPostAPI, action.data)
        yield put({
            type: REMOVE_POST_SUCCESS, //이건 포스트 리듀서 조작 부분, 밑에는 유저 리듀서 조작 부분
            data: action.data
        });
        yield put({
            type: REMOVE_POST_OF_ME, //saga는 동시에 여러 액션을 디스패치 가능. 어떤 액션이 여러 리듀서의 데이터를 동시에 바꿔야 한다면 이렇게 액션 여러 번 호출
            data: action.data
        })
    } catch(err) {
        yield put({
            type:REMOVE_POST_FAILURE,
            data:err.response.data,
        });
    }
}



function addCommentAPI(data) {
    return axios.post(`/api/post/${data.postId}/comment`, data)
}

function* addComment(action) {
    try {
        yield delay(1000);
        // const result = yield call(addPostAPI, action.data)
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data,
        })
    } catch(err) {
        yield put({
            type:ADD_COMMENT_FAILURE,
            data:err.response.data,
        })
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment),
    ]);
}