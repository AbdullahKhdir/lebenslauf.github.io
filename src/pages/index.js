import React from 'react';

import Layout from '../components/Layout';
// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary"> {config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I'm Abdullah, Khdir, 26 years old. I have been in Germany for 8 years and am currently working
            as a Full Stack Web Developer at Deutsche Telekom Individual Solutions & Products GmbH.
            In 2021 I completed an apprenticeship as an IT specialist for application development at Deutsche Telekom AG.
            During my training, I gained experience in different areas that are important in the telecommunications world and are needed in the IT world as a programmer.
            I also have experience in the field of automation, where different network components can be controlled and automated by agents, and I worked on developing and implementing agents based on different protocols like SNMP, which can be used for control and automation of different hardware like power distribution units.
            In addition, I checked the quality of the project with the development of automated system tests, and I gained knowledge about the development of web applications using a wide range of technologies, as well as experience in designing and developing interfaces (GUI).
            I am currently specializing concretely and deeply in the different technologies and frameworks that revolve around web development.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiences</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full Stack PHP Web Developer</h3>
              <div className="subheading mb-3">Deutsche Telekom Individual Solutions &amp; Products GmbH</div>
              <p>
                Using the Laravel framework, I'm currently working on the development, implementation, customization, data model design, testing, and organization of a tool, that
                archives and addresses the orders and contracts of global and local companies in Germany and around the globe.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2021 - Present</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Automation</h3>
              <div className="subheading mb-3">Deutsche Telekom Technik GmbH</div>
              <p>
                I have developed an SNMP agent using Java programming language,
                which is used to control power distribution units using the SNMP protocol.
                I have also worked on different automation solutions,
                that can be automated by the agent via the network components.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2021 - June 2021</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Development of web applications</h3>
              <div className="subheading mb-3">Professional development</div>
              <p>
                Through various projects, I have acquired knowledge in the area of developing web applications using MERN technologies.
                In addition, I am also familiar with separate frontend applications.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2021</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Development of Graphical User Interface</h3>
              <div className="subheading mb-3">Deutsche Telekom Technik GmbH</div>
              <p>
                I have developed a graphical user interface with the help of Java programming language for a power distribution unit hardware that controls and monitors the functionalities of the product.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2020</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Development and maintenance of databases</h3>
              <div className="subheading mb-3">Deutsche Telekom Technik GmbH</div>
              <p>
                I developed and maintained an interface for a database using MS Access,
                which deals with the tools of all departments of the company.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2020</span>
            </div>
          </div>
          </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Professional Background</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
                <h3 className="mb-0">IT specialist as application developer</h3>
              <div className="subheading mb-3">Apprenticeship at Deutsche Telekom AG in Nuremberg</div>
              <div>Extensive topics in the telecommunications world, specifically in the field of automation</div>
                <p></p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2018 - September 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
                <h3 className="mb-0">Language Skills</h3>
              <div className="subheading mb-3">University of Oldenburg</div>
              <div>Completion of language course DSH-1 with certificate</div>
                <p>I also have a very good knowledge of English</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2017 - February 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Al Imam Ali Senior High School, Amman</h3>
              <div className="subheading mb-3">High school graduation</div>
                <p></p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">September 2013 - May 2015</span>
              </div>
            </div>
          </div>

      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Knowledge</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
            <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-cuttlefish">++</i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-cuttlefish">#</i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-php"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-laravel"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-github"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
            <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
            <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
            <li>
            <i className="fa-li fa fa-check"></i>
              EDV
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Learning from the new technologies that are turning the IT world upside down in all areas.
            Specifically, the programming technologies that are often used in practice.
          </p>
          <p className="mb-0">
            I like to travel and get to know new places, features, cultures and people.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
