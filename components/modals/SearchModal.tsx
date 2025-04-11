"use client";

const SearchModal = () => {
  return (
    <div
      className="modal fade"
      id="searchModal"
      tabIndex={-1}
      aria-labelledby="searchModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="input-group">
              <a
                href="javascript:void(0);"
                className="input-group-text"
                id="Search-Grid"
              >
                <i className="fe fe-search header-link-icon fs-18" />
              </a>
              <input
                type="search"
                className="form-control border-0 px-2"
                placeholder="Search"
                aria-label="Username"
              />
              <a
                href="javascript:void(0);"
                className="input-group-text"
                id="voice-search"
              >
                <i className="fe fe-mic header-link-icon" />
              </a>
              <a
                href="javascript:void(0);"
                className="btn btn-light btn-icon"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fe fe-more-vertical" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="javascript:void(0);">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="font-weight-semibold text-muted mb-2">
                Are You Looking For...
              </p>
              <span className="search-tags alert">
                <i className="fe fe-user me-2" />
                People
                <a
                  href="javascript:void(0)"
                  className="tag-addon"
                  data-bs-dismiss="alert"
                >
                  <i className="fe fe-x" />
                </a>
              </span>
              <span className="search-tags alert">
                <i className="fe fe-file-text me-2" />
                Pages
                <a
                  href="javascript:void(0)"
                  className="tag-addon"
                  data-bs-dismiss="alert"
                >
                  <i className="fe fe-x" />
                </a>
              </span>
              <span className="search-tags alert">
                <i className="fe fe-align-left me-2" />
                Articles
                <a
                  href="javascript:void(0)"
                  className="tag-addon"
                  data-bs-dismiss="alert"
                >
                  <i className="fe fe-x" />
                </a>
              </span>
              <span className="search-tags alert">
                <i className="fe fe-server me-2" />
                Tags
                <a
                  href="javascript:void(0)"
                  className="tag-addon"
                  data-bs-dismiss="alert"
                >
                  <i className="fe fe-x" />
                </a>
              </span>
            </div>
            <div className="my-4">
              <p className="font-weight-semibold text-muted mb-2">
                Recent Search :
              </p>
              <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                <a href="notifications.html">
                  <span>Notifications</span>
                </a>
                <a
                  className="ms-auto lh-1"
                  href="javascript:void(0);"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <i className="fe fe-x text-muted" />
                </a>
              </div>
              <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                <a href="alerts.html">
                  <span>Alerts</span>
                </a>
                <a
                  className="ms-auto lh-1"
                  href="javascript:void(0);"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <i className="fe fe-x text-muted" />
                </a>
              </div>
              <div className="p-2 border br-5 d-flex align-items-center text-muted mb-0 alert">
                <a href="mail.html">
                  <span>Mail</span>
                </a>
                <a
                  className="ms-auto lh-1"
                  href="javascript:void(0);"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <i className="fe fe-x text-muted" />
                </a>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="btn-group ms-auto">
              <button type="button" className="btn btn-sm btn-primary-light">
                Search
              </button>
              <button type="button" className="btn btn-sm btn-primary">
                Clear Recents
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
