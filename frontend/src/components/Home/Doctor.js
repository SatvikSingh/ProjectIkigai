import React from "react";
import "./Doctor.css";
const Doctor = (props) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4 pt-5">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <div className="user-picture">
            <img
              src={props.item.doctor_img}
              className="shadow-sm rounded-circle"
              height="130"
              width="130"
            />
          </div>
          <div className="user-content">
            <h5 className="text-capitalize user-name">{props.item.doctorname}</h5>
            {/* <p className=" text-capitalize text-muted small blockquote-footer"> */}
              {/* {props.item.doctorspl}
            </p> */}
            <div className="small">
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star-half-alt text-warning"></i>
              <i className="fas fa-star text-light"></i>
            </div>
            <p className="small text-muted mb-0">
                {props.item.doctor_desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
