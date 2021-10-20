import { all, fork, takeLatest, delay, put, throttle} from 'redux-saga/effects';
import axios from 'axios';
import {
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS,
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
    LOAD_POST_REQUEST, LOAD_POST_FAILURE, LOAD_POST_SUCCESS, generateDummyPost,
    LIKE_FAILURE, LIKE_SUCCESS, LIKE_REQUEST, UNLIKE_FAILURE,
    UNLIKE_REQUEST, UNLIKE_SUCCESS} from '../reducers/post';
import { ADD_POST_TO_ME , REMOVE_POST_OF_ME} from '../reducers/user';
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

function loadPostAPI(data) {
    return axios.get('/api/post', data)
}

function* loadPost(action) {
    try {
        yield delay(1000);
        const id = shortId.generate();
        // const result = yield call(addPostAPI, action.data)
        yield put({
            type: LOAD_POST_SUCCESS,
            data: generateDummyPost(10),
        });
    } catch(err) {
        yield put({
            type: LOAD_POST_FAILURE,
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

function likePostAPI(data) {
    return axios.delete(`/post/${data}/like`)
}

function* likePost(action) {
    try {
        yield delay(1000);
        // const result = yield call(addPostAPI, action.data)
        yield put({
            type: LIKE_SUCCESS,
            data: action.data,
        })
    } catch(err) {
        yield put({
            type: LIKE_FAILURE,
            data:err.response.data,
        })
    }
}

function unLikePostAPI(data) {
    return axios.patch(`/post/${data}/like`)
}

function* unLikePost(action) {
    try {
        yield delay(1000);
        // const result = yield call(addPostAPI, action.data)
        yield put({
            type: UNLIKE_SUCCESS,
            data: action.data,
        })
    } catch(err) {
        yield put({
            type: UNLIKE_FAILURE,
            data:err.response.data,
        })
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchLoadPost() {
    yield throttle(1000, LOAD_POST_REQUEST, loadPost);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchLikePost() {
    yield takeLatest(LIKE_REQUEST, likePost);
}

function* watchUnLikePost() {
    yield takeLatest(UNLIKE_REQUEST, unLikePost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchLoadPost),
        fork(watchRemovePost),
        fork(watchAddComment),
        fork(watchLikePost),
        fork(watchUnLikePost),
    ]);
}