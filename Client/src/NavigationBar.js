import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsBell } from 'react-icons/bs';
import { CgMenuGridO } from 'react-icons/cg';
import dummyPic from './SVG/dummyPic.jpeg';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import './NavigationBar.css'

function NavigationBar() {
  return (
    <>
      <Navbar className="wrapper-nav-bar" bg="dark" variant="dark">
        <NavbarBrand href="#home">Sapien Systems</NavbarBrand>
        <NavbarBrand className="dashboard">Dashboard</NavbarBrand>
          <div className="wrapper-icons">
        <Nav className="mr-auto">
          <BsBell className="nav-icons nav-icons-sub"/>
          <CgMenuGridO className="nav-icons nav-icons-sub"/>
          <Figure>
          <Image
           className="profile-pic-instructor-icon"
            width={50}
            src={dummyPic}
            roundedCircle
          />
        </Figure>
        </Nav>
        </div>
      </Navbar>
    </>
  );
}

export default NavigationBar;
