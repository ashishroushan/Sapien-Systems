import React from 'react';
import NavLink from 'react-bootstrap/esm/NavLink';
import './SideOptionMenu.css';
import { AiFillSetting } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineCalendar } from 'react-icons/ai';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BsChatSquare } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiPackage } from 'react-icons/bi';
import { BiMoney } from 'react-icons/bi';
import { BiNetworkChart } from 'react-icons/bi';
import { FaCoins } from 'react-icons/fa';

function SideOptionMenu() {
  return (
    <div>
      <div className="wrapper-option-two">
        <AiOutlineHome className="option-icons"/>
        <NavLink className="side-option-menu-link" href="#home">
          Home
        </NavLink>
      </div>
      <div className="wrapper-option-two">
          <BsChatSquare className="option-icons"/>
        <NavLink className="side-option-menu-link" href="#home">
          Chats
        </NavLink>
      </div>
      <div className="wrapper-option-two">
          <AiOutlineCalendar className="option-icons"/>
        <NavLink className="side-option-menu-link" href="#home">
          Schedule
        </NavLink>
      </div>
      <div className="wrapper-option-two">
          <BsFillPersonFill className="option-icons"/>
        <NavLink className="side-option-menu-link" href="#home">
          Client
        </NavLink>
      </div>
      <div className="wrapper-option-two">
          <AiOutlineFileDone className="option-icons"/>
        <NavLink className="side-option-menu-link" href="#home">
          Bookings
        </NavLink>
      </div>
      <div className="wrapper-option-two">
          <BiNetworkChart className="option-icons"/>
        <NavLink className="side-option-menu-link" href="#home">
          Programs
        </NavLink>
      </div>
      <div className="wrapper-option-two">
          <BiPackage className="option-icons"/>
        <NavLink className="side-option-menu-link" href="#home">
          Packages
        </NavLink>
      </div>
      <div className="wrapper-option-two">
          <FaCoins className="option-icons"/>
        <NavLink className="side-option-menu-link" href="#home">
          Resources
        </NavLink>
      </div>
      <div className="wrapper-option-two">
          <BiMoney className="option-icons"/>
        <NavLink className="side-option-menu-link" href="#home">
          Finance
        </NavLink>
      </div>
      <div className="wrapper-option-two">
      <AiFillSetting className="option-icons"/>
        <NavLink className="side-option-menu-link" href="#home">
          Settings
        </NavLink>
      </div>
    </div>
  );
}

export default SideOptionMenu;
