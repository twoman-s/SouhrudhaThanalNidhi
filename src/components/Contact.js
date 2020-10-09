import React, { Component } from "react";
import axios from "axios";
import "./../assets/Contact.css";

class Contact extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      to: "",
      phone: "",
      content: "",
    };
  }
  focusFunc = (input) => {
    let parent = input.parentNode;
    parent.classList.add("focus");
  };

  blurFunc = (input) => {
    let parent = input.parentNode;
    if (input.value === "") {
      parent.classList.remove("focus");
    }
  };
  handleName = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      to: e.target.value,
    });
  };
  handlePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  handleContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post(`https://fierce-bastion-23012.herokuapp.com/send/`, this.state)
      .then((res) => {
        if (res.data.status === "success") {
          document.querySelector(".social-media").style.display = "block";
          setTimeout(function () {
            document.querySelector(".social-media").style.display = "none";
          }, 4000);
          console.log(res);
        } else {
          document.querySelector(".error").style.display = "block";
          setTimeout(function () {
            document.querySelector(".error").style.display = "none";
          }, 4000);
          // console.log(res);
        }
        var inputs = document.getElementsByTagName("input");
        var textarea = document.getElementsByTagName("textarea");
        textarea[0].value = "";
        for (var i = 0; i < inputs.length; i++) {
          inputs[i].value = "";
        }
        var send = document.getElementsByClassName("send");
        send[0].value = "Send";
      });
  };
  componentDidMount() {
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      input.addEventListener("focus", () => this.focusFunc(input));
      input.addEventListener("blur", () => this.blurFunc(input));
    });
  }
  render() {
    return (
      <div id="contact" className="container contact-form">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <div className="border"></div>
            <p className="text">
              Want to know more about <span className="highlight">us</span> ?
              <br />
              Want to know more about our{" "}
              <span className="highlight">services</span> and{" "}
              <span className="highlight">schemes</span>?
              <br />
              Send us a message and we will contact you back
            </p>

            {/* <div className="info">
            <div className="information">
              <img src="img/location.png" className="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src="img/email.png" className="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div> */}

            <div className="social-media">
              <div className="social-icons">
                <a href="fb">
                  <i className="fa fa-check"></i>
                </a>
              </div>
              <p>Message send successfully</p>
            </div>
            <div className="social-media error">
              <div className="social-icons">
                <a href="fb">
                  <i className="fa fa-times"></i>
                </a>
              </div>
              <p>Sorry something went wrong. Please try again later</p>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form
              id="#contact-form"
              onSubmit={this.handleSumbit}
              autoComplete="off"
            >
              <h3 className="title-contact">Contact us</h3>
              <div className="input-container">
                <input
                  onChange={this.handleName}
                  required
                  type="text"
                  name="name"
                  className="input"
                />
                <label htmlFor="">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input
                  onChange={this.handleEmail}
                  required
                  type="email"
                  name="email"
                  className="input"
                />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input
                  onChange={this.handlePhone}
                  required
                  type="tel"
                  name="phone"
                  className="input"
                />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  onChange={this.handleContent}
                  name="message"
                  className="input"
                ></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <input required type="submit" value="Send" className="btn send" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
