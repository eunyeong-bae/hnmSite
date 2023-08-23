import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','Sale','지속가능성'];
    const navigate = useNavigate();
    
    const goToLogin = () => {
      setAuthenticate(false);
      navigate('/login')
    };

    const productSearch = (event) =>{
      if(event.key === 'Enter'){
        //입력한 값을 가져와서
        let keyword = event.target.value;
        //url 을 바꿔준다
        navigate(`/?q=${keyword}`)
      }
    };

    const goToMain = () => {
      navigate('/')
    };
  return (
    <div>
      <div className='nav-top-container' onClick={goToLogin}>
        {/* <div>
          <FontAwesomeIcon icon={faUser} />
        </div> */}
        <div className='nav-login'>
          <FontAwesomeIcon icon={faUser} />
          <div className='login-btn'>{authenticate ? '로그아웃' : '로그인'}</div>
        </div>
      </div>

      <div className='nav-section' onClick={goToMain}>
        <img width={100} src='https://1000logos.net/wp-content/uploads/2017/02/HM-Logo.png' />
      </div>
      
      <div className='menu-area'>
        <ul className='menu-list'>
            { 
                menuList.map((menu, idx) => <li key={idx}>{menu}</li>)
            }
        </ul>
        <div className='search-area'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' className='search-input' placeholder='제품검색' onKeyDown={(event) =>productSearch(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
