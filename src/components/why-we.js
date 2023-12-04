import React from "react";

// import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/paper-kit.css";
import "../assets/scss/index.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faEuroSign } from '@fortawesome/free-solid-svg-icons'

import { graphql, useStaticQuery } from 'gatsby';


import {
  Row,
  Col,
  Container,
  Card,
  CardBody
} from 'reactstrap';

const WhyWe = ({lang}) => {

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
				  }
				}
		
			  }
			}
		  }
}
		`
	);

	
	// DEFINIERE DIE VARIABELN FÜR TEXT-TEMPLATES
    let whyWeHeadline;
    let whyWeSubHeadline;
    let whyWeCard1Headline;
    let whyWeCard1SubHeadline;
    let whyWeCard2Headline;
    let whyWeCard2SubHeadline;
    let whyWeCard3Headline;
    let whyWeCard3SubHeadline;

	// FUNKTIONEN FÜR DI EEINZELNEN SPRACHEN
	const languageRu = () => {
        whyWeHeadline = data.allAllTextsJson.edges[0].node.language.ru.whyWe.headline;
        whyWeSubHeadline = data.allAllTextsJson.edges[0].node.language.ru.whyWe.subHeadline;
        whyWeCard1Headline = data.allAllTextsJson.edges[0].node.language.ru.whyWe.cards.card01.headline;
        whyWeCard1SubHeadline = data.allAllTextsJson.edges[0].node.language.ru.whyWe.cards.card01.subHeadline;
        whyWeCard2Headline = data.allAllTextsJson.edges[0].node.language.ru.whyWe.cards.card02.headline;
        whyWeCard2SubHeadline = data.allAllTextsJson.edges[0].node.language.ru.whyWe.cards.card02.subHeadline;
        whyWeCard3Headline = data.allAllTextsJson.edges[0].node.language.ru.whyWe.cards.card03.headline;
        whyWeCard3SubHeadline = data.allAllTextsJson.edges[0].node.language.ru.whyWe.cards.card03.subHeadline;
	}

	const languageDe = () => {
        whyWeHeadline = data.allAllTextsJson.edges[0].node.language.de.whyWe.headline;
        whyWeSubHeadline = data.allAllTextsJson.edges[0].node.language.de.whyWe.subHeadline;
        whyWeCard1Headline = data.allAllTextsJson.edges[0].node.language.de.whyWe.cards.card01.headline;
        whyWeCard1SubHeadline = data.allAllTextsJson.edges[0].node.language.de.whyWe.cards.card01.subHeadline;
        whyWeCard2Headline = data.allAllTextsJson.edges[0].node.language.de.whyWe.cards.card02.headline;
        whyWeCard2SubHeadline = data.allAllTextsJson.edges[0].node.language.de.whyWe.cards.card02.subHeadline;
        whyWeCard3Headline = data.allAllTextsJson.edges[0].node.language.de.whyWe.cards.card03.headline;
        whyWeCard3SubHeadline = data.allAllTextsJson.edges[0].node.language.de.whyWe.cards.card03.subHeadline;
	}

	// ABFRAGE NACH "lang"-prop
	if (lang === "ru") {
		languageRu();
	} else if(lang === "de") {
		languageDe();
	}

    return(
      <div className="section bg-grey">
            <Container className="container py-5">
              <h2 className="title">{whyWeHeadline}</h2>
              <p className="description">{whyWeSubHeadline}</p>
              <Row className="mt-5">
                  <Col lg="6">
                      <Card className="border-0 bg-default p-3">
                          <div className="icon-circle bg-primary mb-3">
              <FontAwesomeIcon icon={faHeart} className="text-danger f1"/>
                          </div>
                          <h5 className="mb-2 f1">{whyWeCard1Headline}</h5>
                          <p>{whyWeCard1SubHeadline}</p>
                      </Card>
                      <Card className="card border-0 bg-default p-3">
                              <div className="icon-circle bg-primary mb-3">
                  <FontAwesomeIcon icon={faClock} className="text-white f1"/>
                              </div>
                              <h5 className="mb-2 f1">{whyWeCard2Headline}</h5>
                              <p>{whyWeCard2SubHeadline}</p>
                          </Card>
                  </Col>
                  <Col lg="6" className="my-auto">
                      <div className="mb-1">
                          <Card className="border-0 bg-primary p-3">
                              <div className="icon-circle bg-danger mb-3">
                  <FontAwesomeIcon icon={faEuroSign} className="text-white f1"/>
                              </div>
                              <h5 className="mb-2 f1 text-white">{whyWeCard3Headline}</h5>
                              <CardBody className="p-0 m">
                                  <p className="text-white">{whyWeCard3SubHeadline}</p>
                              </CardBody>
                          </Card>
                      </div>
                  </Col>
              </Row>
          </Container>
          </div>
  
    );
  }

export default WhyWe;