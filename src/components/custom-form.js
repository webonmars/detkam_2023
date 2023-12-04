import React from "react";

// import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/paper-kit.css";
import "../assets/scss/index.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons";

import { graphql, useStaticQuery } from 'gatsby';

import Datetime from 'react-datetime';

import {
  Row,
  Col,
  Button,
  Form,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Card
} from 'reactstrap';

const CustomForm = ({fontColor, fontColorHeader, lang}) => {
  require('moment/locale/de');


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
              useContact
              button
              whatsapp
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
              useContact
              button
              whatsapp
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
    let formHeadline;
    let formNameLabel;
    let formNamePlaceholder;
    let formDateLabel;
    let formDatePlaceholder;
    let formNumberLabel;
    let formNumberPlaceholder;
    let formMailLabel;
    let formMailPlaceholder;
    let formMessageLabel;
    let formMessagePlaceholder;
    let formButton;
    let formWhatsApp;
    let formUseContact;

	// FUNKTIONEN FÜR DI EEINZELNEN SPRACHEN
	const languageRu = () => {
		formHeadline = data.allAllTextsJson.edges[0].node.language.ru.form.headline;
    formNameLabel = data.allAllTextsJson.edges[0].node.language.ru.form.name.label;
    formNamePlaceholder = data.allAllTextsJson.edges[0].node.language.ru.form.name.placeholder;
    formDateLabel = data.allAllTextsJson.edges[0].node.language.ru.form.date.label;
    formDatePlaceholder = data.allAllTextsJson.edges[0].node.language.ru.form.date.placeholder;
    formNumberLabel = data.allAllTextsJson.edges[0].node.language.ru.form.number.label;
    formNumberPlaceholder = data.allAllTextsJson.edges[0].node.language.ru.form.number.placeholder;
    formMailLabel = data.allAllTextsJson.edges[0].node.language.ru.form.mail.label;
    formMailPlaceholder = data.allAllTextsJson.edges[0].node.language.ru.form.mail.placeholder;
    formMessageLabel = data.allAllTextsJson.edges[0].node.language.ru.form.message.label;
    formMessagePlaceholder = data.allAllTextsJson.edges[0].node.language.ru.form.message.placeholder;
    formButton = data.allAllTextsJson.edges[0].node.language.ru.form.button;
    formWhatsApp = data.allAllTextsJson.edges[0].node.language.ru.form.whatsapp;
    formUseContact = data.allAllTextsJson.edges[0].node.language.ru.form.useContact;
	}

	const languageDe = () => {
		formHeadline = data.allAllTextsJson.edges[0].node.language.de.form.headline;
    formNameLabel = data.allAllTextsJson.edges[0].node.language.de.form.name.label;
    formNamePlaceholder = data.allAllTextsJson.edges[0].node.language.de.form.name.placeholder;
    formDateLabel = data.allAllTextsJson.edges[0].node.language.de.form.date.label;
    formDatePlaceholder = data.allAllTextsJson.edges[0].node.language.de.form.date.placeholder;
    formNumberLabel = data.allAllTextsJson.edges[0].node.language.de.form.number.label;
    formNumberPlaceholder = data.allAllTextsJson.edges[0].node.language.de.form.number.placeholder;
    formMailLabel = data.allAllTextsJson.edges[0].node.language.de.form.mail.label;
    formMailPlaceholder = data.allAllTextsJson.edges[0].node.language.de.form.mail.placeholder;
    formMessageLabel = data.allAllTextsJson.edges[0].node.language.de.form.message.label;
    formMessagePlaceholder = data.allAllTextsJson.edges[0].node.language.de.form.message.placeholder;
    formButton = data.allAllTextsJson.edges[0].node.language.de.form.button;
    formWhatsApp = data.allAllTextsJson.edges[0].node.language.de.form.whatsapp;
    formUseContact = data.allAllTextsJson.edges[0].node.language.de.form.useContact;
	}

	// ABFRAGE NACH "lang"-prop
	if (lang === "ru") {
		languageRu();
	} else if(lang === "de") {
		languageDe();
  }
  
  const whatsAppNumber = {
    fontSize: "1.5em",
    fontWeight: "bold"
  }
  const whatsAppColor = {
    color: "#25D366"
  }

  const callColor = {
    color: "#6dd3d6"
  }

  return(
    <Form className="contact-form p-4" name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true" action="/success">
      <h3 className={`m-0 text-${fontColorHeader} mt-3`}>
        <strong>{formHeadline}</strong>
      </h3>
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      
  <Row>
    <Col md="6">
      <Label className={`text-${fontColor}`}>{formNameLabel} <b className="text-danger">*</b></Label>
      <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText><i className="nc-icon nc-single-02"></i></InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="name" className="form-control" placeholder={formNamePlaceholder} required />
      </InputGroup>
    </Col>
    <Col md="6">
      <Label className={`text-${fontColor}`}>{formDateLabel}</Label>
        <Datetime
          name="date"
          locale="de"
          inputProps={{ placeholder: formDatePlaceholder }}               
          />
    </Col>
    <Col md="6">
        <Label className={`text-${fontColor}`}>{formNumberLabel} <b className="text-danger">*</b></Label>
        <InputGroup>

          <InputGroupAddon addonType="prepend">
            <InputGroupText><i className="nc-icon nc-mobile"></i></InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="phone" className="form-control" placeholder={formNumberPlaceholder} required />
        </InputGroup>
      </Col>
    <Col md="6">
      <Label className={`text-${fontColor}`}>{formMailLabel}</Label>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
        <InputGroupText><i className="nc-icon nc-email-85"></i></InputGroupText>
        </InputGroupAddon>
        <Input type="email" name="mail" className="form-control" placeholder={formMailPlaceholder} />
      </InputGroup>
    </Col>
  </Row>
  <Label className={`text-${fontColor}`}>{formMessageLabel}</Label>
  <Input type="textarea" className="form-control" name="message" rows="4" placeholder={formMessagePlaceholder} />
  <Row>
  </Row>
  <Row>
    <Button type="submit" color="danger" className="mx-auto">{formButton}</Button>
  </Row>
  <div className={`text-center text-${fontColor} mt-4 col-12 mx-auto`}>
    <hr/>
    
    <div>
    <a href="https://api.whatsapp.com/send?phone=4917621868917" target="_blank" rel="noopener noreferrer nofollow">
      <Card className="p-3 mt-4">
        <Row>
          <Col lg="2 d-block my-auto">
            <div>
              <FontAwesomeIcon icon={faWhatsappSquare} className="display-4" style={whatsAppColor}/> 
          </div>
          </Col>
          <Col lg="10">
            <p className="text-left">{formWhatsApp}</p>
          </Col>
      </Row>
      </Card>
      </a>
    </div>

    <div><p className="description text-white">{formUseContact}</p></div>

    <div>
      <a href="tel:+4917621868917" target="_blank" rel="noopener noreferrer nofollow">
        <Card className="p-3 mt-4">
          <Row>
            <Col lg="2" className="d-flex align-items-center my-auto">
              <FontAwesomeIcon icon={faPhoneVolume} className="display-4" style={callColor}/>
            </Col>
            <Col lg="10" className="d-flex align-items-center">
              <p className="mb-0" style={whatsAppNumber}>017620335923</p>
            </Col>
          </Row>
        </Card>
      </a>

    </div>


    <hr/>
    <small>
    <span className="alert-inner--icon"><i className="ni ni-lock-circle-open"></i></span>
    <span className="alert-inner--text">Mit dem Absenden des Formulares oder der Kontaktaufnahme per WhatsApp, erklähren Sie sich damit einverstanden, dass DETKAM hier Ihre angegebenen Daten speichern und Sie kontaktieren darf.
      Ihre Daten sind <strong>DSGVO konform</strong> und werden <b>nicht an Dritte weitergegeben</b>. Diese Daten dienen nur der Kontaktaufnahme.</span>
    </small> 
  </div>
</Form>
  );
}

export default CustomForm;
