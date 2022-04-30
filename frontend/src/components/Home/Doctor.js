import React from "react";
import './Doctor.css'
import './DoctorJs.js'
const Doctor = (props) => {
  return (
    <section className="container">
      <div className="row active-with-click">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <article className="material-card Red">
            <h2>
              <span>{props.item.doctorname}</span>
              <strong>
                <i className="fa fa-fw fa-star"></i>
                {props.item.doctorspl}
              </strong>
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img
                  className="img-responsive"
                  src={props.item.doctor_img}
                ></img>
              </div>
              <div className="mc-description">
                {props.item.doctor_desc}
              </div>
            </div>
            <a className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </a>
            <div className="mc-footer">
              <h4>Social</h4>
              <a className="fa fa-fw fa-facebook">{props.item.facebook}</a>
              <a className="fa fa-fw fa-twitter">{props.item.twitter}</a>
              <a className="fa fa-fw fa-linkedin">{props.item.linkdin}</a>
              <a className="fa fa-fw fa-google-plus">{props.item.gplus}</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
