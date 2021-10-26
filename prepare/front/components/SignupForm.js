import React, { useCallback, useEffect, useState } from 'react';
import {Form, Input, Button} from 'antd';
import Router from 'next/router';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import styles from '../styles/login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from '../reducers/user';

const LogoutBtn = styled(Button)`
background-color: white;
border: 1px solid #857171;
max-width: 600px;
margin: 20px 0;
width: 100%;
margin-bottom: 40px;
height: 40px;

&:hover {
    background-color: #857171;
    border: 1px solid #857171;
    color: white;
}
`;

const LogoutInput = styled(Input)`
height: 40px;
`;

const ErrorMessage = styled.div`
    color: red;
`;

const SignupForm = () => {
const dispatch = useDispatch();
const { signUpLoading, signUpDone, signUpError } = useSelector((state) => state.user);

useEffect(() => {
    if(signUpDone) {
        Router.push('/');
    }
}, [signUpDone])

useEffect(() => {
    if(signUpError) {
        alert(signUpError);
    }
}, [signUpError]);

const [email, onChangeEmail] = useInput('');
const [password, onChangePassword] = useInput('');
const [nickname, onChangeNickname] = useInput('');

const [passwordCheck, setPasswordCheck] = useState('');
const [passwordCheckError, setPasswordCheckError] = useState(false);
const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordCheckError(e.target.value !== password); 
    //일치하지 않으면 setPasswordCheckError(true)
}, [password]);
const onSubmitBtn = useCallback((e) => {
    if (password == passwordCheck) {
        setPasswordCheckError(false);
    }
    console.log(email, password);
    dispatch({ // 여기서 디스패치
        type: SIGN_UP_REQUEST,
        data: {email, password, nickname},
    })
}, [email, password]);

    return (
        <>
        <Form className={styles.logoutForm} onFinish={onSubmitBtn}>
            <div className={styles.inputWrapper}>
                <label htmlFor="user-email">이메일</label>
                <br />
                <LogoutInput name="user-email" value={email} type="email" onChange={onChangeEmail} required/>
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="user-nickname">닉네임</label>
                <br />
                <LogoutInput name="user-nickname" value={nickname} onChange={onChangeNickname} required/>
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <LogoutInput 
                    name="user-password" 
                    type="password" 
                    value={password} 
                    onChange={onChangePassword} 
                    required
                />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="user-password-check">비밀번호 확인</label>
                <br />
                <LogoutInput 
                    name="user-password-check" 
                    type="password" 
                    value={passwordCheck} 
                    onChange={onChangePasswordCheck} 
                    required
                />
            { passwordCheckError && <ErrorMessage>비밀번호 확인이 일치하지 않습니다.</ErrorMessage>}
            </div>
            <div className={styles.buttonWrapper}>
                <LogoutBtn htmlType="submit" loading={signUpLoading}>
                    회원가입
                </LogoutBtn>
            </div>
        </Form>
        </>
    );
};

export default SignupForm;