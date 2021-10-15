import {createWrapper} from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import reducer from '../reducers';

const configureStore = () => {
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares)) //베포용은 데브툴 연결 X 히스토리 다 보이면 위험 -> 보안을 위해!
    : composeWithDevTools(applyMiddleware(...middlewares)) //개발용은 데브툴 연결 O
    const store = createStore(reducer, enhancer);
    return store;
};

const wrapper = createWrapper(configureStore, {
	debug: process.env.NODE_ENV === 'development',
});

export default wrapper;