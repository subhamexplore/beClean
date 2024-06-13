import "../assets/styles/Home.css";
import Benefits from "../assets/images/Group 75.png";
import Tick from "../assets/images/Item.png";
import Dot from "../assets/images/Ellips-e.png";
import Product from "../assets/images/Group 132.png";
import covid from "../assets/images/Group 52.png";
import construction from "../assets/images/Group 10.png";

const Home = () => {
  return (
    <div>
      <div className="Bann-ri">
        <div className="blue-box">
          <h1 className="mb-4" id="astro" style={{ fontSize:'2rem' }}>
            OUTSTANDING SERVICES MAKES THE DIFFERENCE{" "}
          </h1>
          <p style={{ fontSize: "0.85rem" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
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
              Learn More
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="about-v-r">
        <div className="rice-b-1">
          <img src={Benefits} alt="" className="hand-img-r" />
        </div>

        <div className="text-v-r">
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
          <div className="heading-ri">
            <img src={Tick} alt="" className="direct-r" />
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
            <img src={Tick} alt="" className="direct-r" />
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
            <button className="who-btn-gs">Book a free consultation</button>
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
            <button className="who-btn-gs">Book a free consultation</button>
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
            <button className="who-btn-gs">Book a free consultation</button>
          </div>
        </div>

        <div className="rice-ir">
          <img src={construction} alt="" className="" />
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
              <button
                className="who-btn-gs"
                style={{ border: "3px solid white", borderRadius: "8px" }}
              >
                Click here to download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
