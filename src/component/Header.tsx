import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
   <React.Fragment>
     <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                  
                    <li className="navigation__item"><Link to="login" className="navigation__link"><span>01</span>เข้าสู่ระบบ</Link></li>
                    <li className="navigation__item"><Link to="" className="navigation__link"><span>02</span>หน้าหลัก</Link></li>
                    <li className="navigation__item"><Link to="trip" className="navigation__link"><span>03</span>ทัวร์ทั้งหมด</Link></li>
                    <li className="navigation__item"><Link to="register" className="navigation__link"><span>04</span>สมัครสมาชิก</Link></li>
                    <li className="navigation__item"><Link to="login" className="navigation__link"><span>05</span>Book now</Link></li>
                    </ul>
            </nav>
        </div>
        
       


   </React.Fragment>
  )
}

export default Header