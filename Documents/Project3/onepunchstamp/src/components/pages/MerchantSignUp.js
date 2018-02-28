import React from "react";
import "./Style.css"
const Merchant = () =>
  <div>

<h1 className="h3 mb-3 font-weight-normal">Create your merchant account</h1>

<form className="form">
    <input
        name="companyName"
        type="text"
        placeholder="Company Name"
    />
    <input
        name="category"
        type="text"
        placeholder="Category"
    />
    <input
        name="merchantAddress"
        type="text"
        placeholder="1234 S Market St."
    />
    <input
        name="merchantCity"
        type="text"
        placeholder="Salt Lake City"
    />
    <input
        name="merchantState"
        type="text"
        placeholder="UT"
    />
    <input  
        name="merchantZip"
        type="text"
        placeholder="84121"
    />

<button className="btn btn-lg btn-primary btn-block" type="submit">Create account</button>

     
</form>

    
    
</div>;

export default Merchant;