import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/Footer";
import VerticalHeader from "@/components/nav/sidebar/top-menu-bar/VerticalHeader";
import SideMenuBar from "@/components/nav/sidebar/SideMenuBar";
import Loader from "@/components/Loader";
import CountryModal from "@/components/modals/CountryModal";
import SearchModal from "@/components/modals/SearchModal";
import OffCanvas from "@/components/OffCanvas";
import RouteBasedHead from "./header";
import RouteBasedScripts from "./scripts";

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

export const revalidate = false;

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

        <link
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

        <RouteBasedHead />
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
        <RouteBasedScripts />
        <Script
          src="/assets/js/custom-switcher.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
