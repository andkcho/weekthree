import React from "react";
import "./Style.css";

const UserLocation = () =>
//all code here is converted to html for the page.
<div>
<h1>Input Your Location</h1>
  
  <form className="form">
    <input
    name="address"
    type="text"
    placeholder="1234 E Hamilton rd."
    />
    <input
    name="city"
    type="text"
    placeholder="Salt Lake City"
    />
    <input
    name="state"
    type="text"
    placeholder="Utah"
    />
    <input
    name="zip"
    type="text"
    placeholder="84117"
    />
   <button className="btn btn-primary" onClick={this.handleFormSubmit}>Next</button>

  </form>
</div>;

export default UserLocation;
