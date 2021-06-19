import React from 'react';
import './Package.css';
import PackageInfo from './PackageInfo';


function Package() {
  return (
    <div>
      <div className="h2-heading-package">Package</div>
      <div className="break-line-black-medium-package" />
      <div className="wrapper-details">
          <div className="h2-heading-package-info">Type</div >
          <div className="h2-heading-package-info shift-left">Name</div >
          <div className="h2-heading-package-info shift-left">Client</div >
          <div className="h2-heading-package-info">Status</div >
          <div className="h2-heading-package-info">Start Date</div >
          <div className="h2-heading-package-info">Renewal</div >
      </div>
      <PackageInfo/>
      <PackageInfo/>
      <PackageInfo/>
      <PackageInfo/>
      <PackageInfo/>
    </div>
  );
}

export default Package;
