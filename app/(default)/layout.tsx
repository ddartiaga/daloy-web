import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/Footer";
import OffCanvasSimple from "@/components/OffCanvasSimple";
import HorizontalHeader from "@/components/nav/horizontal/HorizontalHeader";
import HorizontalMenuBar from "@/components/nav/horizontal/HorizontalMenuBar";

import menu from "@/components/nav/horizontal/app-menu.json";

export const metadata: Metadata = {
  title: "Daloy",
  description: "Cloud Water Operation Management Systems",
  // keywords: [
  //   "eBPLS",
  //   "Electronic Business Permits and Licensing System",
  //   "Cloud eBPLS",
  //   "Cloud Electronic Business Permits and Licensing System",
  // ],
  authors: [
    {
      name: "Katalyst I.T. Services",
      url: "https://katalystph.com",
    },
  ],
};

import "@/public/assets/libs/bootstrap/css/bootstrap.min.css";
import "@/public/assets/css/styles.min.css";
import "@/public/assets/css/icons.css";
import "@/public/assets/libs/node-waves/waves.min.css";
import "@/public/assets/libs/simplebar/simplebar.min.css";

import "@/public/assets/libs/flatpickr/flatpickr.min.css";
import "@/public/assets/libs/@simonwep/pickr/themes/nano.min.css";
import "@/public/assets/libs/choices.js/public/assets/styles/choices.min.css";

import "@/public/app/css/app.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-nav-layout="horizontal"
      data-nav-style="menu-click"
      data-menu-position="fixed"
      data-theme-mode="light"
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="icon"
          href="/images/brand-logos/favicon.ico"
          type="image/x-icon"
        />

        {/* <link
          href="/assets/libs/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="/assets/css/styles.min.css" rel="stylesheet" />

        <link href="/app/css/app.css" rel="stylesheet" />

        <link href="/assets/css/icons.css" rel="stylesheet" />
        <link href="/assets/libs/node-waves/waves.min.css" rel="stylesheet" />
        <link href="/assets/libs/simplebar/simplebar.min.css" rel="stylesheet" />
        <link
          href="/assets/libs/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="/assets/libs/flatpickr/flatpickr.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/libs/@simonwep/pickr/themes/nano.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/libs/choices.js/public/assets/styles/choices.min.css"
        /> */}
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            if (localStorage.getItem("ynexlandingdarktheme")) {
              document.documentElement.setAttribute("data-theme-mode", "dark");
            }
            if (localStorage.getItem("ynexlandingrtl")) {
              document.documentElement.setAttribute("dir", "rtl");
              document.querySelector("#style")?.setAttribute(
                "href",
                "../assets/libs/bootstrap/assets/css/bootstrap.rtl.min.css"
              );
            }
          `,
          }}
        />
      </head>
      <body className="landing-body">
        <OffCanvasSimple />

        <div className="landing-page-wrapper">
          <HorizontalHeader />
          <HorizontalMenuBar menu={menu} />

          <div className="main-content landing-main px-0">
            <div className="container-fluid">{children}</div>
          </div>
        </div>

        <Footer />

        <div className="scrollToTop">
          <span className="arrow">
            <i className="ri-arrow-up-s-fill fs-20"></i>
          </span>
        </div>

        <div id="responsive-overlay"></div>

        <Script
          src="/assets/libs/@popperjs/core/umd/popper.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/@simonwep/pickr/pickr.es5.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/choices.js/public/assets/scripts/choices.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/swiper/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/defaultmenu.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/landing.js" strategy="afterInteractive" />
        <Script
          src="/assets/libs/node-waves/waves.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/sticky.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
