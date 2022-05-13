import React, { useState } from 'react'
import Map from '../components/Map';
import axios from 'axios';
import { END } from 'redux-saga';
import { LOAD_MY_INFO_REQUEST, SIGN_UP_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import OtherLayout from '../components/OtherLayout';
import styled from 'styled-components';


const LandingPage = () => {
  // 입력 폼 변화 감지하여 입력 값 관리
  const [Value, setValue] = useState("");
  // 제출한 검색어 관리
  const [Keyword, setKeyword] = useState("");

  // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
  const keywordChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  }

// 제출한 검색어 state에 담아주는 함수
const submitKeyword = (e) => {
  e.preventDefault();
  setKeyword(Value);
}

// 검색어를 입력하지 않고 검색 버튼을 눌렀을 경우
const valueChecker = () => {
  if (Value === "") {
    alert ("검색어를 입력해주세요.")
  }
}

return (
  <OtherLayout>
  <div className="landing-page" style={{
    border: 0,
    boxSizing: 'border-box',
    color: '#333',
    fontSize: '100%',
    font: 'inherit',
    margin: 0,
    padding: 0,
    textDecoration: 'none',
    verticalAlign: 'baseline',
    height: '100%',
    display: 'flex',
  }}>
    <div className="landing-page__inner" style={{ position: 'relative' }}>
      <div className="search-form-container" style={{ 
        position: 'relative',
        left: 0,
        padding: '0.75rem 0',
        position: 'absolute',
        top: 0,
        zIndex: 99,
        border: 0,
        boxSizing: 'border-box',
        color: '#333',
        margin: 0,
        padding: 0,
        textDecoration: 'none',
        verticalAlign: 'baseline',
        display: 'block',
      }}>
        <form className="search-form" onSubmit={ submitKeyword } style={{
          border: 0,
          boxSizing: 'border-box',
          color: '#333',
          fontSize: '100%',
          font: 'inherit',
          margin: 0,
          padding: 0,
          textDecoration: 'none',
          verticalAlign: 'baseline',
          display: 'block',
          width: '30vw',
          position: 'absolute',
          top: 5,
          left: 0,
          
        }}>
          <label htmlFor="place" className="form__label" style={{
            display: 'block',
            margin: '0 auto',
            maxWidth: '310px',
            position: 'relative',
            width: '100%',
          }}>
            <input type="text" className="form__input" name="place" onChange={ keywordChange } placeholder="검색어를 입력해주세요. (ex: 신림 애견카페)" style={{ 
              borderRadius: '30px',
              display: 'block',
              fontSize: '16px',
              height: '45px',
              lineHeight: '45px',
              padding: '0 15px 0 35px',
              width: '30vw',
              border: '3px solid #857171',
            }} required />
            <div className="btn-box" style={{ 
              height: '45px',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '33px', 
            }}>
              <input
              className="btn form__submit" type="submit" value="검색" onClick={ valueChecker }
              style={{
                background: 'transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABOZJREFUeNrsnf9N4zAUxxN0A2SEsEGYoOkE9CaglZDuT+gEVScA/jzppJYJKBMQJqAbXEboCGejL1LFQf2cOPaz855ktRIVsf3x9/nZ8Y8sExMTExMTExMTc285h0z8/rMp1EetUqXSRKUC30/ZXqWDSq/43vy6XhwESHcIusKvjkC4sHcwKj0qOHsBQlPCTKUbhxBOwXlQYLYC5GsQtwBReC6jdmMPKt3H4NJyDzDm6mOlUhm4rK1Ka+6KyQcEoQFs0EdwMt3HLBSYliOQswFV8cYQRoY8vSGP6StEFVSrYp7FYVullEWSQNBxPzlQRYOxRYv0lZVIE0fP+8mlw88dwnjpGMrqitAd7bOqlKbj8zWUSyizSxSnQ+QpByh5QBiDRD09ojoWUH44+B9PljB0gZdDhZ/4v1uAubNQTIWyTKONstCB2/jwe5XOfYwF8IxzPJMcgaFM8bkstMCNhSp07L8LUUiV1xnySlXLItQAMu9YwBLjDEoBW0QxQSf7MJn5ROxbdAO6CDF47OqyqK1tj4IFn3lFHi6QJ5MVFuoPCwSuqiYqY8ppQg95mZ4Y33zuT7wPcHNLGAVcVUmQ/JTrOwm4rxeCylso/MBVIbdEH7zg/IIIeaNMmZQoM1uXdUMJbUNFU5ZQdsSQ+IYlEPhTk8S1tNdZPLZGnk928D77kjPH6ljGtNAAeV1yUklOVEeFzvxkB6gKeJ5FaKp8fwl9o5fwnaqQK6L8Y7W1ozrwBsQ07jjEtrrjk+vaEvqSmgUQjD1Ms7nbLH4zlaFCXQRXCKVlPCcA5NlRXQwOpCJIvomdBrEMFQcgE8Pfmywda3rWhRcgJr/5mhCQ1551wcJltQkBaXvWhdeRugBhNA4R4wDER9wt5l4hhzFVGNYThAFCnLkdlYqGXvggfUiCLqtMqD7KGIDsBQi5LrwAMfUjk4SATHrWhRcgpumEOiEgdc+6YOGyPvZnxB7O1i7qwgeQhvCbywTUcemoLoYFgrGIqWXMEwBiKsPex4oaathrahkF112tRHc1JwxwHzmNQyiZWUWsDkred2yAYD2ScTwSo0qQZ9P4o/G1V8RmpP5A+M1dTDPEyOudIw/hFwhx7VIRmetaEfqO1ueaM9u5LIpKbrGnj7s6dB4pWw28rsi0BaKX71N86QbrgbnC0HmjbFlrfa/ItAKCOJzSYt6P2eDYnxwdAULJm/dzUKyn39FiKCNWHbm8cIJydOpESfj5LsQCwK7vQxYZbebzfRsDB/d1tKWCkpdDCHV0BoKYfEn8+YdSZgFhzCyUoS3YxqO8Z0Ftz8bSQcHaV2HholaZ/cbNYLuIXZwGpFtebVnY5dDRS4fDZ1hAkeOZmEGRA8yYQZEj/phBGfshmOygOF8oh1M+qeOUmKxA+F5FpZAjpWiXwvEgZdZKGdtR40t8Uk4CCgJlDIfx/xdeWxzP5B2K9/tDoBgf11XoaO3xu3EOVygpXuiiX7fuKO/AOUIZ/ZVH3KCwAMKgQbCBIkCYQREgzKAIEGZQBAgzKAKEGRQBwgyKAGEGRYAwgyJAmEERIGGgfHs3iRytYWFo2dOs39vQkxOfohC/SjFeZClA/EEh3SoqQPxAIV/xKkCGh2J1364AGRaK9eXHAmQ4KJ1uohYgw0DZcbsWfMxQSqkFMTExMTExMTFu9k+AAQB6X0pCGiyRjAAAAABJRU5ErkJggg==) 9px no-repeat',
                backgroundSize: '20px auto',
                border: 'none',
                color: 'transparent',
                fontSize: 0,
                height: '100%',
                lineHeight: 1,
                textIndent: '-9999px',
                width: '100%',
              }}/>
            </div>
          </label>
        </form>
      </div>
    </div>
  </div>
      {/* 제출한 검색어 넘기기 */}
    <Map searchKeyword={ Keyword } />
</OtherLayout>
)
}


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

export default LandingPage