import React, { useState } from "react";

const Contact = () => {
  const [data,setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  });

  const formSubmit = (e) =>{
    e.preventDefault();
    if(data.phone.length!==10) {
      alert(`Enter correct phone no.`);
    }
    else{
    alert(`${data.fullname} with phone no. ${data.phone} and email ${data.email} has given a message ${data.msg}`);
    }
  };
  const inputEvent = (event) =>{
    setData((preVal)=>{
      return {
        ...preVal,
        [event.target.name] : event.target.value,
      }
    })
  };
  return (
    <>
      <div id="contact" className="my-5">
        <div className="text-center">
          <h1>Contact Us</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                  <div className="mb-3 text-start">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name = "fullname"
                      value = {data.fullname}
                      onChange = {inputEvent}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name = "phone"
                      value = {data.phone}
                      onChange = {inputEvent}
                      placeholder="Enter your phone no."
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name = "email"
                      value = {data.email}
                      onChange = {inputEvent}
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name = "msg"
                      value = {data.msg}
                      onChange = {inputEvent}
                    ></textarea>
                  </div>
                  <div class="col-12 text-start">
                    <button class="btn btn-outline-primary" type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
