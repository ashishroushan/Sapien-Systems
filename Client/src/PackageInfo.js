import React from 'react';
import CheckListApple from './SVG/CheckListApple.svg';
import dummyPic from './SVG/dummyPic.jpeg';
import FigureCaption from 'react-bootstrap/FigureCaption';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/esm/Button';
import './PackageInfo.css';

function PackageInfo() {
  let startDate = '25/05/20';
  let renewal = '27/07/20';
  return (
    <div className="wrapper-package-info">
      <img className="image-icon" src={CheckListApple} />
      <Figure className="profile-pic">
        <Image
          width={50}
          //   height={200}
          //   alt="50x90"

          src={dummyPic}
          roundedCircle
        />
        <FigureCaption className="caption">Walter White</FigureCaption>
      </Figure>
      <div className="package-name">Package Name</div>
      <Button className="button-custom" variant="success">
        Active
      </Button>{' '}
      <div className="dates">{startDate}</div>
      <div className="dates">{renewal}</div>
    </div>
  );
}

export default PackageInfo;
