import React from "react";
import { Link } from "react-router-dom";
import profile from "../images/profile.jpg";

const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="mainDetail ">
      <div className="ui card centered">
        <div className="image">
          <img src={profile} alt="profile" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
