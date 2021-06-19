import React from 'react';
import SideOptionMenu from './SideOptionMenu';
import './SideOptions.css';
import dummyPic from './SVG/dummyPic.jpeg';
import FigureCaption from 'react-bootstrap/FigureCaption';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';

function SideOptions() {
  return (
    <div className="wrapper-options">
      <div className="wrapper-options-profile">
        <Figure className="profile-pic-instructor">
          <Image
           className="profile-pic-instructor"
            width={50}
            src={dummyPic}
            roundedCircle
          />
          <FigureCaption className="name-instructor">Walter White</FigureCaption>
        </Figure>
        <div className="h3-ocupation">Fitness & Nutrition Coach</div>
      </div>
      <div className="break-line-white" />
      <SideOptionMenu />
    </div>
  );
}

export default SideOptions;
