const FAQInnerOne = () => {
  return (
    <section className='faq-page py-120'>
      <div className='container'>
        <div className='section-heading text-center'>
          <div className='flex-align d-inline-flex gap-8 mb-16'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-book' />
            </span>
            <h5 className='text-main-600 mb-0'>FAQs</h5>
          </div>
          <h2 className='mb-24'>Find Answers to Your Questions</h2>
          <p className=''>
            Welcome to our FAQs section! Here, we've compiled answers to some of
            the most common questions our users ask.
          </p>
        </div>
        <div className='text-center mb-40'>
          <ul
            className='nav nav-pills common-tab d-inline-flex gap-16 bg-white p-12 border border-neutral-30 rounded-pill'
            id='pills-tab'
            role='tablist'
          >
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8 active'
                id='pills-onlineEdu-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-onlineEdu'
                type='button'
                role='tab'
                aria-controls='pills-onlineEdu'
                aria-selected='true'
              >
                <i className='text-xl text-main-600 d-flex ph-bold ph-graduation-cap' />
                Online Education
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8'
                id='pills-paymentMethod-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-paymentMethod'
                type='button'
                role='tab'
                aria-controls='pills-paymentMethod'
                aria-selected='false'
              >
                <i className='text-xl text-main-600 d-flex ph-bold ph-star' />
                Payment & Subscription
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8'
                id='pills-Pricing-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-Pricing'
                type='button'
                role='tab'
                aria-controls='pills-Pricing'
                aria-selected='false'
              >
                <i className='text-xl text-main-600 d-flex ph-bold ph-user' />
                Learning & Progress
              </button>
            </li>
          </ul>
        </div>
        <div className='tab-content' id='pills-tabContent'>
          <div
            className='tab-pane fade show active'
            id='pills-onlineEdu'
            role='tabpanel'
            aria-labelledby='pills-onlineEdu-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div className='col-lg-6'>
                <div
                  className='accordion common-accordion'
                  id='accordionExampleOne'
                >
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                      >
                        How do I enroll in a course?
                      </button>
                    </h2>
                    <div
                      id='collapseOne'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionExampleOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Simply create an account, choose your plan (Free, Plus, or Premium), and start learning immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        Can I access my courses on mobile devices?
                      </button>
                    </h2>
                    <div
                      id='collapseTwo'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Yes! You can watch lessons, take quizzes, and join live sessions from your phone, tablet, or computer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        How long do I have access to a course?
                      </button>
                    </h2>
                    <div
                      id='collapseThree'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          As long as your subscription is active, you’ll have full access to all the courses in your plan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div
                  className='accordion common-accordion'
                  id='accordionExampleTwooo'
                >
                                    <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFour'
                        aria-expanded='false'
                        aria-controls='collapseFour'
                      >
                        What if I need help or have questions during the course?
                      </button>
                    </h2>
                    <div
                      id='collapseFour'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Our tutors and support team are always here to assist. Premium users can also access a weekly live Q&A session.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFive'
                        aria-expanded='false'
                        aria-controls='collapseFive'
                      >
                        Do I receive certificates for completing courses?
                      </button>
                    </h2>
                    <div
                      id='collapseFive'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Yes, each completed course earns you a personalized certificate, celebrating both effort and progress.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-paymentMethod'
            role='tabpanel'
            aria-labelledby='pills-paymentMethod-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div className='col-lg-6'>
                <div
                  className='accordion common-accordion'
                  id='accordionExamplePaymentOne'
                >
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwoPaymentOne'
                        aria-expanded='false'
                        aria-controls='collapseTwoPaymentOne'
                      >
                        Can I upgrade or downgrade my plan anytime?
                      </button>
                    </h2>
                    <div
                      id='collapseTwoPaymentOne'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExamplePaymentOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Absolutely! You can change or cancel your plan anytime from your dashboard (no hidden fees).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThreePaymentOne'
                        aria-expanded='false'
                        aria-controls='collapseThreePaymentOne'
                      >
                        What payment methods do you accept?
                      </button>
                    </h2>
                    <div
                      id='collapseThreePaymentOne'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExamplePaymentOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          We accept Moroccan cards, international cards, and other secure payment options.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div
                  className='accordion common-accordion'
                  id='accordionExampleTwoPaymentTwo'
                >
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOnePaymentTwo'
                        aria-expanded='true'
                        aria-controls='collapseOnePaymentTwo'
                      >
                        Do you offer refunds if I’m not satisfied?
                      </button>
                    </h2>
                    <div
                      id='collapseOnePaymentTwo'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionExampleTwoPaymentTwo'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          We offer a 7-day satisfaction guarantee for first-time subscribers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-Pricing'
            role='tabpanel'
            aria-labelledby='pills-Pricing-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div className='col-lg-6'>
                <div
                  className='accordion common-accordion'
                  id='accordionExampleOnePricingOne'
                >
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwoPricingOne'
                        aria-expanded='false'
                        aria-controls='collapseTwoPricingOne'
                      >
                        Are live classes included in all plans?
                      </button>
                    </h2>
                    <div
                      id='collapseTwoPricingOne'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleOnePricingOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Live classes are included in the Premium plan. Plus members can still enjoy all recorded lessons.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOnePricingOne'
                        aria-expanded='true'
                        aria-controls='collapseOnePricingOne'
                      >
                        How do you track student progress?
                      </button>
                    </h2>
                    <div
                      id='collapseOnePricingOne'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionExampleOnePricingOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Each learner has a personal dashboard showing completed lessons, XP points, badges, and streaks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div
                  className='accordion common-accordion'
                  id='accordionExampleTwo'
                >
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwoEducationPricingTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwoEducationPricingTwo'
                      >
                        Can parents monitor their child’s learning?
                      </button>
                    </h2>
                    <div
                      id='collapseTwoEducationPricingTwo'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionExampleTwo'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Yes, parents can view progress reports and participation insights through the parent dashboard.
                        </p>
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
  );
};

export default FAQInnerOne;
