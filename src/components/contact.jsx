import React, { Component } from "react";
import Navbar from "./layouts/navbar";
import { Helmet } from "react-helmet";

class Contact extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Contac Us | SmallWorld Venture</title>
        </Helmet>
        <Navbar />
        <div>
          <div className="backcontact">
            <div className="ui container">
              <div className="ui stackable two column grid contact">
                <div className="column marginInformation">
                  <h2>Request e-Consulting</h2>
                  <form className="ui form">
                    <div className="field">
                      <label>Name</label>
                      <input type="text" />
                    </div>

                    <div className="field">
                      <label>Email</label>
                      <input type="email" />
                    </div>

                    <div className="field">
                      <label>Message</label>
                      <textarea cols="20" rows="10" />
                    </div>

                    <button
                      className="ui button floated positive btnSubmit"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div className="column marginInformation">
                  <h2>Frequently Asked Questions</h2>
                  <h4>Hello World</h4>
                  <p>This is hello world from SAN Vuthy.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mapsize">
              <div className="ui stackable two column grid">
                <div className="column backFineus">
                  <div className="ui stackable two column grid">
                    <div className="column" />
                    <div className="column">
                      <div className="paddingsize">
                        <h2>Fine Us</h2>
                        <p>
                          The Cambodia Investment Agency (EIA), a part of
                          Enterprise Cambodia, is a goverment agency promoting
                          foreign investments in Cambodia and assiting internal
                          components in finding business opportunities in
                          Cambodia
                        </p>
                        <p>
                          What is it like to run a business in Estonia? How to
                          benefit from the e-solutions and the efficiency of our
                          business culture? What are the opportunities in
                          specific sectors?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column mapone">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6815969291333!2d104.89086411397015!3d11.574668047118776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095176305bf04b%3A0x5029dc78a50975a0!2sSmallWorld+Venture!5e0!3m2!1skm!2skh!4v1549694899483"
                    style={{ width: "100%", height: "400px", border: "none" }}
                    title="SmallWorld Venture Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;