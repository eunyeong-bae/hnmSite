import React from 'react';
import Button from 'react-bootstrap/Button';

const Login = () => {
  return (
    <div className='login-container'>
        <img className='style-margin' width={100} src='https://1000logos.net/wp-content/uploads/2017/02/HM-Logo.png' />
        <input className='style-margin' type='text' placeholder='이메일을 입력하세요'/>
        <input type='text' placeholder='비밀번호를 입력하세요'/>
        <Button className='style-margin' variant="primary">로그인</Button>
    </div>
  )
}

export default Login
