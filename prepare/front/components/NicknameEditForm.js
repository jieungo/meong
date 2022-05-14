import { Form, Input } from 'antd';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import useInput from '../hooks/useInput';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';

const CardWrapper = styled(Form)`
background-color: white;
height: 10vh;
border-radius: 20px;
box-shadow: grey 1px 1px 8px -7px;
margin-bottom: 10px;

.ant-form {
  border: none;
}

.ant-input-group-addon {
  background: none;
  border: none;
}

`;

const ChangeNicknameInput = styled(Input.Search)`
  .ant-form, .ant-form-horizontal {
    border: none;
  }

  .ant-btn-primary {
    background: #857171;
    border: none;
  }
`;




const NicknameEditForm = () => {
  const { me } = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput(me?.nickname || '');
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
  }, [nickname]);

  return (
    <CardWrapper style={{ marginBottom: '20px', padding: '20px' }}>
      <ChangeNicknameInput
        value={nickname}
        onChange={onChangeNickname}
        addonBefore="닉네임"
        enterButton="수정"
        onSearch={onSubmit}
      />
    </CardWrapper>
  );
};

export default NicknameEditForm;