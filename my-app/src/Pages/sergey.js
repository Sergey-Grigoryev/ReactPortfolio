import React from "react";
import Headshot from "../assets/images/headshot.png";

const Sergey = () => {
  return (
    <div>
      <h2>Sergey Grigoryev Dev. Portfolio - built with React</h2>
      <div class="center">
        <img src={Headshot} className="App-logo" alt="logo" class="center" />
      </div>
      <div>
        <h2>About Me</h2>

        <h3>Education:</h3>
        <ul>
          <li>Full-Stack Coding Boot Camp - UC Berkeley Extention - 2021</li>
          <li>
            Masters in Bisuness Administration from California State Univercity
            - Fresno - 2020
          </li>
          <li>
            Bachelor of Science in Business, Marketing - San Francisco State
            Univercity - 2012
          </li>
        </ul>
        <div class="row">
          <div class="column">
            <p>
              Computer Science applied to JavaScript:
              <ul>
                <li>Algorithms (Searches, Sorts)</li>
                <li>Efficiency</li>
                <li>Time Complexity</li>
                <li>Big O Notation</li>
                <li>Data Structures</li>
              </ul>
              Browser Based Technologies
              <ul>
                <li>HTML/CSS</li>
                <li>JavaScript/jQuery</li>
                <li>Responsive Design</li>
                <li>Bootstrap</li>
                <li>Handlebars</li>
                <li>Local Storage, Session Storage, IndexedDB</li>
                <li>React.js</li>
              </ul>
            </p>
          </div>
          <div class="column">
            <p>
              Databases
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
              Server Side Development
              <ul>
                <li>User Authentication</li>
                <li>Progressive Web Applications (PWAs)</li>
                <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
              </ul>
              API Interaction
              <ul>
                <li>API</li>
                <li>JSON</li>
                <li>AJAX</li>
              </ul>
              Supplemental Self-Study Topics
              <ul>
                <li>Python</li>
              </ul>
            </p>
          </div>
        </div>

        <h3>Career:</h3>
        <p>
          After graduating undergrad, I worked at a fast growing YC Start-up in
          Sales, Account Managment, Customer Service, and Technical Support.
          Decided to get my MBA, after which I joined an extremely young and
          well funded FinTech Start-up working on business process development,
          implementing tools and technologies, and building automation and other
          platforms.
        </p>
      </div>
    </div>
  );
};

export default Sergey;
