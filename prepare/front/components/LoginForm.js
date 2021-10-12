import React, { useCallback, useState } from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link';

const LoginForm = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    },[]);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[]);

    return (
        <Form style={{padding: "20px"}}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input name="user-email" value={email} onChange={onChangeEmail} required/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input 
                    name="user-password" 
                    type="password" 
                    value={password} 
                    onChange={onChangePassword} 
                    required
                />
            </div>
            <div style={{textAlign:"center"}}>
                <Button type="primary" htmlType="submit" loading={false} style={{margin: "20px 0"}}>로그인</Button>
                < br/>
                <span>놀멍쉬멍이 처음이신가요?</span>
                <Link href="/signup"><a>회원가입</a></Link>
            </div>
        </Form>
    );
};

export default LoginForm;