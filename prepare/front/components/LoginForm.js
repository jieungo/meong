import React, { useCallback, useState } from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link';
import styles from '../styles/login.module.css';
import styled from 'styled-components';

const LoginBtn = styled(Button)`
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

const LoginInput = styled(Input)`
    height: 40px;
`;

const LoginForm = ({setIsLoggedIn}) => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    },[]);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[]);

    const onSubmitBtn = useCallback(() => {
        setIsLoggedIn(true);
        console.log(email, password);
    }, [email, password]);

    return (
        <>
        <Form className={styles.loginForm} onFinish={onSubmitBtn}>
            <div className={styles.inputWrapper}>
                <label htmlFor="user-email">이메일</label>
                <br />
                <LoginInput name="user-email" value={email} onChange={onChangeEmail} required/>
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <LoginInput 
                    name="user-password" 
                    type="password" 
                    value={password} 
                    onChange={onChangePassword} 
                    required
                />
            </div>
            <div className={styles.buttonWrapper}>
                <LoginBtn htmlType="submit" loading={false}>로그인</LoginBtn>
                < br/>
                <span>놀멍쉬멍이 처음이신가요?</span>
                <Link href="/signup"><a>회원가입</a></Link>
            </div>
        </Form>
        </>
    );
};

export default LoginForm;