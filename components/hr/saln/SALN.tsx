import React from "react";
import { SALNEmployeeForm } from "./SALNEmployeeForm";
import SALNChildren from "./SALNChildren";

const SALN = () => {
  return (
    <div className="card custom-card mt-3">
      <div className="card-header justify-content-between">
        <div className="card-title text-uppercase">
          Sworn Statement of Assets, Liabilties and Net Worth
        </div>
        <div>
          <ul
            className="nav nav-tabs justify-content-end nav-tabs-header mb-0"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#saln-declarant"
                aria-selected="true"
              >
                Declarant
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#saln-children"
                aria-selected="true"
              >
                Children
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#saln-assets"
                aria-selected="true"
              >
                Assets
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#saln-liabilities"
                aria-selected="true"
              >
                Liabilities
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#saln-business-interest-connections"
                aria-selected="true"
              >
                Business Interest and Financial Connections
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#saln-relatives"
                aria-selected="true"
              >
                Relatives in Government Services
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body">
        <div className="tab-content">
          <div
            className="tab-pane show active text-muted"
            id="saln-declarant"
            role="tabpanel"
          >
            <SALNEmployeeForm />
          </div>
          <div
            className="tab-pane text-muted"
            id="saln-children"
            role="tabpanel"
          >
            <SALNChildren />
          </div>
          <div className="tab-pane text-muted" id="saln-assets" role="tabpanel">
            <ul className="mb-0">
              <li className="mb-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text.
              </li>
              <li>
                How travel coupons make you a better lover. Why cultural
                solutions are the new black. Why mom was header about travel
                insurances. How family trip ideas can help you predict the
                future. <b>How carnival cruises make you a better lover</b>. Why
                you'll never succeed at daily deals. 11 ways cheapest flights
                can find you the love of your life. The complete beginner's
                guide to mission trips.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SALN;
