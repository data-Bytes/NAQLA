import Link from "next/link";

const BlogOne = () => {
  return (
    <section className='blog py-120 mash-bg-main mash-bg-main-two position-relative'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation'
      />
      <img
        src='assets/images/shapes/shape6.png'
        alt=''
        className='shape four animation-scalation'
      />
      <div className='container'>
        <div className='section-heading text-center'>
          <h2 className='mb-24 wow bounceIn'>Recent Articles</h2>
          <p className='wow bounceInUp'>
            Discover insights, stories, and practical tips on modern education, online learning, and value-based growth — all written by our mentors and educators at Naqla.
          </p>
        </div>
        <div className='row gy-4'>
          <div
            className='col-lg-4 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={200}
          >
            <div className='blog-item scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30'>
              <div className='rounded-12 overflow-hidden position-relative'>
                <Link href='/blog-details' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/blog-img1.png'
                    alt='Blog Image'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
              </div>
              <div className='p-24 pt-32'>
                <div className=''>
                  {/* <span className='px-20 py-8 bg-main-two-600 rounded-8 text-white fw-medium mb-20'>
                    Student Life
                  </span> */}
                  <h4 className='mb-28'>
                    <Link href='/blog-details' className='link text-line-2'>
                      How Online Learning Helps With Discipline and Confidence
                    </Link>
                  </h4>
                  <div className='flex-align gap-14 flex-wrap my-20'>
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-user-circle' />
                      </span>
                      <span className='text-neutral-500 text-lg'>B.Dandane</span>
                    </div>
                    <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-calendar-dot' />
                      </span>
                      <span className='text-neutral-500 text-lg'>
                        12 October, 25
                      </span>
                    </div>
                    {/* <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-chat-dots' />
                      </span>
                      <span className='text-neutral-500 text-lg'>24</span>
                    </div> */}
                  </div>
                  <p className='text-neutral-500 text-line-2'>
                    Online education isn’t just about flexibility, it’s a journey of self-mastery. When students learn to plan their day, manage their time, and meet goals without constant supervision, they build discipline and confidence that last for life.
                  </p>
                </div>
                <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href='/blog-details'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    Read More
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={400}
          >
            <div className='blog-item scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30'>
              <div className='rounded-12 overflow-hidden position-relative'>
                <Link href='/blog-details' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/blog-img2.png'
                    alt='Blog Image'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
              </div>
              <div className='p-24 pt-32'>
                <div className=''>
                  {/* <span className='px-20 py-8 bg-success-600 rounded-8 text-white fw-medium mb-20'>
                    Islamic Education
                  </span> */}
                  <h4 className='mb-28'>
                    <Link href='/blog-details' className='link text-line-2'>
                      Rethinking Success: Learning Beyond Grades
                    </Link>
                  </h4>
                  <div className='flex-align gap-14 flex-wrap my-20'>
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-user-circle' />
                      </span>
                      <span className='text-neutral-500 text-lg'>Z.Chbani</span>
                    </div>
                    <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-calendar-dot' />
                      </span>
                      <span className='text-neutral-500 text-lg'>
                        22 October, 25
                      </span>
                    </div>
                    {/* <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-chat-dots' />
                      </span>
                      <span className='text-neutral-500 text-lg'>24</span>
                    </div> */}
                  </div>
                  <p className='text-neutral-500 text-line-2'>
                    True education shapes both the mind and the heart. At Naqla, we believe that academic excellence means nothing without values, humility, and a sense of purpose — the real measure of success for tomorrow’s leaders.
                  </p>
                </div>
                <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href='/blog-details'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    Read More
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <div className='blog-item scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30'>
              <div className='rounded-12 overflow-hidden position-relative'>
                <Link href='/blog-details' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/blog-img3.png'
                    alt='Blog Image'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
              </div>
              <div className='p-24 pt-32'>
                <div className=''>
                  {/* <span className='px-20 py-8 bg-main-two-600 rounded-8 text-white fw-medium mb-20'>
                    Digital Learning
                  </span> */}
                  <h4 className='mb-28'>
                    <Link href='/blog-details' className='link text-line-2'>
                      Gamification in Learning: Turning Effort into Motivation
                    </Link>
                  </h4>
                  <div className='flex-align gap-14 flex-wrap my-20'>
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-user-circle' />
                      </span>
                      <span className='text-neutral-500 text-lg'>B.Dandane</span>
                    </div>
                    <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-calendar-dot' />
                      </span>
                      <span className='text-neutral-500 text-lg'>
                        12 June, 25
                      </span>
                    </div>
                    {/* <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-chat-dots' />
                      </span>
                      <span className='text-neutral-500 text-lg'>24</span>
                    </div> */}
                  </div>
                  <p className='text-neutral-500 text-line-2'>
                    XP points, streaks, and badges aren’t just fun, they’re tools that train the brain to enjoy progress. Learn how gamified education can help students stay motivated and celebrate every small victory on their learning path.
                  </p>
                </div>
                <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href='/blog-details'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    Read More
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
