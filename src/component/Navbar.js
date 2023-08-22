import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','Sale','지속가능성'];
  return (
    <div>
      <div className='login-container'>
        <FontAwesomeIcon icon={faUser} />
        <div className='login-btn'>로그인</div>
      </div>
      <div className='nav-section'>
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
            <input type='text' className='search-input' placeholder='제품검색' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
