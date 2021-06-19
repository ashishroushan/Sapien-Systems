import React from 'react';
import './Page.css';
import NavItem from 'react-bootstrap/esm/NavItem';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Package from './Package';
import Program from './Program';

function Page() {
  return (
    <Card className="wrapper-page">
      <h2>Program Manager</h2>
      <div className="break-line-black-short" />
      <Nav>
        <NavItem>
          <NavLink className="navlink-custom" href="#Fitness">
            Fitness
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink-custom" href="#Nutrition">
            Nutrition
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink-custom" href="#Journey">
            Journey
          </NavLink>
        </NavItem>
      </Nav>
      <div className="break-line-black" />
      <div className="wrapper-p-p">
        <Package />
        <div className="break-line-black-vertical" />
        <Program />
      </div>
    </Card>
  );
}

export default Page;
