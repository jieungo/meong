import React from 'react';
import {Input} from 'antd';

const MainPage = () => {
    return (
        <div>
            <h1>Home</h1>
            <Input.Search placeholder="원하는 태그를 입력해보세요" style={{ padding: 20 }}/>
        </div>
    );
};

export default MainPage;