import Image from "next/image";

const Landing = () => {
  return (
    <>
      <div className="landing-banner" id="home">
        <section className="section">
          <div className="container main-banner-container pb-lg-0">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="py-lg-5">
                  <div className="mb-3">
                    <h6 className="fw-semibold text-fixed-white op-9">
                      WELCOME
                    </h6>
                  </div>
                  <p className="landing-banner-heading mb-3">
                    DALOY is a cloud platform for water utility operations and
                    infrastructure monitoring.
                  </p>
                  <div className="fs-16 mb-5 text-fixed-white op-7">
                    A cloud-based platform that helps water providers monitor
                    infrastructure, manage operations, and respond to issues in
                    real time — all in one place.
                  </div>

                  <a href="/daloy/dashboard" className="m-1 btn btn-primary">
                    View Management UI
                    <i className="ri-eye-line ms-2 align-middle" />
                  </a>
                </div>
              </div>
              {/* <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-4">
                <div className="text-end landing-main-image landing-heading-img">
                  <Image
                    width={420}
                    height={420}
                    src="/app/images/two-successful-professionals.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div> */}
            </div>
            <span className="shape-1 text-white">
              <i className="ti ti-circle fs-20 fw-bold" />
            </span>
            <span className="shape-2 text-white">
              <i className="ti ti-circle fs-10 fw-bold" />
            </span>
            <span className="shape-3 text-white">
              <i className="ti ti-circle fs-20 fw-bold" />
            </span>
            <span className="shape-4 text-white">
              <i className="ti ti-circle fs-10 fw-bold" />
            </span>
            <span className="shape-5 text-white">
              <i className="ti ti-circle fs-20 fw-bold" />
            </span>
            <span className="shape-6 text-white">
              <i className="ti ti-circle fs-20 fw-bold" />
            </span>
            <span className="shape-7 text-white">
              <i className="ti ti-circle fs-20 fw-bold" />
            </span>
            <span className="shape-8 text-white">
              <i className="ti ti-circle fs-10 fw-bold" />
            </span>
            <span className="shape-9 text-white">
              <i className="ti ti-circle fs-30 fw-bold" />
            </span>
            <span className="shape-10 text-white">
              <i className="ti ti-circle fs-40 fw-bold" />
            </span>
            <span className="shape-11 text-white">
              <i className="ti ti-circle fs-10 fw-bold" />
            </span>
            <span className="shape-12 text-white">
              <i className="ti ti-circle fs-40 fw-bold" />
            </span>
            <span className="shape-13 text-white">
              <i className="ti ti-circle fs-20 fw-bold" />
            </span>
            <span className="shape-14 text-white">
              <i className="ti ti-circle fs-40 fw-bold" />
            </span>
            <span className="shape-15 text-white">
              <i className="ti ti-circle fs-20 fw-bold" />
            </span>
            <span className="shape-16 text-white">
              <i className="ti ti-circle fs-10 fw-bold" />
            </span>
          </div>
        </section>
      </div>

      {/* Start:: Section-2 */}
      <section className="section section-bg " id="statistics">
        <div className="container text-center position-relative">
          <p className="fs-12 fw-semibold text-success mb-1">
            <span className="landing-section-heading">STATISTICS</span>
          </p>
          <h3 className="fw-semibold mb-2">
            More than 120+ projects completed.
          </h3>
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <p className="text-muted fs-15 mb-5 fw-normal">
                We are proud to have top class clients and customers,which
                motivates us to work more on projects.
              </p>
            </div>
          </div>
          <div className="row  g-2 justify-content-center">
            <div className="col-xl-12">
              <div className="row justify-content-evenly">
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="p-3 text-center rounded-2 bg-white border">
                    <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                      <i className="fs-24 bx bx-spreadsheet" />
                    </span>
                    <h3 className="fw-semibold mb-0 text-dark">120+</h3>
                    <p className="mb-1 fs-14 op-7 text-muted ">Projects</p>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="p-3 text-center rounded-2 bg-white border">
                    <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                      <i className="fs-24 bx bx-user-plus" />
                    </span>
                    <h3 className="fw-semibold mb-0 text-dark">20K+</h3>
                    <p className="mb-1 fs-14 op-7 text-muted ">Clients</p>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="p-3 text-center rounded-2 bg-white border">
                    <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                      <i className="fs-24 bx bx-money" />
                    </span>
                    <h3 className="fw-semibold mb-0 text-dark">$45.8M</h3>
                    <p className="mb-1 fs-14 op-7 text-muted ">Income Earned</p>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="p-3 text-center rounded-2 bg-white border">
                    <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                      <i className="fs-24 bx bx-user-circle" />
                    </span>
                    <h3 className="fw-semibold mb-0 text-dark">854</h3>
                    <p className="mb-1 fs-14 op-7 text-muted ">Employees</p>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="p-3 text-center rounded-2 bg-white border">
                    <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                      <i className="fs-24 bx bx-calendar" />
                    </span>
                    <h3 className="fw-semibold mb-0 text-dark">5+</h3>
                    <p className="mb-1 fs-14 op-7 text-muted ">
                      Years of Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End:: Section-2 */}
      {/* Start:: Section-3 */}
      <section className="section " id="about">
        <div className="container text-center">
          <p className="fs-12 fw-semibold text-success mb-1">
            <span className="landing-section-heading">CUSTOMIZATION</span>
          </p>
          <h3 className="fw-semibold mb-2">
            Designed with precision and well documented
          </h3>
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <p className="text-muted fs-15 mb-3 fw-normal">
                DALOY comes with multiple customization options that are very
                easy to implement.
              </p>
            </div>
          </div>
          <div className="row justify-content-between align-items-center mx-0">
            <div className="col-xxl-5 col-xl-5 col-lg-5 customize-image text-center">
              <div className="text-lg-end">
                <Image
                  width={32}
                  height={32}
                  src="/assets/images/media/landing/3.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 pt-5 pb-0 px-lg-2 px-5 text-start">
              <h5 className="text-lg-start fw-semibold mb-0">
                Present your awesome product
              </h5>
              <p className=" text-muted">
                lorem ipsum, dolor sit var ameto condesetrat aiatel varen or
                damsenlel verman code Lorem ipsum, dolor sit amet consectetur
                adipisicing elit
              </p>
              <div className="row">
                <div className="col-12 col-md-12">
                  <div className="d-flex">
                    <span>
                      <i className="bx bxs-badge-check text-primary fs-18" />
                    </span>
                    <div className="ms-2">
                      <h6 className="fw-semibold mb-0">
                        Can Switch Easily From Vertical to HorizontalMenu.
                      </h6>
                      <p className=" text-muted">
                        lorem ipsum, dolor sit var ameto condesetrat aiatel
                        varen or damsenlel verman code Lorem ipsum, dolor sit
                        amet consectetur{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="d-flex">
                    <span>
                      <i className="bx bxs-badge-check text-primary fs-18" />
                    </span>
                    <div className="ms-2">
                      <h6 className="fw-semibold mb-0">
                        Switch Easily From One Color to Another Color style
                      </h6>
                      <p className=" text-muted">
                        lorem ipsum, dolor sit var ameto condesetrat aiatel
                        varen or damsenlel verman code Lorem ipsum, dolor sit
                        amet consectetur{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="d-flex">
                    <span>
                      <i className="bx bxs-badge-check text-primary fs-18" />
                    </span>
                    <div className="ms-2">
                      <h6 className="fw-semibold mb-0">
                        Switch Easily From Fixed to Scrollable Layout.
                      </h6>
                      <p className=" text-muted">
                        lorem ipsum, dolor sit var ameto condesetrat aiatel
                        varen or damsenlel verman code Lorem ipsum, dolor sit
                        amet consectetur{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End:: Section-3 */}
      {/* Start:: Section-4 */}
      <section className="section section-bg " id="our-mission">
        <div className="container text-center">
          <p className="fs-12 fw-semibold text-success mb-1">
            <span className="landing-section-heading">OUR MISSION</span>
          </p>
          <h2 className="fw-semibold mb-2">
            Our mission consists of 8 major steps.
          </h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-7">
              <p className="text-muted fs-15mb-0 fw-normal">
                Our mission is to make web design easy, so you can focus on
                building your brand.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card custom-card text-start landing-missions">
                <div className="card-body">
                  <div className="align-items-top">
                    <div className="mb-2">
                      <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                        <i className="bx bx-badge-check fs-25" />
                      </span>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Design Quality</h6>
                      <p className="mb-0 text-muted">
                        lorem ipsum, dolor sit var ameto condesetrat aiatel
                        varen or damsenlel verman code Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card custom-card text-start landing-missions">
                <div className="card-body">
                  <div className="align-items-top">
                    <div className="mb-2">
                      <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                        <i className="bx bx-file fs-25" />
                      </span>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Documentation</h6>
                      <p className="mb-0 text-muted">
                        lorem ipsum, dolor sit var ameto condesetrat aiatel
                        varen or damsenlel verman code Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card custom-card text-start landing-missions">
                <div className="card-body">
                  <div className="align-items-top">
                    <div className="mb-2">
                      <span className="avatar avatar-lg avatar-rounded  bg-primary-transparent">
                        <i className="bx bx-cog fs-25" />
                      </span>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Customization</h6>
                      <p className="mb-0 text-muted">
                        lorem ipsum, dolor sit var ameto condesetrat aiatel
                        varen or damsenlel verman code Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card custom-card text-start landing-missions">
                <div className="card-body">
                  <div className="align-items-top">
                    <div className="mb-2">
                      <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                        <i className="bx bx-cloud-upload fs-25" />
                      </span>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Regular Updates</h6>
                      <p className="mb-0 text-muted">
                        lorem ipsum, dolor sit var ameto condesetrat aiatel
                        varen or damsenlel verman code Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card custom-card text-start landing-missions">
                <div className="card-body">
                  <div className="align-items-top">
                    <div className="mb-2">
                      <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                        <i className="bx bx-support fs-25" />
                      </span>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">24/7 Support</h6>
                      <p className="mb-0 text-muted">
                        lorem ipsum, dolor sit var ameto condesetrat aiatel
                        varen or damsenlel verman code Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card custom-card text-start landing-missions">
                <div className="card-body">
                  <div className="align-items-top">
                    <div className="mb-2">
                      <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                        <i className="bx bx-image fs-25" />
                      </span>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">
                        Pre-Built Theme Styles
                      </h6>
                      <p className="mb-0 text-muted">
                        lorem ipsum, dolor sit var ameto condesetrat aiatel
                        varen or damsenlel verman code Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card custom-card text-start landing-missions">
                <div className="card-body">
                  <div className="align-items-top">
                    <div className="mb-2">
                      <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                        <i className="bx bx-compass fs-25" />
                      </span>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Compatibility</h6>
                      <p className="mb-0 text-muted">
                        lorem ipsum, dolor sit var ameto condesetrat aiatel
                        varen or damsenlel verman code Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card custom-card text-start landing-missions">
                <div className="card-body">
                  <div className="align-items-top">
                    <div className="mb-2">
                      <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                        <i className="bx bx-desktop fs-25" />
                      </span>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Fully Responsive</h6>
                      <p className="mb-0 text-muted">
                        lorem ipsum, dolor sit var ameto condesetrat aiatel
                        varen or damsenlel verman code Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End:: Section-4 */}
      {/* Start:: Section-5 */}
      <section className="section landing-Features" id="features">
        <div className="container text-center">
          <p className="fs-12 fw-semibold text-success mb-1">
            <span className="landing-section-heading">Features</span>
          </p>
          <h2 className="fw-semibold mb-2 text-fixed-white ">
            Features Used in DALOY
          </h2>
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <p className="text-fixed-white op-8 fs-15 mb-3 fw-normal">
                Some of the reviews our clients gave which brings motivation to
                work for future projects.
              </p>
            </div>
          </div>
          <div className="text-start">
            <div className="justify-content-center">
              <div className="">
                <div className="feature-logos mt-sm-5 flex-wrap">
                  <div className="ms-sm-5 ms-2 text-center">
                    <Image
                      width={32}
                      height={32}
                      src="/assets/images/media/landing/web/1.png"
                      alt="image"
                      className="featur-icon"
                    />
                    <h5 className="mt-3 text-fixed-white ">Bootstrap5</h5>
                  </div>
                  <div className="ms-sm-5 ms-2 text-center">
                    <Image
                      width={32}
                      height={32}
                      src="/assets/images/media/landing/web/2.png"
                      alt="image"
                      className="featur-icon"
                    />
                    <h5 className="mt-3 text-fixed-white ">HTML5</h5>
                  </div>
                  <div className="ms-sm-5 ms-2 text-center">
                    <Image
                      width={32}
                      height={32}
                      src="/assets/images/media/landing/web/4.png"
                      alt="image"
                      className="featur-icon"
                    />
                    <h5 className="mt-3 text-fixed-white ">Sass</h5>
                  </div>
                  <div className="ms-sm-5 ms-2 text-center">
                    <Image
                      width={32}
                      height={32}
                      src="/assets/images/media/landing/web/5.png"
                      alt="image"
                      className="featur-icon"
                    />
                    <h5 className="mt-3 text-fixed-white ">Gulp</h5>
                  </div>
                  <div className="ms-sm-5 ms-2 text-center">
                    <Image
                      width={32}
                      height={32}
                      src="/assets/images/media/landing/web/6.png"
                      alt="image"
                      className="featur-icon"
                    />
                    <h5 className="mt-3 text-fixed-white ">NPM</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination mt-4" />
          </div>
        </div>
      </section>
      {/* End:: Section-5 */}
      {/* Start:: Section-6 */}
      <section
        className="section landing-testimonials section-bg"
        id="testimonials"
      >
        <div className="container text-center">
          <p className="fs-12 fw-semibold text-success mb-1">
            <span className="landing-section-heading">TESTIMONIALS</span>
          </p>
          <h3 className="fw-semibold mb-2">
            We never failed to reach expectations
          </h3>
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <p className="text-muted fs-15 mb-5 fw-normal">
                Some of the reviews our clients gave which brings motivation to
                work for future projects.
              </p>
            </div>
          </div>
          <div className="swiper pagination-dynamic text-start">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="card custom-card testimonial-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar avatar-md avatar-rounded me-3">
                        <Image
                          width={32}
                          height={32}
                          src="/assets/images/faces/15.jpg"
                          alt=""
                        />
                      </span>
                      <div>
                        <p className="mb-0 fw-semibold fs-14">Json Taylor</p>
                        <p className="mb-0 fs-10 fw-semibold text-muted">
                          CEO OF NORJA
                        </p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="text-muted">
                        - Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Earum autem quaerat distinctio --
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="text-muted">Rating : </span>
                        <span className="text-warning d-block ms-1">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-fill" />
                        </span>
                      </div>
                      <div className="float-end fs-12 fw-semibold text-muted text-end">
                        <span>12 days ago</span>
                        <span className="d-block fw-normal fs-12 text-success">
                          <i>Json Taylor</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card custom-card testimonial-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar avatar-md avatar-rounded me-3">
                        <Image
                          width={32}
                          height={32}
                          src="/assets/images/faces/4.jpg"
                          alt=""
                        />
                      </span>
                      <div>
                        <p className="mb-0 fw-semibold fs-14">Melissa Blue</p>
                        <p className="mb-0 fs-10 fw-semibold text-muted">
                          MANAGER CHO
                        </p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="text-muted">
                        - Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Earum autem quaerat distinctio --
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="text-muted">Rating : </span>
                        <span className="text-warning d-block ms-1">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-fill" />
                        </span>
                      </div>
                      <div className="float-end fs-12 fw-semibold text-muted text-end">
                        <span>7 days ago</span>
                        <span className="d-block fw-normal fs-12 text-success">
                          <i>Melissa Blue</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card custom-card testimonial-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar avatar-md avatar-rounded me-3">
                        <Image
                          width={32}
                          height={32}
                          src="/assets/images/faces/2.jpg"
                          alt=""
                        />
                      </span>
                      <div>
                        <p className="mb-0 fw-semibold fs-14">Kiara Advain</p>
                        <p className="mb-0 fs-10 fw-semibold text-muted">
                          CEO OF EMPIRO
                        </p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="text-muted">
                        - Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Earum autem quaerat distinctio --
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="text-muted">Rating : </span>
                        <span className="text-warning d-block ms-1">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-line" />
                        </span>
                      </div>
                      <div className="float-end fs-12 fw-semibold text-muted text-end">
                        <span>2 days ago</span>
                        <span className="d-block fw-normal fs-12 text-success">
                          <i>Kiara Advain</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card custom-card testimonial-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar avatar-md avatar-rounded me-3">
                        <Image
                          width={32}
                          height={32}
                          src="/assets/images/faces/10.jpg"
                          alt=""
                        />
                      </span>
                      <div>
                        <p className="mb-0 fw-semibold fs-14">Jhonson Smith</p>
                        <p className="mb-0 fs-10 fw-semibold text-muted">
                          CHIEF SECRETARY MBIO
                        </p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="text-muted">
                        - Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Earum autem quaerat distinctio --
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="text-muted">Rating : </span>
                        <span className="text-warning d-block ms-1">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-fill" />
                        </span>
                      </div>
                      <div className="float-end fs-12 fw-semibold text-muted text-end">
                        <span>16 hrs ago</span>
                        <span className="d-block fw-normal fs-12 text-success">
                          <i>Jhonson Smith</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card custom-card testimonial-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar avatar-md avatar-rounded me-3">
                        <Image
                          width={32}
                          height={32}
                          src="/assets/images/faces/12.jpg"
                          alt=""
                        />
                      </span>
                      <div>
                        <p className="mb-0 fw-semibold fs-14">Dwayne Stort</p>
                        <p className="mb-0 fs-10 fw-semibold text-muted">
                          CEO ARMEDILLO
                        </p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="text-muted">
                        - Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Earum autem quaerat distinctio --
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="text-muted">Rating : </span>
                        <span className="text-warning d-block ms-1">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-line" />
                        </span>
                      </div>
                      <div className="float-end fs-12 fw-semibold text-muted text-end">
                        <span>22 days ago</span>
                        <span className="d-block fw-normal fs-12 text-success">
                          <i>Dwayne Stort</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card custom-card testimonial-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar avatar-md avatar-rounded me-3">
                        <Image
                          width={32}
                          height={32}
                          src="/assets/images/faces/3.jpg"
                          alt=""
                        />
                      </span>
                      <div>
                        <p className="mb-0 fw-semibold fs-14">Jasmine Kova</p>
                        <p className="mb-0 fs-10 fw-semibold text-muted">
                          AGGENT AMIO
                        </p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="text-muted">
                        - Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Earum autem quaerat distinctio --
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="text-muted">Rating : </span>
                        <span className="text-warning d-block ms-1">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-fill" />
                        </span>
                      </div>
                      <div className="float-end fs-12 fw-semibold text-muted text-end">
                        <span>26 days ago</span>
                        <span className="d-block fw-normal fs-12 text-success">
                          <i>Jasmine Kova</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card custom-card testimonial-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar avatar-md avatar-rounded me-3">
                        <Image
                          width={32}
                          height={32}
                          src="/assets/images/faces/16.jpg"
                          alt=""
                        />
                      </span>
                      <div>
                        <p className="mb-0 fw-semibold fs-14">Dolph MR</p>
                        <p className="mb-0 fs-10 fw-semibold text-muted">
                          CEO MR BRAND
                        </p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="text-muted">
                        - Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Earum autem quaerat distinctio --
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="text-muted">Rating : </span>
                        <span className="text-warning d-block ms-1">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                        </span>
                      </div>
                      <div className="float-end fs-12 fw-semibold text-muted text-end">
                        <span>1 month ago</span>
                        <span className="d-block fw-normal fs-12 text-success">
                          <i>Dolph MR</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card custom-card testimonial-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar avatar-md avatar-rounded me-3">
                        <Image
                          width={32}
                          height={32}
                          src="/assets/images/faces/5.jpg"
                          alt=""
                        />
                      </span>
                      <div>
                        <p className="mb-0 fw-semibold fs-14">Brenda Simpson</p>
                        <p className="mb-0 fs-10 fw-semibold text-muted">
                          CEO AIBMO
                        </p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="text-muted">
                        - Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Earum autem quaerat distinctio --
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="text-muted">Rating : </span>
                        <span className="text-warning d-block ms-1">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-fill" />
                        </span>
                      </div>
                      <div className="float-end fs-12 fw-semibold text-muted text-end">
                        <span>1 month ago</span>
                        <span className="d-block fw-normal fs-12 text-success">
                          <i>Brenda Simpson</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card custom-card testimonial-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar avatar-md avatar-rounded me-3">
                        <Image
                          width={32}
                          height={32}
                          src="/assets/images/faces/7.jpg"
                          alt=""
                        />
                      </span>
                      <div>
                        <p className="mb-0 fw-semibold fs-14">Julia Sams</p>
                        <p className="mb-0 fs-10 fw-semibold text-muted">
                          CHIEF SECRETARY BHOL
                        </p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="text-muted">
                        - Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Earum autem quaerat distinctio --
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="text-muted">Rating : </span>
                        <span className="text-warning d-block ms-1">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                        </span>
                      </div>
                      <div className="float-end fs-12 fw-semibold text-muted text-end">
                        <span>2 month ago</span>
                        <span className="d-block fw-normal fs-12 text-success">
                          <i>Julia Sams</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination mt-4" />
          </div>
        </div>
      </section>
      {/* End:: Section-6 */}
      {/* Start:: Section-7 */}
      <section className="section  section-bg" id="team">
        <div className="container text-center">
          <p className="fs-12 fw-semibold text-success mb-1">
            <span className="landing-section-heading">OUR TEAM</span>
          </p>
          <h3 className="fw-semibold mb-2">
            Great things in business are done by a team.
          </h3>
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <p className="text-muted fs-15 mb-5 fw-normal">
                Our team consists of highly qulified employees that works hard
                to raise company standards.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card custom-card text-center team-card ">
                <div className="card-body p-5">
                  <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                    <Image
                      width={32}
                      height={32}
                      src="/assets/images/faces/15.jpg"
                      alt=""
                    />
                  </span>
                  <p className="fw-semibold fs-17 mb-0 text-default">
                    Peter Parker
                  </p>
                  <span className="text-muted fs-14 text-primary fw-semibold">
                    Director
                  </span>
                  <p className="text-muted mt-2 fs-13">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="mt-2">
                    <a
                      href="profile.html"
                      className="btn btn-light"
                      target="_blank"
                    >
                      View profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card custom-card text-center team-card ">
                <div className="card-body p-5">
                  <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                    <Image
                      width={32}
                      height={32}
                      src="/assets/images/faces/12.jpg"
                      alt=""
                    />
                  </span>
                  <p className="fw-semibold fs-17 mb-0 text-default">
                    Andrew garfield
                  </p>
                  <span className="text-muted fs-14 text-primary fw-semibold">
                    Manager
                  </span>
                  <p className="text-muted mt-2 fs-13">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="mt-2">
                    <a
                      href="profile.html"
                      className="btn btn-light"
                      target="_blank"
                    >
                      View profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card custom-card text-center team-card ">
                <div className="card-body p-5">
                  <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                    <Image
                      width={32}
                      height={32}
                      src="/assets/images/faces/5.jpg"
                      alt=""
                    />
                  </span>
                  <p className="fw-semibold fs-17 mb-0 text-default">
                    Json Taylor
                  </p>
                  <span className="text-muted fs-14 text-primary fw-semibold">
                    Web Designer
                  </span>
                  <p className="text-muted mt-2 fs-13">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="mt-2">
                    <a
                      href="profile.html"
                      className="btn btn-light"
                      target="_blank"
                    >
                      View profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card custom-card text-center team-card ">
                <div className="card-body p-5">
                  <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                    <Image
                      width={32}
                      height={32}
                      src="/assets/images/faces/1.jpg"
                      alt=""
                    />
                  </span>
                  <p className="fw-semibold fs-17 mb-0 text-default">
                    Elizabeth Rose
                  </p>
                  <span className="text-muted fs-14 text-primary fw-semibold">
                    HR
                  </span>
                  <p className="text-muted mt-2 fs-13">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="mt-2">
                    <a
                      href="profile.html"
                      className="btn btn-light"
                      target="_blank"
                    >
                      View profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button className="btn btn-primary">View All</button>
          </div>
        </div>
      </section>
      {/* End:: Section-7 */}
      {/* Start:: Section-8 */}
      <section className="section  " id="pricing">
        <div className="container text-center">
          <p className="fs-12 fw-semibold text-success mb-1">
            <span className="landing-section-heading">PRICING</span>
          </p>
          <h3 className="fw-semibold mb-2">
            DALOY comes with most affordable pricing range.
          </h3>
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <p className="text-muted fs-15 mb-5 fw-normal">
                Our plans are most affordable and are mainly placed by focussing
                every category in the sector even basic plan helps better.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <ul
              className="nav nav-tabs mb-3 tab-style-6 bg-primary-transparent"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pricing-monthly"
                  data-bs-toggle="tab"
                  data-bs-target="#pricing-monthly-pane"
                  type="button"
                  role="tab"
                  aria-controls="pricing-monthly-pane"
                  aria-selected="true"
                >
                  Monthly
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pricing-yearly"
                  data-bs-toggle="tab"
                  data-bs-target="#pricing-yearly-pane"
                  type="button"
                  role="tab"
                  aria-controls="pricing-yearly-pane"
                  aria-selected="false"
                >
                  Yearly
                </button>
              </li>
            </ul>
          </div>
          <div className="card custom-card overflow-hidden shadow-none">
            <div className="card-body p-0">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane show active p-0"
                  id="pricing-monthly-pane"
                  role="tabpanel"
                  aria-labelledby="pricing-monthly"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 border-end border-inline-end-dashed">
                      <div className="p-4">
                        <h6 className="fw-semibold text-center">BASIC</h6>
                        <div className="py-4 d-flex align-items-center justify-content-center">
                          <div className="pricing-svg1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              data-name="Layer 1"
                              viewBox="0 0 168 168"
                            >
                              <path
                                fill="#845adf"
                                d="M48.877 36.254c3.742 4.464 10.559 4.995 10.847 5.016.048.003.096.005.143.005A2 2 0 0 0 61.84 39.6c.045-.274 1.07-6.786-2.716-11.306-3.742-4.464-10.559-4.995-10.848-5.015a2.017 2.017 0 0 0-2.114 1.669c-.045.274-1.07 6.786 2.715 11.304zm7.18-5.39a9.88 9.88 0 0 1 1.938 6.072 11.383 11.383 0 0 1-6.053-3.252v.001a9.88 9.88 0 0 1-1.938-6.071 11.378 11.378 0 0 1 6.053 3.25zm74.388 24.431c-.278.041-6.858 1.055-10.205 6.168-3.3 5.043-1.996 11.909-1.938 12.199a2 2 0 0 0 1.96 1.613 2.104 2.104 0 0 0 .29-.02c.279-.042 6.859-1.055 10.205-6.169 3.3-5.043 1.996-11.908 1.939-12.198a2.004 2.004 0 0 0-2.251-1.593zm-3.035 11.601a10.55 10.55 0 0 1-5.397 3.854 12.464 12.464 0 0 1 1.575-7.095v-.001a10.549 10.549 0 0 1 5.396-3.855 12.47 12.47 0 0 1-1.574 7.097z"
                              />
                              <path
                                fill="#403161"
                                d="M138.16 29.515c-5.92-2.54-12.61-1.07-17.12.25-3.73 1.09-7.42 2.45-11.03 3.82a26.346 26.346 0 0 0 5.19-7.49 2 2 0 0 0-3.65-1.64c-4.46 9.92-16.63 14.39-19.27 15.26-.69.19-2.33.65-2.4.68a160.941 160.941 0 0 1-34.03 5.64 62.167 62.167 0 0 1-28.93-5.56c-.15-.06-2.81-1.31-3.99-1.93a2.002 2.002 0 0 0-1.85 3.55c.92.48 4.09 1.98 4.13 2 6.21 2.96 8.89 5.82 8.37 13.04a2.05 2.05 0 0 0 2 2.14 1.998 1.998 0 0 0 1.99-1.86 17.056 17.056 0 0 0-1.64-9.49A65.547 65.547 0 0 0 54 50.095v47.33a2.052 2.052 0 0 0-.5.39 2.017 2.017 0 0 0 .17 2.83l.33.29v12.34h-1a2 2 0 1 0 0 4s1 0 1 .01h11v13.99a3.999 3.999 0 0 0 4 4h12a3.999 3.999 0 0 0 4-4v-13.99s11 0 11-.01h1a2 2 0 0 0 0-4h-1v-12.34l.33-.29a2.017 2.017 0 0 0 .17-2.83 2.052 2.052 0 0 0-.5-.39v-53.96a34.048 34.048 0 0 1 12.77 1.16c1.9.56 5.13 1.9 5.55 4.59a2.04 2.04 0 0 0 2.28 1.67 2.003 2.003 0 0 0 1.67-2.29c-.56-3.6-3.53-6.37-8.35-7.81a36.359 36.359 0 0 0-4.83-1.06c1.37-.51 2.73-1.02 4.07-1.54 4.25-1.62 8.64-3.3 13.01-4.58 6.23-1.83 10.81-1.96 14.41-.41 3.99 1.71 8.47 5.05 7.2 11.29a6.907 6.907 0 0 1-4.21 4.86 5.702 5.702 0 0 1-5.49-.58 4.408 4.408 0 0 1-1.18-5.23 2.003 2.003 0 0 0-3.43-2.07c-2.16 3.59-.57 8.53 2.3 10.56a9.485 9.485 0 0 0 5.51 1.77 10.214 10.214 0 0 0 3.76-.73 10.847 10.847 0 0 0 6.66-7.79c1.39-6.82-2.09-12.56-9.54-15.76ZM63 113.275h-5v-8.79l.32.29a2.04 2.04 0 0 0 1.33.5 2.013 2.013 0 0 0 1.27-.45l2.08-1.7Zm10 18h-4v-13.99h4Zm8 0h-4v-13.99h4Zm2-18H67v-11c0-2.76 1.96-5 4.36-5h7.28c2.4 0 4.36 2.24 4.36 5Zm9 0h-5v-10.15l2.08 1.7a2.013 2.013 0 0 0 1.27.45 2.04 2.04 0 0 0 1.33-.5l.32-.29Zm0-14.14-1.71 1.51-5.62-4.59a8.31 8.31 0 0 0-3.74-2.43H69.07a8.31 8.31 0 0 0-3.74 2.43l-5.63 4.59-1.7-1.51v-49.22a168.852 168.852 0 0 0 33.11-5.71c.29-.07.59-.11.89-.17Z"
                              />
                              <path
                                fill="#845adf"
                                d="M146 147.275h-12.199a1.406 1.406 0 0 1 .124-.69.803.803 0 0 1 .468-.35 2 2 0 0 0-.732-3.93 4.834 4.834 0 0 0-3.152 2.198 5.182 5.182 0 0 0-.703 2.772h-1.612a5.182 5.182 0 0 0-.703-2.772 4.834 4.834 0 0 0-3.152-2.199 2.026 2.026 0 0 0-2.341 1.626 1.973 1.973 0 0 0 1.603 2.304.819.819 0 0 1 .474.351 1.406 1.406 0 0 1 .124.69H115.8a1.406 1.406 0 0 1 .124-.69.803.803 0 0 1 .468-.35 2 2 0 0 0-.732-3.93 4.834 4.834 0 0 0-3.152 2.198 5.182 5.182 0 0 0-.703 2.772h-1.612a5.182 5.182 0 0 0-.703-2.772 4.834 4.834 0 0 0-3.152-2.199 2.026 2.026 0 0 0-2.34 1.626 1.973 1.973 0 0 0 1.602 2.304.819.819 0 0 1 .474.351 1.406 1.406 0 0 1 .124.69H97.8a1.406 1.406 0 0 1 .124-.69.803.803 0 0 1 .468-.35 2 2 0 0 0-.732-3.93 4.834 4.834 0 0 0-3.152 2.198 5.182 5.182 0 0 0-.703 2.772h-1.612a5.182 5.182 0 0 0-.703-2.772 4.834 4.834 0 0 0-3.152-2.199 2.026 2.026 0 0 0-2.34 1.626 1.973 1.973 0 0 0 1.602 2.304.819.819 0 0 1 .474.351 1.406 1.406 0 0 1 .124.69h-8.397a1.41 1.41 0 0 1 .123-.69.805.805 0 0 1 .468-.35 2 2 0 0 0-.731-3.93 4.838 4.838 0 0 0-3.154 2.198 5.182 5.182 0 0 0-.702 2.772h-1.612a5.182 5.182 0 0 0-.702-2.772 4.838 4.838 0 0 0-3.154-2.199 2 2 0 1 0-.676 3.942.875.875 0 0 1 .401.319 1.384 1.384 0 0 1 .127.71h-8.388a1.41 1.41 0 0 1 .123-.69.805.805 0 0 1 .468-.35 2 2 0 0 0-.731-3.93 4.838 4.838 0 0 0-3.154 2.198 5.182 5.182 0 0 0-.702 2.772h-1.612a5.182 5.182 0 0 0-.702-2.772 4.838 4.838 0 0 0-3.154-2.199 2 2 0 1 0-.676 3.942.875.875 0 0 1 .401.319 1.384 1.384 0 0 1 .127.71h-8.388a1.41 1.41 0 0 1 .123-.69.805.805 0 0 1 .468-.35 2 2 0 0 0-.731-3.93 4.838 4.838 0 0 0-3.154 2.198 5.182 5.182 0 0 0-.702 2.772h-1.612a5.182 5.182 0 0 0-.702-2.772 4.838 4.838 0 0 0-3.154-2.199 2 2 0 1 0-.676 3.942.875.875 0 0 1 .401.319 1.384 1.384 0 0 1 .127.71H22a2 2 0 0 0-2 2c0 1.105 128 1.105 128 0a2 2 0 0 0-2-2Z"
                              />
                              <circle
                                cx={2}
                                cy="149.275"
                                r={2}
                                fill="#403161"
                              />
                              <path
                                fill="#403161"
                                d="M11 147.275H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zm149 0h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z"
                              />
                              <circle
                                cx={166}
                                cy="149.275"
                                r={2}
                                fill="#403161"
                              />
                              <path
                                fill="#845adf"
                                d="M118.154 155.275h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm-60 0h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm45.846 0H64a2 2 0 0 0 0 4h15.94v2H72a2 2 0 0 0 0 4h25a2 2 0 0 0 0-4h-8.94v-2H104a2 2 0 0 0 0-4z"
                              />
                              <path
                                fill="#403161"
                                d="M150.721 151.275H17.28a2.017 2.017 0 1 1 0-4H150.72a2.017 2.017 0 1 1 0 4Z"
                              />
                              <path
                                fill="#845adf"
                                d="M75 80.275a7.986 7.986 0 0 0-5.93 13.35h11.86A7.986 7.986 0 0 0 75 80.275Zm0 12a4 4 0 1 1 4-4 3.999 3.999 0 0 1-4 4Z"
                              />
                              <path
                                fill="#403161"
                                d="M75.971 29.608a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3zm0-4.5a1.5 1.5 0 1 1-1.5 1.5 1.501 1.501 0 0 1 1.5-1.5zm82.334 43.167a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM31.97 3.608a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm127.362-3.333a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm-148 42.666a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2zm-3 0a1 1 0 1 1 1 1 1.001 1.001 0 0 1-1-1z"
                              />
                              <path
                                fill="#845adf"
                                d="m5.888 16.953 1.487-1.956-.939-.532-.955 2.19H5.45l-.97-2.174-.955.547 1.471 1.909v.032l-2.301-.298v1.064l2.316-.297v.031l-1.486 1.909.891.563 1.018-2.206h.031l.939 2.191.986-.564-1.502-1.877v-.032l2.362.282v-1.064l-2.362.313v-.031zM92.334 4.455l-.856 1.099.513.325.586-1.271h.018l.541 1.262.568-.325-.865-1.081v-.018l1.36.162v-.612l-1.36.18v-.018l.856-1.126-.541-.307-.55 1.261h-.018l-.558-1.252-.55.315.847 1.1v.018L91 3.996v.612l1.334-.171v.018zM165.638 38.988v-1.043l-2.317.307v-.031l1.459-1.918-.921-.522-.936 2.148h-.032l-.951-2.133-.937.537 1.444 1.873v.031l-2.257-.292v1.043l2.272-.291v.031l-1.459 1.872.875.553.998-2.165h.03l.921 2.149.968-.552-1.474-1.842v-.031l2.317.276zM129.667 19.158l1.258-1.654-.795-.451-.807 1.853h-.027l-.82-1.84-.809.464 1.245 1.615v.027l-1.947-.252v.9l1.96-.251v.026l-1.258 1.615.755.477.861-1.867h.026l.794 1.853.835-.476-1.271-1.589v-.026l1.998.238v-.9l-1.998.265v-.027z"
                              />
                            </svg>
                          </div>
                          <div className="text-end ms-5">
                            <p className="fs-25 fw-semibold mb-0">$199</p>
                            <p className="text-muted fs-11 fw-semibold mb-0">
                              per month
                            </p>
                          </div>
                        </div>
                        <ul className="list-unstyled text-center fs-12 px-3 pt-3 mb-0">
                          <li className="mb-3">
                            <span className="text-muted">
                              Storage Capacity
                              <span className="badge bg-light text-default ms-1">
                                1Tb
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">
                              Daily Updates
                              <span className="badge bg-light text-default ms-1">
                                Unlimited
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">Online Support</span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">
                              Visitors Monitoring
                              <span className="badge bg-light text-default ms-1">
                                24/7
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">2 Free Domains</span>
                          </li>
                          <li className="mb-4">
                            <span className="text-muted">
                              Money Back Guarentee
                            </span>
                          </li>
                        </ul>
                        <div className="d-grid">
                          <button className="btn btn-primary-light btn-wave">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 border-end border-inline-end-dashed">
                      <div className="p-4">
                        <h6 className="fw-semibold text-center">ADVANCED</h6>
                        <div className="py-4 d-flex align-items-center justify-content-center">
                          <div className="pricing-svg1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              data-name="Layer 1"
                              viewBox="0 0 168 168"
                            >
                              <path
                                fill="#845adf"
                                d="M84 58.25a9.01 9.01 0 0 0-9 9v4a9 9 0 0 0 18 0v-4a9.01 9.01 0 0 0-9-9Zm5 13a5 5 0 0 1-10 0v-4a5 5 0 0 1 10 0Z"
                              />
                              <circle cx={2} cy="149.75" r={2} fill="#403161" />
                              <path
                                fill="#403161"
                                d="M11 147.75H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zm149 0h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z"
                              />
                              <circle
                                cx={166}
                                cy="149.75"
                                r={2}
                                fill="#403161"
                              />
                              <path
                                fill="#845adf"
                                d="M118.154 155.75h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm-60 0h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm45.846 0H64a2 2 0 0 0 0 4h15.94v2H72a2 2 0 0 0 0 4h25a2 2 0 0 0 0-4h-8.94v-2H104a2 2 0 0 0 0-4zm-44-109a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-10a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3zm48 10a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-10a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3z"
                              />
                              <path
                                fill="#403161"
                                d="M114 82.25a5.008 5.008 0 0 0-4-4.899V46.455a6.932 6.932 0 0 1-4 0V77.25h-6.91a10.063 10.063 0 0 0-2.731-1.986 12.95 12.95 0 0 1-1.815 3.56A6.002 6.002 0 0 1 98 84.25v14h-2a6.994 6.994 0 0 0-12-4.89 6.994 6.994 0 0 0-12 4.89h-2v-14a6.002 6.002 0 0 1 3.456-5.426 12.95 12.95 0 0 1-1.815-3.56 10.063 10.063 0 0 0-2.731 1.986H62V46.455a6.932 6.932 0 0 1-4 0v30.896a5.008 5.008 0 0 0-4 4.899v16h-1a4.005 4.005 0 0 0-4 4v6a4.005 4.005 0 0 0 4 4h19a6.994 6.994 0 0 0 12 4.89 6.994 6.994 0 0 0 12-4.89h19a4.005 4.005 0 0 0 4-4v-6a4.005 4.005 0 0 0-4-4h-1Zm-56 0a1.001 1.001 0 0 1 1-1h7.472a9.906 9.906 0 0 0-.472 3v14h-8Zm14 26H53v-6h19Zm10 4a3 3 0 0 1-6 0v-14a3 3 0 0 1 6 0Zm10 0a3 3 0 0 1-6 0v-14a3 3 0 0 1 6 0Zm17-31a1.001 1.001 0 0 1 1 1v16h-8v-14a9.906 9.906 0 0 0-.472-3Zm6 21 .002 6H96v-6h19Z"
                              />
                              <path
                                fill="#403161"
                                d="M150.721 147.75H148v-5.5a4.005 4.005 0 0 0-4-4h-1v-4a4.005 4.005 0 0 0-4-4h-3v-88.5h10a2 2 0 0 0 0-4h-5v-10a4.005 4.005 0 0 0-4-4H31a4.005 4.005 0 0 0-4 4v10h-5a2 2 0 0 0 0 4h10v88.5h-3a4.005 4.005 0 0 0-4 4v4h-1a4.005 4.005 0 0 0-4 4v5.5h-2.721a2.017 2.017 0 1 0 0 4H150.72a2.017 2.017 0 1 0 0-4ZM31 37.75v-10h106v10h-22.295a6.932 6.932 0 0 1 0 4H124v88.5H44v-88.5h9.295a6.932 6.932 0 0 1 0-4Zm101 4v88.5h-4v-88.5Zm-92 0v88.5h-4v-88.5Zm-11 92.5h110v4H29Zm115 13.5H24v-5.5h120Z"
                              />
                              <path
                                fill="#403161"
                                d="M67 39.75a6.972 6.972 0 0 1-.295 2h34.59a6.932 6.932 0 0 1 0-4h-34.59a6.972 6.972 0 0 1 .295 2zm22.058-21a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3zm0-4.5a1.5 1.5 0 1 1-1.5 1.5 1.501 1.501 0 0 1 1.5-1.5zm36-9a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm-64-6a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm86.359 16.5a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM9.76 43.75a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2zm-3 0a1 1 0 1 1 1 1 1.001 1.001 0 0 1-1-1z"
                              />
                              <path
                                fill="#845adf"
                                d="m34.193 14.913 1.486-1.956-.939-.532-.954 2.19h-.032l-.969-2.174-.956.547 1.472 1.909v.032L31 14.631v1.064l2.316-.297v.031l-1.487 1.909.892.563 1.018-2.206h.031l.938 2.191.987-.564-1.502-1.877v-.032l2.361.282v-1.064l-2.361.313v-.031zM3.896 8.403 3.04 9.502l.513.325.587-1.271h.017l.541 1.262.568-.325-.865-1.081v-.018l1.36.162v-.612l-1.36.18v-.018l.856-1.126-.541-.307-.549 1.261h-.019L3.59 6.682l-.55.315.847 1.1v.018l-1.325-.171v.612l1.334-.171v.018zM159.058 47.963V46.92l-2.317.307v-.031l1.458-1.918-.921-.522-.936 2.148h-.031l-.951-2.133-.937.538 1.443 1.872v.031l-2.257-.292v1.043l2.272-.291v.031l-1.458 1.872.875.553.998-2.165h.03l.921 2.149.967-.552-1.473-1.842v-.031l2.317.276zM158.501 5.836l1.258-1.655-.794-.45-.808 1.853h-.027l-.82-1.84-.809.464 1.245 1.615v.026l-1.946-.251v.9l1.959-.252v.027l-1.258 1.615.755.477.861-1.867h.026l.795 1.853.834-.476-1.271-1.589v-.027l1.998.239v-.9l-1.998.264v-.026z"
                              />
                            </svg>
                          </div>
                          <div className="text-end ms-5">
                            <p className="fs-25 fw-semibold mb-0">$499</p>
                            <p className="text-muted fs-11 fw-semibold mb-0">
                              per month
                            </p>
                          </div>
                        </div>
                        <ul className="list-unstyled text-center fs-12 px-3 pt-3 mb-0">
                          <li className="mb-3">
                            <span className="text-muted">
                              Storage Capacity
                              <span className="badge bg-light text-default ms-1">
                                5Tb
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">
                              Daily Updates
                              <span className="badge bg-light text-default ms-1">
                                Unlimited
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">Online Support</span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">
                              Visitors Monitoring
                              <span className="badge bg-light text-default ms-1">
                                24/7
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">10 Free Domains</span>
                          </li>
                          <li className="mb-4">
                            <span className="text-muted">
                              Money Back Guarentee
                            </span>
                          </li>
                        </ul>
                        <div className="d-grid">
                          <button className="btn btn-primary-light btn-wave">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div className="p-4 pricing-offer overflow-hidden">
                        <span className="pricing-offer-details shadow">
                          <span className="fw-semibold">10%</span>{" "}
                          <span className="fs-10 op-8 ms-1">Off</span>
                        </span>
                        <h6 className="fw-semibold text-center">PREMIUM</h6>
                        <div className="py-4 d-flex align-items-center justify-content-center">
                          <div className="pricing-svg1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              data-name="Layer 1"
                              viewBox="0 0 168 168"
                            >
                              <path
                                fill="#845adf"
                                d="M84 43.87a10 10 0 1 0-10-10 10.011 10.011 0 0 0 10 10Zm0-16a6 6 0 1 1-6 6 6.007 6.007 0 0 1 6-6Z"
                              />
                              <path
                                fill="#403161"
                                d="M39.405 89.93c2.384 2.883 3.825 3.958 5.2 3.94l21.04-1.557a6.076 6.076 0 0 0 2.588-.801l15.81-9.209 15.815 9.209a6.07 6.07 0 0 0 2.589.8l21.024 1.56.118-.005c2.36-.104 4.061-2.476 4.975-3.75.102-.141.182-.257.24-.33a3.781 3.781 0 0 0 1.065-3.601 3.383 3.383 0 0 0-2.613-2.188l-20.75-3.746a2.001 2.001 0 0 1-1.035-.525L98 72.51V54.156c1.612-1.265 6.7-5.02 20.359-13.665a5.704 5.704 0 0 0 1.055-8.758l-.122-.126a5.606 5.606 0 0 0-6.99-.914L96.181 40.745a14.078 14.078 0 0 1-5.965 5.65c1.111 0 2.385 0 3.889.002a1.997 1.997 0 0 0 1.058-.303l19.23-11.991a1.692 1.692 0 0 1 2.136.401 1.722 1.722 0 0 1-.31 2.608C98.303 48.452 94.79 51.607 94.65 51.736A2 2 0 0 0 94 53.21V71.87H74.07V53.211a2 2 0 0 0-.833-1.625c-.172-.123-4.393-3.141-21.475-14.346a1.739 1.739 0 0 1-.293-2.6 1.608 1.608 0 0 1 1.985-.288l18.814 11.741a1.996 1.996 0 0 0 1.044.304c1.825.013 3.291.022 4.531.027a14.073 14.073 0 0 1-5.678-5.11l-16.62-10.371a5.596 5.596 0 0 0-6.963.93 5.71 5.71 0 0 0 .986 8.71c13.01 8.535 18.59 12.344 20.502 13.67v18.279l-7.449 7.195a1.985 1.985 0 0 1-1.033.524l-20.751 3.747a3.572 3.572 0 0 0-2.712 2.149c-.516 1.638.703 3.092 1.162 3.64Zm22.893-5.742a5.978 5.978 0 0 0 3.101-1.584l6.973-6.735h23.347l6.973 6.735a5.99 5.99 0 0 0 3.103 1.585l19.57 3.525-.052.072c-1.091 1.523-1.643 1.977-1.87 2.074l-20.698-1.536a2.05 2.05 0 0 1-.875-.269l-16.054-9.346a3.759 3.759 0 0 0-1.746-.428 4.033 4.033 0 0 0-1.876.472l-15.973 9.302a2.054 2.054 0 0 1-.873.27l-20.506 1.52a13.116 13.116 0 0 1-2.081-2.137Z"
                              />
                              <path
                                fill="#845adf"
                                d="M104.78 116.06A160.279 160.279 0 0 0 84 114.87a160.279 160.279 0 0 0-20.78 1.19c-7.45 1.027-10.22 2.33-10.22 4.81s2.77 3.782 10.22 4.809a160.279 160.279 0 0 0 20.78 1.19 160.279 160.279 0 0 0 20.78-1.19c7.45-1.027 10.22-2.331 10.22-4.81s-2.77-3.782-10.22-4.81ZM84 122.87c-12.637 0-20.997-1.051-24.905-2 3.908-.95 12.268-2 24.905-2s20.997 1.05 24.905 2c-3.908.949-12.268 2-24.905 2Z"
                              />
                              <circle
                                cx={2}
                                cy="149.869"
                                r={2}
                                fill="#403161"
                              />
                              <path
                                fill="#403161"
                                d="M11 147.87H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zm149 0h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z"
                              />
                              <circle
                                cx={166}
                                cy="149.869"
                                r={2}
                                fill="#403161"
                              />
                              <path
                                fill="#845adf"
                                d="M118.154 155.87h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm-60 0h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm45.846 0H64a2 2 0 0 0 0 4h15.94v2H72a2 2 0 0 0 0 4h25a2 2 0 1 0 0-4h-8.94v-2H104a2 2 0 1 0 0-4z"
                              />
                              <path
                                fill="#403161"
                                d="M150.721 147.87H86v-14.008c14.696-.103 36.55-1.35 50.005-4.967v10.974H136a2 2 0 0 0 0 4h4a2 2 0 0 0 .005-4v-12.213c4.92-1.772 7.995-4.001 7.995-6.787 0-10.283-41.864-13-64-13s-64 2.717-64 13c0 2.787 3.078 5.017 8 6.788v12.212a2 2 0 0 0 0 4h4a2 2 0 0 0 0-4v-10.972c13.455 3.615 35.306 4.862 50 4.965v14.007H17.279a2.017 2.017 0 1 0 0 4H150.72a2.017 2.017 0 1 0 0-4zM40.725 126.715C26.984 124.303 24.037 121.49 24 120.87c.037-.62 2.984-3.433 16.725-5.846C52.3 112.99 67.668 111.869 84 111.869s31.7 1.12 43.275 3.154c13.74 2.413 16.687 5.225 16.725 5.846-.038.621-2.985 3.434-16.725 5.847C115.7 128.75 100.332 129.87 84 129.87s-31.7-1.12-43.275-3.153zm64.58-113.013a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3zm0-4.5a1.5 1.5 0 1 1-1.5 1.5 1.501 1.501 0 0 1 1.5-1.5zm22.666 19.166a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM9 5.203a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm153.667 8.75a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM35.333 24.869a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2zm-3 0a1 1 0 1 1 1 1 1.001 1.001 0 0 1-1-1z"
                              />
                              <path
                                fill="#845adf"
                                d="m8.498 50.126 1.487-1.955-.939-.532-.954 2.19H8.06l-.97-2.175-.955.548 1.471 1.909v.031l-2.301-.297v1.064l2.316-.297v.031l-1.486 1.908.892.564 1.017-2.206h.031l.939 2.19.986-.563-1.502-1.878v-.031l2.362.282v-1.064l-2.362.313v-.032zM69.829 3.861l-.857 1.099.514.324.586-1.27h.018l.54 1.261.568-.324-.865-1.082v-.018l1.361.163v-.613l-1.361.18v-.018l.856-1.126-.54-.306-.55 1.261h-.018l-.558-1.253-.551.316.848 1.099v.018l-1.325-.171v.613l1.334-.171v.018zM142.055 7.333V6.289l-2.317.307v-.031l1.458-1.918-.921-.521-.936 2.148h-.031l-.951-2.133-.937.537 1.443 1.872v.031l-2.257-.292v1.044l2.272-.291v.03l-1.458 1.872.875.553.998-2.164h.03l.921 2.148.967-.552-1.473-1.842v-.03l2.317.276zM151.396 50.164l1.258-1.655-.795-.45-.807 1.853h-.027l-.82-1.84-.809.464 1.245 1.615v.026l-1.946-.251v.9l1.959-.251v.026l-1.258 1.615.755.477.861-1.867h.026l.794 1.853.835-.476-1.271-1.589v-.026l1.998.238v-.9l-1.998.264v-.026z"
                              />
                            </svg>
                          </div>
                          <div className="text-end ms-5">
                            <p className="fs-25 fw-semibold mb-0 text-primary">
                              $1,299
                            </p>
                            <p className="text-muted fs-11 fw-semibold mb-0">
                              per month
                            </p>
                          </div>
                        </div>
                        <ul className="list-unstyled text-center fs-12 px-3 pt-3 mb-0">
                          <li className="mb-3">
                            <span className="text-muted">
                              Storage Capacity
                              <span className="badge bg-light text-default ms-1">
                                10Tb
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">
                              Daily Updates
                              <span className="badge bg-light text-default ms-1">
                                Unlimited
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">Online Support</span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">
                              Visitors Monitoring
                              <span className="badge bg-light text-default ms-1">
                                24/7
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">30 Free Domains</span>
                          </li>
                          <li className="mb-4">
                            <span className="text-muted">
                              Money Back Guarentee
                            </span>
                          </li>
                        </ul>
                        <div className="d-grid">
                          <button className="btn btn-primary btn-wave shadow">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane p-0"
                  id="pricing-yearly-pane"
                  role="tabpanel"
                  aria-labelledby="pricing-yearly"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 border-end border-inline-end-dashed">
                      <div className="p-4">
                        <h6 className="fw-semibold text-center">BASIC</h6>
                        <div className="py-4 d-flex align-items-center justify-content-center">
                          <div className="pricing-svg1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              data-name="Layer 1"
                              viewBox="0 0 168 168"
                            >
                              <path
                                fill="#845adf"
                                d="M48.877 36.254c3.742 4.464 10.559 4.995 10.847 5.016.048.003.096.005.143.005A2 2 0 0 0 61.84 39.6c.045-.274 1.07-6.786-2.716-11.306-3.742-4.464-10.559-4.995-10.848-5.015a2.017 2.017 0 0 0-2.114 1.669c-.045.274-1.07 6.786 2.715 11.304zm7.18-5.39a9.88 9.88 0 0 1 1.938 6.072 11.383 11.383 0 0 1-6.053-3.252v.001a9.88 9.88 0 0 1-1.938-6.071 11.378 11.378 0 0 1 6.053 3.25zm74.388 24.431c-.278.041-6.858 1.055-10.205 6.168-3.3 5.043-1.996 11.909-1.938 12.199a2 2 0 0 0 1.96 1.613 2.104 2.104 0 0 0 .29-.02c.279-.042 6.859-1.055 10.205-6.169 3.3-5.043 1.996-11.908 1.939-12.198a2.004 2.004 0 0 0-2.251-1.593zm-3.035 11.601a10.55 10.55 0 0 1-5.397 3.854 12.464 12.464 0 0 1 1.575-7.095v-.001a10.549 10.549 0 0 1 5.396-3.855 12.47 12.47 0 0 1-1.574 7.097z"
                              />
                              <path
                                fill="#403161"
                                d="M138.16 29.515c-5.92-2.54-12.61-1.07-17.12.25-3.73 1.09-7.42 2.45-11.03 3.82a26.346 26.346 0 0 0 5.19-7.49 2 2 0 0 0-3.65-1.64c-4.46 9.92-16.63 14.39-19.27 15.26-.69.19-2.33.65-2.4.68a160.941 160.941 0 0 1-34.03 5.64 62.167 62.167 0 0 1-28.93-5.56c-.15-.06-2.81-1.31-3.99-1.93a2.002 2.002 0 0 0-1.85 3.55c.92.48 4.09 1.98 4.13 2 6.21 2.96 8.89 5.82 8.37 13.04a2.05 2.05 0 0 0 2 2.14 1.998 1.998 0 0 0 1.99-1.86 17.056 17.056 0 0 0-1.64-9.49A65.547 65.547 0 0 0 54 50.095v47.33a2.052 2.052 0 0 0-.5.39 2.017 2.017 0 0 0 .17 2.83l.33.29v12.34h-1a2 2 0 1 0 0 4s1 0 1 .01h11v13.99a3.999 3.999 0 0 0 4 4h12a3.999 3.999 0 0 0 4-4v-13.99s11 0 11-.01h1a2 2 0 0 0 0-4h-1v-12.34l.33-.29a2.017 2.017 0 0 0 .17-2.83 2.052 2.052 0 0 0-.5-.39v-53.96a34.048 34.048 0 0 1 12.77 1.16c1.9.56 5.13 1.9 5.55 4.59a2.04 2.04 0 0 0 2.28 1.67 2.003 2.003 0 0 0 1.67-2.29c-.56-3.6-3.53-6.37-8.35-7.81a36.359 36.359 0 0 0-4.83-1.06c1.37-.51 2.73-1.02 4.07-1.54 4.25-1.62 8.64-3.3 13.01-4.58 6.23-1.83 10.81-1.96 14.41-.41 3.99 1.71 8.47 5.05 7.2 11.29a6.907 6.907 0 0 1-4.21 4.86 5.702 5.702 0 0 1-5.49-.58 4.408 4.408 0 0 1-1.18-5.23 2.003 2.003 0 0 0-3.43-2.07c-2.16 3.59-.57 8.53 2.3 10.56a9.485 9.485 0 0 0 5.51 1.77 10.214 10.214 0 0 0 3.76-.73 10.847 10.847 0 0 0 6.66-7.79c1.39-6.82-2.09-12.56-9.54-15.76ZM63 113.275h-5v-8.79l.32.29a2.04 2.04 0 0 0 1.33.5 2.013 2.013 0 0 0 1.27-.45l2.08-1.7Zm10 18h-4v-13.99h4Zm8 0h-4v-13.99h4Zm2-18H67v-11c0-2.76 1.96-5 4.36-5h7.28c2.4 0 4.36 2.24 4.36 5Zm9 0h-5v-10.15l2.08 1.7a2.013 2.013 0 0 0 1.27.45 2.04 2.04 0 0 0 1.33-.5l.32-.29Zm0-14.14-1.71 1.51-5.62-4.59a8.31 8.31 0 0 0-3.74-2.43H69.07a8.31 8.31 0 0 0-3.74 2.43l-5.63 4.59-1.7-1.51v-49.22a168.852 168.852 0 0 0 33.11-5.71c.29-.07.59-.11.89-.17Z"
                              />
                              <path
                                fill="#845adf"
                                d="M146 147.275h-12.199a1.406 1.406 0 0 1 .124-.69.803.803 0 0 1 .468-.35 2 2 0 0 0-.732-3.93 4.834 4.834 0 0 0-3.152 2.198 5.182 5.182 0 0 0-.703 2.772h-1.612a5.182 5.182 0 0 0-.703-2.772 4.834 4.834 0 0 0-3.152-2.199 2.026 2.026 0 0 0-2.341 1.626 1.973 1.973 0 0 0 1.603 2.304.819.819 0 0 1 .474.351 1.406 1.406 0 0 1 .124.69H115.8a1.406 1.406 0 0 1 .124-.69.803.803 0 0 1 .468-.35 2 2 0 0 0-.732-3.93 4.834 4.834 0 0 0-3.152 2.198 5.182 5.182 0 0 0-.703 2.772h-1.612a5.182 5.182 0 0 0-.703-2.772 4.834 4.834 0 0 0-3.152-2.199 2.026 2.026 0 0 0-2.34 1.626 1.973 1.973 0 0 0 1.602 2.304.819.819 0 0 1 .474.351 1.406 1.406 0 0 1 .124.69H97.8a1.406 1.406 0 0 1 .124-.69.803.803 0 0 1 .468-.35 2 2 0 0 0-.732-3.93 4.834 4.834 0 0 0-3.152 2.198 5.182 5.182 0 0 0-.703 2.772h-1.612a5.182 5.182 0 0 0-.703-2.772 4.834 4.834 0 0 0-3.152-2.199 2.026 2.026 0 0 0-2.34 1.626 1.973 1.973 0 0 0 1.602 2.304.819.819 0 0 1 .474.351 1.406 1.406 0 0 1 .124.69h-8.397a1.41 1.41 0 0 1 .123-.69.805.805 0 0 1 .468-.35 2 2 0 0 0-.731-3.93 4.838 4.838 0 0 0-3.154 2.198 5.182 5.182 0 0 0-.702 2.772h-1.612a5.182 5.182 0 0 0-.702-2.772 4.838 4.838 0 0 0-3.154-2.199 2 2 0 1 0-.676 3.942.875.875 0 0 1 .401.319 1.384 1.384 0 0 1 .127.71h-8.388a1.41 1.41 0 0 1 .123-.69.805.805 0 0 1 .468-.35 2 2 0 0 0-.731-3.93 4.838 4.838 0 0 0-3.154 2.198 5.182 5.182 0 0 0-.702 2.772h-1.612a5.182 5.182 0 0 0-.702-2.772 4.838 4.838 0 0 0-3.154-2.199 2 2 0 1 0-.676 3.942.875.875 0 0 1 .401.319 1.384 1.384 0 0 1 .127.71h-8.388a1.41 1.41 0 0 1 .123-.69.805.805 0 0 1 .468-.35 2 2 0 0 0-.731-3.93 4.838 4.838 0 0 0-3.154 2.198 5.182 5.182 0 0 0-.702 2.772h-1.612a5.182 5.182 0 0 0-.702-2.772 4.838 4.838 0 0 0-3.154-2.199 2 2 0 1 0-.676 3.942.875.875 0 0 1 .401.319 1.384 1.384 0 0 1 .127.71H22a2 2 0 0 0-2 2c0 1.105 128 1.105 128 0a2 2 0 0 0-2-2Z"
                              />
                              <circle
                                cx={2}
                                cy="149.275"
                                r={2}
                                fill="#403161"
                              />
                              <path
                                fill="#403161"
                                d="M11 147.275H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zm149 0h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z"
                              />
                              <circle
                                cx={166}
                                cy="149.275"
                                r={2}
                                fill="#403161"
                              />
                              <path
                                fill="#845adf"
                                d="M118.154 155.275h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm-60 0h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm45.846 0H64a2 2 0 0 0 0 4h15.94v2H72a2 2 0 0 0 0 4h25a2 2 0 0 0 0-4h-8.94v-2H104a2 2 0 0 0 0-4z"
                              />
                              <path
                                fill="#403161"
                                d="M150.721 151.275H17.28a2.017 2.017 0 1 1 0-4H150.72a2.017 2.017 0 1 1 0 4Z"
                              />
                              <path
                                fill="#845adf"
                                d="M75 80.275a7.986 7.986 0 0 0-5.93 13.35h11.86A7.986 7.986 0 0 0 75 80.275Zm0 12a4 4 0 1 1 4-4 3.999 3.999 0 0 1-4 4Z"
                              />
                              <path
                                fill="#403161"
                                d="M75.971 29.608a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3zm0-4.5a1.5 1.5 0 1 1-1.5 1.5 1.501 1.501 0 0 1 1.5-1.5zm82.334 43.167a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM31.97 3.608a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm127.362-3.333a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm-148 42.666a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2zm-3 0a1 1 0 1 1 1 1 1.001 1.001 0 0 1-1-1z"
                              />
                              <path
                                fill="#845adf"
                                d="m5.888 16.953 1.487-1.956-.939-.532-.955 2.19H5.45l-.97-2.174-.955.547 1.471 1.909v.032l-2.301-.298v1.064l2.316-.297v.031l-1.486 1.909.891.563 1.018-2.206h.031l.939 2.191.986-.564-1.502-1.877v-.032l2.362.282v-1.064l-2.362.313v-.031zM92.334 4.455l-.856 1.099.513.325.586-1.271h.018l.541 1.262.568-.325-.865-1.081v-.018l1.36.162v-.612l-1.36.18v-.018l.856-1.126-.541-.307-.55 1.261h-.018l-.558-1.252-.55.315.847 1.1v.018L91 3.996v.612l1.334-.171v.018zM165.638 38.988v-1.043l-2.317.307v-.031l1.459-1.918-.921-.522-.936 2.148h-.032l-.951-2.133-.937.537 1.444 1.873v.031l-2.257-.292v1.043l2.272-.291v.031l-1.459 1.872.875.553.998-2.165h.03l.921 2.149.968-.552-1.474-1.842v-.031l2.317.276zM129.667 19.158l1.258-1.654-.795-.451-.807 1.853h-.027l-.82-1.84-.809.464 1.245 1.615v.027l-1.947-.252v.9l1.96-.251v.026l-1.258 1.615.755.477.861-1.867h.026l.794 1.853.835-.476-1.271-1.589v-.026l1.998.238v-.9l-1.998.265v-.027z"
                              />
                            </svg>
                          </div>
                          <div className="text-end ms-5">
                            <p className="fs-25 fw-semibold mb-0">$1,499</p>
                            <p className="text-muted fs-11 fw-semibold mb-0">
                              per year
                            </p>
                          </div>
                        </div>
                        <ul className="list-unstyled text-center fs-12 px-3 pt-3 mb-0">
                          <li className="mb-3">
                            <span className="text-muted">
                              Storage Capacity
                              <span className="badge bg-light text-default ms-1">
                                1Tb
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">
                              Daily Updates
                              <span className="badge bg-light text-default ms-1">
                                Unlimited
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">Online Support</span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">
                              Visitors Monitoring
                              <span className="badge bg-light text-default ms-1">
                                24/7
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">2 Free Domains</span>
                          </li>
                          <li className="mb-4">
                            <span className="text-muted">
                              Money Back Guarentee
                            </span>
                          </li>
                        </ul>
                        <div className="d-grid">
                          <button className="btn btn-primary-light btn-wave">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 border-end border-inline-end-dashed">
                      <div className="p-4">
                        <h6 className="fw-semibold text-center">ADVANCED</h6>
                        <div className="py-4 d-flex align-items-center justify-content-center">
                          <div className="pricing-svg1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              data-name="Layer 1"
                              viewBox="0 0 168 168"
                            >
                              <path
                                fill="#845adf"
                                d="M84 58.25a9.01 9.01 0 0 0-9 9v4a9 9 0 0 0 18 0v-4a9.01 9.01 0 0 0-9-9Zm5 13a5 5 0 0 1-10 0v-4a5 5 0 0 1 10 0Z"
                              />
                              <circle cx={2} cy="149.75" r={2} fill="#403161" />
                              <path
                                fill="#403161"
                                d="M11 147.75H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zm149 0h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z"
                              />
                              <circle
                                cx={166}
                                cy="149.75"
                                r={2}
                                fill="#403161"
                              />
                              <path
                                fill="#845adf"
                                d="M118.154 155.75h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm-60 0h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm45.846 0H64a2 2 0 0 0 0 4h15.94v2H72a2 2 0 0 0 0 4h25a2 2 0 0 0 0-4h-8.94v-2H104a2 2 0 0 0 0-4zm-44-109a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-10a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3zm48 10a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-10a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3z"
                              />
                              <path
                                fill="#403161"
                                d="M114 82.25a5.008 5.008 0 0 0-4-4.899V46.455a6.932 6.932 0 0 1-4 0V77.25h-6.91a10.063 10.063 0 0 0-2.731-1.986 12.95 12.95 0 0 1-1.815 3.56A6.002 6.002 0 0 1 98 84.25v14h-2a6.994 6.994 0 0 0-12-4.89 6.994 6.994 0 0 0-12 4.89h-2v-14a6.002 6.002 0 0 1 3.456-5.426 12.95 12.95 0 0 1-1.815-3.56 10.063 10.063 0 0 0-2.731 1.986H62V46.455a6.932 6.932 0 0 1-4 0v30.896a5.008 5.008 0 0 0-4 4.899v16h-1a4.005 4.005 0 0 0-4 4v6a4.005 4.005 0 0 0 4 4h19a6.994 6.994 0 0 0 12 4.89 6.994 6.994 0 0 0 12-4.89h19a4.005 4.005 0 0 0 4-4v-6a4.005 4.005 0 0 0-4-4h-1Zm-56 0a1.001 1.001 0 0 1 1-1h7.472a9.906 9.906 0 0 0-.472 3v14h-8Zm14 26H53v-6h19Zm10 4a3 3 0 0 1-6 0v-14a3 3 0 0 1 6 0Zm10 0a3 3 0 0 1-6 0v-14a3 3 0 0 1 6 0Zm17-31a1.001 1.001 0 0 1 1 1v16h-8v-14a9.906 9.906 0 0 0-.472-3Zm6 21 .002 6H96v-6h19Z"
                              />
                              <path
                                fill="#403161"
                                d="M150.721 147.75H148v-5.5a4.005 4.005 0 0 0-4-4h-1v-4a4.005 4.005 0 0 0-4-4h-3v-88.5h10a2 2 0 0 0 0-4h-5v-10a4.005 4.005 0 0 0-4-4H31a4.005 4.005 0 0 0-4 4v10h-5a2 2 0 0 0 0 4h10v88.5h-3a4.005 4.005 0 0 0-4 4v4h-1a4.005 4.005 0 0 0-4 4v5.5h-2.721a2.017 2.017 0 1 0 0 4H150.72a2.017 2.017 0 1 0 0-4ZM31 37.75v-10h106v10h-22.295a6.932 6.932 0 0 1 0 4H124v88.5H44v-88.5h9.295a6.932 6.932 0 0 1 0-4Zm101 4v88.5h-4v-88.5Zm-92 0v88.5h-4v-88.5Zm-11 92.5h110v4H29Zm115 13.5H24v-5.5h120Z"
                              />
                              <path
                                fill="#403161"
                                d="M67 39.75a6.972 6.972 0 0 1-.295 2h34.59a6.932 6.932 0 0 1 0-4h-34.59a6.972 6.972 0 0 1 .295 2zm22.058-21a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3zm0-4.5a1.5 1.5 0 1 1-1.5 1.5 1.501 1.501 0 0 1 1.5-1.5zm36-9a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm-64-6a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm86.359 16.5a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM9.76 43.75a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2zm-3 0a1 1 0 1 1 1 1 1.001 1.001 0 0 1-1-1z"
                              />
                              <path
                                fill="#845adf"
                                d="m34.193 14.913 1.486-1.956-.939-.532-.954 2.19h-.032l-.969-2.174-.956.547 1.472 1.909v.032L31 14.631v1.064l2.316-.297v.031l-1.487 1.909.892.563 1.018-2.206h.031l.938 2.191.987-.564-1.502-1.877v-.032l2.361.282v-1.064l-2.361.313v-.031zM3.896 8.403 3.04 9.502l.513.325.587-1.271h.017l.541 1.262.568-.325-.865-1.081v-.018l1.36.162v-.612l-1.36.18v-.018l.856-1.126-.541-.307-.549 1.261h-.019L3.59 6.682l-.55.315.847 1.1v.018l-1.325-.171v.612l1.334-.171v.018zM159.058 47.963V46.92l-2.317.307v-.031l1.458-1.918-.921-.522-.936 2.148h-.031l-.951-2.133-.937.538 1.443 1.872v.031l-2.257-.292v1.043l2.272-.291v.031l-1.458 1.872.875.553.998-2.165h.03l.921 2.149.967-.552-1.473-1.842v-.031l2.317.276zM158.501 5.836l1.258-1.655-.794-.45-.808 1.853h-.027l-.82-1.84-.809.464 1.245 1.615v.026l-1.946-.251v.9l1.959-.252v.027l-1.258 1.615.755.477.861-1.867h.026l.795 1.853.834-.476-1.271-1.589v-.027l1.998.239v-.9l-1.998.264v-.026z"
                              />
                            </svg>
                          </div>
                          <div className="text-end ms-5">
                            <p className="fs-25 fw-semibold mb-0">$5,999</p>
                            <p className="text-muted fs-11 fw-semibold mb-0">
                              per year
                            </p>
                          </div>
                        </div>
                        <ul className="list-unstyled text-center fs-12 px-3 pt-3 mb-0">
                          <li className="mb-3">
                            <span className="text-muted">
                              Storage Capacity
                              <span className="badge bg-light text-default ms-1">
                                5Tb
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">
                              Daily Updates
                              <span className="badge bg-light text-default ms-1">
                                Unlimited
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">Online Support</span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">
                              Visitors Monitoring
                              <span className="badge bg-light text-default ms-1">
                                24/7
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">10 Free Domains</span>
                          </li>
                          <li className="mb-4">
                            <span className="text-muted">
                              Money Back Guarentee
                            </span>
                          </li>
                        </ul>
                        <div className="d-grid">
                          <button className="btn btn-primary-light btn-wave">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div className="p-4 pricing-offer overflow-hidden">
                        <span className="pricing-offer-details shadow">
                          <span className="fw-semibold">10%</span>{" "}
                          <span className="fs-10 op-8 ms-1">Off</span>
                        </span>
                        <h6 className="fw-semibold text-center">PREMIUM</h6>
                        <div className="py-4 d-flex align-items-center justify-content-center">
                          <div className="pricing-svg1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              data-name="Layer 1"
                              viewBox="0 0 168 168"
                            >
                              <path
                                fill="#845adf"
                                d="M84 43.87a10 10 0 1 0-10-10 10.011 10.011 0 0 0 10 10Zm0-16a6 6 0 1 1-6 6 6.007 6.007 0 0 1 6-6Z"
                              />
                              <path
                                fill="#403161"
                                d="M39.405 89.93c2.384 2.883 3.825 3.958 5.2 3.94l21.04-1.557a6.076 6.076 0 0 0 2.588-.801l15.81-9.209 15.815 9.209a6.07 6.07 0 0 0 2.589.8l21.024 1.56.118-.005c2.36-.104 4.061-2.476 4.975-3.75.102-.141.182-.257.24-.33a3.781 3.781 0 0 0 1.065-3.601 3.383 3.383 0 0 0-2.613-2.188l-20.75-3.746a2.001 2.001 0 0 1-1.035-.525L98 72.51V54.156c1.612-1.265 6.7-5.02 20.359-13.665a5.704 5.704 0 0 0 1.055-8.758l-.122-.126a5.606 5.606 0 0 0-6.99-.914L96.181 40.745a14.078 14.078 0 0 1-5.965 5.65c1.111 0 2.385 0 3.889.002a1.997 1.997 0 0 0 1.058-.303l19.23-11.991a1.692 1.692 0 0 1 2.136.401 1.722 1.722 0 0 1-.31 2.608C98.303 48.452 94.79 51.607 94.65 51.736A2 2 0 0 0 94 53.21V71.87H74.07V53.211a2 2 0 0 0-.833-1.625c-.172-.123-4.393-3.141-21.475-14.346a1.739 1.739 0 0 1-.293-2.6 1.608 1.608 0 0 1 1.985-.288l18.814 11.741a1.996 1.996 0 0 0 1.044.304c1.825.013 3.291.022 4.531.027a14.073 14.073 0 0 1-5.678-5.11l-16.62-10.371a5.596 5.596 0 0 0-6.963.93 5.71 5.71 0 0 0 .986 8.71c13.01 8.535 18.59 12.344 20.502 13.67v18.279l-7.449 7.195a1.985 1.985 0 0 1-1.033.524l-20.751 3.747a3.572 3.572 0 0 0-2.712 2.149c-.516 1.638.703 3.092 1.162 3.64Zm22.893-5.742a5.978 5.978 0 0 0 3.101-1.584l6.973-6.735h23.347l6.973 6.735a5.99 5.99 0 0 0 3.103 1.585l19.57 3.525-.052.072c-1.091 1.523-1.643 1.977-1.87 2.074l-20.698-1.536a2.05 2.05 0 0 1-.875-.269l-16.054-9.346a3.759 3.759 0 0 0-1.746-.428 4.033 4.033 0 0 0-1.876.472l-15.973 9.302a2.054 2.054 0 0 1-.873.27l-20.506 1.52a13.116 13.116 0 0 1-2.081-2.137Z"
                              />
                              <path
                                fill="#845adf"
                                d="M104.78 116.06A160.279 160.279 0 0 0 84 114.87a160.279 160.279 0 0 0-20.78 1.19c-7.45 1.027-10.22 2.33-10.22 4.81s2.77 3.782 10.22 4.809a160.279 160.279 0 0 0 20.78 1.19 160.279 160.279 0 0 0 20.78-1.19c7.45-1.027 10.22-2.331 10.22-4.81s-2.77-3.782-10.22-4.81ZM84 122.87c-12.637 0-20.997-1.051-24.905-2 3.908-.95 12.268-2 24.905-2s20.997 1.05 24.905 2c-3.908.949-12.268 2-24.905 2Z"
                              />
                              <circle
                                cx={2}
                                cy="149.869"
                                r={2}
                                fill="#403161"
                              />
                              <path
                                fill="#403161"
                                d="M11 147.87H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zm149 0h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z"
                              />
                              <circle
                                cx={166}
                                cy="149.869"
                                r={2}
                                fill="#403161"
                              />
                              <path
                                fill="#845adf"
                                d="M118.154 155.87h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm-60 0h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm45.846 0H64a2 2 0 0 0 0 4h15.94v2H72a2 2 0 0 0 0 4h25a2 2 0 1 0 0-4h-8.94v-2H104a2 2 0 1 0 0-4z"
                              />
                              <path
                                fill="#403161"
                                d="M150.721 147.87H86v-14.008c14.696-.103 36.55-1.35 50.005-4.967v10.974H136a2 2 0 0 0 0 4h4a2 2 0 0 0 .005-4v-12.213c4.92-1.772 7.995-4.001 7.995-6.787 0-10.283-41.864-13-64-13s-64 2.717-64 13c0 2.787 3.078 5.017 8 6.788v12.212a2 2 0 0 0 0 4h4a2 2 0 0 0 0-4v-10.972c13.455 3.615 35.306 4.862 50 4.965v14.007H17.279a2.017 2.017 0 1 0 0 4H150.72a2.017 2.017 0 1 0 0-4zM40.725 126.715C26.984 124.303 24.037 121.49 24 120.87c.037-.62 2.984-3.433 16.725-5.846C52.3 112.99 67.668 111.869 84 111.869s31.7 1.12 43.275 3.154c13.74 2.413 16.687 5.225 16.725 5.846-.038.621-2.985 3.434-16.725 5.847C115.7 128.75 100.332 129.87 84 129.87s-31.7-1.12-43.275-3.153zm64.58-113.013a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3zm0-4.5a1.5 1.5 0 1 1-1.5 1.5 1.501 1.501 0 0 1 1.5-1.5zm22.666 19.166a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM9 5.203a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm153.667 8.75a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM35.333 24.869a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2zm-3 0a1 1 0 1 1 1 1 1.001 1.001 0 0 1-1-1z"
                              />
                              <path
                                fill="#845adf"
                                d="m8.498 50.126 1.487-1.955-.939-.532-.954 2.19H8.06l-.97-2.175-.955.548 1.471 1.909v.031l-2.301-.297v1.064l2.316-.297v.031l-1.486 1.908.892.564 1.017-2.206h.031l.939 2.19.986-.563-1.502-1.878v-.031l2.362.282v-1.064l-2.362.313v-.032zM69.829 3.861l-.857 1.099.514.324.586-1.27h.018l.54 1.261.568-.324-.865-1.082v-.018l1.361.163v-.613l-1.361.18v-.018l.856-1.126-.54-.306-.55 1.261h-.018l-.558-1.253-.551.316.848 1.099v.018l-1.325-.171v.613l1.334-.171v.018zM142.055 7.333V6.289l-2.317.307v-.031l1.458-1.918-.921-.521-.936 2.148h-.031l-.951-2.133-.937.537 1.443 1.872v.031l-2.257-.292v1.044l2.272-.291v.03l-1.458 1.872.875.553.998-2.164h.03l.921 2.148.967-.552-1.473-1.842v-.03l2.317.276zM151.396 50.164l1.258-1.655-.795-.45-.807 1.853h-.027l-.82-1.84-.809.464 1.245 1.615v.026l-1.946-.251v.9l1.959-.251v.026l-1.258 1.615.755.477.861-1.867h.026l.794 1.853.835-.476-1.271-1.589v-.026l1.998.238v-.9l-1.998.264v-.026z"
                              />
                            </svg>
                          </div>
                          <div className="text-end ms-5">
                            <p className="fs-25 fw-semibold mb-0 text-primary">
                              $11,499
                            </p>
                            <p className="text-muted fs-11 fw-semibold mb-0">
                              per year
                            </p>
                          </div>
                        </div>
                        <ul className="list-unstyled text-center fs-12 px-3 pt-3 mb-0">
                          <li className="mb-3">
                            <span className="text-muted">
                              Storage Capacity
                              <span className="badge bg-light text-default ms-1">
                                10Tb
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">
                              Daily Updates
                              <span className="badge bg-light text-default ms-1">
                                Unlimited
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">Online Support</span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">
                              Visitors Monitoring
                              <span className="badge bg-light text-default ms-1">
                                24/7
                              </span>
                            </span>
                          </li>
                          <li className="mb-3">
                            <span className="text-muted">30 Free Domains</span>
                          </li>
                          <li className="mb-4">
                            <span className="text-muted">
                              Money Back Guarentee
                            </span>
                          </li>
                        </ul>
                        <div className="d-grid">
                          <button className="btn btn-primary btn-wave shadow">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End:: Section-8 */}
      {/* Start:: Section-9 */}
      <section className="section section-bg" id="faq">
        <div className="container text-center">
          <p className="fs-12 fw-semibold text-success mb-1">
            <span className="landing-section-heading">F.A.Q</span>
          </p>
          <h3 className="fw-semibold mb-2">Frequently asked questions ?</h3>
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <p className="text-muted fs-15 mb-5 fw-normal">
                We have shared some of the most frequently asked questions to
                help you out.
              </p>
            </div>
          </div>
          <div className="row text-start">
            <div className="col-xl-12">
              <div className="row gy-2">
                <div className="col-xl-6">
                  <div
                    className="accordion accordion-customicon1 accordion-primary accordions-items-seperate"
                    id="accordionFAQ1"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1One"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1One"
                          aria-expanded="true"
                          aria-controls="collapsecustomicon1One"
                        >
                          Where can I subscribe to your newsletter?
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon1One"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingcustomicon1One"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item&apos;s accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1Two"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Two"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1Two"
                        >
                          Where can in edit my address?
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon1Two"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingcustomicon1Two"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item&apos;s accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1Three"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Three"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1Three"
                        >
                          What are your opening hours?
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon1Three"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingcustomicon1Three"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item&apos;s accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1Four"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Four"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1Four"
                        >
                          Do I have the right to return an item?
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon1Four"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingcustomicon1Four"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item&apos;s accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1Five"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Five"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1Five"
                        >
                          General Terms &amp; Conditions (GTC)
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon1Five"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingcustomicon1Five"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item&apos;s accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1Six"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Six"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1Six"
                        >
                          Do I need to create an account to make an order?
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon1Six"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingcustomicon1Six"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item&apos;s accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div
                    className="accordion accordion-customicon1 accordion-primary accordions-items-seperate"
                    id="accordionFAQ2"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon2Five"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon2Five"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon2Five"
                        >
                          General Terms &amp; Conditions (GTC)
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon2Five"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingcustomicon2Five"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item&apos;s accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon2Six"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon2Six"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon2Six"
                        >
                          Do I need to create an account to make an order?
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon2Six"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingcustomicon2Six"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item&apos;s accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon2One"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon2One"
                          aria-expanded="true"
                          aria-controls="collapsecustomicon2One"
                        >
                          Where can I subscribe to your newsletter?
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon2One"
                        className="accordion-collapse collapse "
                        aria-labelledby="headingcustomicon2One"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item&apos;s accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon2Two"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon2Two"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon2Two"
                        >
                          Where can in edit my address?
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon2Two"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingcustomicon2Two"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item&apos;s accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon2Three"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon2Three"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon2Three"
                        >
                          What are your opening hours?
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon2Three"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingcustomicon2Three"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item&apos;s accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon2Four"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon2Four"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon2Four"
                        >
                          Do I have the right to return an item?
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon2Four"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingcustomicon2Four"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item&apos;s accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End:: Section-9 */}
      {/* Start:: Section-10 */}
      <section className="section" id="contact">
        <div className="container text-center">
          <p className="fs-12 fw-semibold text-success mb-1">
            <span className="landing-section-heading">CONTACT US</span>
          </p>
          <h3 className="fw-semibold mb-2">
            Have any questions ? We would love to hear from you.
          </h3>
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <p className="text-muted fs-15 mb-5 fw-normal">
                You can contact us anytime regarding any queries or deals,dont
                hesitate to clear your doubts before trying our product.
              </p>
            </div>
          </div>
          <div className="row text-start">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="card custom-card border shadow-none">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.1383094166785!2d120.9421!3d14.3347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd7f9abde1bfbf%3A0xdea296e416d6e78!2sAmaris%20Homes%20Dasma%20Phase%202!5e0!3m2!1sen!2sph!4v1713344755414!5m2!1sen!2sph"
                    height={365}
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="card custom-card  overflow-hidden section-bg border overflow-hidden shadow-none">
                <div className="card-body">
                  <div className="row gy-3 mt-2 px-3">
                    <div className="col-xl-6">
                      <div className="row gy-3">
                        <div className="col-xl-12">
                          <label
                            htmlFor="contact-address-name"
                            className="form-label "
                          >
                            Full Name :
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            id="contact-address-name"
                            placeholder="Enter Name"
                          />
                        </div>
                        <div className="col-xl-12">
                          <label
                            htmlFor="contact-address-phone"
                            className="form-label "
                          >
                            Phone No :
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            id="contact-address-phone"
                            placeholder="Enter Phone No"
                          />
                        </div>
                        <div className="col-xl-12">
                          <label
                            htmlFor="contact-address-address"
                            className="form-label "
                          >
                            Address :
                          </label>
                          <textarea
                            className="form-control "
                            id="contact-address-address"
                            rows={1}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <label
                        htmlFor="contact-address-message"
                        className="form-label "
                      >
                        Message :
                      </label>
                      <textarea
                        className="form-control "
                        id="contact-address-message"
                        rows={8}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-xl-12">
                      <div className="d-flex  mt-4 ">
                        <div className="">
                          <div className="btn-list">
                            <button className="btn btn-icon btn-primary-light btn-wave">
                              <i className="ri-facebook-line fw-bold" />
                            </button>
                            <button className="btn btn-icon btn-primary-light btn-wave">
                              <i className="ri-twitter-x-line fw-bold" />
                            </button>
                            <button className="btn btn-icon btn-primary-light btn-wave">
                              <i className="ri-instagram-line fw-bold" />
                            </button>
                          </div>
                        </div>
                        <div className="ms-auto">
                          <button className="btn btn-primary  btn-wave">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End:: Section-10 */}
    </>
  );
};

export default Landing;
