import React from "react";

import companyData from "../../company/CompanyData.json";

const Footer = () => (
  <div className="absolute bottom-0 w-full bg-gray-100 border-t border-t-gray-200 flex flex-col items-center justify-center z-50 py-4">
    <span className="text-xs opacity-75">
      ©
      {" "}
      {new Date().getFullYear()}
      {" "}
      All rights reserved.
      {" "}
      {companyData.legalName}
    </span>
    <a href={`https://www.amnuz.com/?utm=${window.location.hostname}`} target="_blank" rel="noreferrer">
      <span className="text-xs opacity-50 hover:opacity-75 cursor-pointer duration-200 select-none">
        Designed and Developed by Amnuz Technologies
      </span>
    </a>
  </div>
);

export default Footer;
