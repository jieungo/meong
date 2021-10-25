import React, { useCallback, useState, useRef, useEffect } from 'react';
import {Form, Input, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {ADD_POST_REQUEST} from '../reducers/post';
import styled from 'styled-components';
import Wrapper from '../styles/wrapper.module.css';
import useInput from '../hooks/useInput';
import {DownloadOutlined} from '@ant-design/icons';


const SubmitBtn = styled(Button)`
    background-color: #FFF3D4;
    color: #857171;
    border: none;
    max-width: 600px;
    margin: 20px auto;
    width: 100%;
    margin-bottom: 40px;
    height: 40px;
    font-weight: 500;

    &:hover {
        background-color: #857171;
        border: 1px solid #857171;
        color: white;
    }
`;

const FileUploadWrapper = styled.div`

#file[type="file"] {
	display: none;
}

.label-holder {
  margin-top: 1em;
  display: grid;
  place-items: center;
  width: 100%;
  height: 30vh;
}

.label{
  display: grid;
  place-items: center;
  font-size: 1rem;
  cursor: pointer;
  border: 2px dashed gray;
  border-radius: 5px;
  width: 100%;
  padding: 10vh 0;
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

img{
  width: 25%;
  height: 150px;
  object-fit: fill;
  padding: 0.5rem;
}
`;


const PostForm = () => {
    const { imagePaths, addPostDone, addPostLoading } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput('');

    useEffect(() => {
        if (addPostDone) {
            setText('');
        }
    }, [addPostDone])

    const onSubmit = useCallback(() => {
        dispatch({
            type: ADD_POST_REQUEST,
            data: text,
        })
    },[text])
    
    const [selectedImages, setSelectedImages] = useState([]);

    const imageHandleChange = useCallback((e) => {
        if(e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            
            setSelectedImages((prevImages) => prevImages.concat(filesArray))
            Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
        }
    })

    const renderImages = (source) => {
        console.log("source: ", source);
        return source.map((image) => {
            return <img src={image} key={image} />
        })
    }

    return (
        <Form 
            className={Wrapper.pageWrapper} 
            style={{margin: '10px 0 20px'}} 
            encType='multipart/form-data' 
            onFinish={onSubmit}>
            <FileUploadWrapper>
                <input type="file" id="file" multiple onChange={imageHandleChange} />
                <div className="label-holder" >
                    <label htmlFor='file' className='label'>
                        <span>
                            <DownloadOutlined style={{fontSize: '30px', marginBottom: '10px'}}/>
                            Upload Images
                        </span>
                    </label>
                </div>
                <div className='result'>{renderImages(selectedImages)}</div>
            </FileUploadWrapper>
            {imagePaths.map((v) => (
                <div key={v} style={{display: 'inline-block'}}>
                    <img src={v} style={{width: '200px'}} alt={v} />
                    <div>
                        <Button>제거</Button>
                    </div>
                </div>
            ))}
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                rows={10}
                placeholder='반려동물에 대한 자유로운 글을 작성해주세요 🐶 🐹'
            />
            <SubmitBtn htmlType='submit' loading={addPostLoading}>
                <span>작성완료</span>
            </SubmitBtn>
        </Form>
    );
};

export default PostForm;