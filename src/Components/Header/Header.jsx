import React from "react";

import companyData from "../../company/CompanyData.json";

const Header = () => (
  <div className="fixed w-full h-24 border-b bg-white border-gray-400 py-6 px-10 flex items-center justify-between z-50">
    <a className="h-full" href="/" title={companyData.name}>
      <img className="h-full" src="/assets/logo/logo-full-sideways.svg" alt="logo" />
    </a>
  </div>
);

export default Header;
