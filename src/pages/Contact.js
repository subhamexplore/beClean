import "../assets/styles/Contact.css";
import { useState } from "react";
import axios from "axios";
import message from "../assets/images/msg.png";
import phone from "../assets/images/ph.png";
import location from "../assets/images/loc.png";
import girl from "../assets/images/g.png";
import Form from "../components/Form";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    selectService: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const saveFormData = async () => {
    try {
      await axios.post(
        "https://13.200.179.77:9090/reachus/create/reachus",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Form added successfully");
    } catch (error) {
      console.error("Error saving form", error);
    }
  };

  const handleSubmit = (e) => {
    saveFormData();
  };

  const serviceData = [
    {
      label: "Rice Mill",
      value: "rice mill",
    },
    {
      label: "ERP",
      value: "erp",
    },
    {
      label: "HRMS",
      value: "hrms",
    },
    {
      label: "LMS",
      value: "lms",
    },
    {
      label: "SMS",
      value: "sms",
    },
  ];
  console.log(formData);

  return (
    <div>
      <div className="Bann-y">
        <div className="top-main-y">
          <div className="who-y">
            <div
              className="heading-con"
              id="astro"
              style={{ fontSize: "4rem", color: "white" }}
            >
              CONTACT
            </div>
          </div>
        </div>
      </div>
      <div className="journal-blog-y">
        {/* <div className="form-y">
          <form action="" className="form-iy" onSubmit={handleSubmit}>
            <h1 id="astro" className="form-cont-h">
              Let's Talk
            </h1>
            <p className="form-cont-p" style={{ color: "#7E7E7E" }}>
            Get in touch with VISION Group Cleaning today to schedule a service or learn more about how we can keep your spaces immaculate and welcoming.
            </p>
            <div className="d-flex" style={{ gap: "10px" }}>
              <div className="form-m" style={{ width: "100%" }}>
                <label htmlFor="name">First Name</label>
                <br />
                <input
                  className="in-form"
                  type="text"
                  autoComplete="off"
                  placeholder="Enter Your Name"
                  name="fname"
                  id="fname"
                  value={formData.fname}
                  onChange={(e) => handleInputChange(e)}
                  required
                ></input>
              </div>
              <div className="form-m" style={{ width: "100%" }}>
                <label htmlFor="name">Last Name</label>
                <br />
                <input
                  className="in-form"
                  type="text"
                  autoComplete="off"
                  placeholder="Enter Your Name"
                  name="lname"
                  id="lname"
                  value={formData.lname}
                  onChange={(e) => handleInputChange(e)}
                  required
                ></input>
              </div>
            </div>
            <div className="form-m">
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="in-form"
                type="email"
                autoComplete="off"
                placeholder="Enter E-mail Address"
                name="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange(e)}
                required
              ></input>
            </div>
            <div className="form-m">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                style={{
                  width: "100%",
                  height: "200px",
                  border: "1px solid #132B68",
                  borderRadius: "8px",
                  padding: "10px",
                }}
                placeholder="Message"
                name="message"
                id=""
              ></textarea>
            </div>
            <div className="form-m">
              <input
                type="checkbox"
                required
                style={{ transform: "scale(1.3)" }}
              ></input>
              <label
                className="my-4 mx-3"
                htmlFor="message"
                style={{ color: "#7E7E7E" }}
              >
                I agree to further communications messages
              </label>
            </div>
            <div className="form-m" style={{ marginTop: "-25px" }}>
              <input
                type="checkbox"
                required
                style={{ transform: "scale(1.3)" }}
              ></input>
              <label
                htmlFor="message"
                className="mx-3"
                style={{ color: "#7E7E7E" }}
              >
                I give my consent to store my data
              </label>
            </div>
            <div className="button-sub my-2 button-get-r">
              <button
                className="who-btn-gs"
                type="submit"
                style={{ width: "100%" }}
              >
                Contact Now
              </button>
            </div>
          </form>
        </div> */}
        <div className="form-emd">
        <h1 id="astro" className="form-cont-h">
              Let's Talk
            </h1>
            <p className="form-cont-p" style={{ color: "#7E7E7E" }}>
            Get in touch with VISION Group Cleaning today to schedule a service or learn more about how we can keep your spaces immaculate and welcoming.
            </p>
          <Form />
        </div>
        <div className="contactRight">
          <div>
            <img className="girl" src={girl} alt="" />
          </div>
          <div className="contactTxt">
            <div className="reach-p">
              <img src={message} alt="" />
            </div>
            <div className="det">
              <div>Quick Contact</div>
              <a
                href="mailto:inquiries@vgcleaning.com"
                style={{ textDecoration: "none", color: "black" }}
                className=""
              >
                inquiries@vgcleaning.com
              </a>
            </div>
          </div>
          <div className="contactTxt">
            <div className="reach-p">
              <img src={phone} alt="" />
            </div>
            <div className="det">
              <div>Call Us</div>
              <a
                href="tel:8179379888"
                style={{ textDecoration: "none", color: "black" }}
                className=""
              >
                817-937-9888
              </a>
            </div>
          </div>
          <div className="contactTxt">
            <div className="reach-p">
              <img src={location} alt="" />
            </div>
            <div className="det">
              <div>Location</div>
              <p className="">
                2580 W. Camp Wisdom Rd.Suite 100-187 Grand Prairie, TX 75052
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
