import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {DownloadOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';
import useInput from '../hooks/useInput';

const SubmitBtn = styled(Button)`
    background-color: #FFF3D4;
    color: #857171;
    border: none;
    border-radius: 20px;
    width: 20%;
    height: 40px;
    font-weight: 500;
    position: absolute;
    right: 15px;
    bottom: 15px;

    &:hover {
        background-color: #857171;
        border: 1px solid #857171;
        color: white;
    }
`;

const FileUploadWrapper = styled.div`

display: flex;
margin-bottom: 20px;

#file[type="file"] {
	display: none;
}

.label-holder {
    display: flex;
    margin: 1em auto;
    width: 50%;
    height: 20vh;
}

.label{
  display: grid;
  place-items: center;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  padding: 5vh 0;
}

.label > span {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 1.1rem;
    color: gray;
}

.result{
  width: 100%;
  margin-top:1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
`;

const SelectedImg = styled.img`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;

const FormWrapper = styled(Form)`
    margin: 0 auto;
    background-color: white;
    height: 45vh;
    position: relative;
    border-radius: 20px;
    box-shadow: grey 1px 1px 8px -7px;
`;


const PostForm = () => {
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput('');

  useEffect(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }
    const formData = new FormData();
    imagePaths.forEach((p) => {
      formData.append('image', p);
    });
    formData.append('content', text);
    return dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [text, imagePaths]);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
   
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    });
  }, []);

  return (
    <FormWrapper encType="multipart/form-data" onFinish={onSubmit}>
        <FileUploadWrapper>
            <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
            <div className="label-holder" onClick={onClickImageUpload}>
                <label htmlFor='file' className='label'>
                    <span>
                        <DownloadOutlined style={{fontSize: '30px', marginBottom: '10px'}}/>
                        Upload Images
                    </span>
                </label>
            </div>
      <div>
        {imagePaths.map((v, i) => (
          <div key={v} style={{position: 'relative'}}>
            <SelectedImg src={`http://localhost:3065/${v}`} alt={v} style={{width: '20vw', heigth: '20vh'}} />
            <Button onClick={onRemoveImage(i)} style={{position: 'absolute', zIndex: 1, top: 0, right: 0}}>X</Button>
          </div>
        ))}
      </div>
        </FileUploadWrapper>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={300}
        placeholder="반려동물에 대한 자유로운 글을 작성해주세요"
        style={{border: 'none'}}
      />
    <SubmitBtn htmlType="submit">업로드</SubmitBtn>
    </FormWrapper>
  );
};

export default PostForm;