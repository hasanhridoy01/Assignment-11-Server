import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='mt-5'>
      <div className="footer bg-dark p-5">
        <p className='footer-text'>CopyRight &copy; 2022 Made By Iphone WareHouse</p>
        <li className='facebook'>
					<span class="fa fa-facebook-square"></span>
				</li>
				<li className='twitter'>
					<span class="fa fa-twitter-square"></span>
				</li>
				<li className='instagram'>
					<span class="fa fa-instagram"></span>
        </li>
      </div>
    </div>
  );
};

export default Footer;