import React from "react";
import { SALNEmployeeForm } from "./SALNEmployeeForm";
import SALNEmployeeView from "./views/SALNEmployeeView";

const SALNVerticalTab = () => {
  return (
    <div className="card custom-card mt-3">
      <div className="card-header">
        <div className="card-title">
          Sworn Statement of Assets, Liabilties and Net Worth ( SALN )
        </div>
      </div>
      <div className="card-body d-flex align-items-start">
        <div className="row">
          <div className="col-md-2">
            <div
              className="nav flex-column nav-pills me-3 tab-style-7"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link text-start active"
                id="saln-employee-tab"
                data-bs-toggle="pill"
                data-bs-target="#saln-employee"
                type="button"
                role="tab"
                aria-controls="saln-employee"
                aria-selected="false"
              >
                {/* <i className="ri-u-disk-line me-1 align-middle d-inline-block" /> */}
                Declarant
              </button>
              <button
                className="nav-link text-start"
                id="saln-children-tab"
                data-bs-toggle="pill"
                data-bs-target="#saln-children"
                type="button"
                role="tab"
                aria-controls="saln-children"
                aria-selected="false"
              >
                {/* <i className="ri-u-disk-line me-1 align-middle d-inline-block" /> */}
                Children
              </button>
              <button
                className="nav-link text-start"
                id="saln-assets-tab"
                data-bs-toggle="pill"
                data-bs-target="#saln-assets"
                type="button"
                role="tab"
                aria-controls="saln-assets"
                aria-selected="false"
              >
                {/* <i className="ri-group-line me-1 align-middle d-inline-block" /> */}
                Assets
              </button>
              <button
                className="nav-link text-start"
                id="saln-liabilities-tab"
                data-bs-toggle="pill"
                data-bs-target="#saln-liabilities"
                type="button"
                role="tab"
                aria-controls="saln-liabilities"
                aria-selected="false"
              >
                {/* <i className="ri-bill-line me-1 align-middle d-inline-block" /> */}
                Liabilities
              </button>
              <button
                className="nav-link text-start mb-1"
                id="saln-interests-tab"
                data-bs-toggle="pill"
                data-bs-target="#saln-interests"
                type="button"
                role="tab"
                aria-controls="saln-interests"
                aria-selected="false"
              >
                {/* <i className="ri-mail-line me-1 align-middle d-inline-block" /> */}
                Business Interest and Financial Connections
              </button>
              <button
                className="nav-link text-start mb-1"
                id="saln-connections-tab"
                data-bs-toggle="pill"
                data-bs-target="#saln-connections"
                type="button"
                role="tab"
                aria-controls="saln-connections"
                aria-selected="false"
              >
                {/* <i className="ri-mail-line me-1 align-middle d-inline-block" /> */}
                Relatives in Government Services
              </button>
            </div>
          </div>
          <div className="col-md-10">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane show active"
                id="saln-employee"
                role="tabpanel"
                aria-labelledby="saln-employee-tab"
                tabIndex={0}
              >
                <div className="p-1">
                  <SALNEmployeeView />
                </div>
              </div>
              <div
                className="tab-pane"
                id="saln-children"
                role="tabpanel"
                aria-labelledby="saln-children-tab"
                tabIndex={0}
              >
                <ul className="list-unstyled text-muted mb-0">
                  <li className="mb-2">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia,
                  </li>
                  <li className="mb-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </li>
                  <li className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's{" "}
                    <b>standard dummy text ever since the 1500s</b>, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane"
                id="saln-assets"
                role="tabpanel"
                aria-labelledby="saln-assets-tab"
                tabIndex={0}
              >
                <ul className="list-unstyled text-muted mb-0">
                  <li className="mb-2">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia,
                  </li>
                  <li className="mb-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's{" "}
                    <b>standard dummy text ever since the 1500s</b>, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </li>
                  <li className="mb-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane"
                id="saln-liabilities"
                role="tabpanel"
                aria-labelledby="saln-liabilities-tab"
                tabIndex={0}
              >
                <ul className="list-unstyled text-muted mb-0">
                  <li className="mb-2">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia,
                  </li>
                  <li className="mb-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </li>
                  <li className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's{" "}
                    <b>standard dummy text ever since the 1500s</b>, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SALNVerticalTab;
