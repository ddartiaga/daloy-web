import Image from "next/image";
import Script from "next/script";

const page = () => {
  return (
    <>
      {/* Page Header */}
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <h1 className="page-title fw-semibold fs-18 mb-0">HRM</h1>
        <div className="ms-md-1 ms-0">
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="javascript:void(0);">Dashboards</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                HRM
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header Close */}
      {/* Start::row-1 */}
      <div className="row">
        <div className="col-xxl-5 col-xl-12">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="card custom-card hrm-main-card primary">
                <div className="card-body">
                  <div className="d-flex align-items-top">
                    <div className="me-3">
                      <span className="avatar bg-primary">
                        <i className="ri-team-line fs-18" />
                      </span>
                    </div>
                    <div className="flex-fill">
                      <span className="fw-semibold text-muted d-block mb-2">
                        Total Employees
                      </span>
                      <h5 className="fw-semibold mb-2">22,124</h5>
                      <p className="mb-0">
                        <span className="badge bg-primary-transparent">
                          This Month
                        </span>
                      </p>
                    </div>
                    <div>
                      <span className="fs-14 fw-semibold text-success">
                        +1.03%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="card custom-card hrm-main-card secondary">
                <div className="card-body">
                  <div className="d-flex align-items-top">
                    <div className="me-3">
                      <span className="avatar bg-secondary">
                        <i className="ri-user-unfollow-line fs-18" />
                      </span>
                    </div>
                    <div className="flex-fill">
                      <span className="fw-semibold text-muted d-block mb-2">
                        Employees In Leave
                      </span>
                      <h5 className="fw-semibold mb-2">528</h5>
                      <p className="mb-0">
                        <span className="badge bg-secondary-transparent">
                          This Month
                        </span>
                      </p>
                    </div>
                    <div>
                      <span className="fs-14 fw-semibold text-success">
                        +0.36%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="card custom-card  hrm-main-card warning">
                <div className="card-body">
                  <div className="d-flex align-items-top">
                    <div className="me-3">
                      <span className="avatar bg-warning">
                        <i className="ri-service-line fs-18" />
                      </span>
                    </div>
                    <div className="flex-fill">
                      <span className="fw-semibold text-muted d-block mb-2">
                        Total Clients
                      </span>
                      <h5 className="fw-semibold mb-2">8,289</h5>
                      <p className="mb-0">
                        <span className="badge bg-warning-transparent">
                          This Month
                        </span>
                      </p>
                    </div>
                    <div>
                      <span className="fs-14 fw-semibold text-danger">
                        -1.28%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="card custom-card  hrm-main-card danger">
                <div className="card-body">
                  <div className="d-flex align-items-top">
                    <div className="me-3">
                      <span className="avatar bg-danger">
                        <i className="ri-contacts-line fs-18" />
                      </span>
                    </div>
                    <div className="flex-fill">
                      <span className="fw-semibold text-muted d-block mb-2">
                        New Leads
                      </span>
                      <h5 className="fw-semibold mb-2">1,453</h5>
                      <p className="mb-0">
                        <span className="badge bg-danger-transparent">
                          This Month
                        </span>
                      </p>
                    </div>
                    <div>
                      <span className="fs-14 fw-semibold text-success">
                        +4.25%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card custom-card">
                <div className="card-header">
                  <div className="card-title">Applicants Summary</div>
                </div>
                <div className="card-body">
                  <div className="row gy-md-0 gy-3">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div className="d-flex align-items-top">
                        <div className="me-3">
                          <span className="avatar avatar-rounded bg-light text-primary">
                            <i className="ti ti-files fs-18" />
                          </span>
                        </div>
                        <div>
                          <span className="d-block mb-1 text-muted">
                            New Applicants
                          </span>
                          <h6 className="fw-semibold mb-0">2,981</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div className="d-flex align-items-top">
                        <div className="me-3">
                          <span className="avatar avatar-rounded bg-light text-secondary">
                            <i className="ti ti-file-check fs-18" />
                          </span>
                        </div>
                        <div>
                          <span className="d-block mb-1 text-muted">
                            Selected Candidates
                          </span>
                          <h6 className="fw-semibold mb-0">2,981</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div className="d-flex align-items-top">
                        <div className="me-3">
                          <span className="avatar avatar-rounded bg-light text-warning">
                            <i className="ti ti-file-dislike fs-18" />
                          </span>
                        </div>
                        <div>
                          <span className="d-block mb-1 text-muted">
                            Rejected Candidates
                          </span>
                          <h6 className="fw-semibold mb-0">2,981</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-7 col-xl-12">
          <div className="card custom-card">
            <div className="card-header justify-content-between align-items-center d-sm-flex d-block">
              <div className="card-title mb-sm-0 mb-2">
                Performance By Category
              </div>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-primary-light btn-sm btn-wave"
                >
                  1W
                </button>
                <button
                  type="button"
                  className="btn btn-primary-light btn-sm btn-wave"
                >
                  1M
                </button>
                <button
                  type="button"
                  className="btn btn-primary-light btn-sm btn-wave"
                >
                  6M
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm btn-wave"
                >
                  1Y
                </button>
              </div>
            </div>
            <div className="card-body">
              <div id="performanceReport" />
            </div>
          </div>
        </div>
      </div>
      {/*End::row-1 */}
      {/* Start::row-2 */}
      <div className="row">
        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-12">
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Jobs Summary</div>
            </div>
            <div className="card-body py-4 px-0">
              <div id="jobs-summary" />
            </div>
            <div className="card-footer p-4 my-2">
              <div className="row row-cols-12">
                <div className="col p-0">
                  <div className="text-center">
                    <span className="text-muted fs-12 mb-1 hrm-jobs-legend published d-inline-block ms-2">
                      Published
                    </span>
                    <div>
                      <span className="fs-16 fw-semibold">1,624</span>
                    </div>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="text-center">
                    <span className="text-muted fs-12 mb-1 hrm-jobs-legend private d-inline-block ms-2">
                      Private
                    </span>
                    <div>
                      <span className="fs-16 fw-semibold">1,267</span>
                    </div>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="text-center">
                    <span className="text-muted fs-12 mb-1 hrm-jobs-legend closed d-inline-block ms-2">
                      Closed
                    </span>
                    <div>
                      <span className="fs-16 fw-semibold">1,153</span>
                    </div>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="text-center">
                    <span className="text-muted fs-12 mb-1 hrm-jobs-legend onhold d-inline-block ms-2">
                      On Hold
                    </span>
                    <div>
                      <span className="fs-16 fw-semibold">1,153</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-12">
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Upcoming Events</div>
            </div>
            <div className="card-body">
              <ul className="list-unstyled timeline-widget mb-0 my-3">
                <li className="timeline-widget-list">
                  <div className="d-flex align-items-top">
                    <div className="me-5 text-center">
                      <span className="d-block fs-20 fw-semibold text-primary">
                        02
                      </span>
                      <span className="d-block fs-12 text-muted">Mon</span>
                    </div>
                    <div className="d-flex flex-wrap flex-fill align-items-top justify-content-between">
                      <div>
                        <p className="mb-1 text-truncate timeline-widget-content text-wrap">
                          You have an announcement - Ipsum Est Diam Eirmod
                        </p>
                        <p className="mb-0 fs-12 lh-1 text-muted">
                          10:00AM
                          <span className="badge bg-primary-transparent ms-2">
                            Announcement
                          </span>
                        </p>
                      </div>
                      <div className="dropdown">
                        <a
                          aria-label="anchor"
                          href="javascript:void(0);"
                          className="p-2 fs-16 text-muted"
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
                              Action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Another action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-widget-list">
                  <div className="d-flex align-items-top">
                    <div className="me-5 text-center">
                      <span className="d-block fs-20 fw-semibold text-primary">
                        15
                      </span>
                      <span className="d-block fs-12 text-muted">Sun</span>
                    </div>
                    <div className="d-flex flex-wrap flex-fill align-items-top justify-content-between">
                      <div>
                        <p className="mb-1 text-truncate timeline-widget-content text-wrap">
                          National holiday - Vero Jayanti
                        </p>
                        <p className="mb-0 fs-12 lh-1 text-muted">
                          <span className="badge bg-warning-transparent">
                            Holiday
                          </span>
                        </p>
                      </div>
                      <div className="dropdown">
                        <a
                          aria-label="anchor"
                          href="javascript:void(0);"
                          className="p-2 fs-16 text-muted"
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
                              Action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Another action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-widget-list">
                  <div className="d-flex align-items-top">
                    <div className="me-5 text-center">
                      <span className="d-block fs-20 fw-semibold text-primary">
                        23
                      </span>
                      <span className="d-block fs-12 text-muted">Mon</span>
                    </div>
                    <div className="d-flex flex-wrap flex-fill align-items-top justify-content-between">
                      <div>
                        <p className="mb-1 text-truncate timeline-widget-content text-wrap">
                          John pup birthday - Team Member
                        </p>
                        <p className="mb-4 fs-12 lh-1 text-muted">
                          09:00AM
                          <span className="badge bg-success-transparent ms-2">
                            Birthday
                          </span>
                        </p>
                        <p className="mb-1 text-truncate timeline-widget-content text-wrap">
                          Amet sed no dolor kasd - Et Dolores Tempor Erat
                        </p>
                        <p className="mb-0 fs-12 lh-1 text-muted">
                          04:00PM
                          <span className="badge bg-primary-transparent ms-2">
                            Announcement
                          </span>
                        </p>
                      </div>
                      <div className="dropdown">
                        <a
                          aria-label="anchor"
                          href="javascript:void(0);"
                          className="p-2 fs-16 text-muted"
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
                              Action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Another action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-widget-list">
                  <div className="d-flex align-items-top">
                    <div className="me-5 text-center">
                      <span className="d-block fs-20 fw-semibold text-primary">
                        31
                      </span>
                      <span className="d-block fs-12 text-muted">Tue</span>
                    </div>
                    <div className="d-flex flex-wrap flex-fill align-items-top justify-content-between">
                      <div>
                        <p className="mb-1 text-truncate timeline-widget-content text-wrap">
                          National Holiday - Dolore Ipsum
                        </p>
                        <p className="mb-0 fs-12 lh-1 text-muted">
                          <span className="badge bg-warning-transparent">
                            Holiday
                          </span>
                        </p>
                      </div>
                      <div className="dropdown">
                        <a
                          aria-label="anchor"
                          href="javascript:void(0);"
                          className="p-2 fs-16 text-muted"
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
                              Action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Another action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xxl-5 col-xl-12">
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Clients</div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table text-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">Client</th>
                      <th scope="col">Mail</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-3">
                            <span className="avatar avatar-rounded">
                              <Image
                                src="/assets/images/faces/2.jpg"
                                alt="profile icon"
                                width={32}
                                height={32}
                              />
                            </span>
                          </div>
                          <div>
                            <span className="d-block fw-semibold mb-1">
                              Diana Aise
                            </span>
                            <span className="d-block text-muted fs-12">
                              C.E.O
                            </span>
                          </div>
                        </div>
                      </th>
                      <td>diana.1116@demo.com</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href="javascript:void(0);"
                            className="btn btn-outline-light btn-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Active
                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Active
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Inactive
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-list">
                          <button
                            aria-label="button"
                            type="button"
                            className="btn btn-sm btn-primary-light btn-icon"
                          >
                            <i className="ri-pencil-line" />
                          </button>
                          <button
                            aria-label="button"
                            type="button"
                            className="btn btn-sm btn-success-light btn-icon"
                          >
                            <i className="ri-delete-bin-line" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-3">
                            <span className="avatar avatar-rounded">
                              <Image
                                src="/assets/images/faces/8.jpg"
                                alt=""
                                width={28}
                                height={28}
                              />
                            </span>
                          </div>
                          <div>
                            <span className="d-block fw-semibold mb-1">
                              Rose Mary
                            </span>
                            <span className="d-block text-muted fs-12">
                              C.E.O
                            </span>
                          </div>
                        </div>
                      </th>
                      <td>rose756@demo.com</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href="javascript:void(0);"
                            className="btn btn-outline-light btn-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Active
                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Active
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Inactive
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-list">
                          <button
                            aria-label="button"
                            type="button"
                            className="btn btn-sm btn-primary-light btn-icon"
                          >
                            <i className="ri-pencil-line" />
                          </button>
                          <button
                            aria-label="button"
                            type="button"
                            className="btn btn-sm btn-success-light btn-icon"
                          >
                            <i className="ri-delete-bin-line" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-3">
                            <span className="avatar avatar-rounded">
                              <Image
                                src="/assets/images/faces/13.jpg"
                                alt=""
                                width={28}
                                height={28}
                              />
                            </span>
                          </div>
                          <div>
                            <span className="d-block fw-semibold mb-1">
                              Gretchen Iox
                            </span>
                            <span className="d-block text-muted fs-12">
                              Manager
                            </span>
                          </div>
                        </div>
                      </th>
                      <td>gretchen.1.25@demo.com</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href="javascript:void(0);"
                            className="btn btn-outline-light btn-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Active
                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Active
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Inactive
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-list">
                          <button
                            aria-label="button"
                            type="button"
                            className="btn btn-sm btn-primary-light btn-icon"
                          >
                            <i className="ri-pencil-line" />
                          </button>
                          <button
                            aria-label="button"
                            type="button"
                            className="btn btn-sm btn-success-light btn-icon"
                          >
                            <i className="ri-delete-bin-line" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-3">
                            <span className="avatar avatar-rounded">
                              <Image
                                src="/assets/images/faces/11.jpg"
                                alt=""
                                width={28}
                                height={28}
                              />
                            </span>
                          </div>
                          <div>
                            <span className="d-block fw-semibold mb-1">
                              Gray Noal
                            </span>
                            <span className="d-block text-muted fs-12">
                              Manager
                            </span>
                          </div>
                        </div>
                      </th>
                      <td>gray12gray@demo.com</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href="javascript:void(0);"
                            className="btn btn-outline-light btn-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Active
                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Active
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Inactive
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-list">
                          <button
                            aria-label="button"
                            type="button"
                            className="btn btn-sm btn-primary-light btn-icon"
                          >
                            <i className="ri-pencil-line" />
                          </button>
                          <button
                            aria-label="button"
                            type="button"
                            className="btn btn-sm btn-success-light btn-icon"
                          >
                            <i className="ri-delete-bin-line" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="border-bottom-0">
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-3">
                            <span className="avatar avatar-rounded">
                              <Image
                                src="/assets/images/faces/5.jpg"
                                alt=""
                                width={28}
                                height={28}
                              />
                            </span>
                          </div>
                          <div>
                            <span className="d-block fw-semibold mb-1">
                              Isa Bella
                            </span>
                            <span className="d-block text-muted fs-12">
                              C.E.O
                            </span>
                          </div>
                        </div>
                      </th>
                      <td className="border-bottom-0">isa158@demo.com</td>
                      <td className="border-bottom-0">
                        <div className="dropdown">
                          <a
                            href="javascript:void(0);"
                            className="btn btn-outline-light btn-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Active
                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Active
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                In Active
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="border-bottom-0">
                        <div className="btn-list">
                          <button
                            aria-label="button"
                            type="button"
                            className="btn btn-sm btn-primary-light btn-icon"
                          >
                            <i className="ri-pencil-line" />
                          </button>
                          <button
                            aria-label="button"
                            type="button"
                            className="btn btn-sm btn-success-light btn-icon"
                          >
                            <i className="ri-delete-bin-line" />
                          </button>
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
      {/* End::row-2 */}
      {/* Start::row-3 */}
      <div className="row">
        <div className="col-xl-12">
          <div className="card custom-card">
            <div className="card-header justify-content-between flex-wrap">
              <div className="card-title">Bills Summary</div>
              <div className="d-flex flex-wrap gap-2">
                <div className="me-3">
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
                      <th scope="col">Invoice ID</th>
                      <th scope="col">Client</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>#INV111611</td>
                      <td>
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-2">
                            <span className="avatar avatar-md avatar-rounded">
                              <Image
                                src="/assets/images/faces/1.jpg"
                                alt=""
                                width={28}
                                height={28}
                              />
                            </span>
                          </div>
                          <div>
                            <span className="d-block fw-semibold mb-1">
                              Rena Mark
                            </span>
                            <span className="text-muted fs-12">
                              renamark123@demo
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>14-05-2023</td>
                      <td>
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td>$9,523</td>
                      <td>
                        <div className="btn-list">
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="btn btn-sm btn-icon btn-info-light"
                          >
                            <i className="ri-pencil-line" />
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="btn btn-icon btn-sm btn-danger-light"
                          >
                            <i className="ri-delete-bin-line" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>#INV111611</td>
                      <td>
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-2">
                            <span className="avatar avatar-md avatar-rounded">
                              <Image
                                src="/assets/images/faces/4.jpg"
                                alt=""
                                width={28}
                                height={28}
                              />
                            </span>
                          </div>
                          <div>
                            <span className="d-block fw-semibold mb-1">
                              Xong Yun
                            </span>
                            <span className="text-muted fs-12">
                              xongyun2134@gmail.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>14-05-2023</td>
                      <td>
                        <span className="badge bg-warning">Pending</span>
                      </td>
                      <td>$8,243</td>
                      <td>
                        <div className="btn-list">
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="btn btn-sm btn-icon btn-info-light"
                          >
                            <i className="ri-pencil-line" />
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="btn btn-icon btn-sm btn-danger-light"
                          >
                            <i className="ri-delete-bin-line" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>#INV147852</td>
                      <td>
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-2">
                            <span className="avatar avatar-md avatar-rounded">
                              <Image
                                src="/assets/images/faces/6.jpg"
                                alt=""
                                width={28}
                                height={28}
                              />
                            </span>
                          </div>
                          <div>
                            <span className="d-block fw-semibold mb-1">
                              Kane William
                            </span>
                            <span className="text-muted fs-12">
                              william154@demo
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>16-05-2023</td>
                      <td>
                        <span className="badge bg-primary">Overdue</span>
                      </td>
                      <td>$5,234</td>
                      <td>
                        <div className="btn-list">
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="btn btn-sm btn-icon btn-info-light"
                          >
                            <i className="ri-pencil-line" />
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="btn btn-icon btn-sm btn-danger-light"
                          >
                            <i className="ri-delete-bin-line" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>#INV753159</td>
                      <td>
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-2">
                            <span className="avatar avatar-md avatar-rounded">
                              <Image
                                src="/assets/images/faces/12.jpg"
                                alt=""
                                width={28}
                                height={28}
                              />
                            </span>
                          </div>
                          <div>
                            <span className="d-block fw-semibold mb-1">
                              Stewart Rem
                            </span>
                            <span className="text-muted fs-12">
                              remstew092@demo
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>21-05-2023</td>
                      <td>
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td>$7,546</td>
                      <td>
                        <div className="btn-list">
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="btn btn-sm btn-icon btn-info-light"
                          >
                            <i className="ri-pencil-line" />
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="btn btn-icon btn-sm btn-danger-light"
                          >
                            <i className="ri-delete-bin-line" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>#INV369874</td>
                      <td>
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-2">
                            <span className="avatar avatar-md avatar-rounded">
                              <Image
                                src="/assets/images/faces/3.jpg"
                                alt=""
                                width={28}
                                height={28}
                              />
                            </span>
                          </div>
                          <div>
                            <span className="d-block fw-semibold mb-1">
                              Elliot Yun
                            </span>
                            <span className="text-muted fs-12">
                              eiiliot000@demo
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>18-05-2023</td>
                      <td>
                        <span className="badge bg-primary">Overdue</span>
                      </td>
                      <td>$7,541</td>
                      <td>
                        <div className="btn-list">
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="btn btn-sm btn-icon btn-info-light"
                          >
                            <i className="ri-pencil-line" />
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="btn btn-icon btn-sm btn-danger-light"
                          >
                            <i className="ri-delete-bin-line" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>#INV123456</td>
                      <td>
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-2">
                            <span className="avatar avatar-md avatar-rounded">
                              <Image
                                src="/assets/images/faces/5.jpg"
                                alt=""
                                width={28}
                                height={28}
                              />
                            </span>
                          </div>
                          <div>
                            <span className="d-block fw-semibold mb-1">
                              Gretchen Xio
                            </span>
                            <span className="text-muted fs-12">
                              gretchenxio999@demo
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>20-05-2023</td>
                      <td>
                        <span className="badge bg-warning">Pending</span>
                      </td>
                      <td>$2,541</td>
                      <td>
                        <div className="btn-list">
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="btn btn-sm btn-icon btn-info-light"
                          >
                            <i className="ri-pencil-line" />
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="btn btn-icon btn-sm btn-danger-light"
                          >
                            <i className="ri-delete-bin-line" />
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

      <Script src="/assets/js/hrm-dashboard.js" strategy="lazyOnload" />
      <Script src="/assets/js/custom-switcher.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/custom.js" strategy="lazyOnload" />
    </>
  );
};

export default page;
