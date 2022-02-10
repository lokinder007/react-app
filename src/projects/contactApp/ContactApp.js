// import React from 'react'

// const ContactApp = () => {
//     return (
//         <>
//            <h1 className=" mb-4 text-success"><b> Contact App </b></h1>

//         </>
//     )
// }

// export default ContactApp

import React, { Component } from "react";
import "./ContactApp.css";

export class ContactApp extends Component {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div className="justify-content-center w-100">
        <h1 className=" mb-4 text-success">
          <b> Contact App </b>
        </h1>

        <div className="pageC">
          <div className="containerC">
            <h1 className="headingC">Add your Image</h1>
            <div className="img-holderC">
              <img src={profileImg} alt="" id="img" className="imgC" />
            </div>
            <input
              type="file"
              accept="image/*"
              name="image-upload"
              id="input"
              onChange={this.imageHandler}
            />
            <div className="labelC">
              <label className="image-upload h4" htmlFor="input">
                {/* <i className="material-icons">add_photo_alternate</i> */}
                Add Pic
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactApp;
