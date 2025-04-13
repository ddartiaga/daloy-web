import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/Footer";
import VerticalHeader from "@/components/nav/sidebar/top-menu-bar/VerticalHeader";
import SideMenuBar from "@/components/nav/sidebar/SideMenuBar";
import Loader from "@/components/Loader";
import CountryModal from "@/components/modals/CountryModal";
import SearchModal from "@/components/modals/SearchModal";
import OffCanvas from "@/components/OffCanvas";

export const metadata: Metadata = {
  title: "Cloud eBPLS",
  description: "Cloud Electronic Business Permits and Licensing System (EBPLS)",
  keywords: [
    "eBPLS",
    "Electronic Business Permits and Licensing System",
    "Cloud eBPLS",
    "Cloud Electronic Business Permits and Licensing System",
  ],
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
import "@/public/assets/libs/jsvectormap/css/jsvectormap.min.css";
import "@/public/assets/libs/swiper/swiper-bundle.min.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-nav-layout="vertical"
      data-theme-mode="light"
      data-header-styles="light"
      data-menu-styles="light"
      data-toggled="close"
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="icon"
          href="/assets/images/brand-logos/favicon.ico"
          type="image/x-icon"
        />

        <Script
          src="/assets/libs/choices.js/public/assets/scripts/choices.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />

        {/* <link
          href="/assets/libs/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="/assets/css/styles.min.css" rel="stylesheet" />
        <link href="/assets/css/icons.css" rel="stylesheet" />
        <link href="/assets/libs/node-waves/waves.min.css" rel="stylesheet" />
        <link
          href="/assets/libs/simplebar/simplebar.min.css"
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
        />

        <link
          rel="stylesheet"
          href="/assets/libs/jsvectormap/css/jsvectormap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/libs/swiper/swiper-bundle.min.css"
        /> */}
      </head>
      <body>
        <OffCanvas />
        <Loader />
        <div className="page">
          <VerticalHeader />
          <SideMenuBar />
          <div className="main-content app-content">
            <div className="container-fluid">
              <div className="mt-3"></div>
              {children}
            </div>
          </div>
          <SearchModal />
          <CountryModal />
          <Footer />
        </div>

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
          src="/assets/js/defaultmenu.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/libs/node-waves/waves.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/sticky.js" strategy="afterInteractive" />
        <Script
          src="/assets/libs/simplebar/simplebar.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/simplebar.js" strategy="afterInteractive" />
        <Script
          src="/assets/libs/@simonwep/pickr/pickr.es5.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/jsvectormap/js/jsvectormap.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/jsvectormap/maps/world-merc.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/apexcharts/apexcharts.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/chart.js/chart.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/moment/moment.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
