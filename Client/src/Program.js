import React from 'react';
import './Program.css';
import ProgramInfo from './ProgramInfo';

function Program() {
  return (
    <div>
      <div className="h2-heading-program">Program</div>
      <div className="break-line-black-medium-program" />
      <div className="wrapper-details">
        <div className="h2-heading-program-info">Status</div>
        <div className="h2-heading-program-info shift-right">Renewal</div>
        <div className="h2-heading-program-info">Actions</div>
      </div>
      <ProgramInfo />
      <ProgramInfo />
      <ProgramInfo />
      <ProgramInfo />
      <ProgramInfo />
    </div>
  );
}

export default Program;
