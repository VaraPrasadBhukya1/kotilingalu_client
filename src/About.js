import React from 'react';

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="me-lg-30">
              <div className="section-title mb-0 text-start">
                <p className="subtitle">Our Approach</p>
                <h4 className="title">Our mission is to share the Good of Hinduism</h4>
              </div>
              <p className="blockquote bg-transparent">
                We are a Hindu that believes in Lord Rama and Vishnu Deva, the followers of Lord Rama and Vishnu Deva.
              </p>

              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <i className="fas fa-om"></i> Holi
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    <i className="far fa-church"></i> Temple
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    <i className="far fa-user"></i> Pandit
                  </a>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <p>
                    Our mission is to share the Good of Hinduism, Loving, Faith, and Serving. People ask questions related to Hinduism. A temple is a place where Hindus worship our Bhagwan Ram, Shiva, Vishnu, Krishna, etc. Proin eget tortor industry's standard dummy text ever.
                  </p>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <p>
                    Our mission is to share the Good of Hinduism, Loving, Faith, and Serving. People ask questions related to Hinduism. A temple is a place where Hindus worship our Bhagwan Ram, Shiva, Vishnu, Krishna, etc. Proin eget tortor industry's standard dummy text ever.
                  </p>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <p>   
                    Our mission is to share the Good of Hinduism, Loving, Faith, and Serving. People ask questions related to Hinduism. A temple is a place where Hindus worship our Bhagwan Ram, Shiva, Vishnu, Krishna, etc. Proin eget tortor industry's standard dummy text ever.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
