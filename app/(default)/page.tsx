import Image from "next/image";

const Landing = () => {
  return (
    <>
      <div className="landing-banner" id="home">
        <section className="section">
          <div className="container main-banner-container pb-lg-0">
            <div className="row">
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-8">
                <div className="py-lg-5">
                  <div className="mb-3">
                    <h6 className="fw-semibold text-fixed-white op-9">
                      KATALYST
                    </h6>
                  </div>
                  <p className="landing-banner-heading mb-3">
                    DALOY Project<span className="text-secondary"></span>
                  </p>
                  <div className="fs-16 mb-5 text-fixed-white op-7">
                    Cloud eBPLS (Cloud Electronic Business Permit and Licensing
                    System) is a cloud-based platform that helps local
                    governments process business permits online. It replaces
                    manual steps with digital tools, making it faster, more
                    accurate, and more convenient for both LGUs and business
                    owners.
                  </div>
                  <a href="index.html" className="m-1 btn btn-primary">
                    View Demos
                    <i className="ri-eye-line ms-2 align-middle" />
                  </a>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-4">
                <div className="text-end landing-main-image landing-heading-img">
                  <Image
                    width={420}
                    height={420}
                    src="/assets/images/media/landing/1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="section section-bg " id="our-mission">
        <div className="container text-center">
          <p className="fs-12 fw-semibold text-success mb-1">
            <span className="landing-section-heading">PROCESS</span>
          </p>
          <h2 className="fw-semibold mb-2">How it works?</h2>
          <div className="row justify-content-center mb-2">
            <div className="col-xl-7">
              <p className="text-muted fs-15mb-0 fw-normal">
                Business Permit and Licensing takes just few steps...
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card custom-card">
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-header">
                      <div className="card-title">Step 1 - FILE/APPLY</div>
                    </div>
                    <div className="card-body">
                      <h6 className="card-title fw-semibold">
                        Horizontal cards are awesome!
                      </h6>
                      <p className="card-text mb-3">
                        This is a wider card with suppo rting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <Image
                      width={120}
                      height={256}
                      src="/assets/images/media/media-38.jpg"
                      className="img-fluid rounded-end h-100 w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card custom-card">
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-header">
                      <div className="card-title">Step 2 - PAY</div>
                    </div>
                    <div className="card-body">
                      <h6 className="card-title fw-semibold">
                        Horizontal cards are awesome!
                      </h6>
                      <p className="card-text mb-3">
                        This is a wider card with suppo rting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <Image
                      width={120}
                      height={256}
                      src="/assets/images/media/media-38.jpg"
                      className="img-fluid rounded-end h-100 w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card custom-card">
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-header">
                      <div className="card-title">Step 3 - CLAIM</div>
                    </div>
                    <div className="card-body">
                      <h6 className="card-title fw-semibold">
                        Horizontal cards are awesome!
                      </h6>
                      <p className="card-text mb-3">
                        This is a wider card with suppo rting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <Image
                      width={120}
                      height={256}
                      src="/assets/images/media/media-38.jpg"
                      className="img-fluid rounded-end h-100 w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg" id="faq">
        <div className="container text-center">
          <p className="fs-12 fw-semibold text-success mb-1">
            <span className="landing-section-heading">F.A.Q</span>
          </p>
          <h3 className="fw-semibold mb-2">Frequently Asked Questions</h3>
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
                          width={28}
                          height={28}
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
                          width={28}
                          height={28}
                          src="/assets/images/faces/14.jpg"
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
                          width={28}
                          height={28}
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
                          width={28}
                          height={28}
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
                          width={28}
                          height={28}
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
                          width={28}
                          height={28}
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
                          width={28}
                          height={28}
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
                          width={28}
                          height={28}
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
                          width={28}
                          height={28}
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
    </>
  );
};

export default Landing;
