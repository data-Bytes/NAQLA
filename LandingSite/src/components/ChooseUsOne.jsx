"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const ChooseUsOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='choose-us pt-120 position-relative z-1 mash-bg-main mash-bg-main-two'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape one animation-scalation'
      />
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape six animation-scalation'
      />
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-xl-6'>
            <div className='choose-us__content'>
              <div className='mb-40'>
                <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                  <span className='w-8 h-8 bg-main-600 rounded-circle' />
                  <h5 className='text-main-600 mb-0'>Why Choose Us</h5>
                </div>
                <h2 className='mb-24  wow bounceIn'>
                  Our Commitment to Excellence, Growth &amp; Purpose.
                </h2>
                <p className='text-neutral-500 text-line-2  wow bounceInUp'>
                  At Naqla, we believe true education transforms lives — not just grades.
                  Our mission is to make learning accessible, engaging, and rooted in values.
                  We guide each learner to master academic skills, build confidence, and grow in purpose.
                </p>
              </div>
              <ul>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={200}
                >
                  <span className='flex-shrink-0 text-xl text-main-600 d-flex'>
                    <i className='ph-bold ph-checks' />
                  </span>
                  <span className='flex-grow-1 text-neutral-500'>
                    Interactive lessons, quizzes, and challenges designed to spark curiosity.
                  </span>
                </li>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={400}
                >
                  <span className='flex-shrink-0 text-xl text-main-600 d-flex'>
                    <i className='ph-bold ph-checks' />
                  </span>
                  <span className='flex-grow-1 text-neutral-500'>
                    A caring community of teachers and mentors who understand every learner’s journey.
                  </span>
                </li>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={500}
                >
                  <span className='flex-shrink-0 text-xl text-main-600 d-flex'>
                    <i className='ph-bold ph-checks' />
                  </span>
                  <span className='flex-grow-1 text-neutral-500'>
                    Faith-inspired education that strengthens connection to Arabic and Islamic culture.
                  </span>
                </li>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={400}
                >
                  <span className='flex-shrink-0 text-xl text-main-600 d-flex'>
                    <i className='ph-bold ph-checks' />
                  </span>
                  <span className='flex-grow-1 text-neutral-500'>
                    From recorded lessons to live sessions and exam help — students never learn alone.
                  </span>
                </li>
              </ul>
              <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                <Link
                  href='/about'
                  className='btn btn-main rounded-pill flex-align d-inline-flex gap-8'
                >
                  Read More
                  <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='choose-us__thumbs position-relative'>
              <div className='offer-message style-two px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown'>
                <span className='flex-shrink-0 w-48 h-48 bg-dark-yellow text-white text-2xl flex-center rounded-circle'>
                  <img src='assets/images/icons/stars.png' alt='' />
                </span>
                <div>
                  <span className='text-lg text-neutral-700 d-block'>
                    4.7
                    <span className='text-neutral-100'>(1.2k)</span>
                  </span>
                  <span className='text-neutral-500'>AVG Reviews</span>
                </div>
              </div>
              <div
                className='banner-box one style-two px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg d-inline-block'
                data-aos='fade-left'
              >
                <span className='text-main-600'>6k+</span> Enrolled Students
                <div className='enrolled-students mt-12'>
                  <img
                    src='assets/images/thumbs/enroll-student-img1.png'
                    alt=''
                    className='w-48 h-48 rounded-circle object-fit-cover'
                  />
                  <img
                    src='assets/images/thumbs/enroll-student-img2.png'
                    alt=''
                    className='w-48 h-48 rounded-circle object-fit-cover'
                  />
                  <img
                    src='assets/images/thumbs/enroll-student-img3.png'
                    alt=''
                    className='w-48 h-48 rounded-circle object-fit-cover'
                  />
                  <img
                    src='assets/images/thumbs/enroll-student-img4.png'
                    alt=''
                    className='w-48 h-48 rounded-circle object-fit-cover'
                  />
                  <img
                    src='assets/images/thumbs/enroll-student-img5.png'
                    alt=''
                    className='w-48 h-48 rounded-circle object-fit-cover'
                  />
                  <img
                    src='assets/images/thumbs/enroll-student-img6.png'
                    alt=''
                    className='w-48 h-48 rounded-circle object-fit-cover'
                  />
                </div>
              </div>
              <div className='text-end' data-aos='zoom-out'>
                <div className='d-sm-inline-block d-block position-relative'>
                  <img
                    src='assets/images/thumbs/choose-us-img1.png'
                    alt=''
                    className='choose-us__img rounded-12'
                    data-tilt=''
                    data-tilt-max={16}
                    data-tilt-speed={500}
                    data-tilt-perspective={5000}
                    data-tilt-full-page-listening=''
                  />
                  <span className='shadow-main-two w-80 h-80 flex-center bg-main-two-600 rounded-circle position-absolute inset-block-start-0 inset-inline-start-0 mt-40 ms--40 animation-upDown'>
                    <img src='assets/images/icons/book.png' alt='' />
                  </span>
                </div>
              </div>
              <div className='animation-video' data-aos='zoom-in'>
                <img
                  src='assets/images/thumbs/choose-us-img2.png'
                  alt=''
                  className='border border-white rounded-circle border-3'
                  data-tilt=''
                />
                <span
                  onClick={() => setIsOpen(true)}
                  className='play-button w-48 h-48 flex-center bg-main-600 text-white rounded-circle text-xl position-absolute top-50 start-50 translate-middle'
                >
                  <i className='ph-fill ph-play' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='3y40Y5OzoWI'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </section>
  );
};

export default ChooseUsOne;
