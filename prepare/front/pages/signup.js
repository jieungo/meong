import React, { useCallback, useState, useEffect } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import axios from 'axios';
import { END } from 'redux-saga';

import { LOAD_MY_INFO_REQUEST, SIGN_UP_REQUEST } from '../reducers/user';
import useInput from '../hooks/useInput';
import AppLayout from '../components/AppLayout';
import wrapper from '../store/configureStore';

const ErrorMessage = styled.div`
  color: red;
`;

const SignupButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  background: #857171;
  color: white;
`;

const FormWrapper = styled(Form)`
  padding: 20px;
  height: 45vh;
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: grey 1px 1px 8px -7px;
  background: white;
`;

const SignupInput = styled(Input)`
  width: 100%;
  border-radius: 20px;
  margin-top: 20px;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, me } = useSelector((state) => state.user);

  useEffect(() => {
    if (me && me.id) {
      Router.replace('/');
    }
  }, [me && me.id]);

  useEffect(() => {
    if (signUpDone) {
      Router.replace('/');
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  
  const onSubmit = useCallback(() => {
      if (password !== passwordCheck) {
          return setPasswordError(true);
        }
        console.log(email, nickname, password);
        dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname },
        });
    }, [email, password, passwordCheck]);
    
    const onChangePasswordCheck = useCallback((e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    }, [password]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <FormWrapper onFinish={onSubmit}>
        <div>
          {/* <label htmlFor="user-email">이메일</label>
          <br /> */}
          <SignupInput placeholder="이메일" name="user-email" type="email" value={email} required onChange={onChangeEmail} />
        </div>
        <div>
          {/* <label htmlFor="user-nick">닉네임</label>
          <br /> */}
          <SignupInput placeholder="닉네임" name="user-nick" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          {/* <label htmlFor="user-password">비밀번호</label>
          <br /> */}
          <SignupInput placeholder="비밀번호" name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          {/* <label htmlFor="user-password-check">비밀번호체크</label>
          <br /> */}
          <SignupInput
            placeholder="비밀번호 확인" 
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <SignupButton htmlType="submit" loading={signUpLoading}>가입하기</SignupButton>
        </div>
      </FormWrapper>
    </AppLayout>
  );
};


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    console.log('getServerSideProps start');
    console.log(context.req.headers);
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    console.log('getServerSideProps end');
    await context.store.sagaTask.toPromise();
  });

export default Signup;