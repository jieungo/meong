import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const LoginButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  background: ${props => props.primary ? "white" : "#857171"};
  color: ${props => props.primary ? "#857171" : "white"};
`;

const LoginInput = styled(Input)`
  width: 100%;
  border-radius: 20px;
`;

const FormWrapper = styled(Form)`
  padding: 20px;
  height: 45vh;
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: grey 1px 1px 8px -7px;
  background: white;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        {/* <label htmlFor="user-email" >이메일</label> */}
        <br />
        <LoginInput name="user-email" type="email" value={email} onChange={onChangeEmail} required placeholder="이메일" />
      </div>
      <div>
        {/* <label htmlFor="user-password" >비밀번호</label> */}
        <br />
        <LoginInput
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
          placeholder="비밀번호"
        />
      </div>
      <ButtonWrapper>
        <LoginButton htmlType="submit" loading={logInLoading}>로그인</LoginButton>
        <Link href="/signup"><a><LoginButton primary>회원가입</LoginButton></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;