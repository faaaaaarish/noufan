import React from "react";

const Homepage = () => {
  const socials = [
    {
      name: "instagram",
      url: "/",
    },
    {
      name: "tiktok",
      url: "/",
    },
    {
      name: "facebook",
      url: "/",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center h-full justify-center">
      <img src="/assets/logo4/logo.svg" alt="logo" className="h-44 my-2" />
      <img src="/assets/logo4/typo.svg" alt="type" className="h-16 my-2" />
      <div className="flex mt-5 w-full items-center justify-center">
        {socials.map((item) => (
          <a key={item.name} href={item.url} target="_blank" rel="noreferrer" className="h-12 m-4 border border-gray-200 rounded p-2 hover:border-gray-400  duration-200">
            <img src={`/assets/socials/${item.name}.svg`} alt={item.name} className="h-full" />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Homepage;
