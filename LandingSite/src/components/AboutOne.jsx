"use client";
import Link from "next/link";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AboutOne = () => {
  return (
    <section className='about py-120 position-relative z-1 mash-bg-main mash-bg-main-two'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape one animation-scalation'
      />
      <img
        src='assets/images/shapes/shape6.png'
        alt=''
        className='shape four animation-scalation'
      />
      <div className='position-relative'>
        <div className='container'>
          <div className='row gy-xl-0 gy-5 flex-wrap-reverse align-items-center'>
            <div className='col-xl-6'>
              <div className='about-thumbs position-relative pe-lg-5'>
                <img
                  src='assets/images/shapes/shape7.png'
                  alt=''
                  className='shape seven animation-scalation'
                />
                <div className='offer-message px-24 py-12 rounded-12 bg-main-two-50 fw-medium flex-align d-inline-flex gap-16 border border-neutral-30 animation-upDown'>
                  <span className='flex-shrink-0 w-48 h-48 bg-main-two-600 text-white text-2xl flex-center rounded-circle'>
                    <i className='ph ph-watch' />
                  </span>
                  <div>
                    <h6 className='mb-4'>20% OFF</h6>
                    <span className='text-neutral-500'>For All Courses</span>
                  </div>
                </div>
                <div className='row gy-4'>
                  <div className='col-sm-6'>
                    <img
                      src='assets/images/thumbs/about-img1.png'
                      alt=''
                      className='rounded-12 w-100'
                      data-tilt=''
                      data-tilt-max={15}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=''
                    />
                  </div>
                  <div className='col-sm-6'>
                    <div className='flex-align gap-24 mb-24'>
                      <div
                        className='bg-main-600 rounded-12 text-center py-24 px-2 w-50-percent'
                        data-aos='fade-right'
                      >
                        <VisibilitySensor
                          partialVisibility
                          offset={{ bottom: 200 }}
                        >
                          {({ isVisible }) => (
                            <h1 className='mb-0 text-white counter'>
                              {isVisible ? <CountUp end={5} /> : null}K
                            </h1>
                          )}
                        </VisibilitySensor>
                        <span className='text-white'>Minutes of content produced</span>
                      </div>
                      <div
                        className='bg-neutral-700 rounded-12 text-center py-24 px-2 w-50-percent'
                        data-aos='fade-left'
                      >
                        <VisibilitySensor
                          partialVisibility
                          offset={{ bottom: 200 }}
                        >
                          {({ isVisible }) => (
                            <h1 className='mb-0 text-white counter'>
                              {isVisible ? <CountUp end={20} /> : null}+
                            </h1>
                          )}
                        </VisibilitySensor>
                        <span className='text-white'>Educators contributing</span>
                      </div>
                    </div>
                    <img
                      src='assets/images/thumbs/about-img2.png'
                      alt=''
                      className='rounded-12 w-100'
                      data-tilt=''
                      data-tilt-max={20}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='about-content'>
                <div className='mb-40'>
                  <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                    <span className='w-8 h-8 bg-main-600 rounded-circle' />
                    <h5 className='text-main-600 mb-0 '>About Naqla</h5>
                  </div>
                  <h2 className='mb-24 wow bounceIn'>
                    Empowering Minds, Nurturing Values
                  </h2>
                  <p className='text-neutral-500 wow bounceInUp'>
                    Welcome to Naqla, where learning goes beyond grades.
                    We help students strengthen their academic foundations, grow in character, and explore the skills that shape tomorrow
                    — all from home, with guidance rooted in identity, purpose, and excellence.
                  </p>
                </div>
                <div
                  className='flex-align align-items-start gap-28 mb-32'
                  data-aos='fade-left'
                  data-aos-duration={200}
                >
                  <span className='w-80 h-80 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0'>
                    <img src='assets/images/icons/about-img1.png' alt='' />
                  </span>
                  <div className='flex-grow-1'>
                    <h4 className='text-neutral-500 mb-12'>Our Mission</h4>
                    <p className='text-neutral-500'>
                      Driven by educators and technologists who believe in meaningful learning,
                      we aim to build a generation that combines knowledge, creativity, and strong moral values.
                      Our mission is to make quality education accessible to every family, while keeping faith and curiosity at its heart.
                    </p>
                  </div>
                </div>
                <div
                  className='flex-align align-items-start gap-28 mb-0'
                  data-aos='fade-left'
                  data-aos-duration={400}
                >
                  <span className='w-80 h-80 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0'>
                    <img src='assets/images/icons/about-img2.png' alt='' />
                  </span>
                  <div className='flex-grow-1'>
                    <h4 className='text-neutral-500 mb-12'>Our Vision</h4>
                    <p className='text-neutral-500'>
                      To become a global reference in value-based online education,
                      connecting Moroccan and Arab learners with modern, engaging, and identity-driven content —
                      helping each child discover their potential, master essential skills, and grow into confident contributors to their communities.{" "}
                    </p>
                  </div>
                </div>
                <div
                  className='flex-align flex-wrap gap-32 pt-40 border-top border-neutral-50 mt-40 border-dashed border-0'
                  data-aos='fade-left'
                  data-aos-duration={600}
                >
                  <Link
                    href='/course'
                    className='btn btn-main rounded-pill flex-align gap-8'
                  >
                    Read More
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </Link>
                  <div className='flex-align gap-20'>
                    <img
                      src='assets/images/thumbs/ceo-img.png'
                      alt=''
                      className='w-52 h-52 rounded-circle object-fit-cover flex-shrink-0'
                    />
                    <div className='flex-grow-1'>
                      <span className='mb-4'>
                        <img src='assets/images/thumbs/signature.png' alt='' />
                      </span>
                      <span className='text-sm d-block'>CEO Of Naqla</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
