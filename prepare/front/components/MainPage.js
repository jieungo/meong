import React from 'react';
import {Input} from 'antd';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
    max-width: 600px;
    margin-top: 30px;
    padding: 20px;
    
`;

const MainPage = () => {
    return (
        <div style={{textAlign:'center'}}>
            <SearchInput placeholder="원하는 태그를 입력해보세요"/>
        </div>
    );
};

export default MainPage;