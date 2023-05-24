import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section id="Header" className="head d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-md-0 order-2 order-lg-1 home-main-div d-flex justify-content-center flex-column">
                  <h1>
                    {props.head1}
                    <strong className="brand-name"> Web Developer</strong>.
                  </h1>
                  <h2 className="my-3">
                    Learning to develop and enhance Web App.
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to={props.link}
                      className="btn btn-outline-primary rounded-pill butt"
                    >
                      {props.butn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-lg-2">
                  <div className="text-center">
                    <video
                      src={props.video}
                      className="img-fluid roundV"
                      loop
                      autoPlay
                      muted
                      alt="web video"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
