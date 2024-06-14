import "../assets/styles/About.css";
import Benefits from "../assets/images/Group 75.png";
import Product from "../assets/images/aboutCir.png";
import covid from "../assets/images/women.png";
import construction from "../assets/images/factry.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import caro1 from "../assets/images/caro1.png";
import caro2 from "../assets/images/caro2.png";
import caro3 from "../assets/images/caro3.png";
import caro from "../assets/images/caro.png";
import { useNavigate } from "react-router-dom";

const Abouts = () => {
  const nav = useNavigate();
  const carosettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "red",
          background: "black",
          borderRadius: "50%",
          transform: "scale(1.2)",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div>
      <div className="Bann-ri" id="ab">
        <div className="blue-box">
          <h1 className="mb-4" id="astro" style={{ fontSize: "2rem" }}>
            Services That Adhere To All Your Need
          </h1>
          <p style={{ fontSize: "0.85rem" }}>
            Our Vision is to provide a trustworthy and quality cleaning service
            that will far exceed the expectations of the customer the first time
            around
          </p>
          <div className="button-get-r" type="button">
            <a
              href="https://www.honeybook.com/widget/vision_group_cleaning_279052/cf_id/666b72c762383900258d8246"
              target="_blank"
            >
              <button
                className="who-btn-gs"
                style={{
                  border: "3px solid white",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                }}
              >
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="mission-ri">
        <div className="tes-m-ri">
          <h6 className="fw-light"> SERVICE </h6>

          <h2 id="astro">
            Problem solving for all your building maintenance needs.
          </h2>

          <p>
            Having the right commercial cleaning service is essential for the
            well-being of your company. A clean, fresh appearance is more
            inviting for customers, which helps a business retain and increase
            its load of clients.
          </p>
          <div className="lorem-top" style={{ gap: "10px" }}>
            <div className="lorem">
              <h5>Post & Final Construction Cleaning</h5>
              <p>
                We offer comprehensive post and final construction cleaning
                services, ensuring every detail is handled from removing debris
                and dust to sanitizing surfaces, so your newly renovated space
                is pristine and ready for use.
              </p>
            </div>
            <div className="lorem">
              <h5>Covid-19 Deep Cleaning & Disinfection</h5>
              <p>
                We deliver advanced COVID-19 deep cleaning using electrostatic
                sprayers and CDC-approved disinfectants, ensuring a safe and
                germ-free workplace.
              </p>
            </div>
          </div>
          <div className="lorem-top mt-3" style={{ gap: "10px" }}>
            <div className="lorem">
              <h5>Commercial Cleaning</h5>
              <p>
                We specialize in comprehensive commercial cleaning services,
                including facilities management, janitorial maintenance, and
                specialized cleaning for malls, offices, schools, and airports,
                with a focus on safety, efficiency, and top-quality service.
              </p>
            </div>
            <div className="lorem">
              <h5>Residential Cleaning</h5>
              <p>
                We provide thorough post and final cleaning services before
                staging and move-in, ensuring your home is pristine and ready to
                enjoy, from utility rooms and bathrooms to kitchens and
                bedrooms, using top-quality, products.
              </p>
            </div>
          </div>
        </div>

        <div className="rice-ir">
          <img src={Product} alt="" className="" />
        </div>
      </div>

      {/* <div className="container slider-container">
        <Slider {...carosettings}>
          <div className="d-flex justify-content-center caro-div">
            <img className="caro-slide-one" src={caro} alt="" />
          </div>
          <div className="d-flex justify-content-center caro-div">
            <img className="caro-slide-one" src={caro} alt="" />
          </div>
          <div className="d-flex justify-content-center caro-div">
            <img className="caro-slide-one" src={caro} alt="" />
          </div>
          <div className="d-flex justify-content-center caro-div">
            <img className="caro-slide-one" src={caro} alt="" />
          </div>
        </Slider>
      </div> */}
      <br />
      <br />
      <br />
      <br />

      <div className="container caro-crd">
        <Slider {...settings}>
          <div className="d-flex justify-content-center">
            <img src={caro1} className="caro-cards" alt="" />
          </div>
          <div className="d-flex justify-content-center">
            <img src={caro2} className="caro-cards" alt="" />
          </div>
          <div className="d-flex justify-content-center">
            <img src={caro3} className="caro-cards" alt="" />
          </div>
          <div className="d-flex justify-content-center">
            <img src={caro1} className="caro-cards" alt="" />
          </div>
          <div className="d-flex justify-content-center">
            <img src={caro2} className="caro-cards" alt="" />
          </div>
          <div className="d-flex justify-content-center">
            <img src={caro3} className="caro-cards" alt="" />
          </div>
        </Slider>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="about-v-r">
        <div className="rice-b">
          <img src={covid} alt="" className="hand-img-r" />
        </div>

        <div className="text-v-r">
          <h6 className="fw-light">OUR HISTORY</h6>

          <h2 className="fw-bold" id="astro">
            LORRI S. DOTSON, FOUNDER/CEO
          </h2>
          <p style={{ fontWeight: "900" }}>
            Lorri S. Dotson is a trailblazing entrepreneur and visionary leader
            in the cleaning industry.
          </p>
          <p style={{ color: "#7E7E7E", fontSize: "15px" }}>
            As the Founder and CEO of VIGCE LLC (dba VISION Group Cleaning) and
            Owner/President of Fleetwood Cleaning Services of GA Inc., she has
            established a diversified and highly successful cleaning service
            that operates seven days a week. With a strong focus on servicing
            office buildings, schools, universities, medical centers,
            apartments, malls, and more, Lorri's companies have become go-to
            solutions for commercial cleaning needs. With over two d..
          </p>
          <p style={{ fontWeight: "900", color: "black" }}>
            EDUCATION SKILLS PROFILE
          </p>
          <ul style={{ color: "#7E7E7E", fontSize: "15px" }}>
            <li>
              University of Texas Arlington - MPA degreed in Nonprofit
              Management/Economics, December 2016
            </li>
            <li>Nonprofit Management Certification, May 2017</li>
            <li>Northwood University - BBA degreed, May 2013</li>
            <li>
              Tarrant County College - Associate of Arts degreed, May 2011
            </li>
            <li>Certified Life Skill Coach, September 2005</li>
          </ul>
          <div className="ho">
            <div className="">
              <p style={{ fontWeight: "900", color: "black" }}>
                Head Quarters: 
              </p>
              <p>2580 W. Camp Wisdom</p>
              <p style={{ marginTop: "-10px" }}>Rd.Suite 100-187</p>
              <p style={{ marginTop: "-10px" }}>Grand Prairie, TX 75052</p>
            </div>
            <div>
              <p style={{ fontWeight: "900", color: "black" }}>
                Other credentials: 
              </p>
              <p>Secret Service Background checked.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-ri">
        <div className="tes-m-ri" style={{ padding: "0 10px" }}>
          <p style={{ fontWeight: "900", color: "black" }}>
            EDUCATION SKILLS PROFILE
          </p>
          <ul style={{ color: "#7E7E7E", fontSize: "15px" }}>
            <li>
              Substantial experience of conducting clean up and tidying of
              construction site and newly developed buildings
            </li>
            <li>
              In-depth knowledge of cleaning procedures, safety practices, and
              garbage disposal methods
            </li>
            <li>
              Remarkable knowledge of inventory stocking and customer service
              practices
            </li>
            <li>Proficient in operating cleaning equipment and lifts</li>
            <li>
              Ability to manage and complete all assigned jobs, efficiently and
              on time
            </li>
            <li>Ability to manage and maintain work supplies, properly</li>
          </ul>
          <p style={{ fontWeight: "900", color: "black" }}>
            PROFESSIONAL EXPERIENCE
          </p>
          <p style={{ fontWeight: "900", color: "black", marginTop: "-5px" }}>
            VISION GROUP ENTERPRISE
          </p>
          <ul style={{ color: "#7E7E7E", fontSize: "15px" }}>
            <li>
              Subcontractor Contractor LLC managing owner operator of VISION
              Group Cleaning
            </li>
            <li>Coordinator of contract labor</li>
            <li>Manage business operations and budgets of a million dollars</li>
            <li>Cultivated business partnerships</li>
            <li>
              Handled all business operations such as administration and
              management of monthly reports
            </li>
          </ul>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "900",
              color: "black",
              marginTop: "-5px",
            }}
          >
            We are Fully Insured and Bonded Upon Request
          </p>
        </div>

        <div className="rice-ir-2">
          <img id="contr" src={construction} alt="" className="" />
        </div>
      </div>

      <div className="Bann-rix">
        <div className="emptyy" style={{ width: "40%" }}></div>
        <div className="st-bn">
          <div className="statement">
            <h6 className="fw-light">STATEMENT</h6>

            <h2 className="fw-bold" id="astro">
              CAPABILITY STATEMENT
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <div className="button-get-r" id="donw-btn" type="button">
              <a href="https://drive.google.com/uc?export=download&id=17iVR9JrfukXVqmMuRAsTsekPX5DAdvw6">
                <button
                  className="who-btn-gs"
                  style={{ border: "3px solid white", borderRadius: "8px" }}
                >
                  Click here to download
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
