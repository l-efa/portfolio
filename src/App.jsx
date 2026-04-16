import { motion, spring, useScroll } from "motion/react";
import profilePicture2 from "./assets/profiilikuva2.png";
import koi from "./assets/koi.png";
import moodiary from "./assets/proju2.png";
import hobbly from "./assets/proju3.png";
import idle from "./assets/idle.png";
import forestai from "./assets/forestai.png";
import noimage from "./assets/noimage.jpg";
import reactIcon from "./assets/react.svg";
import htmlIcon from "./assets/html.svg";
import cssIcon from "./assets/css.svg";
import javascriptIcon from "./assets/javascript.svg";
import typescripticon from "./assets/Typescript_logo.svg";
import dockericon from "./assets/docker.png";
import nodeIcon from "./assets/node.svg";
import expressIcon from "./assets/express.png";
import postgreIcon from "./assets/postgre.svg";
import mongoIcon from "./assets/mongo.svg";
import csharpIcon from "./assets/csharp.svg";
import githubIcon from "./assets/github.png";
import claudeIcon from "./assets/claudelogo.svg";
import vscIcon from "./assets/vsclogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faFolder, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import finnishFlag from "./assets/finnishflag.png";
import ukFlag from "./assets/ukflag.png";
import { useEffect, useRef, useState } from "react";
import fi from "./locales/fi.json";
import en from "./locales/en.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./app.css";

function App() {
  const translations = {
    en,
    fi,
  };

  const [showSidebar, setShowSidebar] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [phoneNumber, setpPhoneNumber] = useState("");
  const [revealed, setRevealed] = useState(false);

  const t = (key) => translations[language][key] || key;

  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const locationRef = useRef(null);

  const copyContact = (ref) => {
    const value = ref.current?.innerText;
    if (value) {
      console.log(value);
      navigator.clipboard.writeText(value);
    }
  };

  const scrollTo = (id) => {
    console.log(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const openSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log("nappi");
  };

  const changeTheme = () => {
    setDarkmode((prev) => !prev);
  };

  const changeLanguage = () => {
    console.log("changelang");
    if (language === "en") {
      setLanguage("fi");
      return;
    }
    setLanguage("en");
  };

  const revealPhone = () => {
    setpPhoneNumber("+358 400268511");
    setRevealed(true);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkmode);
  }, [darkmode]);

  return (
    <div className="container">
      <button
        className={`hamburger ${showSidebar ? "pressed" : ""}`}
        onClick={() => {
          openSidebar();
        }}
      >
        {showSidebar ? (
          <FontAwesomeIcon className="x" icon={faX} />
        ) : (
          <FontAwesomeIcon className="bars" icon={faBars} />
        )}
      </button>
      <div className="flex-container">
        <section className={`flex-item item1 ${showSidebar ? "show" : ""}`}>
          <article className="sidebar-profile sidebar-item">
            <motion.figure
              className="profile-image-container"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <img
                className="profile-image"
                src={profilePicture2}
                alt="profile-picture"
              />
            </motion.figure>
            <motion.h2
              className="profile-text1"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Leevi Sahi
            </motion.h2>
            <motion.p
              className="profile-text2"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {t("title")}
            </motion.p>
            <motion.div
              className="profile-text3"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="circle"></div>
              <p>{t("occupation")}</p>
            </motion.div>
          </article>
          <article className="sidebar-switches sidebar-item">
            <motion.button
              className="light-switch switch-button"
              onClick={() => changeTheme()}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <FontAwesomeIcon
                className="moon"
                icon={darkmode ? faLightbulb : faMoon}
              />
            </motion.button>
            <motion.button
              className="language-switch switch-button"
              onClick={() => changeLanguage()}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <img
                className="flag"
                src={language === "en" ? finnishFlag : ukFlag}
                alt="flag"
              />
            </motion.button>
          </article>
          <article className="sidebar-navi sidebar-item">
            <motion.button
              className="navi-button home-button"
              onClick={() => {
                scrollTo("home");
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <FontAwesomeIcon className="house" icon={faHouse} />
              <p>{t("home")}</p>
              <FontAwesomeIcon className="greater" icon={faGreaterThan} />
            </motion.button>
            <motion.button
              className="navi-button about-button"
              onClick={() => {
                scrollTo("about");
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <FontAwesomeIcon className="user" icon={faUser} />
              <p>{t("about")}</p>
              <FontAwesomeIcon className="greater" icon={faGreaterThan} />
            </motion.button>
            <motion.button
              className="navi-button skills-button"
              onClick={() => {
                scrollTo("skills");
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <FontAwesomeIcon className="code" icon={faCode} />
              <p>{t("skills")}</p>
              <FontAwesomeIcon className="greater" icon={faGreaterThan} />
            </motion.button>
            <motion.button
              className="navi-button projects-button"
              onClick={() => {
                scrollTo("projects");
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <FontAwesomeIcon className="folder" icon={faFolderOpen} />
              <p>{t("projects")}</p>
              <FontAwesomeIcon className="greater" icon={faGreaterThan} />
            </motion.button>
          </article>
          <article className="sidebar-contact sidebar-item">
            <p className="contact-header">{t("contact")}</p>
            <motion.div
              className="contact-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <FontAwesomeIcon className="envelope" icon={faEnvelope} />
              <div className="header-and-contact">
                <p className="header-text">{t("email")}</p>
                <p ref={emailRef}>leevi@lefa.dev</p>
              </div>
              <button
                className="copy-button"
                onClick={() => copyContact(emailRef)}
              >
                <FontAwesomeIcon className="clone" icon={faClone} />
                <span className="tooltip-text">Copy</span>
              </button>
            </motion.div>
            <motion.div
              className="contact-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <FontAwesomeIcon className="phone" icon={faPhone} />
              <div className="header-and-contact">
                <p className="header-text">{t("phone")}</p>
                <p ref={phoneRef}>
                  <button
                    className={`click-to-reveal ${
                      revealed ? "click-to-reveal-toggle" : ""
                    }`}
                    onClick={() => {
                      revealPhone();
                    }}
                  >
                    {phoneNumber}
                  </button>
                </p>
              </div>
              <button
                className="copy-button"
                onClick={() => copyContact(phoneRef)}
              >
                <FontAwesomeIcon className="clone" icon={faClone} />
                <span className="tooltip-text">Copy</span>
              </button>
            </motion.div>
            <motion.div
              className="contact-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.0 }}
            >
              <FontAwesomeIcon className="location" icon={faLocationDot} />
              <div className="header-and-contact">
                <p className="header-text">{t("location")}</p>
                <p ref={locationRef}>Helsinki, Finland</p>
              </div>
              <button
                className="copy-button"
                onClick={() => copyContact(locationRef)}
              >
                <FontAwesomeIcon className="clone" icon={faClone} />
                <span className="tooltip-text">Copy</span>
              </button>
            </motion.div>
          </article>
          <article className="sidebar-connect sidebar-item">
            <div className="connect-header">{t("connect")}</div>
            <div className="connect-grid">
              <motion.a
                className="some-box"
                href="https://www.github.com/l-efa"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.92, transition: { duration: 0.1, delay: 0 } }}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                <FontAwesomeIcon className="github" icon={faGithub} />
              </motion.a>
              <motion.a
                className="some-box"
                href="https://www.linkedin.com/in/leevi-sahi-1267883b5"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.92, transition: { duration: 0.1, delay: 0 } }}
                transition={{ duration: 0.4, delay: 1.15 }}
              >
                <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
              </motion.a>
            </div>
          </article>
        </section>
        <main className="flex-item item2">
          <section id="home" className={`${showSidebar ? "opened" : ""}`}>
            <div className="home-banner">
              <div className="banner-circle"></div>
              <p className="banner-text">{t("home-banner")}</p>
            </div>
            <h1 className="home-name">Leevi Sahi</h1>
            <h3 className="home-text2">{t("home-title")}</h3>
            <p className="home-text3">{t("home-desc")}</p>
            <div>
              <button
                className="home-buttons"
                onClick={() => {
                  scrollTo("projects");
                }}
              >
                {t("home-button2")}
              </button>
            </div>
          </section>
          <section id="about" className={`${showSidebar ? "opened" : ""}`}>
            <figure className="about-figure">
              <FontAwesomeIcon className="about-icon" icon={faUser} />
            </figure>
            <h2 className="about-header">{t("about-header")}</h2>
            <div className="about-box">
              <p className="about-message">{t("about-message1")}</p>
              <p className="about-message">{t("about-message2")}</p>
              <p className="about-message">{t("about-message3")}</p>
              <p className="about-message">{t("about-message4")}</p>
            </div>
          </section>
          <section id="skills" className={`${showSidebar ? "opened" : ""}`}>
            <figure className="skills-figure">
              <FontAwesomeIcon className="skills-icon" icon={faCode} />
            </figure>
            <h1 className="skills-header">{t("skills-header")}</h1>
            <p className="skills-description">{t("skills-desc")}</p>
            <div className="skills-tab">
              <div className="skills-frontend tab-item">
                <div className="item-header">
                  <p>Frontend</p>
                </div>
                <div className="item-list">
                  <div className="skill-item">
                    <img
                      src={reactIcon}
                      alt="reacticon"
                      className="skill-icon"
                    ></img>
                    <p className="skill-name">React</p>
                  </div>
                  <div className="skill-item">
                    <img
                      src={htmlIcon}
                      alt="htmlicon"
                      className="skill-icon"
                    ></img>
                    <p className="skill-name">HTML</p>
                  </div>
                  <div className="skill-item">
                    <img
                      src={cssIcon}
                      alt="cssicon"
                      className="skill-icon"
                    ></img>
                    <p className="skill-name">CSS</p>
                  </div>
                  <div className="skill-item">
                    <img
                      src={typescripticon}
                      alt="typescripticon"
                      className="skill-icon"
                    ></img>
                    <p className="skill-name">Typescript</p>
                  </div>
                  <div className="skill-item">
                    <img
                      src={javascriptIcon}
                      alt="javascripticon"
                      className="skill-icon"
                    ></img>
                    <p className="skill-name">Javascript</p>
                  </div>
                </div>
              </div>
              <div className="skills-backend tab-item">
                <div className="item-header">
                  <p>Backend</p>
                </div>
                <div className="item-list">
                  <div className="skill-item">
                    <img
                      src={nodeIcon}
                      alt="nodeicon"
                      className="skill-icon"
                    ></img>
                    <p className="skill-name">Node</p>
                  </div>
                  <div className="skill-item">
                    <img
                      src={expressIcon}
                      alt="expressicon"
                      className="skill-icon express-icon-skills"
                    ></img>
                    <p className="skill-name">Express</p>
                  </div>
                  <div className="skill-item">
                    <img
                      src={postgreIcon}
                      alt="postgreicon"
                      className="skill-icon"
                    ></img>
                    <p className="skill-name">PostgreSQL</p>
                  </div>
                  <div className="skill-item">
                    <img
                      src={mongoIcon}
                      alt="mongoicon"
                      className="skill-icon"
                    ></img>
                    <p className="skill-name">MongoDB</p>
                  </div>
                  <div className="skill-item">
                    <img
                      src={csharpIcon}
                      alt="csharpicon"
                      className="skill-icon"
                    ></img>
                    <p className="skill-name">c#</p>
                  </div>
                </div>
              </div>
              <div className="skills-tools tab-item">
                <div className="item-header">
                  <p>{t("skills-tools")}</p>
                </div>
                <div className="item-list">
                  <div className="skill-item">
                    <img
                      src={dockericon}
                      alt="dockericon"
                      className="skill-icon"
                    ></img>
                    <p className="skill-name">Docker</p>
                  </div>
                  <div className="skill-item">
                    <img
                      src={githubIcon}
                      alt="githubicon"
                      className="skill-icon github-icon-skills"
                    ></img>
                    <p className="skill-name">Git / Github</p>
                  </div>
                  <div className="skill-item">
                    <img
                      src={claudeIcon}
                      alt="claudeIcon"
                      className="skill-icon"
                    ></img>
                    <p className="skill-name">Claude Code</p>
                  </div>
                  <div className="skill-item">
                    <img
                      src={vscIcon}
                      alt="vscIcon"
                      className="skill-icon"
                    ></img>
                    <p className="skill-name">Visual Studio Code</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="projects" className={`${showSidebar ? "opened" : ""}`}>
            <figure className="projects-figure">
              <FontAwesomeIcon className="projects-icon" icon={faFolderOpen} />
            </figure>
            <h1 className="projects-header">{t("projects-header")}</h1>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
            >
              <SwiperSlide>
                <img src={koi} alt="koi" className="slider-koi slider-item" />
                <div className="slider-desc">
                  <h3 className="desc-header">{t("projects-1header")}</h3>
                  <p className="desc-text">{t("projects-1desc")}</p>
                  <div className="desc-tags">
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>Flask</div>
                    <div>SQLite</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={moodiary}
                  alt="moodiary"
                  className="slider-moodiary slider-item"
                />
                <div className="slider-desc">
                  <h3 className="desc-header">{t("projects-2header")}</h3>
                  <p className="desc-text">{t("projects-2desc")}</p>
                  <div className="desc-tags">
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>Javascript</div>
                    <div>Express</div>
                    <div>MongoDB</div>
                  </div>
                  <a
                    href="https://github.com/MillaMirjami/ryhmaprojekti/tree/moodiary"
                    className="repo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon className="github2" icon={faGithub} />
                    {t("projects-code")}
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={hobbly}
                  alt="hobbly"
                  className="slider-item slider-hobbly"
                />
                <div className="slider-desc">
                  <h3 className="desc-header">{t("projects-3header")}</h3>
                  <p className="desc-text">{t("projects-3desc")}</p>
                  <div className="desc-tags">
                    <div>React</div>
                    <div>Express</div>
                    <div>MongoDB</div>
                  </div>
                  <a
                    href="https://github.com/PaiSillanpaa/hobby-app/tree/julkaisu"
                    className="repo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon className="github2" icon={faGithub} />
                    {t("projects-code")}
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={idle}
                  alt="idle"
                  className="slider-idle slider-item"
                />
                <div className="slider-desc">
                  <h3 className="desc-header">{t("projects-4header")}</h3>
                  <p className="desc-text">{t("projects-4desc")}</p>
                  <div className="desc-tags">
                    <div>React</div>
                    <div>Express</div>
                    <div>PostgreSQL</div>
                  </div>
                  <a
                    href="https://github.com/l-efa/idle"
                    className="repo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon className="github2" icon={faGithub} />
                    {t("projects-code")}
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={noimage}
                  alt="portfolio"
                  className="slider-idle slider-item"
                />
                <div className="slider-desc">
                  <h3 className="desc-header">{t("projects-8header")}</h3>
                  <p className="desc-text">{t("projects-8desc")}</p>
                  <div className="desc-tags">
                    <div>React</div>
                    <div>Vite</div>
                    <div>CSS</div>
                    <div>Motion</div>
                    <div>Swiper</div>
                  </div>
                  <a
                    href="https://github.com/l-efa/portfolio"
                    className="repo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon className="github2" icon={faGithub} />
                    {t("projects-code")}
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={noimage}
                  alt="työprojekti1"
                  className="slider-idle slider-item"
                />
                <div className="slider-desc">
                  <h3 className="desc-header">{t("projects-5header")}</h3>
                  <p className="desc-text">{t("projects-5desc")}</p>
                  <div className="desc-tags">
                    <div>React</div>
                    <div>Express</div>
                    <div>MariaDB</div>
                    <div>RTK-query</div>
                    <div>Material UI</div>
                    <div>Typescript</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={noimage}
                  alt="työprojekti2"
                  className="slider-idle slider-item"
                />
                <div className="slider-desc">
                  <h3 className="desc-header">{t("projects-6header")}</h3>
                  <p className="desc-text">{t("projects-6desc")}</p>
                  <div className="desc-tags">
                    <div>React</div>
                    <div>Express</div>
                    <div>PSQL</div>
                    <div>Material UI</div>
                    <div>Typescript</div>
                    <div>Javascript</div>
                    <div>Google cloud run</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={forestai}
                  alt="forestai"
                  className="slider-idle slider-item"
                />
                <div className="slider-desc">
                  <h3 className="desc-header">{t("projects-7header")}</h3>
                  <p className="desc-text">{t("projects-7desc")}</p>
                  <div className="desc-tags">
                    <div>React</div>
                    <div>Node</div>
                    <div>Express</div>
                    <div>Typescript</div>
                    <div>Prisma</div>
                    <div>PostgreSQL</div>
                    <div>Tailwind</div>
                  </div>
                  <a
                    href="https://github.com/l-efa/forestai"
                    className="repo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon className="github2" icon={faGithub} />
                    {t("projects-code")}
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
