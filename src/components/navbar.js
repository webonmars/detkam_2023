import React from "react";

// import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/paper-kit.css";
import "../assets/scss/index.scss";

// IMPORT MEDIA
import logoWEBP from "../assets/img/logo.webp";
import logoSVG from "../assets/img/logo.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

import { graphql, useStaticQuery, Link } from 'gatsby';
import CustomForm from "../components/custom-form";

import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Container,
    Button,
    Modal,
    Navbar
} from 'reactstrap';

const Navigation = ({headerBtn, headerDropdown, lang}) => {
const [bodyClick, setBodyClick] = React.useState(false);
const [scrollingLongContent, setScrollingLongContent] = React.useState(false);

const data = useStaticQuery(graphql`
query{
    allAllTextsJson{
        edges{
          node{
            language{
              ru{
                header{
                  redHeadline
                  headline
                  subHeadline
                }
      aboutUs{
        headline
        text
      }
      aboutDedMoroz{
        headline
        subHeadline
        cardTitle
        text
      }
      program{
        headline
        subHeadline
        cards{
          card01{
            badge
            headline
            subHeadline
          }
          card02{
            badge
            headline
            subHeadline
          }
          card03{
            badge
            headline
            subHeadline
          }
        }
        badge
        button
      }
      whyWe{
        headline
        subHeadline
        cards{
          card01{
            headline
            subHeadline
          }
          card02{
            headline
            subHeadline
          }
          card03{
            headline
            subHeadline
          }
        }
      }
      contact{
        headline
        subHeadline
      }
      form {
        headline
        name{
          label
          placeholder
        }
        date{
          label
          placeholder
        }
        number{
          label
          placeholder
        }
        mail{
          label
          placeholder
        }
        message{
          label
          placeholder
        }
        button
      }
      footer{
        headline
        subHeadline
        heypicks_1
        heypicks_2
      }
      navbar{
        btn_1
        btn_2{
          label
          el1
          el2
        }
      }
              }
    de{
                header{
                  redHeadline
                  headline
                  subHeadline
                }
      aboutUs{
        headline
        text
      }
      aboutDedMoroz{
        headline
        subHeadline
        cardTitle
        text
      }
      program{
        headline
        subHeadline
        cards{
          card01{
            badge
            headline
            subHeadline
          }
          card02{
            badge
            headline
            subHeadline
          }
          card03{
            badge
            headline
            subHeadline
          }
        }
        badge
        button
      }
      whyWe{
        headline
        subHeadline
        cards{
          card01{
            headline
            subHeadline
          }
          card02{
            headline
            subHeadline
          }
          card03{
            headline
            subHeadline
          }
        }
      }
      contact{
        headline
        subHeadline
      }
      form {
        headline
        name{
          label
          placeholder
        }
        date{
          label
          placeholder
        }
        number{
          label
          placeholder
        }
        mail{
          label
          placeholder
        }
        message{
          label
          placeholder
        }
        button
      }
      footer{
        headline
        subHeadline
        heypicks_1
        heypicks_2
      }
      navbar{
        btn_1
        btn_2{
          label
          el1
          el2
        }
      }
              }
            }
    
          }
        }
      }
}
`
);

// DEFINIERE DIE VARIABELN FÜR TEXT-TEMPLATES
let navbarBtn1;
let navbarBtn2;
let navbarBtn2Element1;
let navbarBtn2Element2;

// FUNKTIONEN FÜR DI EEINZELNEN SPRACHEN
const languageRu = () => {
    navbarBtn1 = data.allAllTextsJson.edges[0].node.language.ru.navbar.btn_1;
    navbarBtn2 = data.allAllTextsJson.edges[0].node.language.ru.navbar.btn_2.label;
    navbarBtn2Element1 = data.allAllTextsJson.edges[0].node.language.ru.navbar.btn_2.el1;
    navbarBtn2Element2 = data.allAllTextsJson.edges[0].node.language.ru.navbar.btn_2.el2;
    
}

const languageDe = () => {
    navbarBtn1 = data.allAllTextsJson.edges[0].node.language.de.navbar.btn_1;
    navbarBtn2 = data.allAllTextsJson.edges[0].node.language.de.navbar.btn_2.label;
    navbarBtn2Element1 = data.allAllTextsJson.edges[0].node.language.de.navbar.btn_2.el1;
    navbarBtn2Element2 = data.allAllTextsJson.edges[0].node.language.de.navbar.btn_2.el2;
}

// ABFRAGE NACH "lang"-prop
if (lang === "ru") {
    languageRu();
} else if(lang === "de") {
    languageDe();
}

return(
    <>
    {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null} 
<Navbar color="white" expand="lg" className="sticky-top">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              <picture className="text-success">
                  <source srcSet={logoWEBP} type="image/webp" alt="Detkam Logo" />
                  <img src={logoSVG} alt="Detkam Logo" className="w-30" />
             </picture>
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-primary"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ml-auto">
              <li>
                <Button
                  color="success"
                  type="button"
                  onClick={() => setScrollingLongContent(true)}
                  >
                  {navbarBtn1}
                </Button>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      aria-expanded={false}
                      aria-haspopup={true}
                      caret
                      color="secondary"
                      data-toggle="dropdown"
                      id="dropdownMenuButton"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faGlobeAmericas} className="mr-1"/> {navbarBtn2}
                    </DropdownToggle>
                    <DropdownMenu className="mt-4" aria-labelledby="dropdownMenuButton">
                    <Link to="/">
                      <DropdownItem>{navbarBtn2Element1}</DropdownItem>
                    </Link>
                    <Link to="/german">
                        <DropdownItem>{navbarBtn2Element2}</DropdownItem>
                    </Link>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </li>
            </ul>
          </div>
            
          <Modal isOpen={scrollingLongContent} toggle={() => setScrollingLongContent(false)}>
              <div className="modal-body p-0">
                <button
                  aria-label="Close"
                  className="close p-3"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => setScrollingLongContent(false)}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              <CustomForm lang={lang} fontColor="default" fontColorHeader="primary" />
              </div>
            </Modal>

        </Container>
      </Navbar> 
      </>
    );
}

export default Navigation;