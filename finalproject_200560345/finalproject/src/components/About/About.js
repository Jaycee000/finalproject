import React, { useState } from 'react'
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);



export default function About() {
  const [Active, setActive] = useState(2)
  const experience = [
    {
      desig: "Web Developer",
      duration: "2022-Till now",
      company: "Georgian@ILAC",
      detail: "I was working as a Web developer at Georgian@ILAC"
    },

    {
      desig: "Team member",
      duration: "2022-2023",
      company: "Events Plus Management",
      detail: "I was a team member of Events Plus Management"
    },

    {
      desig: "Barista",
      duration: "2021-2022",
      company: "HiddenBar",
      detail: "I was working as a bartender at HiddenBar in Toronto"
    },



    

  ];
  const education = [
    
    {
      degree: "Bechalor Degree",
      year: "2024-2028",
      institution:"University of Toronto",
      detail: "I am currently a student at UofT about Software engineering"
    },
    
    {
      degree: "College Degree",
      year: "2022-2024",
      institution:"Georgian College",
      detail: "I am currently a student in my last semester of CMPG at Georgian@ILAC Toronto"
    },
    {
      degree: "High School",
      year: "2020-2022",
      institution:"Marie Curie High School",
      detail: "I am high school student in Ho Chi Minh City - Vietnam"
    }
  ]
  return (
    <div id="about-content">
      {/* Heading Starts */}
      <div className="heading text-left text-md-center">
        <h2>
          about <span>me</span>
        </h2>
      </div>
      {/* Heading Ends */}
      {/* Personal Infos Starts */}
      <div className="container infos">
        <div className="row infos-holder align-items-center">
          <div className="col-12 col-lg-5">
            <img
              className="img-fluid d-block photo"
              src="images/aboutme.jpg"
              alt=""
            />
          </div>
          <div className="col-12 col-lg-7">
            <p className="m-0">
              I'm Ngoc Que Tran Tran, I am currently enrolling in the last semester in Computer Programming at Georgian@ILAC. 
              I am living in Toronto focused on crafting clean, creative
              and user‑friendly experiences, I build beautiful and powerful
              websites .
            </p>
            <div className="row text-nowrap">
              <div className="d-flex col-12 col-sm-6 personal-list-container personal-list-container-1">
                <ul className="list-unstyled personal-info w-100">
                  <li>
                    <p>
                      <span className="material-icons">cake</span>
                      <span>Birthdate : </span>May 2004
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="material-icons">flag</span>
                      <span>Nationality : </span>Vietnamese
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="material-icons">settings</span>
                      <span>Experience : </span>1 year
                    </p>
                  </li>
                </ul>
              </div>
              <div className="d-flex col-12 col-sm-6 personal-list-container personal-list-container-2">
                <ul className="list-unstyled personal-info w-100">
                  <li>
                    <p>
                      <span className="material-icons">call</span>
                      <span>Phone : </span>+416 123 4567
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="material-icons">location_on</span>
                      <span>Address : </span>Toronto, Ca
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="material-icons">email</span>
                      <span>Email : </span>quetran@gmail.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Download CV Starts */}
            <a href="#" className="btn main-btn">
              <span>download my cv</span>
            </a>
            {/* Download CV Ends */}
          </div>
        </div>
      </div>
      {/* Personal Infos Ends */}
      {/* Resume Starts */}
      <div className="w-100 resume">
        <div className="container">
          <div className="row">
            <div className="col-12 pl-0">
              <h4 className="subtitle text-center">My resume</h4>
            </div>
            <div className="resume-header">
              <p className={`${Active == 1 ? 'active' : ''}`} onClick={() => setActive(1)}>
                experience
              </p>
              <p className={`${Active == 2 ? 'active' : ''}`} onClick={() => setActive(2)}>education</p>
            </div>
            <div className="col-12 resume-holder">
              {/* Experience Starts */}
              <div
                className={`owl-carousel ${Active == 1 ? 'visiblecarousel owl-loaded' : 'hiddencarousel'}`} onClick={() => setActive(1)}
              >
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    1199: {
                      slidesPerView: 2,
                    },
                    1350: {
                      slidesPerView: 3,
                    },
                  }}
                  className=""
                >

                  {/* Experience Item Starts */}
                  {experience.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="resume-item item">
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="mb-0">{item.desig}</h5>
                          <h6 className="mb-0">{item.duration}</h6>
                        </div>
                        <span className="company d-inline-block mb-2">{item.company}</span>
                        <p>
                          {item.detail}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                  {/* Experience Item Ends */}

                </Swiper>
              </div>
              {/* Experience Ends */}
              {/* Education Starts */}
              <div
                className={`owl-carousel ${Active == 2 ? 'visiblecarousel owl-loaded' : 'hiddencarousel'}`} onClick={() => setActive(1)}
              >
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                  }}
                  navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    1199: {
                      slidesPerView: 2,
                    },
                    1350: {
                      slidesPerView: 3,
                    },
                  }}
                  className=""
                >
                {/* Education Item Starts */}
                {education.map((item, i) => (
                <SwiperSlide key={i}>
                <div className="resume-item item">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">{item.degree} </h5>
                    <h6 className="mb-0">{item.year}</h6>
                  </div>
                  <span className="company d-inline-block mb-2">
                    {item.institution}
                  </span>
                  <p>
                    {item.detail}
                  </p>
                </div>
                </SwiperSlide>
                ))}
                {/* Education Item Ends */}
                </Swiper>
                
              </div>
              {/* Education Ends */}
            </div>
          </div>
        </div>
      </div>
      {/* Resume Ends */}
      <div className="badges">
        <div className="container">
          <div className="row text-center">
            {/* Fact Badge Item Starts */}
            <div className="col-12 col-md-4">
              <span className="material-icons">cases</span>
              <h3>1</h3>
              <p>Years Experience</p>
            </div>
            {/* Fact Badge Item Ends */}
            {/* Fact Badge Item Starts */}
            <div className="col-12 col-md-4">
              <span className="material-icons">thumb_up</span>
              <h3>3</h3>
              <p>done projects</p>
            </div>
            {/* Fact Badge Item Ends */}
            {/* Fact Badge Item Starts */}
            <div className="col-12 col-md-4">
              <span className="material-icons">favorite</span>
              <h3>3</h3>
              <p>happy customers</p>
            </div>
            {/* Fact Badge Item Ends */}
          </div>
        </div>
      </div>
      {/* Fun Facts Ends */}
      {/* Skills Starts */}
      <div className="container skills">
        <div className="row">
          <div className="col-12">
            <h4 className="subtitle">
              {/*<span class="material-icons">download_done</span>*/}
              My skills
            </h4>
          </div>
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">HTML</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={80}
                style={{ width: "80%" }}
              />
              <span className="percent" style={{ right: "20%" }}>
                80%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">Javscript</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={70}
                style={{ width: "70%" }}
              />
              <span className="percent" style={{ right: "30%" }}>
                70%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">CSS</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={60}
                style={{ width: "60%" }}
              />
              <span className="percent" style={{ right: "40%" }}>
                60%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">Php</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={57}
                style={{ width: "57%" }}
              />
              <span className="percent" style={{ right: "43%" }}>
                57%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">C</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={90}
                style={{ width: "90%" }}
              />
              <span className="percent" style={{ right: "10%" }}>
                90%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text ">C++</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={80}
                style={{ width: "80%" }}
              />
              <span className="percent" style={{ right: "20%" }}>
                80%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text ">Python</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={70}
                style={{ width: "70%" }}
              />
              <span className="percent" style={{ right: "30%" }}>
                70%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">React</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={50}
                style={{ width: "50%" }}
              />
              <span className="percent" style={{ right: "50%" }}>
                50%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
        </div>
      </div>
      {/* Skills Ends */}
      {/* Fun Facts Starts */}
    </div>
  )
}
