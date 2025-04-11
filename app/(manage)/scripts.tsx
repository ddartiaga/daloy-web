"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

const RouteBasedScripts = () => {
  const uri = usePathname();
  let page: string | null = null;

  switch (uri) {
    case "/dashboards/crm":
      page = "crm";
      break;
    case "/dashboards/sales":
      page = "sales";
      break;
    case "/dashboards/hrm":
      page = "hrm";
      break;
    case "/dashboards/analytics":
      page = "analytics";
      break;
    case "/dashboards/projects":
      page = "projects";
      break;
  }

  return (
    <>
      {(page?.toLowerCase() == "crm" || page?.toLowerCase() == "sales") && (
        <Script
          src="/assets/libs/jsvectormap/js/jsvectormap.min.js"
          strategy="afterInteractive"
        />
      )}

      {(page?.toLowerCase() == "crm" || page?.toLowerCase() == "sales") && (
        <Script
          src="/assets/libs/jsvectormap/maps/world-merc.js"
          strategy="afterInteractive"
        />
      )}

      {(page?.toLowerCase() == "crm" ||
        page?.toLowerCase() == "hrm" ||
        page?.toLowerCase() == "sales" ||
        page?.toLowerCase() == "projects" ||
        page?.toLowerCase() == "analytics") && (
        <Script
          src="/assets/libs/apexcharts/apexcharts.min.js"
          strategy="afterInteractive"
        />
      )}

      {page?.toLowerCase() == "crm" && (
        <Script
          src="/assets/libs/chart.js/chart.min.js"
          strategy="afterInteractive"
        />
      )}

      {page?.toLowerCase() == "crm" && (
        <Script src="/assets/js/crm-dashboard.js" strategy="afterInteractive" />
      )}

      {page?.toLowerCase() == "hrm" && (
        <Script src="/assets/js/hrm-dashboard.js" strategy="afterInteractive" />
      )}

      {page?.toLowerCase() == "sales" && (
        <Script
          src="/assets/js/sales-dashboard.js"
          strategy="afterInteractive"
        />
      )}

      {(page?.toLowerCase() == "projects" ||
        page?.toLowerCase() == "analytics") && (
        <Script
          src="/assets/libs/moment/moment.js"
          strategy="afterInteractive"
        />
      )}

      {page?.toLowerCase() == "projects" && (
        <Script
          src="/assets/js/projects-dashboard.js"
          strategy="afterInteractive"
        />
      )}

      {page?.toLowerCase() == "analytics" && (
        <Script
          src="/assets/js/analytics-dashboard.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
};

export default RouteBasedScripts;
