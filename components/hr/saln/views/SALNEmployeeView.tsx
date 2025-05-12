const SALNEmployeeView = () => {
  return (
    <>
      <div className="row gx-5">
        <div className="col-md-12 col-sm-12 mb-5">
          <div className="d-flex justify-content-between">
            <div>
              <div>
                <label>
                  <strong>NOTE: </strong> Husband and Wife are both public
                  officials and employees may file the required statements
                  jointly or separately
                </label>
              </div>
              <div className="mt-1">
                <div className="form-check form-check-inline">
                  <input
                    id="joint-filing-checkbox"
                    className="form-check-input"
                    type="checkbox"
                    checked={false}
                    readOnly={true}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="joint-filing-checkbox"
                  >
                    Joint Filing
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    id="separate-filing-checkbox"
                    className="form-check-input"
                    type="checkbox"
                    checked={false}
                    readOnly={true}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="separate-filing-checkbox"
                  >
                    Separate Filing
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    id="not-applicable-filing-checkbox"
                    className="form-check-input"
                    type="checkbox"
                    checked={true}
                    readOnly={true}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="not-applicable-filing-checkbox"
                  >
                    Not Applicable
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-primary btn-wave">Edit</button>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 mb-3">
          <h6 className="text-uppercase ">
            <mark>Declarant</mark>
          </h6>
        </div>
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="row">
            <div className="col-md-2 text-uppercase fw-bolder fs-11">
              Declarant:{" "}
            </div>
            <div className="col-md-10 text-uppercase fw-bolder border-bottom">
              <div className="d-flex align-items-start justify-content-between">
                <span>Alecayos</span>
                <span>Amando</span>
                <span>B.</span>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-2 text-uppercase fw-bolder fs-11"></div>
            <div className="col-md-10">
              <div className="d-flex align-items-start justify-content-between fs-10">
                <span>(Family Name)</span>
                <span>(First Name)</span>
                <span>(M.I)</span>
              </div>
            </div>
          </div>
          <div className="row mb-1">
            <div className="col-md-2 text-uppercase fw-bolder fs-11">
              Address:{" "}
            </div>
            <div className="col-md-10 text-uppercase fw-bolder border-bottom">
              <div className="">
                <span>#47 Don P Campus Ave. Brgy Zone 2</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 text-uppercase fw-bolder fs-11"></div>
            <div className="col-md-10">
              <div className="col-md-10 text-uppercase fw-bolder border-bottom">
                <div className="">
                  <span>CITY OF DASMARINAS, CAVITE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="row mb-3">
            <div className="col-md-3 text-uppercase fw-bolder fs-11">
              Postition:{" "}
            </div>
            <div className="col-md-9 fw-bolder border-bottom">
              <div className="text-center">
                <span>Administrative Officer V</span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3 text-uppercase fw-bolder fs-11">
              Agency / Office:{" "}
            </div>
            <div className="col-md-9 fw-bolder border-bottom">
              <div className="text-center">
                <span>Dasmarinas Water District</span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3 text-uppercase fw-bolder fs-11">
              Office Address:{" "}
            </div>
            <div className="col-md-9 fw-bolder border-bottom">
              <div className="text-center">
                <span>Dasmarinas City, Cavite</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row gx-5">
        <div className="col-md-12 col-sm-12 mt-3 mb-3">
          <h6 className="text-uppercase">
            <mark>Spouse</mark>
          </h6>
        </div>
        <div className="col-md-6 col-sm-12 ">
          <div className="row">
            <div className="col-md-2 text-uppercase fw-bolder fs-11">
              Spouse:{" "}
            </div>
            <div className="col-md-10 text-uppercase fw-bolder border-bottom">
              <div className="d-flex align-items-start justify-content-between">
                <span>Alecayos</span>
                <span>Josephine</span>
                <span>E.</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 text-uppercase fw-bolder fs-11"></div>
            <div className="col-md-10">
              <div className="d-flex align-items-start justify-content-between fs-10">
                <span>(Family Name)</span>
                <span>(First Name)</span>
                <span>(M.I)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 ">
          <div className="row mb-3">
            <div className="col-md-3 text-uppercase fw-bolder fs-11">
              Position:{" "}
            </div>
            <div className="col-md-9 fw-bolder border-bottom">
              <div className="text-center">
                <span>Administrative Officer V</span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3 text-uppercase fw-bolder fs-11">
              Agency / Office:{" "}
            </div>
            <div className="col-md-9 fw-bolder border-bottom">
              <div className="text-center">
                <span>Dasmarinas Water District</span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3 text-uppercase fw-bolder fs-11">
              Office Address:{" "}
            </div>
            <div className="col-md-9 fw-bolder border-bottom">
              <div className="text-center">
                <span>Dasmarinas City, Cavite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SALNEmployeeView;
