import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import './ProgramInfo.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";

import dummyPic from './SVG/dummyPic.jpeg';
import FigureCaption from 'react-bootstrap/FigureCaption';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <span className="threedots" />
    </a>
  ));

export default function ProgramInfo() {
  let renewal = '05/07/20';
  return (
    <div className="wrapper-program-info">
      <Button className="button-custom" variant="success">Active</Button>
      <div className="dates" >{renewal}</div>
      <Dropdown className="inline-class">
        <Dropdown.Toggle as={CustomToggle} />
        <Dropdown.Menu size="sm" title="">
          <Dropdown.Item>View</Dropdown.Item>
          <Dropdown.Item>Edit</Dropdown.Item>
          <Dropdown.Item>Delete</Dropdown.Item>
          <Dropdown.Item>Status</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Share</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Figure className="profile-pic-program">
        <Image
          width={50}
          //   height={200}
          //   alt="50x90"

          src={dummyPic}
          roundedCircle
        />
        <FigureCaption className="caption">d</FigureCaption>
      </Figure>
    </div>
  );
}
