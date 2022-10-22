import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import isDev from "isdev";

import globalState from "../../utils/globalState";
import companyData from "../../company/CompanyData.json";

const Head = () => {
  const router = useLocation();

  const siteTitle = globalState((state) => state.siteTitle);
  const siteContent = globalState((state) => state.siteContent);
  const siteImage = globalState((state) => state.siteImage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <Helmet
      title={siteTitle ? `${siteTitle} - ${companyData.name}` : companyData.name}
      link={[
        {
          rel: "icon",
          href: "/assets/logo4/logo.svg",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
          integrity: "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",
          crossOrigin: "",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
          crossOrigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap",
          crossOrigin: "anonymous",
        },
      ]}
      meta={[
        {
          charSet: "utf-8",
        },
        {
          name: "description",
          content: siteContent || companyData.description,
        },
        {
          name: "viewport",
          content: "width=device-width, user-scalable=no",
        },
        {
          name: "theme-color",
          content: "#000000",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:url",
          content: `https://${companyData.domain}${router.pathname}`,
        },
        {
          name: "og:image",
          content: siteImage || "/seo-image.jpg",
        },
        {
          name: "og:title",
          content: siteTitle ? `${siteTitle} - ${companyData.name}` : companyData.name,
        },
        {
          name: "og:description",
          content: siteContent || companyData.description,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:url",
          content: `https://${companyData.domain}${router.pathname}`,
        },
        {
          name: "twitter:image",
          content: siteImage || "/seo-image.jpg",
        },
        {
          name: "twitter:title",
          content: siteTitle ? `${siteTitle} - ${companyData.name}` : companyData.name,
        },
        {
          name: "twitter:description",
          content: siteContent || companyData.description,
        },
      ]}
    >
      {!isDev && navigator.userAgent !== "ReactSnap" ? (<script async src={`https://www.googletagmanager.com/gtag/js?id=${companyData.googleTag}`} />) : (<script />)}
      {!isDev ? (<script src="/ga.js" type="text/javascript" />) : (<script />)}
    </Helmet>
  );
};

export default Head;
