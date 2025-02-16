import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import MiddleNavbar from "../MiddleNavbar.js";
import FAQSection from "./faqs";
import Timeline from "./timeline";
import CountdownTimer from "../Timer";
import { QRCodeSVG } from "qrcode.react";

const downloadDataset = () => {
  window.open(
    "https://huggingface.co/datasets/hci-lab-dcsug/akan_speech_data/tree/main",
    "_blank"
  );
};

function HomePage() {
  return (
    <div className="hackathon-page">
      {/* Main Content Section */}
      <div className="main-content">
        <div className="tags-section">
          <div className="tags-container">
            <span className="tag">In-Person</span>
            <span className="tag">Free</span>
            <span className="tag">Team Size: 1-5</span>
          </div>
        </div>
        {/*About, Rules, etc. */}
        <section id="about" className="section overview">
          <h3>About</h3>
          <div className="about-hack">
            <p className="about-1">
              The Centre for Digital Language Inclusion(CDLI) is delighted to
              introduce its first hackathon to bridge the communication gap for
              individuals with speech disabilities through the development of
              technological solution that leverages automatic speech recognition
              or Text-to-Speech (TTS). 
            </p>
            <p className="about-1">
              The Tɛkyerɛma Pa (Good tongue) Hackathon 2025 invites all
              university students and technology advocates to participate in
              creating innovative solutions that will make a significant impact
              on individuals with speech impairments in Ghana and beyond.
            </p>
            <p className="about-1">
              At this hackathon, participants will be given the unique
              opportunity to help bridge the communication gap for individuals
              with speech disabilities through the development of technological
              solution that leverage automatic speech recognition or
              Text-to-Speech (TTS) tailored for Ghanaian languages. By focusing
              on these areas, the hackathon aims to create accessible tools that
              empower individuals to communicate more effectively in their
              native language, breaking down barriers to inclusion.
            </p>

            <p className="digital-language-inclusion">
              The{" "}
              <a
                href="https://www.cdl-inclusion.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Centre for Digital Language Inclusion
              </a>{" "}
              is led by the{" "}
              <a
                href="https://www.disabilityinnovation.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Global Disability Innovation Hub
              </a>{" "}
              in partnership with{" "}
              <a
                href="https://www.ucl.ac.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                University College London (UCL)
              </a>{" "}
              and the
              <a
                href="https://www.ug.edu.gh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                University of Ghana (UG)
              </a>
              , funded by{" "}
              <a
                href="https://www.gov.uk/international-development-funding/at2030"
                target="_blank"
                rel="noopener noreferrer"
              >
                UK aid's AT2030 programme
              </a>
              , alongside support from{" "}
              <a
                href="https://www.google.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>
              .
            </p>
          </div>
          <p className="about-1">
            A curated dataset of selected Ghanaian languages namely Akan, Ewe,
            Ga, Dagbani, and Dagaare is available to participants to support
            their project.
          </p>
          <button className="about-link download-btn" onClick={downloadDataset}>
            Link to Dataset
          </button>
        </section>
        <MiddleNavbar />
        {/* Aims Section */}
        <section id="goals" className="section aims">
          <h3>Aims</h3>
          <p>
            To design and develop an app that supports individuals with speech
            impairments to communicate effectively and inclusively in Ghanaian
            languages.
          </p>
          <h4>Key Goals:</h4>
          <ul>
            <li>
              Integrate Text-to-Speech (TTS) or Automatic Speech
              Recognition(ASR) for Ghanaian languages.cle
            </li>
            <li>
              Develop an intuitive and user-friendly interface tailored to the
              unique needs of individuals with speech impairments, prioritizing
              ease of use, cultural relevance, and inclusivity.
            </li>
            <li>
              Address accessibility standards, enabling individuals with varying
              levels of impairment to use the app seamlessly.
            </li>
            <li>Scalability of the app to other low-resource languages.</li>
          </ul>
        </section>

        {/* Rules Section */}
        <section id="rules" className="section rules">
          <h3>Rules</h3>
          <ul>
            <li>Each team is expected to have a maximum of 5 members.</li>
            <li>Each team must include at least one female participant.</li>
            <li>
              Preferably, each team should have an individual with any form of
              speech impairment.
            </li>
          </ul>
        </section>
        <Timeline />
        {/* Awards Section */}
        <section id="prizes" className="section awards">
          <h3>Awards</h3>
          <ul>
            <li>
              Up to $5,000 in cash awards
              <ul className="prizes-list">
                <li>1st place: $2,500</li>
                <li>2nd place: $1,500</li>
                <li>3rd place: $1,000</li>
              </ul>
            </li>
            <li>
              Mentorship opportunities with experts from Google and Global
              Disability Innovation Hub (GDI Hub), University College of London
            </li>
            <li>
              Potential MSc Scholarship Opportunities at the Human-Computer
              Interaction lab, Department of Computer Science, University of
              Ghana
            </li>
          </ul>
        </section>
        <FAQSection />
        {/* Sponsors Section */}
        <section id="sponsors" className="section sponsors">
          <h2>Sponsors</h2>
          <img src={`${process.env.PUBLIC_URL}/ucl.png`} alt="UCL Hub" />
          <img src={`${process.env.PUBLIC_URL}/ug.png`} alt="UG HCI Lab" />
          {/* AT2030 SVG Logo */}
          <img src={`${process.env.PUBLIC_URL}/AT2030.png`} alt="at2030" />

          {/* CDLI SVG Logo */}
          <img src={`${process.env.PUBLIC_URL}/CDLI.png`} alt="cdli" />

          {/* UK Aid SVG Logo */}
          <img src={`${process.env.PUBLIC_URL}/UKaid.png`} alt="ukaid" />
        </section>
      </div>

      {/* Register Card and QR Code together in a parent div */}
      <div className="register-card-container">
        <div className="register-card">
          <CountdownTimer />
          <h3>Register Now</h3>
          <p>
            Don't miss out on this amazing opportunity to make a difference!
          </p>
          <Link
            to="https://link.webropol.com/s/Tekyeremapahackathon"
            className="register-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </Link>
        </div>

        {/* QR Code Section for Registration */}
        <div className="qr-code-container">
          <h3>Scan the QR Code to Register</h3>
          <QRCodeSVG
            value="https://link.webropol.com/s/Tekyeremapahackathon"
            size={200}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
