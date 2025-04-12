import Image from "next/image";
import Script from "next/script";

const page = () => {
  return (
    <>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <h1 className="page-title fw-semibold fs-18 mb-0">CRM</h1>
        <div className="ms-md-1 ms-0">
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="javascript:void(0);">Dashboards</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                CRM
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-9 col-xl-12">
          <div className="row">
            <div className="col-xl-4">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card custom-card crm-highlight-card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <div className="fw-semibold fs-18 text-fixed-white mb-2">
                            Your target is incomplete
                          </div>
                          <span className="d-block fs-12 text-fixed-white">
                            <span className="op-7">You have completed</span>{" "}
                            <span className="fw-semibold text-warning">
                              48%
                            </span>{" "}
                            <span className="op-7">
                              of the given target, you can also check your
                              status
                            </span>
                            .
                          </span>
                          <span className="d-block fw-semibold mt-1">
                            <a
                              className="text-fixed-white"
                              href="javascript:void(0);"
                            >
                              <u>Click here</u>
                            </a>
                          </span>
                        </div>
                        <div>
                          <div id="crm-main" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card custom-card">
                  <div className="card-header  justify-content-between">
                    <div className="card-title">Top Deals</div>
                    <div className="dropdown">
                      <a
                        aria-label="anchor"
                        href="javascript:void(0);"
                        className="btn btn-icon btn-sm btn-light"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fe fe-more-vertical" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Week
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Month
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Year
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled crm-top-deals mb-0">
                      <li>
                        <div className="d-flex align-items-top flex-wrap">
                          <div className="me-2">
                            <span className="avatar avatar-sm avatar-rounded">
                              <Image
                                src="/assets/images/faces/10.jpg"
                                alt=""
                                width={28}
                                height={28}
                              />
                            </span>
                          </div>
                          <div className="flex-fill">
                            <p className="fw-semibold mb-0">Michael Jordan</p>
                            <span className="text-muted fs-12">
                              michael.jordan@example.com
                            </span>
                          </div>
                          <div className="fw-semibold fs-15">$2,893</div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-top flex-wrap">
                          <div className="me-2">
                            <span className="avatar avatar-sm avatar-rounded bg-warning-transparent fw-semibold">
                              EK
                            </span>
                          </div>
                          <div className="flex-fill">
                            <p className="fw-semibold mb-0">Emigo Kiaren</p>
                            <span className="text-muted fs-12">
                              emigo.kiaren@gmail.com
                            </span>
                          </div>
                          <div className="fw-semibold fs-15">$4,289</div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-top flex-wrap">
                          <div className="me-2">
                            <span className="avatar avatar-sm avatar-rounded">
                              <Image
                                src="/assets/images/faces/12.jpg"
                                alt=""
                                width={28}
                                height={28}
                              />
                            </span>
                          </div>
                          <div className="flex-fill">
                            <p className="fw-semibold mb-0">Randy Origoan</p>
                            <span className="text-muted fs-12">
                              randy.origoan@gmail.com
                            </span>
                          </div>
                          <div className="fw-semibold fs-15">$6,347</div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-top flex-wrap">
                          <div className="me-2">
                            <span className="avatar avatar-sm avatar-rounded bg-success-transparent fw-semibold">
                              GP
                            </span>
                          </div>
                          <div className="flex-fill">
                            <p className="fw-semibold mb-0">George Pieterson</p>
                            <span className="text-muted fs-12">
                              george.pieterson@gmail.com
                            </span>
                          </div>
                          <div className="fw-semibold fs-15">$3,894</div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-top flex-wrap">
                          <div className="me-2">
                            <span className="avatar avatar-sm avatar-rounded bg-primary-transparent fw-semibold">
                              KA
                            </span>
                          </div>
                          <div className="flex-fill">
                            <p className="fw-semibold mb-0">Kiara Advain</p>
                            <span className="text-muted fs-12">
                              kiaraadvain214@gmail.com
                            </span>
                          </div>
                          <div className="fw-semibold fs-15">$2,679</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card custom-card">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Profit Earned</div>
                    <div className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="p-2 fs-12 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        View All
                        <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Today
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            This Week
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Last Week
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body py-0 ps-0">
                    <div id="crm-profits-earned" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-xxl-6 col-lg-6 col-md-6">
                  <div className="card custom-card overflow-hidden">
                    <div className="card-body">
                      <div className="d-flex align-items-top justify-content-between">
                        <div>
                          <span className="avatar avatar-md avatar-rounded bg-primary">
                            <i className="ti ti-users fs-16" />
                          </span>
                        </div>
                        <div className="flex-fill ms-3">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div>
                              <p className="text-muted mb-0">Total Customers</p>
                              <h4 className="fw-semibold mt-1">1,02,890</h4>
                            </div>
                            <div id="crm-total-customers" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-1">
                            <div>
                              <a
                                className="text-primary"
                                href="javascript:void(0);"
                              >
                                View All
                                <i className="ti ti-arrow-narrow-right ms-2 fw-semibold d-inline-block" />
                              </a>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-success fw-semibold">
                                +40%
                              </p>
                              <span className="text-muted op-7 fs-11">
                                this month
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-lg-6 col-md-6">
                  <div className="card custom-card overflow-hidden">
                    <div className="card-body">
                      <div className="d-flex align-items-top justify-content-between">
                        <div>
                          <span className="avatar avatar-md avatar-rounded bg-secondary">
                            <i className="ti ti-wallet fs-16" />
                          </span>
                        </div>
                        <div className="flex-fill ms-3">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div>
                              <p className="text-muted mb-0">Total Revenue</p>
                              <h4 className="fw-semibold mt-1">$56,562</h4>
                            </div>
                            <div id="crm-total-revenue" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-1">
                            <div>
                              <a
                                className="text-secondary"
                                href="javascript:void(0);"
                              >
                                View All
                                <i className="ti ti-arrow-narrow-right ms-2 fw-semibold d-inline-block" />
                              </a>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-success fw-semibold">
                                +25%
                              </p>
                              <span className="text-muted op-7 fs-11">
                                this month
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-lg-6 col-md-6">
                  <div className="card custom-card overflow-hidden">
                    <div className="card-body">
                      <div className="d-flex align-items-top justify-content-between">
                        <div>
                          <span className="avatar avatar-md avatar-rounded bg-success">
                            <i className="ti ti-wave-square fs-16" />
                          </span>
                        </div>
                        <div className="flex-fill ms-3">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div>
                              <p className="text-muted mb-0">
                                Conversion Ratio
                              </p>
                              <h4 className="fw-semibold mt-1">12.08%</h4>
                            </div>
                            <div id="crm-conversion-ratio" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-1">
                            <div>
                              <a
                                className="text-success"
                                href="javascript:void(0);"
                              >
                                View All
                                <i className="ti ti-arrow-narrow-right ms-2 fw-semibold d-inline-block" />
                              </a>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-danger fw-semibold">
                                -12%
                              </p>
                              <span className="text-muted op-7 fs-11">
                                this month
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-lg-6 col-md-6">
                  <div className="card custom-card overflow-hidden">
                    <div className="card-body">
                      <div className="d-flex align-items-top justify-content-between">
                        <div>
                          <span className="avatar avatar-md avatar-rounded bg-warning">
                            <i className="ti ti-briefcase fs-16" />
                          </span>
                        </div>
                        <div className="flex-fill ms-3">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div>
                              <p className="text-muted mb-0">Total Deals</p>
                              <h4 className="fw-semibold mt-1">2,543</h4>
                            </div>
                            <div id="crm-total-deals" />
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-1">
                            <div>
                              <a
                                className="text-warning"
                                href="javascript:void(0);"
                              >
                                View All
                                <i className="ti ti-arrow-narrow-right ms-2 fw-semibold d-inline-block" />
                              </a>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-success fw-semibold">
                                +19%
                              </p>
                              <span className="text-muted op-7 fs-11">
                                this month
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="card custom-card">
                    <div className="card-header justify-content-between">
                      <div className="card-title">Revenue Analytics</div>
                      <div className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="p-2 fs-12 text-muted"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          View All
                          <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Today
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              This Week
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Last Week
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="content-wrapper">
                        <div id="crm-revenue-analytics" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card custom-card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Deals Statistics</div>
                  <div className="d-flex flex-wrap gap-2">
                    <div>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="Search Here"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sort By
                        <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            New
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Popular
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Relevant
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table text-nowrap table-hover border table-bordered">
                      <thead>
                        <tr>
                          <th scope="row" className="ps-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkboxNoLabel1"
                              defaultValue=""
                              aria-label="..."
                            />
                          </th>
                          <th scope="col">Sales Rep</th>
                          <th scope="col">Category</th>
                          <th scope="col">Mail</th>
                          <th scope="col">Location</th>
                          <th scope="col">Date</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" className="ps-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkboxNoLabel2"
                              defaultValue=""
                              aria-label="..."
                            />
                          </th>
                          <td>
                            <div className="d-flex align-items-center fw-semibold">
                              <span className="avatar avatar-sm me-2 avatar-rounded">
                                <Image
                                  src="/assets/images/faces/4.jpg"
                                  alt=""
                                  width={28}
                                  height={28}
                                />
                              </span>
                              Mayor Kelly
                            </div>
                          </td>
                          <td>Manufacture</td>
                          <td>mayorkelly@gmail.com</td>
                          <td>
                            <span className="badge bg-info-transparent">
                              Germany
                            </span>
                          </td>
                          <td>Sep 15 - Oct 12, 2023</td>
                          <td>
                            <div className="hstack gap-2 fs-15">
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-success-light"
                              >
                                <i className="ri-download-2-line" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-primary-light"
                              >
                                <i className="ri-edit-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="ps-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkboxNoLabel13"
                              defaultValue=""
                              aria-label="..."
                            />
                          </th>
                          <td>
                            <div className="d-flex align-items-center fw-semibold">
                              <span className="avatar avatar-sm me-2 avatar-rounded">
                                <Image
                                  src="/assets/images/faces/15.jpg"
                                  alt=""
                                  width={28}
                                  height={28}
                                />
                              </span>
                              Andrew Garfield
                            </div>
                          </td>
                          <td>Development</td>
                          <td>andrewgarfield@gmail.com</td>
                          <td>
                            <span className="badge bg-primary-transparent">
                              Canada
                            </span>
                          </td>
                          <td>Apr 10 - Dec 12, 2023</td>
                          <td>
                            <div className="hstack gap-2 fs-15">
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon waves-effect waves-light btn-sm btn-success-light"
                              >
                                <i className="ri-download-2-line" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"
                              >
                                <i className="ri-edit-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="ps-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkboxNoLabel4"
                              defaultValue=""
                              aria-label="..."
                            />
                          </th>
                          <td>
                            <div className="d-flex align-items-center fw-semibold">
                              <span className="avatar avatar-sm me-2 avatar-rounded">
                                <Image
                                  src="/assets/images/faces/12.jpg"
                                  alt=""
                                  width={28}
                                  height={28}
                                />
                              </span>
                              Simon Cowel
                            </div>
                          </td>
                          <td>Service</td>
                          <td>simoncowel234@gmail.com</td>
                          <td>
                            <span className="badge bg-danger-transparent">
                              Europe
                            </span>
                          </td>
                          <td>Sep 15 - Oct 12, 2023</td>
                          <td>
                            <div className="hstack gap-2 fs-15">
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon waves-effect waves-light btn-sm btn-success-light"
                              >
                                <i className="ri-download-2-line" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"
                              >
                                <i className="ri-edit-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="ps-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkboxNoLabel5"
                              defaultValue=""
                              aria-label="..."
                              //   defaultChecked=""
                            />
                          </th>
                          <td>
                            <div className="d-flex align-items-center fw-semibold">
                              <span className="avatar avatar-sm me-2 avatar-rounded">
                                <Image
                                  src="/assets/images/faces/8.jpg"
                                  alt=""
                                  width={28}
                                  height={28}
                                />
                              </span>
                              Mirinda Hers
                            </div>
                          </td>
                          <td>Marketing</td>
                          <td>mirindahers@gmail.com</td>
                          <td>
                            <span className="badge bg-warning-transparent">
                              USA
                            </span>
                          </td>
                          <td>Apr 14 - Dec 14, 2023</td>
                          <td>
                            <div className="hstack gap-2 fs-15">
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon waves-effect waves-light btn-sm btn-success-light"
                              >
                                <i className="ri-download-2-line" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"
                              >
                                <i className="ri-edit-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="ps-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkboxNoLabel3"
                              defaultValue=""
                              aria-label="..."
                              //   defaultChecked=""
                            />
                          </th>
                          <td>
                            <div className="d-flex align-items-center fw-semibold">
                              <span className="avatar avatar-sm me-2 avatar-rounded">
                                <Image
                                  src="/assets/images/faces/9.jpg"
                                  alt=""
                                  width={28}
                                  height={28}
                                />
                              </span>
                              Jacob Smith
                            </div>
                          </td>
                          <td>Social Plataform</td>
                          <td>jacobsmith@gmail.com</td>
                          <td>
                            <span className="badge bg-success-transparent">
                              Singapore
                            </span>
                          </td>
                          <td>Feb 25 - Nov 25, 2023</td>
                          <td>
                            <div className="hstack gap-2 fs-15">
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon waves-effect waves-light btn-sm btn-success-light"
                              >
                                <i className="ri-download-2-line" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"
                              >
                                <i className="ri-edit-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="d-flex align-items-center">
                    <div>
                      Showing 5 Entries{" "}
                      <i className="bi bi-arrow-right ms-2 fw-semibold" />
                    </div>
                    <div className="ms-auto">
                      <nav
                        aria-label="Page navigation"
                        className="pagination-style-4"
                      >
                        <ul className="pagination mb-0">
                          <li className="page-item disabled">
                            <a className="page-link" href="javascript:void(0);">
                              Prev
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="javascript:void(0);">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="javascript:void(0);">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link text-primary"
                              href="javascript:void(0);"
                            >
                              next
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-12">
          <div className="row">
            <div className="col-xxl-12 col-xl-12">
              <div className="row">
                <div className="col-xl-12 col-xl-6">
                  <div className="card custom-card">
                    <div className="card-header justify-content-between">
                      <div className="card-title">Leads By Source</div>
                      <div className="dropdown">
                        <a
                          aria-label="anchor"
                          href="javascript:void(0);"
                          className="btn btn-icon btn-sm btn-light"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fe fe-more-vertical" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Week
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Month
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Year
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body p-0 overflow-hidden">
                      <div className="leads-source-chart d-flex align-items-center justify-content-center">
                        <canvas
                          id="leads-source"
                          className="chartjs-chart w-100 p-4"
                        />
                        <div className="lead-source-value">
                          <span className="d-block fs-14">Total</span>
                          <span className="d-block fs-25 fw-bold">4,145</span>
                        </div>
                      </div>
                      <div className="row row-cols-12 border-top border-block-start-dashed">
                        <div className="col p-0">
                          <div className="ps-4 py-3 pe-3 text-center border-end border-inline-end-dashed">
                            <span className="text-muted fs-12 mb-1 crm-lead-legend mobile d-inline-block">
                              Mobile
                            </span>
                            <div>
                              <span className="fs-16 fw-semibold">1,624</span>
                            </div>
                          </div>
                        </div>
                        <div className="col p-0">
                          <div className="p-3 text-center border-end border-inline-end-dashed">
                            <span className="text-muted fs-12 mb-1 crm-lead-legend desktop d-inline-block">
                              Desktop
                            </span>
                            <div>
                              <span className="fs-16 fw-semibold">1,267</span>
                            </div>
                          </div>
                        </div>
                        <div className="col p-0">
                          <div className="p-3 text-center border-end border-inline-end-dashed">
                            <span className="text-muted fs-12 mb-1 crm-lead-legend laptop d-inline-block">
                              Laptop
                            </span>
                            <div>
                              <span className="fs-16 fw-semibold">1,153</span>
                            </div>
                          </div>
                        </div>
                        <div className="col p-0">
                          <div className="p-3 text-center">
                            <span className="text-muted fs-12 mb-1 crm-lead-legend tablet d-inline-block">
                              Tablet
                            </span>
                            <div>
                              <span className="fs-16 fw-semibold">679</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-12 col-xl-6">
                  <div className="card custom-card">
                    <div className="card-header justify-content-between">
                      <div className="card-title">Deals Status</div>
                      <div className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="p-2 fs-12 text-muted"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          View All
                          <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Today
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              This Week
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Last Week
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <h4 className="fw-bold mb-0">4,289</h4>
                        <div className="ms-2">
                          <span className="badge bg-success-transparent">
                            1.02
                            <i className="ri-arrow-up-s-fill align-mmiddle ms-1" />
                          </span>
                          <span className="text-muted ms-1">
                            compared to last week
                          </span>
                        </div>
                      </div>
                      <div className="progress-stacked progress-animate progress-xs mb-4">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "21%" }}
                          aria-valuenow={21}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "26%" }}
                          aria-valuenow={26}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "35%" }}
                          aria-valuenow={35}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "18%" }}
                          aria-valuenow={18}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <ul className="list-unstyled mb-0 pt-2 crm-deals-status">
                        <li className="primary">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>Successful Deals</div>
                            <div className="fs-12 text-muted">987 deals</div>
                          </div>
                        </li>
                        <li className="info">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>Pending Deals</div>
                            <div className="fs-12 text-muted">1,073 deals</div>
                          </div>
                        </li>
                        <li className="warning">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>Rejected Deals</div>
                            <div className="fs-12 text-muted">1,674 deals</div>
                          </div>
                        </li>
                        <li className="success">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>Upcoming Deals</div>
                            <div className="fs-12 text-muted">921 deals</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-12 col-xl-6">
                  <div className="card custom-card">
                    <div className="card-header justify-content-between">
                      <div className="card-title">Recent Activity</div>
                      <div className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="p-2 fs-12 text-muted"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          View All
                          <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Today
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              This Week
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Last Week
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <div>
                        <ul className="list-unstyled mb-0 crm-recent-activity">
                          <li className="crm-recent-activity-content">
                            <div className="d-flex align-items-top">
                              <div className="me-3">
                                <span className="avatar avatar-xs bg-primary-transparent avatar-rounded">
                                  <i className="bi bi-circle-fill fs-8" />
                                </span>
                              </div>
                              <div className="crm-timeline-content">
                                <span className="fw-semibold">
                                  Update of calendar events &amp;
                                </span>
                                <span>
                                  <a
                                    href="javascript:void(0);"
                                    className="text-primary fw-semibold"
                                  >
                                    {" "}
                                    Added new events in next week.
                                  </a>
                                </span>
                              </div>
                              <div className="flex-fill text-end">
                                <span className="d-block text-muted fs-11 op-7">
                                  4:45PM
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="crm-recent-activity-content">
                            <div className="d-flex align-items-top">
                              <div className="me-3">
                                <span className="avatar avatar-xs bg-secondary-transparent avatar-rounded">
                                  <i className="bi bi-circle-fill fs-8" />
                                </span>
                              </div>
                              <div className="crm-timeline-content">
                                <span>
                                  New theme for{" "}
                                  <span className="fw-semibold">
                                    Spruko Website
                                  </span>{" "}
                                  completed
                                </span>
                                <span className="d-block fs-12 text-muted">
                                  Lorem ipsum, dolor sit amet.
                                </span>
                              </div>
                              <div className="flex-fill text-end">
                                <span className="d-block text-muted fs-11 op-7">
                                  3 hrs
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="crm-recent-activity-content">
                            <div className="d-flex align-items-top">
                              <div className="me-3">
                                <span className="avatar avatar-xs bg-success-transparent avatar-rounded">
                                  <i className="bi bi-circle-fill fs-8" />
                                </span>
                              </div>
                              <div className="crm-timeline-content">
                                <span>
                                  Created a{" "}
                                  <span className="text-success fw-semibold">
                                    New Task
                                  </span>{" "}
                                  today{" "}
                                  <span className="avatar avatar-xs bg-purple-transparent avatar-rounded ms-1">
                                    <i className="ri-add-fill text-purple fs-12" />
                                  </span>
                                </span>
                              </div>
                              <div className="flex-fill text-end">
                                <span className="d-block text-muted fs-11 op-7">
                                  22 hrs
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="crm-recent-activity-content">
                            <div className="d-flex align-items-top">
                              <div className="me-3">
                                <span className="avatar avatar-xs bg-pink-transparent avatar-rounded">
                                  <i className="bi bi-circle-fill fs-8" />
                                </span>
                              </div>
                              <div className="crm-timeline-content">
                                <span>
                                  New member{" "}
                                  <span className="badge bg-pink-transparent">
                                    @andreas gurrero
                                  </span>{" "}
                                  added today to AI Summit.
                                </span>
                              </div>
                              <div className="flex-fill text-end">
                                <span className="d-block text-muted fs-11 op-7">
                                  Today
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="crm-recent-activity-content">
                            <div className="d-flex align-items-top">
                              <div className="me-3">
                                <span className="avatar avatar-xs bg-warning-transparent avatar-rounded">
                                  <i className="bi bi-circle-fill fs-8" />
                                </span>
                              </div>
                              <div className="crm-timeline-content">
                                <span>32 New people joined summit.</span>
                              </div>
                              <div className="flex-fill text-end">
                                <span className="d-block text-muted fs-11 op-7">
                                  22 hrs
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="crm-recent-activity-content">
                            <div className="d-flex align-items-top">
                              <div className="me-3">
                                <span className="avatar avatar-xs bg-info-transparent avatar-rounded">
                                  <i className="bi bi-circle-fill fs-8" />
                                </span>
                              </div>
                              <div className="crm-timeline-content">
                                <span>
                                  Neon Tarly added{" "}
                                  <span className="text-info fw-semibold">
                                    Robert Bright
                                  </span>{" "}
                                  to AI summit project.
                                </span>
                              </div>
                              <div className="flex-fill text-end">
                                <span className="d-block text-muted fs-11 op-7">
                                  12 hrs
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="crm-recent-activity-content">
                            <div className="d-flex align-items-top">
                              <div className="me-3">
                                <span className="avatar avatar-xs bg-dark-transparent avatar-rounded">
                                  <i className="bi bi-circle-fill fs-8" />
                                </span>
                              </div>
                              <div className="crm-timeline-content">
                                <span>
                                  Replied to new support request{" "}
                                  <i className="ri-checkbox-circle-line text-success fs-16 align-middle" />
                                </span>
                              </div>
                              <div className="flex-fill text-end">
                                <span className="d-block text-muted fs-11 op-7">
                                  4 hrs
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="crm-recent-activity-content">
                            <div className="d-flex align-items-top">
                              <div className="me-3">
                                <span className="avatar avatar-xs bg-purple-transparent avatar-rounded">
                                  <i className="bi bi-circle-fill fs-8" />
                                </span>
                              </div>
                              <div className="crm-timeline-content">
                                <span>
                                  Completed documentation of{" "}
                                  <a
                                    href="javascript:void(0);"
                                    className="text-purple text-decoration-underline fw-semibold"
                                  >
                                    AI Summit.
                                  </a>
                                </span>
                              </div>
                              <div className="flex-fill text-end">
                                <span className="d-block text-muted fs-11 op-7">
                                  4 hrs
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script src="/assets/js/crm-dashboard.js" strategy="lazyOnload" />
      <Script src="/assets/js/custom-switcher.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/custom.js" strategy="lazyOnload" />
    </>
  );
};

export default page;
