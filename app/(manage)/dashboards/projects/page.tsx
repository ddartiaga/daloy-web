import Image from "next/image";

const page = () => {
  return (
    <>
      {/* Page Header */}
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <h1 className="page-title fw-semibold fs-18 mb-0">Projects</h1>
        <div className="ms-md-1 ms-0">
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="javascript:void(0);">Dashboards</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Projects
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header Close */}
      {/* End::page-header */}
      {/* Start::row-1 */}
      <div className="row">
        <div className="col-xxl-9">
          <div className="row">
            <div className="col-xxl-5">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card custom-card">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                        <p className="mb-2">Completed Projects</p>
                        <h4 className="mb-0 fw-semibold mb-2">109</h4>
                        <span className="badge bg-success-transparent">
                          1.5% <i className="ti ti-trending-up" />
                        </span>
                        <span className="text-muted fs-11 ms-1">
                          this month
                        </span>
                      </div>
                      <div>
                        <span className="avatar avatar-md bg-primary p-2">
                          <i className="ti ti-file-check fs-20 op-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card custom-card">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                        <p className="mb-2">Overdue Projects</p>
                        <h4 className="mb-0 fw-semibold mb-2">18</h4>
                        <span className="badge bg-danger-transparent">
                          0.23% <i className="ti ti-trending-down" />
                        </span>
                        <span className="text-muted fs-11 ms-1">
                          this month
                        </span>
                      </div>
                      <div>
                        <span className="avatar avatar-md bg-secondary p-2">
                          <i className="ti ti-briefcase fs-20 op-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card custom-card">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                        <p className="mb-2">Total Projects</p>
                        <h4 className="mb-0 fw-semibold mb-2">389</h4>
                        <span className="badge bg-success-transparent">
                          0.67% <i className="ti ti-trending-up" />
                        </span>
                        <span className="text-muted fs-11 ms-1">
                          this month
                        </span>
                      </div>
                      <div>
                        <span className="avatar avatar-md bg-success p-2">
                          <i className="ti ti-album fs-20 op-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card custom-card">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                        <p className="mb-2">Pending Projects</p>
                        <h4 className="mb-0 fw-semibold mb-2">227</h4>
                        <span className="badge bg-success-transparent">
                          0.53% <i className="ti ti-trending-up" />
                        </span>
                        <span className="text-muted fs-11 ms-1">
                          this month
                        </span>
                      </div>
                      <div>
                        <span className="avatar avatar-md bg-warning p-2">
                          <i className="ti ti-chart-pie-2 fs-20 op-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="card custom-card">
                    <div className="card-header justify-content-between">
                      <div className="card-title">Project Analysis</div>
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
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Download
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Import
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Export
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="projectAnalysis" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card custom-card">
                    <div className="card-header justify-content-between">
                      <div className="card-title">Team Members</div>
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
                              Download
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Import
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Export
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled team-members-card mb-0">
                        <li>
                          <a href="javascript:void(0)">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-top">
                                <span className="avatar avatar-sm lh-1">
                                  <img
                                    src="/assets/images/faces/2.jpg"
                                    alt=""
                                  />
                                </span>
                                <div className="ms-3 lh-1">
                                  <span className="fw-semibold">
                                    Melissa Smith
                                  </span>
                                  <span className="d-block fs-11 text-muted mt-2">
                                    Ui Developer
                                  </span>
                                </div>
                              </div>
                              <div id="user1" />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-top">
                                <span className="avatar avatar-sm lh-1">
                                  <img
                                    src="/assets/images/faces/12.jpg"
                                    alt=""
                                  />
                                </span>
                                <div className="ms-3 lh-1">
                                  <span className="fw-semibold">
                                    Jason Momoa
                                  </span>
                                  <span className="d-block fs-11 text-muted mt-2">
                                    React Developer
                                  </span>
                                </div>
                              </div>
                              <div id="user2" />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-top">
                                <span className="avatar avatar-sm lh-1">
                                  <img
                                    src="/assets/images/faces/1.jpg"
                                    alt=""
                                  />
                                </span>
                                <div className="ms-3 lh-1">
                                  <span className="fw-semibold">
                                    Kamala Hars
                                  </span>
                                  <span className="d-block fs-11 text-muted mt-2">
                                    Testing
                                  </span>
                                </div>
                              </div>
                              <div id="user3" />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-top">
                                <span className="avatar avatar-sm lh-1">
                                  <img
                                    src="/assets/images/faces/15.jpg"
                                    alt=""
                                  />
                                </span>
                                <div className="ms-3 lh-1">
                                  <span className="fw-semibold">
                                    Diego Sanch
                                  </span>
                                  <span className="d-block fs-11 text-muted mt-2">
                                    Angular Developer
                                  </span>
                                </div>
                              </div>
                              <div id="user4" />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-top">
                                <span className="avatar avatar-sm lh-1">
                                  <img
                                    src="/assets/images/faces/10.jpg"
                                    alt=""
                                  />
                                </span>
                                <div className="ms-3 lh-1">
                                  <span className="fw-semibold">
                                    Jake Sully
                                  </span>
                                  <span className="d-block fs-11 text-muted mt-2">
                                    Web Designer
                                  </span>
                                </div>
                              </div>
                              <div id="user5" />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="card custom-card">
                    <div className="card-header justify-content-between">
                      <div className="card-title">Main Tasks</div>
                      <div className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="p-2 fs-12 text-muted"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Today
                          <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
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
                      <ul className="list-unstyled projects-maintask-card">
                        <li>
                          <div className="d-flex align-items-top">
                            <div className="d-flex align-items-top flex-fill">
                              <span className="me-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkboxNoLabel1"
                                  defaultValue=""
                                  aria-label="..."
                                />
                              </span>
                              <div className="flex-fill">
                                <span>Designing a landing page</span>
                                <span className="d-block mt-1">
                                  <span className="avatar-list-stacked">
                                    <span className="avatar avatar-xs avatar-rounded">
                                      <img
                                        src="/assets/images/faces/2.jpg"
                                        alt="img"
                                      />
                                    </span>
                                    <span className="avatar avatar-xs avatar-rounded">
                                      <img
                                        src="/assets/images/faces/8.jpg"
                                        alt="img"
                                      />
                                    </span>
                                    <span className="avatar avatar-xs avatar-rounded">
                                      <img
                                        src="/assets/images/faces/2.jpg"
                                        alt="img"
                                      />
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="badge bg-primary-transparent">
                                In progress
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-top">
                            <div className="d-flex align-items-top flex-fill">
                              <span className="me-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkboxNoLabel2"
                                  defaultValue=""
                                  aria-label="..."
                                />
                              </span>
                              <div className="flex-fill">
                                <span>Testing of new project ui</span>
                                <span className="d-block mt-1">
                                  <span className="avatar-list-stacked">
                                    <span className="avatar avatar-xs avatar-rounded">
                                      <img
                                        src="/assets/images/faces/10.jpg"
                                        alt="img"
                                      />
                                    </span>
                                    <span className="avatar avatar-xs avatar-rounded">
                                      <img
                                        src="/assets/images/faces/15.jpg"
                                        alt="img"
                                      />
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="badge bg-success-transparent">
                                Completed
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-top">
                            <div className="d-flex align-items-top flex-fill">
                              <span className="me-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkboxNoLabel3"
                                  defaultValue=""
                                  aria-label="..."
                                />
                              </span>
                              <div className="flex-fill">
                                <span>Fixing bugs in registration page</span>
                                <span className="d-block mt-1">
                                  <span className="avatar-list-stacked">
                                    <span className="avatar avatar-xs avatar-rounded">
                                      <img
                                        src="/assets/images/faces/11.jpg"
                                        alt="img"
                                      />
                                    </span>
                                    <span className="avatar avatar-xs avatar-rounded">
                                      <img
                                        src="/assets/images/faces/4.jpg"
                                        alt="img"
                                      />
                                    </span>
                                    <span className="avatar avatar-xs avatar-rounded">
                                      <img
                                        src="/assets/images/faces/8.jpg"
                                        alt="img"
                                      />
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="badge bg-warning-transparent">
                                pending
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-top">
                            <div className="d-flex align-items-top flex-fill">
                              <span className="me-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkboxNoLabel4"
                                  defaultValue=""
                                  aria-label="..."
                                />
                              </span>
                              <div className="flex-fill">
                                <span>Designing new dashboard</span>
                                <span className="d-block mt-1">
                                  <span className="avatar-list-stacked">
                                    <span className="avatar avatar-xs avatar-rounded">
                                      <img
                                        src="/assets/images/faces/10.jpg"
                                        alt="img"
                                      />
                                    </span>
                                    <span className="avatar avatar-xs avatar-rounded">
                                      <img
                                        src="/assets/images/faces/11.jpg"
                                        alt="img"
                                      />
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="badge bg-primary-transparent">
                                In progress
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
            <div className="col-xxl-3">
              <div className="card custom-card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Daily Tasks</div>
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
                  <ul className="list-unstyled daily-task-card">
                    <li>
                      <div className="card border border-primary border-opacity-25 shadow-none custom-card mb-0">
                        <div className="card-body">
                          <p className="fs-14 fw-semibold mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">
                            Home Page Design
                            <a aria-label="anchor" href="javascript:void(0);">
                              <i className="bi bi-plus-square float-end text-primary fs-18" />
                            </a>
                          </p>
                          <div className="d-flex flex-wrap gap-2 mb-4">
                            <span className="badge bg-primary-transparent">
                              Framework
                            </span>
                            <span className="badge bg-secondary-transparent">
                              Angular
                            </span>
                            <span className="badge bg-info-transparent">
                              Php
                            </span>
                          </div>
                          <div className="avatar-list-stacked">
                            <span className="avatar avatar-sm avatar-rounded">
                              <img src="/assets/images/faces/2.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded">
                              <img src="/assets/images/faces/8.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded">
                              <img src="/assets/images/faces/2.jpg" alt="img" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="card border border-warning border-opacity-25 shadow-none custom-card">
                        <div className="card-body">
                          <p className="fs-14 fw-semibold mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">
                            About Us Page redesign
                            <a aria-label="anchor" href="javascript:void(0);">
                              <i className="bi bi-plus-square float-end text-warning fs-18" />
                            </a>
                          </p>
                          <div className="d-flex flex-wrap gap-2 mb-4">
                            <span className="badge bg-danger-transparent">
                              Html
                            </span>
                            <span className="badge bg-warning-transparent">
                              Symphony
                            </span>
                            <span className="badge bg-success-transparent">
                              Php
                            </span>
                          </div>
                          <div className="avatar-list-stacked">
                            <span className="avatar avatar-sm avatar-rounded">
                              <img src="/assets/images/faces/6.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded">
                              <img src="/assets/images/faces/9.jpg" alt="img" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="card border border-success border-opacity-25 shadow-none custom-card">
                        <div className="card-body">
                          <p className="fs-14 fw-semibold mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">
                            About Us Page redesign
                            <a aria-label="anchor" href="javascript:void(0);">
                              <i className="bi bi-plus-square float-end text-success fs-18" />
                            </a>
                          </p>
                          <div className="d-flex flex-wrap gap-2 mb-4">
                            <span className="badge bg-danger-transparent">
                              Html
                            </span>
                            <span className="badge bg-warning-transparent">
                              Symphony
                            </span>
                            <span className="badge bg-success-transparent">
                              Php
                            </span>
                          </div>
                          <div className="avatar-list-stacked">
                            <span className="avatar avatar-sm avatar-rounded">
                              <img src="/assets/images/faces/6.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded">
                              <img src="/assets/images/faces/9.jpg" alt="img" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="card border border-secondary border-opacity-25 shadow-none custom-card">
                        <div className="card-body">
                          <p className="fs-14 fw-semibold mb-2 lh-1">
                            New Project Discussion
                            <a aria-label="anchor" href="javascript:void(0);">
                              <i className="bi bi-plus-square float-end text-secondary fs-18" />
                            </a>
                          </p>
                          <div className="d-flex flex-wrap gap-2 mb-4">
                            <span className="badge bg-info-transparent">
                              React
                            </span>
                            <span className="badge bg-primary-transparent">
                              Typescript
                            </span>
                          </div>
                          <div className="avatar-list-stacked">
                            <span className="avatar avatar-sm avatar-rounded">
                              <img src="/assets/images/faces/3.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded">
                              <img
                                src="/assets/images/faces/14.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded">
                              <img
                                src="/assets/images/faces/11.jpg"
                                alt="img"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3">
          <div className="row">
            <div className="col-xxl-12">
              <div className="card custom-card shadow-none projects-tracking-card overflow-hidden text-center">
                <div className="card-body">
                  <img
                    src="/assets/images/media/media-86.svg"
                    alt=""
                    className="mb-1"
                  />
                  <div>
                    <span className="fs-15 fw-semibold d-block mt-4 mb-3">
                      Track your work progress here
                    </span>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm btn-wave"
                    >
                      Track Here
                    </button>
                  </div>
                  <span className="shape-1 text-primary">
                    <i className="ti ti-circle fs-20 fw-bold" />
                  </span>
                  <span className="shape-2 text-secondary">
                    <i className="ti ti-triangle fs-20 fw-bold" />
                  </span>
                  <span className="shape-3 text-warning">
                    <i className="ti ti-square fs-20 fw-bold" />
                  </span>
                  <span className="shape-4 text-info">
                    <i className="ti ti-square-rotated fs-20 fw-bold" />
                  </span>
                  <span className="shape-5 text-success">
                    <i className="ti ti-pentagon fs-20 fw-bold" />
                  </span>
                  <span className="shape-6 text-danger">
                    <i className="ti ti-star fs-20 fw-bold" />
                  </span>
                  <span className="shape-7 text-pink">
                    <i className="ti ti-hexagon fs-20 fw-bold" />
                  </span>
                  <span className="shape-8 text-teal">
                    <i className="ti ti-octagon fs-20 fw-bold" />
                  </span>
                  <span className="shape-9 text-primary">
                    <i className="ti ti-circle fs-20 fw-bold" />
                  </span>
                  <span className="shape-10 text-secondary">
                    <i className="ti ti-triangle fs-20 fw-bold" />
                  </span>
                  <span className="shape-11 text-warning">
                    <i className="ti ti-square fs-20 fw-bold" />
                  </span>
                  <span className="shape-12 text-info">
                    <i className="ti ti-square-rotated fs-20 fw-bold" />
                  </span>
                  <span className="shape-13 text-success">
                    <i className="ti ti-pentagon fs-20 fw-bold" />
                  </span>
                  <span className="shape-14 text-danger">
                    <i className="ti ti-star fs-20 fw-bold" />
                  </span>
                  <span className="shape-15 text-pink">
                    <i className="ti ti-hexagon fs-20 fw-bold" />
                  </span>
                  <span className="shape-16 text-teal">
                    <i className="ti ti-octagon fs-20 fw-bold" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="card custom-card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Recent Transactions</div>
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
                  <ul className="list-unstyled project-transactions-card">
                    <li>
                      <div className="d-flex align-items-top">
                        <div className="me-3">
                          <span className="avatar avatar-rounded fw-bold avatar-md bg-primary-transparent">
                            S
                          </span>
                        </div>
                        <div className="flex-fill">
                          <span className="d-block fw-semibold">
                            Simon Cowall
                          </span>
                          <span className="d-block text-muted fs-11">
                            Feb 28,2023 - 12:54PM
                          </span>
                        </div>
                        <div>
                          <h6 className="fw-semibold">$21,442</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-top">
                        <div className="me-3">
                          <span className="avatar avatar-rounded fw-bold avatar-md bg-secondary-transparent">
                            M
                          </span>
                        </div>
                        <div className="flex-fill">
                          <span className="d-block fw-semibold">
                            Melissa Blue
                          </span>
                          <span className="d-block text-muted fs-11">
                            Mar 28,2023 - 10:14AM
                          </span>
                        </div>
                        <div>
                          <h6 className="fw-semibold">$8,789</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-top">
                        <div className="me-3">
                          <span className="avatar avatar-rounded fw-bold avatar-md bg-success-transparent">
                            G
                          </span>
                        </div>
                        <div className="flex-fill">
                          <span className="d-block fw-semibold">
                            Gabriel Shin
                          </span>
                          <span className="d-block text-muted fs-11">
                            Mar 16,2023 - 05:27PM
                          </span>
                        </div>
                        <div>
                          <h6 className="fw-semibold">$13,677</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-top">
                        <div className="me-3">
                          <span className="avatar avatar-rounded fw-bold avatar-md bg-warning-transparent">
                            Y
                          </span>
                        </div>
                        <div className="flex-fill">
                          <span className="d-block fw-semibold">
                            Yohasimi Nakiyaro
                          </span>
                          <span className="d-block text-muted fs-11">
                            Mar 19,2023 - 04:45PM
                          </span>
                        </div>
                        <div>
                          <h6 className="fw-semibold">$3,543</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-top">
                        <div className="me-3">
                          <span className="avatar avatar-rounded fw-bold avatar-md bg-info-transparent">
                            B
                          </span>
                        </div>
                        <div className="flex-fill">
                          <span className="d-block fw-semibold">
                            Brenda Lynn
                          </span>
                          <span className="d-block text-muted fs-11">
                            Mar 10,2023 - 05:25PM
                          </span>
                        </div>
                        <div>
                          <h6 className="fw-semibold">$7,890</h6>
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
      {/*End::row-1 */}
      {/* Start::row-3 */}
      <div className="row">
        <div className="col-xxl-12">
          <div className="card custom-card">
            <div className="card-header justify-content-between">
              <div className="card-title">Projects Summary</div>
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
                      <th scope="col">Title</th>
                      <th scope="col">Assigned To</th>
                      <th scope="col">Tasks</th>
                      <th scope="col">Progress</th>
                      <th scope="col">Status</th>
                      <th scope="col">Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Home Page</td>
                      <td>
                        <div className="avatar-list-stacked">
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/2.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/8.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/2.jpg" alt="img" />
                          </span>
                          <a
                            className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white"
                            href="javascript:void(0);"
                          >
                            +2
                          </a>
                        </div>
                      </td>
                      <td>110/180</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress progress-animate progress-xs w-100"
                            role="progressbar"
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                              style={{ width: "0%" }}
                            />
                          </div>
                          <div className="ms-2">0%</div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-primary-transparent">
                          In Progress
                        </span>
                      </td>
                      <td>14-04-2023</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Landing Design</td>
                      <td>
                        <div className="avatar-list-stacked">
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/5.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/6.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/9.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/15.jpg" alt="img" />
                          </span>
                        </div>
                      </td>
                      <td>95/100</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress progress-animate progress-xs w-100"
                            role="progressbar"
                            aria-valuenow={95}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                              style={{ width: "95%" }}
                            />
                          </div>
                          <div className="ms-2">95%</div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-primary-transparent">
                          In Progress
                        </span>
                      </td>
                      <td>20-04-2023</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>New Template Design</td>
                      <td>
                        <div className="avatar-list-stacked">
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/1.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/3.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/4.jpg" alt="img" />
                          </span>
                        </div>
                      </td>
                      <td>90/100</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress progress-animate progress-xs w-100"
                            role="progressbar"
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                              style={{ width: "0%" }}
                            />
                          </div>
                          <div className="ms-2">0%</div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-warning-transparent">
                          Pending
                        </span>
                      </td>
                      <td>29-05-2023</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>HR Management Template Design</td>
                      <td>
                        <div className="avatar-list-stacked">
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/10.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/11.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/4.jpg" alt="img" />
                          </span>
                          <a
                            className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white"
                            href="javascript:void(0);"
                          >
                            +5
                          </a>
                        </div>
                      </td>
                      <td>26/71</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress progress-animate progress-xs w-100"
                            role="progressbar"
                            aria-valuenow={35}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                              style={{ width: "35%" }}
                            />
                          </div>
                          <div className="ms-2">35%</div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-primary-transparent">
                          In Progress
                        </span>
                      </td>
                      <td>18-04-2023</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Designing New Template</td>
                      <td>
                        <div className="avatar-list-stacked">
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/2.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/9.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/16.jpg" alt="img" />
                          </span>
                          <a
                            className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white"
                            href="javascript:void(0);"
                          >
                            +3
                          </a>
                        </div>
                      </td>
                      <td>26/71</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress progress-animate progress-xs w-100"
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div className="ms-2">100%</div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-success-transparent">
                          Completed
                        </span>
                      </td>
                      <td>11-04-2023</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Documentation Project</td>
                      <td>
                        <div className="avatar-list-stacked">
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/4.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/7.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/12.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/13.jpg" alt="img" />
                          </span>
                          <span className="avatar avatar-xs avatar-rounded">
                            <img src="/assets/images/faces/15.jpg" alt="img" />
                          </span>
                        </div>
                      </td>
                      <td>45/90</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress progress-animate progress-xs w-100"
                            role="progressbar"
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                              style={{ width: "50%" }}
                            />
                          </div>
                          <div className="ms-2">50%</div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-primary-transparent">
                          In Progress
                        </span>
                      </td>
                      <td>18-04-2023</td>
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
      </div>
    </>
  );
};

export default page;
