"use client";
import React, { useState } from "react";
import Link from "next/link";

const SubscriptionPlanOne = () => {
  // -----------------------------
  // 💡 State for yearly toggle
  // -----------------------------
  const [isYearly, setIsYearly] = useState(false);

  // -----------------------------
  // 💡 Prices & helper function
  // -----------------------------
  const discount = 0.85; // 15% off for yearly
  const plans = {
    free: 0,
    plus: 100,
    premium: 300,
  };

  const formatPrice = (monthlyPrice) => {
    if (isYearly) {
      return `${Math.round(monthlyPrice * 12 * discount)} MAD`;
    }
    return `${monthlyPrice} MAD`;
  };

  const getPeriodLabel = () =>
    isYearly ? "/Per year (15% off)" : "/Per month";

  // -----------------------------
  // 💡 JSX
  // -----------------------------
  return (
    <section className='favorite-course py-120'>
      <div className='container'>
        {/* Section Heading */}
        <div className='section-heading text-center'>
          <div className='flex-align d-inline-flex gap-8 mb-16'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-book-open' />
            </span>
            <h5 className='text-main-600 mb-0'>Subscription Plans</h5>
          </div>
          <h2 className='mb-24'>Simple, Accessible, and Flexible</h2>
          <p>
            We believe every child deserves quality learning that builds both
            knowledge and character. Choose the plan that fits your family’s
            needs.
          </p>
        </div>

        {/* Toggle */}
        <div className='mb-40 d-flex align-items-center gap-24 justify-content-center'>
          <span className='text-neutral-700 fw-semibold'>Monthly</span>
          <div className='form-check form-switch'>
            <input
              className='form-check-input shadow-none py-10 px-24'
              type='checkbox'
              role='switch'
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
          </div>
          <span className='text-neutral-700 fw-semibold'>
            Yearly <span className='text-main-600'>(Save 15%)</span>
          </span>
        </div>

        {/* Plans */}
        <div className='row gy-4'>
          {/* FREE PLAN */}
          <div
            className='col-xl-4 col-md-6 aos-init'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <div className='bg-white border border-neutral-30 animation-item rounded-16 p-12'>
              <div className='bg-main-25 p-32 rounded-16 transition-2 border border-neutral-30 overflow-hidden position-relative'>
                <span className='positioned-rotation text-main-600 fw-bold text-lg bg-white d-block text-center p-6'>
                  Free Plan
                </span>
                <div className='w-84 h-84 bg-white p-16 box-shadow-md rounded-circle mx-auto d-inline-flex align-items-center justify-content-center position-relative text-main-600 text-44 border border-neutral-30'>
                  <i className='ph ph-test-tube' />
                </div>
                <h1 className='display-4 fw-bold mb-0 mt-32 text-neutral-700 transition-2'>
                  {formatPrice(plans.free)}
                  {/* <span className='text-sm fw-normal'>{getPeriodLabel()}</span> */}
                </h1>
                <span className='d-block border border-neutral-30 my-24 border-dashed' />
                <ul className='d-flex flex-column gap-16'>
                  <li className='flex-align gap-12 aos-init aos-animate text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      Access to selected recorded lessons
                    </span>
                  </li>
                  <li className='flex-align gap-12 aos-init aos-animate text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      Weekly mini-quizzes & challenges
                    </span>
                  </li>
                  <li className='flex-align gap-12 aos-init aos-animate text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      Join our student community
                    </span>
                  </li>
                </ul>
                <div className='mt-40'>
                  <Link
                    href='/sign-in'
                    className='btn btn-main rounded-pill flex-align gap-8'
                  >
                    Get Started
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* PLUS PLAN */}
          <div
            className='col-xl-4 col-md-6 aos-init'
            data-aos='fade-up'
            data-aos-duration={800}
          >
            <div className='bg-white border border-neutral-30 animation-item rounded-16 p-12'>
              <div className='bg-main-25 p-32 rounded-16 transition-2 border border-neutral-30 overflow-hidden position-relative'>
                <span className='positioned-rotation text-main-600 fw-bold text-lg bg-white d-block text-center p-6'>
                  Plus Plan
                </span>
                <div className='w-84 h-84 bg-white p-16 box-shadow-md rounded-circle mx-auto d-inline-flex align-items-center justify-content-center position-relative text-main-600 text-44 border border-neutral-30'>
                  <i className='ph-bold ph-star' />
                </div>
                <h1 className='display-4 fw-bold mb-0 mt-32 text-neutral-700 transition-2'>
                  {formatPrice(plans.plus)}
                  <span className='text-sm fw-normal'>{getPeriodLabel()}</span>
                </h1>
                <span className='d-block border border-neutral-30 my-24 border-dashed' />
                <ul className='d-flex flex-column gap-16'>
                  <li className='flex-align gap-12 text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      Full access to all recorded lessons (academic & Islamic)
                    </span>
                  </li>
                  <li className='flex-align gap-12 text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      Structured learning paths and quizzes
                    </span>
                  </li>
                  <li className='flex-align gap-12 text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      Track progress & earn XP, badges, and streaks
                    </span>
                  </li>
                  <li className='flex-align gap-12 text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      Parent dashboard for monitoring
                    </span>
                  </li>
                  <li className='flex-align gap-12 text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      Access to weekly competitions
                    </span>
                  </li>
                </ul>
                <div className='mt-40'>
                  <Link
                    href='/sign-in'
                    className='btn btn-main rounded-pill flex-align gap-8'
                  >
                    Get Started
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* PREMIUM PLAN */}
          <div
            className='col-xl-4 col-md-6 aos-init'
            data-aos='fade-up'
            data-aos-duration={1000}
          >
            <div className='bg-white border border-neutral-30 animation-item rounded-16 p-12'>
              <div className='bg-main-25 p-32 rounded-16 transition-2 border border-neutral-30 overflow-hidden position-relative'>
                <span className='positioned-rotation text-main-600 fw-bold text-lg bg-white d-block text-center p-6'>
                  Premium Plan
                </span>
                <div className='w-84 h-84 bg-white p-16 box-shadow-md rounded-circle mx-auto d-inline-flex align-items-center justify-content-center position-relative text-main-600 text-44 border border-neutral-30'>
                  <i className='ph-bold ph-crown' />
                </div>
                <h1 className='display-4 fw-bold mb-0 mt-32 text-neutral-700 transition-2'>
                  {formatPrice(plans.premium)}
                  <span className='text-sm fw-normal'>{getPeriodLabel()}</span>
                </h1>
                <span className='d-block border border-neutral-30 my-24 border-dashed' />
                <ul className='d-flex flex-column gap-16'>
                  <li className='flex-align gap-12 text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      Everything in Plus
                    </span>
                  </li>
                  <li className='flex-align gap-12 text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      Access to 3–5 live tutoring or skill courses per month
                    </span>
                  </li>
                  <li className='flex-align gap-12 text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      Direct Q&A support during exam periods
                    </span>
                  </li>
                  <li className='flex-align gap-12 text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      “Emergency Help Hour” each week for difficult questions
                    </span>
                  </li>
                  <li className='flex-align gap-12 text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      Priority access to new courses & learning events
                    </span>
                  </li>
                  <li className='flex-align gap-12 text-neutral-700'>
                    <img src='assets/images/icons/check.png' alt='' />
                    <span className='text-neutral-500 text-md fw-medium'>
                      Option to top up +10 credits for 100 MAD
                    </span>
                  </li>
                </ul>
                <div className='mt-40'>
                  <Link
                    href='/sign-in'
                    className='btn btn-main rounded-pill flex-align gap-8'
                  >
                    Get Started
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
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

export default SubscriptionPlanOne;
