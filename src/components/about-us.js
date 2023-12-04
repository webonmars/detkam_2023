import React from "react";

// import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/paper-kit.css";
import "../assets/scss/index.scss";

import aboutImgWEBP from "../assets/img/project.webp";
import aboutImgSVG from "../assets/img/project.svg";

import { graphql, useStaticQuery } from 'gatsby';


import {
  Row,
  Col,
  Container,
  Card,
  CardBody
} from 'reactstrap';

const AboutUs = ({lang}) => {

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
				headline2
				text2
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
			headline2
			text2
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
    let aboutUsHeadline;
	let aboutUsText;
	let aboutUsHeadline2;
    let aboutUsText2;

	// FUNKTIONEN FÜR DI EEINZELNEN SPRACHEN
	const languageRu = () => {
		aboutUsHeadline = data.allAllTextsJson.edges[0].node.language.ru.aboutUs.headline;
		aboutUsText = data.allAllTextsJson.edges[0].node.language.ru.aboutUs.text;
		aboutUsHeadline2 = data.allAllTextsJson.edges[0].node.language.ru.aboutUs.headline2;
		aboutUsText2 = data.allAllTextsJson.edges[0].node.language.ru.aboutUs.text2;
	}

	const languageDe = () => {
		aboutUsHeadline = data.allAllTextsJson.edges[0].node.language.de.aboutUs.headline;
		aboutUsText = data.allAllTextsJson.edges[0].node.language.de.aboutUs.text;
		aboutUsHeadline2 = data.allAllTextsJson.edges[0].node.language.de.aboutUs.headline2;
		aboutUsText2 = data.allAllTextsJson.edges[0].node.language.de.aboutUs.text2;
	}

	// ABFRAGE NACH "lang"-prop
	if (lang === "ru") {
		languageRu();
	} else if(lang === "de") {
		languageDe();
	}

    return(
      <>
      <div className="section bg-primary">
              <Container className="py-5">
                  <Row>
                      <Col lg="6" className="my-auto p-3">
                          <picture>
                                  <source srcSet={aboutImgWEBP} type="image/webp" alt="Дед Мороз иллюстрация" className="w-100" />
                                  <img src={aboutImgSVG} alt="Дед Мороз иллюстрация" className="w-100" />
                          </picture>
                      </Col>
  
                      <div className="w-100 d-lg-none height_5"><br /></div>
  
                      <Col lg="6" className="my-auto">
                          <h2 className="title text-white mt-0">{aboutUsHeadline}</h2>
                          <p className="description text-white">{aboutUsText}</p>
						  <hr/>
						  <Card>
							<CardBody>							  
								<h3 className="title mt-0">{aboutUsHeadline2}</h3>
								<p className="description">{aboutUsText2}</p>
							</CardBody>
						  </Card>
                      </Col>	 
                  </Row>
              </Container>
      </div>
      </>
    );
  }

export default AboutUs
