import "../assets/styles/About.css";
import Benefits from "../assets/images/Group 75.png";
import Product from "../assets/images/aboutCir.png";
import covid from "../assets/images/women.png";
import construction from "../assets/images/factry.png";
import caro from "../assets/images/caro.png";
import Card from "../components/CardCaro";

const Abouts = () => {
  return (
    <div>
      <div className="Bann-ri" id="ab">
        <div className="blue-box">
          <h1 className="mb-4" id="astro" style={{ fontSize: "2rem" }}>
            SERVICES THAT ADHERE TO ALL YOUR NEEDSs
          </h1>
          <p style={{ fontSize: "0.85rem" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500
          </p>
          <div className="button-get-r" type="button">
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
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="lorem">
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
          <div className="lorem-top mt-3" style={{ gap: "10px" }}>
            <div className="lorem">
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="lorem">
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>

        <div className="rice-ir">
          <img src={Product} alt="" className="" />
        </div>
      </div>

      <div className="caroo">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={caro}
                className="d-block w-100"
                alt="..."
                style={{ margin: "auto", padding: "50px" }}
              />
            </div>
            <div className="carousel-item active">
              <img
                src={caro}
                className="d-block w-100"
                alt="..."
                style={{ margin: "auto", padding: "50px" }}
              />
            </div>
            <div className="carousel-item active">
              <img
                src={caro}
                className="d-block w-100"
                alt="..."
                style={{ margin: "auto", padding: "50px" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div><br /><br />
      <div style={{display:'flex', justifyContent:'center'}}>
        <Card />
      </div><br /><br />
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
    </div>
  );
};

export default Abouts;
