import Script from "next/script";

const page = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="card custom-card">
            <div className="card-header justify-content-between">
              <div className="card-title">Queue</div>
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
      </div>

      <Script src="/assets/js/custom-switcher.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/custom.js" strategy="lazyOnload" />
    </>
  );
};

export default page;
