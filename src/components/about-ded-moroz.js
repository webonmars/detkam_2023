import React from "react";

// import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/paper-kit.css";
import "../assets/scss/index.scss";

import aboutDedMorozWEBP from "../assets/img/card_01.webp";
import aboutDedMorozJPG from "../assets/img/card_01.jpg";

import { graphql, useStaticQuery } from 'gatsby';


import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';


const AboutDedMoroz = ({lang}) => {

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
    let aboutDedMorozHeadline;
    let aboutDedMorozSubHeadline;
    let aboutDedMorozCardTitle;
    let aboutDedMorozText;

	// FUNKTIONEN FÜR DI EEINZELNEN SPRACHEN
	const languageRu = () => {
		aboutDedMorozHeadline = data.allAllTextsJson.edges[0].node.language.ru.aboutDedMoroz.headline;
        aboutDedMorozSubHeadline = data.allAllTextsJson.edges[0].node.language.ru.aboutDedMoroz.subheadline;
        aboutDedMorozCardTitle = data.allAllTextsJson.edges[0].node.language.ru.aboutDedMoroz.cardTitle;
        aboutDedMorozText = data.allAllTextsJson.edges[0].node.language.ru.aboutDedMoroz.text;
	}

	const languageDe = () => {
		aboutDedMorozHeadline = data.allAllTextsJson.edges[0].node.language.de.aboutDedMoroz.headline;
        aboutDedMorozSubHeadline = data.allAllTextsJson.edges[0].node.language.de.aboutDedMoroz.subheadline;
        aboutDedMorozCardTitle = data.allAllTextsJson.edges[0].node.language.de.aboutDedMoroz.cardTitle;
        aboutDedMorozText = data.allAllTextsJson.edges[0].node.language.de.aboutDedMoroz.text;
	}

	// ABFRAGE NACH "lang"-prop
	if (lang === "ru") {
		languageRu();
	} else if(lang === "de") {
		languageDe();
	}

    return(
      <div className="section">
              <Container className="py-5">
                  <Row>
                      <Col md="12">
                          <h2 className="title mt-0">{aboutDedMorozHeadline}</h2>
                      </Col>
                  </Row>
                  <Row className="mt-5">
                      <Col md="4">
                          <Card>
                                  <picture>
                                          <source className="card-img-top" srcSet={aboutDedMorozWEBP} type="image/webp" alt="Дед Мороз зимой" />
                                          <img className="card-img-top" src={aboutDedMorozJPG} alt="Дед Мороз зимой" />
                                  </picture>
                              <CardBody>
                  {/* possibly use H4 */}
                                  <CardTitle className="my-0">{aboutDedMorozCardTitle}</CardTitle>
                              </CardBody>
                          </Card>
                      </Col>
                      <Col md="6" className="my-auto">
                          <Container>
                              <h4 className="mt-0">{aboutDedMorozSubHeadline}</h4>
                              <p>{aboutDedMorozText}</p>
                          </Container>
                      </Col>
                  </Row>
              </Container>
          </div>
    );
}

export default AboutDedMoroz;