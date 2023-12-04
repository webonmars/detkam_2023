import React from "react";

// import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/paper-kit.css";
import "../assets/scss/index.scss";

import { graphql, useStaticQuery } from 'gatsby';
import CustomForm from "../components/custom-form";

// IMPORT MEDIA
import formImageFooter from "../assets/img/form_footer.svg";

import {
    Row,
    Col,
    Container
  } from 'reactstrap';

const formStyleFooter = {
    backgroundImage: 'url(' + formImageFooter + ')',
    backgroundSize: "100% auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top"
  };

const Contact = ({lang}) => {

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
				  }
				}
		
			  }
			}
		  }
}
		`
	);

	
	// DEFINIERE DIE VARIABELN FÜR TEXT-TEMPLATES
    let contactHeadline;
    let contactSubHeadline;

	// FUNKTIONEN FÜR DI EEINZELNEN SPRACHEN
	const languageRu = () => {
		contactHeadline = data.allAllTextsJson.edges[0].node.language.ru.contact.headline;
		contactSubHeadline = data.allAllTextsJson.edges[0].node.language.ru.contact.subHeadline;
	}

	const languageDe = () => {
		contactHeadline = data.allAllTextsJson.edges[0].node.language.de.contact.headline;
		contactSubHeadline = data.allAllTextsJson.edges[0].node.language.de.contact.subHeadline;
	}

	// ABFRAGE NACH "lang"-prop
	if (lang === "ru") {
		languageRu();
	} else if(lang === "de") {
		languageDe();
	}

    return(
      <div className="section bg-primary">
            <Container className="py-5">
              <Row>
                  <Col md="12">
                      <h2 className="title mt-0 text-white">{contactHeadline}</h2>
                      <h5 className="text-white">{contactSubHeadline}</h5>
                  </Col>
              </Row>
              <div className="p-3 d-none d-lg-block"><br /></div>
              <Row>
                  <div className="col-lg-6 mb-5 mt-4 mx-auto" style={formStyleFooter}>
            <div className="height_5"></div>
            <CustomForm fontColor="default" fontColorHeader="primary" lang={lang}/>
              </div>
            </Row>
        </Container>
      </div>
    );
  }

  export default Contact;