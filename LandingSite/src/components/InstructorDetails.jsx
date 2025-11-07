const InstructorDetails = ({ instructor }) => {
  return (
    <section className="instructor-details py-120 position-relative z-1">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="instructor-details__thumb">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="max-h-416 max-w-416 cover-img rounded-circle"
              />
              <ul className="social-list flex-center gap-16 mt-40">
                {Object.entries(instructor.socials).map(([key, url]) => (
                  <li key={key} className="social-list__item">
                    <a
                      href={url}
                      target="_blank"
                      className="text-main-600 text-xl hover-text-white w-40 h-40 rounded-circle border border-main-600 hover-bg-main-600 flex-center"
                    >
                      <i className={`ph-bold ph-${key}-logo`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-8 ps-xl-5">
            <div className="ps-lg-5">
              <h5 className="text-main-600 mb-0">Instructor</h5>
              <h2 className="my-16">{instructor.name}</h2>

              <div className="d-flex flex-column gap-16 flex-wrap max-w-340 mt-40">
                <div className="flex-between gap-8">
                  <div className="flex-align gap-8">
                    <i className="ph-bold ph-lightbulb text-neutral-700 text-2xl d-flex" />
                    <span className="text-neutral-700 text-lg fw-medium">
                      {instructor.role}
                    </span>
                  </div>
                  <div className="flex-align gap-8">
                    <i className="ph-bold ph-watch text-neutral-700 text-2xl d-flex" />
                    <span className="text-neutral-700 text-lg fw-medium">
                      {instructor.numberOfCourses}
                    </span>
                  </div>
                </div>

                <div className="flex-between gap-8 flex-wrap">
                  <div className="flex-align gap-8">
                    <i className="ph-bold ph-users text-neutral-700 text-2xl d-flex" />
                    <span className="text-neutral-700 text-lg fw-medium">
                      {instructor.numberOfStudents}
                    </span>
                  </div>
                  <div className="flex-align gap-4">
                    <i className="ph-fill ph-star text-2xl fw-medium text-warning-600 d-flex" />
                    <span className="text-lg text-neutral-700 fw-semibold">
                      {instructor.avgRating}
                    </span>
                  </div>
                </div>
              </div>

              <span className="d-block border border-neutral-30 my-40 border-dashed" />
              <h4 className="mb-24">Bio</h4>
              <p className="text-neutral-500">{instructor.bio}</p>

              <span className="d-block border border-neutral-30 my-40 border-dashed" />
              <h4 className="mb-24">Contact</h4>
              <div className="d-flex flex-column gap-24">
                <div className="flex-align gap-12">
                  <i className="ph-bold ph-phone-call text-main-600 w-44 h-44 border border-neutral-30 rounded-4 flex-center bg-main-25 text-2xl flex-center" />
                  <a href={`tel:${instructor.phone}`} className="text-neutral-500 hover-text-main-600">
                    {instructor.phone}
                  </a>
                </div>
                <div className="flex-align gap-12">
                  <i className="ph-bold ph-envelope-simple text-success-600 w-44 h-44 border border-neutral-30 rounded-4 flex-center bg-main-25 text-2xl flex-center" />
                  <a href={`mailto:${instructor.email}`} className="text-neutral-500 hover-text-main-600">
                    {instructor.email}
                  </a>
                </div>
                <div className="flex-align gap-12">
                  <i className="ph-bold ph-map-pin-line text-warning-600 w-44 h-44 border border-neutral-30 rounded-4 flex-center bg-main-25 text-2xl flex-center" />
                  <span className="text-neutral-500">{instructor.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorDetails;
