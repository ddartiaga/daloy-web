import Image from "next/image";

const page = () => {
  return (
    <>
      {/* Page Header */}
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <h1 className="page-title fw-semibold fs-18 mb-0">Analytics</h1>
        <div className="ms-md-1 ms-0">
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="javascript:void(0);">Dashboards</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Analytics
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header Close */}
      {/* End::page-header */}
      {/* Start::row-1 */}
      <div className="row">
        <div className="col-xl-7">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="card custom-card">
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div>
                      <h6 className="fw-semibold mb-3">Total Users</h6>
                      <span className="fs-25 fw-semibold">9,789</span>
                      <span className="d-block text-success fs-12">
                        +0.892 <i className="ti ti-trending-up ms-1" />
                      </span>
                    </div>
                    <div id="analytics-users" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card custom-card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="fw-semibold mb-3">Live Visitors</h6>
                      <span className="fs-25 fw-semibold">12,240</span>
                      <span className="d-block text-danger fs-12">
                        +0.59
                        <i className="ti ti-trending-down ms-1 d-inline-flex" />
                      </span>
                    </div>
                    <div>
                      <span className="avatar avatar-md bg-secondary">
                        <i className="ri-user-3-line" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card custom-card overflow-hidden">
                <div className="card-body mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="fw-semibold text-primary mb-3">
                        Bounce Rate
                      </h6>
                      <span className="fs-25 d-flex align-items-center">
                        77.3%{" "}
                        <span className="fs-12 text-warning op-7 ms-2">
                          +0.59
                          <i className="ti ti-arrow-big-up-line ms-1 d-inline-flex" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div id="analytics-bouncerate" className="mt-1 w-100" />
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card custom-card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Audience Report</div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary-light btn-wave"
                    >
                      <i className="ri-share-forward-line me-1 align-middle d-inline-block" />
                      Export
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div id="audienceReport" />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-12">
              <div className="card custom-card">
                <div className="card-header justify-content-between">
                  <div className="card-title">
                    Top Countries Sessions vs Bounce Rate
                  </div>
                  <div className="dropdown">
                    <a
                      href="javascript:void(0);"
                      className="p-2 fs-12 text-muted"
                      data-bs-toggle="dropdown"
                    >
                      View All
                      <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Day
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Year
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div id="country-sessions" />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-12">
              <div className="card custom-card overflow-hidden">
                <div className="card-header justify-content-between">
                  <div className="card-title">Traffic Sources</div>
                  <div className="dropdown">
                    <a
                      href="javascript:void(0);"
                      className="p-2 fs-12 text-muted"
                      data-bs-toggle="dropdown"
                    >
                      View All
                      <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Download
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Import
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Export
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover text-nowrap">
                      <thead>
                        <tr>
                          <th scope="col">Browser</th>
                          <th scope="col">Sessions</th>
                          <th scope="col">Traffic</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                <i className="ri-google-fill fs-18 text-primary" />
                              </span>
                              <div className="fw-semibold">Google</div>
                            </div>
                          </td>
                          <td>
                            <span>
                              <i className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18" />
                              23,379
                            </span>
                          </td>
                          <td>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "78%" }}
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                <i className="ri-safari-line fs-18 text-secondary" />
                              </span>
                              <div className="fw-semibold">Safari</div>
                            </div>
                          </td>
                          <td>
                            <span>
                              <i className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18" />
                              78,973
                            </span>
                          </td>
                          <td>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "32%" }}
                                aria-valuenow={32}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                <i className="ri-opera-fill fs-18 text-success" />
                              </span>
                              <div className="fw-semibold">Opera</div>
                            </div>
                          </td>
                          <td>
                            <span>
                              <i className="ri-arrow-down-s-fill me-1 text-danger align-middle fs-18" />
                              12,457
                            </span>
                          </td>
                          <td>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "21%" }}
                                aria-valuenow={21}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                <i className="ri-edge-fill fs-18 text-info" />
                              </span>
                              <div className="fw-semibold">Edge</div>
                            </div>
                          </td>
                          <td>
                            <span>
                              <i className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18" />
                              8,570
                            </span>
                          </td>
                          <td>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "25%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                <i className="ri-firefox-fill fs-18 text-warning" />
                              </span>
                              <div className="fw-semibold">Firefox</div>
                            </div>
                          </td>
                          <td>
                            <span>
                              <i className="ri-arrow-down-s-fill me-1 text-danger align-middle fs-18" />
                              6,135
                            </span>
                          </td>
                          <td>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "35%" }}
                                aria-valuenow={35}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-bottom-0">
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                <i className="ri-ubuntu-fill fs-18 text-danger" />
                              </span>
                              <div className="fw-semibold">Ubuntu</div>
                            </div>
                          </td>
                          <td className="border-bottom-0">
                            <span>
                              <i className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18" />
                              4,789
                            </span>
                          </td>
                          <td className="border-bottom-0">
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "12%" }}
                                aria-valuenow={12}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-5">
          <div className="row">
            <div className="col-xxl-5 col-xl-12">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="card custom-card upgrade-card text-fixed-white">
                    <div className="card-body text-fixed-white">
                      <span className="avatar avatar-xxl">
                        <img src="/assets/images/media/media-84.png" alt="" />
                      </span>
                      <div className="upgrade-card-content">
                        <span className="op-7 fw-normal mb-1">
                          Plan is expiring !
                        </span>
                        <span className="fs-15 fw-semibold d-block mb-5 upgrade-text">
                          Upgrade to premium
                        </span>
                        <button
                          type="button"
                          className="btn btn-sm btn-light btn-wave"
                        >
                          Upgrade Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6">
                  <div className="card custom-card">
                    <div className="card-body p-1">
                      <div className="d-flex align-items-center flex-wrap">
                        <div id="analytics-followers" />
                        <div className="p-2">
                          <p className="mb-1 text-muted">Impressions</p>
                          <h5 className="fw-semibold mb-0">9,903</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6">
                  <div className="card custom-card">
                    <div className="card-body p-1">
                      <div className="d-flex align-items-center flex-wrap">
                        <div id="analytics-views" />
                        <div className="p-2">
                          <p className="mb-1 text-muted">Clicks</p>
                          <h5 className="fw-semibold mb-0">16,789</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-12">
              <div className="card custom-card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Sessions By Device</div>
                  <div>
                    <button type="button" className="btn btn-primary-light">
                      View All
                    </button>
                  </div>
                </div>
                <div className="card-body my-2 py-4">
                  <div id="sessions" />
                </div>
                <div className="card-footer p-0">
                  <div className="row row-cols-12 justify-content-center">
                    <div className="col pe-0 text-center">
                      <div className="p-sm-3 p-2 ">
                        <span className="text-muted fs-11">Mobile</span>
                        <span className="d-block fs-16 fw-semibold">68.3%</span>
                      </div>
                    </div>
                    <div className="col px-0 text-center">
                      <div className="p-sm-3 p-2 ">
                        <span className="text-muted fs-11">Tablet</span>
                        <span className="d-block fs-16 fw-semibold">
                          17.68%
                        </span>
                      </div>
                    </div>
                    <div className="col px-0 text-center">
                      <div className="p-sm-3 p-2 ">
                        <span className="text-muted fs-11">Desktop</span>
                        <span className="d-block fs-16 fw-semibold">10.5%</span>
                      </div>
                    </div>
                    <div className="col ps-0 text-center">
                      <div className="p-sm-3 p-2">
                        <span className="text-muted fs-11">Others</span>
                        <span className="d-block fs-16 fw-semibold">5.16%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card custom-card">
                <div className="card-header justify-content-between">
                  <div className="card-title">
                    Sessions Duration By New Users
                  </div>
                  <div className="dropdown">
                    <a
                      href="javascript:void(0);"
                      className="p-2 fs-12 text-muted"
                      data-bs-toggle="dropdown"
                    >
                      View All
                      <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Download
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Import
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Export
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div id="session-users" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End::row-1 */}
      {/* Start::row-2 */}
      <div className="row">
        <div className="col-xl-9">
          <div className="card custom-card">
            <div className="card-header justify-content-between">
              <div className="card-title">Visitors By Channel Report</div>
              <div className="d-flex flex-wrap">
                <div className="me-3 my-1">
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Search Here"
                    aria-label=".form-control-sm example"
                  />
                </div>
                <div className="dropdown my-1">
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
                      <a className="dropdown-item" href="javascript:void(0);">
                        New
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Popular
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Relevant
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover text-nowrap table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Channel</th>
                      <th scope="col">Sessions</th>
                      <th scope="col">Bounce Rate</th>
                      <th scope="col">Avg Session Duration</th>
                      <th scope="col">Goal Completed</th>
                      <th scope="col">Pages Per Session</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm bg-primary-transparent avatar-rounded">
                            <i className="ri-search-2-line fs-15 fw-semibiold text-primary" />
                          </span>
                          <span className="ms-2">Organic Search</span>
                        </div>
                      </td>
                      <td>782</td>
                      <td>32.09%</td>
                      <td>0 hrs : 0 mins : 32 secs</td>
                      <td>
                        <span className="badge bg-primary-transparent">
                          278
                        </span>
                      </td>
                      <td>2.9</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm bg-secondary-transparent avatar-rounded">
                            <i className="ri-globe-line fs-15 fw-semibiold text-secondary" />
                          </span>
                          <span className="ms-2">Direct</span>
                        </div>
                      </td>
                      <td>882</td>
                      <td>39.38%</td>
                      <td>0 hrs : 2 mins : 45 secs</td>
                      <td>
                        <span className="badge bg-secondary-transparent">
                          782
                        </span>
                      </td>
                      <td>1.5</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm bg-success-transparent avatar-rounded">
                            <i className="ri-share-forward-line fs-15 fw-semibiold text-success" />
                          </span>
                          <span className="ms-2">Referral</span>
                        </div>
                      </td>
                      <td>322</td>
                      <td>22.67%</td>
                      <td>0 hrs : 38 mins : 28 secs</td>
                      <td>
                        <span className="badge bg-success-transparent">
                          622
                        </span>
                      </td>
                      <td>3.2</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm bg-info-transparent avatar-rounded">
                            <i className="ri-reactjs-line fs-15 fw-semibiold text-info" />
                          </span>
                          <span className="ms-2">Social</span>
                        </div>
                      </td>
                      <td>389</td>
                      <td>25.11%</td>
                      <td>0 hrs : 12 mins : 89 secs</td>
                      <td>
                        <span className="badge bg-info-transparent">142</span>
                      </td>
                      <td>1.4</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm bg-warning-transparent avatar-rounded">
                            <i className="ri-mail-line fs-15 fw-semibiold text-warning" />
                          </span>
                          <span className="ms-2">Email</span>
                        </div>
                      </td>
                      <td>378</td>
                      <td>23.79%</td>
                      <td>0 hrs : 14 mins : 27 secs</td>
                      <td>
                        <span className="badge bg-warning-transparent">
                          178
                        </span>
                      </td>
                      <td>1.6</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm bg-danger-transparent avatar-rounded">
                            <i className="ri-bank-card-line fs-15 fw-semibiold text-danger" />
                          </span>
                          <span className="ms-2">Paid Search</span>
                        </div>
                      </td>
                      <td>488</td>
                      <td>28.77%</td>
                      <td>0 hrs : 16 mins : 28 secs</td>
                      <td>
                        <span className="badge bg-danger-transparent">578</span>
                      </td>
                      <td>2.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex align-items-center">
                <div>
                  Showing 6 Entries{" "}
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
        <div className="col-xl-3">
          <div className="card custom-card">
            <div className="card-header justify-content-between">
              <div className="card-title">Visitors By Countries</div>
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
                    <a className="dropdown-item" href="javascript:void(0);">
                      Day
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      Year
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0 analytics-visitors-countries">
                <li>
                  <div className="d-flex align-items-center">
                    <div className="lh-1">
                      <span className="avatar avatar-sm avatar-rounded text-default">
                        <img src="/assets/images/flags/us_flag.jpg" alt="" />
                      </span>
                    </div>
                    <div className="ms-3 flex-fill lh-1">
                      <span className="fs-12">United States</span>
                    </div>
                    <div>
                      <span className="text-default badge bg-light fw-semibold mt-2">
                        32,190
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="lh-1">
                      <span className="avatar avatar-sm avatar-rounded text-default">
                        <img
                          src="/assets/images/flags/germany_flag.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="ms-3 flex-fill lh-1">
                      <span className="fs-12">Germany</span>
                    </div>
                    <div>
                      <span className="text-default badge bg-light fw-semibold mt-2">
                        8,798
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="lh-1">
                      <span className="avatar avatar-sm avatar-rounded text-default">
                        <img
                          src="/assets/images/flags/mexico_flag.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="ms-3 flex-fill lh-1">
                      <span className="fs-12">Mexico</span>
                    </div>
                    <div>
                      <span className="text-default badge bg-light fw-semibold mt-2">
                        16,885
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="lh-1">
                      <span className="avatar avatar-sm avatar-rounded text-default">
                        <img src="/assets/images/flags/uae_flag.jpg" alt="" />
                      </span>
                    </div>
                    <div className="ms-3 flex-fill lh-1">
                      <span className="fs-12">Uae</span>
                    </div>
                    <div>
                      <span className="text-default badge bg-light fw-semibold mt-2">
                        14,885
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="lh-1">
                      <span className="avatar avatar-sm avatar-rounded text-default">
                        <img
                          src="/assets/images/flags/argentina_flag.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="ms-3 flex-fill lh-1">
                      <span className="fs-12">Argentina</span>
                    </div>
                    <div>
                      <span className="text-default badge bg-light fw-semibold mt-2">
                        17,578
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="lh-1">
                      <span className="avatar avatar-sm avatar-rounded text-default">
                        <img
                          src="/assets/images/flags/russia_flag.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="ms-3 flex-fill lh-1">
                      <span className="fs-12">Russia</span>
                    </div>
                    <div>
                      <span className="text-default badge bg-light fw-semibold mt-2">
                        10,118
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="lh-1">
                      <span className="avatar avatar-sm avatar-rounded text-default">
                        <img src="/assets/images/flags/china_flag.jpg" alt="" />
                      </span>
                    </div>
                    <div className="ms-3 flex-fill lh-1">
                      <span className="fs-12">China</span>
                    </div>
                    <div>
                      <span className="text-default badge bg-light fw-semibold mt-2">
                        6,578
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="lh-1">
                      <span className="avatar avatar-sm avatar-rounded text-default">
                        <img
                          src="/assets/images/flags/french_flag.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="ms-3 flex-fill lh-1">
                      <span className="fs-12">France</span>
                    </div>
                    <div>
                      <span className="text-default badge bg-light fw-semibold mt-2">
                        2,345
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="lh-1">
                      <span className="avatar avatar-sm avatar-rounded text-default">
                        <img
                          src="/assets/images/flags/canada_flag.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="ms-3 flex-fill lh-1">
                      <span className="fs-12">Canada</span>
                    </div>
                    <div>
                      <span className="text-default badge bg-light fw-semibold mt-2">
                        1,678
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
