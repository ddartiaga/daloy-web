"use client";

import { usePathname } from "next/navigation";

const RouteBasedHead = () => {
  const uri = usePathname();
  console.log(uri);
  let page: string | null = "";

  switch (uri) {
    case "/dashboard/crm":
      page = "crm";
      break;
    case "/dashboard/sales":
      page = "sales";
      break;
    case "/dashboard/hrm":
      page = "hrm";
      break;
    case "/dashboard/analytics":
      page = "analytics";
      break;
    case "/dashboard/projects":
      page = "projects";
      break;
  }

  return (
    <>
      {page?.toLowerCase() == "crm" && (
        <>
          <link
            rel="stylesheet"
            href="/assets/libs/jsvectormap/css/jsvectormap.min.css"
          />
          <link
            rel="stylesheet"
            href="/assets/libs/swiper/swiper-bundle.min.css"
          />
        </>
      )}
    </>
  );
};

export default RouteBasedHead;
