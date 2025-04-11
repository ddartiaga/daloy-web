import Link from "next/link";

export const revalidate = false;

const Footer = () => {
  return (
    <footer className="mt-auto py-4 bg-white text-center">
      <div className="">
        <span className="text-muted">
          Copyright © <span id="year"> 2025 </span>{" "}
          <Link
            href="https://katatechservices.com"
            className="text-primary fw-semibold"
          >
            Katalyst I.T. Services
          </Link>
          . All rights reserved
        </span>
        <span> | </span>
        <span className="text-muted">
          <span className="text-dark fw-semibold ">Version: </span> 0.0.1
        </span>
      </div>
    </footer>
  );
};

export default Footer;
