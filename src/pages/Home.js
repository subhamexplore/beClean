import "../assets/styles/Home.css";
import Benefits from "../assets/images/Group 75.png";
import Tick from "../assets/images/Item.png";
import Dot from "../assets/images/Ellips-e.png";
import Product from "../assets/images/Group 132.png";
import covid from "../assets/images/Group 52.png";
import construction from "../assets/images/Group 10.png";
import Company from "../assets/images/comp.png";
import { useNavigate } from "react-router-dom";
import video from "../assets/videos/vid.mp4";
import cc from "../assets/images/cc.png";

const Home = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="Bann-ri">
        <div className="blue-box">
          <h1 className="mb-4" id="astro" style={{ fontSize: "2rem" }}>
            Be Clean, Where Excellence Meets Your Business Needs
          </h1>
          <p style={{ fontSize: "0.85rem" }}>
            We ensure your workspace is immaculate, enhancing productivity and
            creating a healthy environment for your employees. Experience
            top-tier cleaning services, leaving a lasting impression on clients
            and staff alike
          </p>
          <div className="button-get-r" type="button">
            <button
              onClick={() => nav("/about")}
              className="who-btn-gs"
              style={{
                border: "3px solid white",
                borderRadius: "8px",
                fontSize: "0.95rem",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="about-v-r">
        <div className="rice-b-1">
          {/* <img src={Benefits} alt="" className="hand-img-r" /> */}
          <video className="hand-img-r" poster={Benefits} controls>
            <source src={video} type="video/mp4" />
          </video>
          <img className="cc" src={cc} alt="" />
        </div>

        <div className="text-v-r mx-5">
          <h6 className="fw-light">WHAT WE DO</h6>

          <h2 className="fw-bold" id="astro">
            Reliable. Trustworthy. Proven
          </h2>
          <p style={{ color: "#7E7E7E" }}>
            We use cutting edge techonolgy and cleaning processes adhers to all
            OSHA regulations,is certified by IJCSA
          </p>
          <div className="heading-ri">
            <img src={Tick} alt="" className="direct-r" />
            <div>
              <h3 style={{ fontWeight: "600" }}>Industry Expertise</h3>
              <div className="dir-m-ri">
                <p>
                  With years of expertise in ERP solutions, we understand the
                  intricacies of the rice mill industry and have crafted a
                  solution that caters specifically to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-ri">
        <div className="tes-m-ri">
          <h2 id="astro">
            Problem solving for all your building maintenance needs.
          </h2>

          <p>
            Having the right commercial cleaning service is essential for the
            well-being of your company. A clean, fresh appearance is more
            inviting for customers, which helps a business retain and increase
            its load of clients.
          </p>
          <div className="heading-ri">
            {/* <img src={Tick} alt="" className="direct-r" /> */}
            <div>
              <div className="dir-m-ri">
                <p>
                  With years of expertise in ERP solutions, we understand the
                  intricacies of the rice mill industry and have crafted a
                  solution that caters specifically to your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="heading-ri">
            {/* <img src={Tick} alt="" className="direct-r" /> */}
            <div>
              <div className="dir-m-ri">
                <p>
                  Our ERP system for rice mills incorporates features such as
                  production planning, inventory tracking, quality control, and
                  supply chain optimization – all customized for the rice
                  milling process.
                </p>
              </div>
            </div>
          </div>
          <div className="button-get-r" type="button">
            <a
              href="https://www.honeybook.com/widget/vision_group_cleaning_279052/cf_id/666b72c762383900258d8246"
              target="_blank"
            >
              <button className="who-btn-gs">Book a free consultation</button>
            </a>
          </div>
        </div>

        <div className="rice-ir">
          <img src={Product} alt="" className="" />
        </div>
      </div>

      <div className="about-v-r">
        <div className="rice-b">
          <img src={covid} alt="" className="hand-img-r" />
        </div>

        <div className="text-v-r">
          <h6 className="fw-light">COVID-19</h6>

          <h2 className="fw-bold" id="astro">
            COVID-19
          </h2>
          <h2 className="fw-bold" id="astro" style={{ marginTop: "-15px" }}>
            DEEP CLEANING & DISINFECTION
          </h2>
          <p>
            At VISION Group Cleaning, we are committed to putting our clients
            first. With COVID-19 officially listed as a pandemic by the World
            Health Organization (WHO), and with so much yet to understand, we
            wanted to take a moment to let you know the extraordinary and
            proactive steps we are taking to ensure your team’s safety.
          </p>
          <ul style={{ color: "#7E7E7E", fontSize: "15px" }}>
            <li>Wipe and disinfect the front entrance door handles.</li>
            <li>Wipe and disinfect all door handles.</li>
            <li>Wipe and disinfect all phones.</li>
            <li>
              Wipe and disinfect all cabinet handles throughout the building.
            </li>
            <li>
              Wipe and disinfect all levers and turnable devices in the
              building.
            </li>
            <li>Wipe and disinfect all keypads.</li>
            <li>Wipe and disinfect all light switches.</li>
            <li>Wipe and disinfect all public pressable buttons.</li>
            <li>Wipe and disinfect all computer mouse devices.</li>
            <li>Wipe and disinfect all workstation tables and chairs.</li>
          </ul>
          <div className="button-get-r" type="button">
            <a
              href="https://www.honeybook.com/widget/vision_group_cleaning_279052/cf_id/666b72c762383900258d8246"
              target="_blank"
            >
              <button className="who-btn-gs">Book a free consultation</button>
            </a>
          </div>
        </div>
      </div>
      <div className="mission-ri">
        <div className="tes-m-ri">
          <h6 className="fw-light"> CONSTRUCTION CLEANING </h6>

          <h2 className="fw-bold" id="astro">
            POST & FINAL CONSTRUCTION CLEANING
          </h2>

          <p>
            Making structural and aesthetic improvements to a building or office
            space is a huge investment of time and resources. A renovation
            project is not complete, however, without a professional and
            thorough cleaning. That’s where VISION Group Cleaning comes in. We
            provide the final touch necessary for your building’s debut so that
            you can welcome your employees and clients into a clean, fresh
            smelling and fully presentable space.
          </p>
          <ul style={{ color: "#7E7E7E", fontSize: "15px" }}>
            <li>Wash all surfaces and remove stains.</li>
            <li>
              Remove high dust from light fixtures, vents, ductwork, ceiling
              pipes, etc.
            </li>
            <li>
              Scrub, dust and vacuum all surfaces including furniture and trim
              work.
            </li>
            <li>Sanitize kitchens and lavatories.</li>
            <li>Clean insides of desks and file cabinets.</li>
            <li>
              Scrub floors and tiles, polish stainless steel, wipe walls, etc.
            </li>
            <li>Clean, wax and buff floors.</li>
            <li>Clean windowsills and window frames.</li>
            <li>
              Clean windows and glass including scraping and etching removal.
            </li>
          </ul>
          <div className="button-get-r" type="button">
            <a
              href="https://www.honeybook.com/widget/vision_group_cleaning_279052/cf_id/666b72c762383900258d8246"
              target="_blank"
            >
              <button className="who-btn-gs">Book a free consultation</button>
            </a>
          </div>
        </div>

        <div className="rice-ir">
          <img src={construction} alt="" className="" />
        </div>
      </div>

      <div className="about-v-r ">
        <div className="text-v-r">
          <h5 className="fw-bold" id="astro">
            Codes
          </h5>
          <br />
          <ul style={{ color: "black", fontSize: "15px" }}>
            <li>CAGE - 8BLG3</li>
            <li>NIACS Codes - 561720, 561740, 562998, 561790, 561210</li>
          </ul>
          <h5 className="fw-bold" id="astro">
            Memberships:
          </h5>
          <br />
          <div style={{ color: "black", fontSize: "15px", lineHeight: "15px" }}>
            <p style={{ color: "black", fontSize: "15px" }}>
              Member of the Chicago Chamber of Commerce
            </p>
            <p style={{ color: "black", fontSize: "15px" }}>
              Member of the Shreveport Chamber of Commerce
            </p>
            <p style={{ color: "black", fontSize: "15px" }}>
              Member of the RBCA Regional Black Contractors Association
            </p>
            <p style={{ color: "black", fontSize: "15px" }}>
              Member of the National Black Contractors Association
            </p>
            <p style={{ color: "black", fontSize: "15px" }}>
              Member of the Atlanta Chamber of Commerce
            </p>
          </div>
          <h5 className="fw-bold" id="astro">
            Certifications:
          </h5>
          <br />
          <div style={{ color: "black", fontSize: "15px", lineHeight: "15px" }}>
            <p style={{ color: "black", fontSize: "15px" }}>
              Member of the Chicago Chamber of Commerce
            </p>
            <p style={{ color: "black", fontSize: "15px" }}>
              Member of the Shreveport Chamber of Commerce
            </p>
            <p style={{ color: "black", fontSize: "15px" }}>
              Member of the RBCA Regional Black Contractors Association
            </p>
            <p style={{ color: "black", fontSize: "15px" }}>
              Member of the National Black Contractors Association
            </p>
            <p style={{ color: "black", fontSize: "15px" }}>
              Member of the Atlanta Chamber of Commerce
            </p>
          </div>
        </div>
        <div className="rice-b-2">
          <img src={Company} alt="" className="hand-img-r" />
        </div>
      </div>
    </div>
  );
};

export default Home;
