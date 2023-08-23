import React from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (e)=>{
    e.preventDefault();//refresh 막기
    setAuthenticate(true);
    navigate('/');
  }
  return (
    <Container>
      <Form onSubmit={(event) =>loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
    // <div className='login-container'>
    //     <img className='style-margin' width={100} src='https://1000logos.net/wp-content/uploads/2017/02/HM-Logo.png' />
    //     <input className='style-margin' type='text' placeholder='이메일을 입력하세요'/>
    //     <input type='text' placeholder='비밀번호를 입력하세요'/>
    //     <Button className='style-margin' variant="primary">로그인</Button>
    // </div>
  )
}

export default Login
