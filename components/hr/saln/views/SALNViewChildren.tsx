import React from "react";

const SALNViewChildren = () => {
  return (
    <div className="row px-5">
      <div className="col-md-12">
        <div className="text-center text-uppercase text-underline fw-bold fs-15">
          <u>
            Unmarried Children Below Eighteen (18) Years of Age Living in
            Declarant's Household
          </u>
        </div>
        <div className="d-flex justify-content-between">
          <div></div>
          <div>
            <button className="btn btn-primary btn-wave">Edit</button>
          </div>
        </div>
        <div className="table-responsive mt-4 text-center">
          <table className="table text-nowrap table-bordered">
            <thead>
              <tr>
                <th scope="col">NAME</th>
                <th scope="col">DATE OF BIRTH</th>
                <th scope="col">AGE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="badge bg-success-transparent">Active</span>
                </td>
                <td>kimosukuro@gmail.com</td>
                <td>
                  <div className="hstack gap-2 flex-wrap">
                    <a
                      href="javascript:void(0);"
                      className="text-info fs-14 lh-1"
                    >
                      <i className="ri-edit-line" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="text-danger fs-14 lh-1"
                    >
                      <i className="ri-delete-bin-5-line" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="badge bg-light text-dark">Inactive</span>
                </td>
                <td>hasimna2132@gmail.com</td>
                <td>
                  <div className="hstack gap-2 flex-wrap">
                    <a
                      href="javascript:void(0);"
                      className="text-info fs-14 lh-1"
                    >
                      <i className="ri-edit-line" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="text-danger fs-14 lh-1"
                    >
                      <i className="ri-delete-bin-5-line" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="badge bg-success-transparent">Active</span>
                </td>
                <td>azimokhan421@gmail.com</td>
                <td>
                  <div className="hstack gap-2 flex-wrap">
                    <a
                      href="javascript:void(0);"
                      className="text-info fs-14 lh-1"
                    >
                      <i className="ri-edit-line" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="text-danger fs-14 lh-1"
                    >
                      <i className="ri-delete-bin-5-line" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="badge bg-success-transparent">Active</span>
                </td>
                <td>julianasams143@gmail.com</td>
                <td>
                  <div className="hstack gap-2 flex-wrap">
                    <a
                      href="javascript:void(0);"
                      className="text-info fs-14 lh-1"
                    >
                      <i className="ri-edit-line" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="text-danger fs-14 lh-1"
                    >
                      <i className="ri-delete-bin-5-line" />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SALNViewChildren;
