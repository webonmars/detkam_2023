import React from "react";

// import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/paper-kit.css";
import "../assets/scss/index.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons';

import { graphql, useStaticQuery } from 'gatsby';
import CustomForm from "../components/custom-form";


import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  Badge,
  Button,
  Modal
} from 'reactstrap';


const Program = ({lang}) => {
  
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
    let programHeadline;
    let programSubHeadline;
    let programCard1Badge;
    let programCard1Headline;
    let programCard1SubHeadline;
    let programCard2Badge;
    let programCard2Headline;
    let programCard2SubHeadline;
    let programCard3Badge;
    let programCard3Headline;
    let programCard3SubHeadline;
    let programBadge;
    let programButton;

	// FUNKTIONEN FÜR DI EEINZELNEN SPRACHEN
	const languageRu = () => {
        programHeadline = data.allAllTextsJson.edges[0].node.language.ru.program.headline;	
        programSubHeadline = data.allAllTextsJson.edges[0].node.language.ru.program.subHeadline;
        programCard1Badge = data.allAllTextsJson.edges[0].node.language.ru.program.cards.card01.badge;
        programCard1Headline = data.allAllTextsJson.edges[0].node.language.ru.program.cards.card01.headline;
        programCard1SubHeadline = data.allAllTextsJson.edges[0].node.language.ru.program.cards.card01.subHeadline;
        programCard2Badge = data.allAllTextsJson.edges[0].node.language.ru.program.cards.card02.badge;
        programCard2Headline = data.allAllTextsJson.edges[0].node.language.ru.program.cards.card02.headline;
        programCard2SubHeadline = data.allAllTextsJson.edges[0].node.language.ru.program.cards.card02.subHeadline;
        programCard3Badge = data.allAllTextsJson.edges[0].node.language.ru.program.cards.card03.badge;
        programCard3Headline = data.allAllTextsJson.edges[0].node.language.ru.program.cards.card03.headline;
        programCard3SubHeadline = data.allAllTextsJson.edges[0].node.language.ru.program.cards.card03.subHeadline;		
        programBadge = data.allAllTextsJson.edges[0].node.language.ru.program.badge;
        programButton = data.allAllTextsJson.edges[0].node.language.ru.program.button;
	}

	const languageDe = () => {
		programHeadline = data.allAllTextsJson.edges[0].node.language.de.program.headline;	
        programSubHeadline = data.allAllTextsJson.edges[0].node.language.de.program.subHeadline;
        programCard1Badge = data.allAllTextsJson.edges[0].node.language.de.program.cards.card01.badge;
        programCard1Headline = data.allAllTextsJson.edges[0].node.language.de.program.cards.card01.headline;
        programCard1SubHeadline = data.allAllTextsJson.edges[0].node.language.de.program.cards.card01.subHeadline;
        programCard2Badge = data.allAllTextsJson.edges[0].node.language.de.program.cards.card02.badge;
        programCard2Headline = data.allAllTextsJson.edges[0].node.language.de.program.cards.card02.headline;
        programCard2SubHeadline = data.allAllTextsJson.edges[0].node.language.de.program.cards.card02.subHeadline;
        programCard3Badge = data.allAllTextsJson.edges[0].node.language.de.program.cards.card03.badge;
        programCard3Headline = data.allAllTextsJson.edges[0].node.language.de.program.cards.card03.headline;
        programCard3SubHeadline = data.allAllTextsJson.edges[0].node.language.de.program.cards.card03.subHeadline;		
        programBadge = data.allAllTextsJson.edges[0].node.language.de.program.badge;
        programButton = data.allAllTextsJson.edges[0].node.language.de.program.button;
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
                      <Col md="12" className="mb-5">
                          <h2 className="title text-white mt-0">{programHeadline}</h2>
                          <p className="text-white">
                              {programSubHeadline}
                          </p>
                      </Col>
                  </Row>
  
                  <Row className="row px-5">
  
                      <Col className="col-lg-4 my-5">
                              <Card className="text-center py-2">
                                      <CardBody>
                                              <Badge color="warning" pill>
                          <p className="m-0 f-black"><FontAwesomeIcon icon={faClock} className="mr-2"/>{programCard1Badge}</p>
                        </Badge>
                                        <CardTitle><h2 className="my-4">{programCard1Headline}</h2></CardTitle>
                                        <p>
                                              {programCard1SubHeadline}
                                        </p>
                      <Button
                      className="mt-4"
                        color="success"
                        type="button"
                        onClick={() => setScrollingLongContent(true)}
                        >
                        {programButton}
                      </Button>
                                      </CardBody>
                              </Card>
                      </Col>
  
                          <Col className="col-lg-4 ">
                                <Card className="card text-center text-white bg-danger py-5">
                                      <CardBody>
                    <Badge color="warning" pill>
                          <p className="m-0 f-black"><FontAwesomeIcon icon={faClock} className="mr-2"/>{programCard2Badge}</p>
                      </Badge>
                                        <CardTitle className="text-white"><h2 className="my-4">{programCard2Headline}</h2></CardTitle>
                                        <p>
                                              {programCard2SubHeadline}
                                        </p>
                      <Button
                      className="mt-4"
                        color="success"
                        type="button"
                        onClick={() => setScrollingLongContent(true)}
                        >
                        {programButton}
                      </Button>
                                      </CardBody>
                                </Card>
                </Col>
  
  
                      <Col lg="4" className="my-5">
                              <Card className="text-center py-2">
                                      <CardBody>
                    <Badge color="warning" pill>
                          <p className="m-0 f-black"><FontAwesomeIcon icon={faClock} className="mr-2"/>{programCard3Badge}</p>
                        </Badge>
                                        <CardTitle><h2 className="my-4">{programCard3Headline}</h2></CardTitle>
                                            <p>
                                            {programCard3SubHeadline}
                                          </p>
                      <Button
                      className="mt-4"
                        color="success"
                        type="button"
                        onClick={() => setScrollingLongContent(true)}
                        >
                        {programButton}
                      </Button>
                                      </CardBody>
                              </Card>
                      </Col>
  
                  </Row>
  
                  <div className="p-3">
            <br />
          </div>
                  <Row>
                      <Col lg="12">
                          <div className="alert text-center dark_primary" role="alert" >
                              <h5 className="mb-0">{programBadge}<FontAwesomeIcon icon={faSmile} className="ml-2"/></h5>
                          </div>
                      </Col>
                  </Row>

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
        </div>
    );
  }

  export default Program;