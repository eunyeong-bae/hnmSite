import React,{useState} from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {authenticateAction} from '../redux/actions/authenticateAction';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginUser = (e)=>{ //로그인하면 id, pw, authenticate 정보 변경
    e.preventDefault();//refresh 막기
    dispatch(authenticateAction.login(id,pw))
    navigate('/');
  }
  return (
    <Container>
      <Form onSubmit={(event) =>loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setId(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setPw(e.target.value)} />
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
