import React from "react";

// import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/paper-kit.css";
import "../assets/scss/index.scss";

import { graphql, useStaticQuery } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import {
  Row,
  Col,
  Container,
  Modal
} from 'reactstrap';

const Footer = ({lang}) => {
	const [datenschutzContent, setDatenschutzContent] = React.useState(false);
	const [impressumContent, setImpressumContent] = React.useState(false);


	const currentDate = new Date().getFullYear();
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
				  }
				}
		
			  }
			}
		  }
}
		`
	);

	
	// DEFINIERE DIE VARIABELN FÜR TEXT-TEMPLATES
	let footerHeadline;
	let footerSubHeadline;
	let footerHeypicks1;
	let footerHeypicks2;

	// FUNKTIONEN FÜR DI EEINZELNEN SPRACHEN
	const languageRu = () => {
		footerHeadline = data.allAllTextsJson.edges[0].node.language.ru.footer.headline;		
		footerSubHeadline = data.allAllTextsJson.edges[0].node.language.ru.footer.subHeadline;		
		footerHeypicks1 = data.allAllTextsJson.edges[0].node.language.ru.footer.heypicks_1;		
		footerHeypicks2 = data.allAllTextsJson.edges[0].node.language.ru.footer.heypicks_2;		
	}

	const languageDe = () => {
		footerHeadline = data.allAllTextsJson.edges[0].node.language.de.footer.headline;		
		footerSubHeadline = data.allAllTextsJson.edges[0].node.language.de.footer.subHeadline;		
		footerHeypicks1 = data.allAllTextsJson.edges[0].node.language.de.footer.heypicks_1;		
		footerHeypicks2 = data.allAllTextsJson.edges[0].node.language.de.footer.heypicks_2;		
	}

	// ABFRAGE NACH "lang"-prop
	if (lang === "ru") {
		languageRu();
	} else if(lang === "de") {
		languageDe();
	}
	
  return (
	<footer className="footer">
	<Container className="container">
		<Row className="row-grid align-items-center my-md">
			<Col lg="6" className="mb-3 mt-5">
				<h3 className="text-danger font-weight-light mb-1">{footerHeadline}</h3>
				<h4 className="mb-0 mt-0 font-weight-light">{footerSubHeadline}</h4>
			</Col>
		</Row>
		<Row>
			<nav className="footer-nav">
				<ul>
					<li>
						<span
						
						
						onClick={() => setImpressumContent(true)}
						>Impressum</span>
					</li>
					<li>
						<span
						onClick={() => setDatenschutzContent(true)}
						>Datenschutz</span>
					</li>
				</ul>
			</nav>
			<div className="credits ml-auto">
				<span className="copyright">
					© DETKAM
					{currentDate}
					, {footerHeypicks1} <FontAwesomeIcon icon={faHeart} className="text-danger f1 heart"/> {footerHeypicks2} <a href="https://www.heypicks.com">Heypicks</a>
				</span>
			</div>
		</Row>

		<Modal isOpen={impressumContent} toggle={() => setImpressumContent(false)}  className="modal-lg">
				<div className="modal-header">
				<button
                  aria-label="Close"
                  className="close p-3"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => setImpressumContent(false)}
                >
				<span aria-hidden={true}>×</span>
				</button>        
					<h5>Impressum</h5>
				</div>
              <div className="modal-body p-4">
			  	<p>Informationspflicht laut § 5 TMG.</p>
				<p>Detkam<br />Clara-Zetkin-Weg 14, <br />1412619 Berlin, <br />Deutschland</p>
				<p><strong>UID-Nummer:</strong> DE3351302055<br /></p>
				<p><strong>E-Mail:</strong> <a href="mailto:kontakt@detkam.de">kontakt@detkam.de</a></p>
				<br/>

				<h4>EU-Streitschlichtung</h4>
				<p>Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.<br />
				Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&amp;lng=DE" target="_blank" rel="noopener noreferrer nofollow">http://ec.europa.eu/odr?tid=321120132</a> zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.</p>
				<br/>
				<p>Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

				<h4>Haftung für Inhalte dieser Website</h4>
				<p>Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Laut Telemediengesetz <a class="adsimple-321120132" href="https://www.gesetze-im-internet.de/tmg/__7.html?tid=321120132" rel="noopener noreferrer nofollow" target="_blank">(TMG) §7 (1)</a> sind wir als Diensteanbieter für eigene Informationen, die wir zur Nutzung bereitstellen, nach den allgemeinen Gesetzen verantwortlich. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden. Als Diensteanbieter im Sinne der §§ 8 bis 10 sind wir nicht verpflichtet, die von ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
				<p>Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt. </p>
				<p>Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum.</p>

				<h4>Haftung für Links auf dieser Website</h4>
				<p>Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.</p>
				<p>Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.</p>

				<h4>Urheberrechtshinweis</h4>
				<p>Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht der Bundesrepublik Deutschland. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.</p>
				<p>Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.</p>
			  </div>
        </Modal>
		<Modal isOpen={datenschutzContent} toggle={() => setDatenschutzContent(false)}  className="modal-lg">
			<div className="modal-header">
				<button
                  aria-label="Close"
                  className="close p-3"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => setDatenschutzContent(false)}
                >
				<span aria-hidden={true}>×</span>
				</button>        
			<h3>Datenschutzerklärung</h3>
			</div>
            <div className="modal-body p-4">
			  	<h4>Datenschutz</h4>
			 	 <p>Wir haben diese Datenschutzerklärung (Fassung 09.10.2019-311120078) verfasst, um Ihnen gemäß der Vorgaben der <a href="https://eur-lex.europa.eu/legal-content/DE/ALL/?tid=1234&amp;uri=celex%3A32016R0679&amp;tid=311120078" target="_blank" rel="noopener noreferrer nofollow">Datenschutz-Grundverordnung (EU) 2016/679</a> zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.
			 	 <br/>
			  	Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.
			  	</p>

			  	<h4>Automatische Datenspeicherung</h4>
			  	<p>Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und gespeichert, so auch auf dieser Webseite.
				  <br/>
				  Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver (Computer auf dem diese Webseite gespeichert ist) automatisch Daten wie
				</p>
				<ul>
					<li>die Adresse (URL) der aufgerufenen Webseite</li>
					<li>Browser und Browserversion</li>
					<li>das verwendete Betriebssystem</li>
					<li>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</li>
					<li>den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird</li>
					<li>Datum und Uhrzeit</li>
				</ul>
				<p>in Dateien (Webserver-Logfiles).</p>
				<p>In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.
				<br />
				Die Rechtsgrundlage besteht nach <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=311120078" target="_blank" rel="noopener noreferrer nofollow">Artikel 6  Absatz 1 f DSGVO</a> (Rechtmäßigkeit der Verarbeitung) darin, dass berechtigtes Interesse daran besteht, den fehlerfreien Betrieb dieser Webseite durch das Erfassen von Webserver-Logfiles zu ermöglichen.
				</p>

				<h4>Cookies</h4>
				<p>Unsere Website verwendet HTTP-Cookies um nutzerspezifische Daten zu speichern.
				<br />
				Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser verstehen.</p>
				<br/>
				<h5>Was genau sind Cookies?</h5>
				<p>Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Webseiten speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.</p>
				<p>Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Webseiten verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch anderer Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem &#8220;Hirn&#8221; Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.</p>
				<p>Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Website, wer Sie sind und bietet Ihnen Ihre gewohnte Standardeinstellung. In einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.</p>
				<p>Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs zugreifen.</p>
				<p>So können zum Beispiel Cookie-Daten aussehen:</p>
				<ul>
					<li>Name: _ga</li>
					<li>Ablaufzeit: 2 Jahre</li>
					<li>Verwendung: Unterscheidung der Webseitenbesucher</li>
					<li>Beispielhafter Wert: GA1.2.1326744211.152311120078</li>
				</ul>
				<p>Ein Browser sollte folgende Mindestgrößen unterstützen:</p>
				<ul>
					<li>Ein Cookie soll mindestens 4096 Bytes enthalten können</li>
					<li>Pro Domain sollen mindestens 50 Cookies gespeichert werden können</li>
					<li>Insgesamt sollen mindestens 3000 Cookies gespeichert werden können</li>
				</ul>

				<h5>Welche Arten von Cookies gibt es?</h5>
				<p>Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in der folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.</p>
				<p>Man kann 4 Arten von Cookies unterscheiden:</p>
				<p>
				<strong>Unbedingt notwendige Cookies<br />
				</strong>Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster schließt.</p>
				<p>
				<strong>Funktionelle Cookies<br />
				</strong>Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei verschiedenen Browsern gemessen.</p>
				<p>
				<strong>Zielorientierte Cookies<br />
				</strong>Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte, Schriftgrößen oder Formulardaten gespeichert.</p>
				<p>
				<strong>Werbe-Cookies<br />
				</strong>Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.</p>
				<p>Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite gefragt, welche dieser Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.</p>
				<br/>

				<h5>Wie kann ich Cookies löschen?</h5>
				<p>Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, nur teilweise zuzulassen oder zu deaktivieren. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.</p>
				<p>Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen finden:</p>
				<p>
				<a   href="https://support.google.com/chrome/answer/95647?tid=311120078" target="_blank" rel="noopener noreferrer nofollow">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
				</p>
				<p>
				<a   href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=311120078" target="_blank" rel="noopener noreferrer nofollow">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
				</p>
				<p>
				<a   href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=311120078" target="_blank" rel="noopener noreferrer nofollow">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
				</p>
				<p>
				<a   href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=311120078" target="_blank" rel="noopener noreferrer nofollow">Internet Explorer: Löschen und Verwalten von Cookies</a>
				</p>
				<p>
				<a   href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=311120078" target="_blank" rel="noopener noreferrer nofollow">Microsoft Edge: Löschen und Verwalten von Cookies</a>
				</p>
				<br/>
				<p>Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten ist es Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder &#8220;Cookies deaktivieren Chrome&#8221; im Falle eines Chrome Browsers oder tauschen das Wort &#8220;Chrome&#8221; gegen den Namen Ihres Browsers, z.B. Edge, Firefox, Safari aus.</p>

				<h5>Wie sieht es mit meinem Datenschutz aus?</h5>
				<p>Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern von Cookies eine Einwilligung des Website-Besuchers (also von Ihnen) verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Deutschland wurden die Cookie-Richtlinien nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in § 15 Abs.3 des Telemediengesetzes (TMG).</p>
				<p>Wenn Sie mehr über Cookies wissen möchten und vor technischen Dokumentationen nicht zurückscheuen, empfehlen wir <a href="https://tools.ietf.org/html/rfc6265" target="_blank" rel="noopener noreferrer nofollow">https://tools.ietf.org/html/rfc6265</a>, dem Request for Comments der Internet Engineering Task Force (IETF) namens &#8220;HTTP State Management Mechanism&#8221;.</p>

				<h4>Speicherung persönlicher Daten</h4>
				<p>Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars oder Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben.</p>
				<p>Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern, die Kontakt ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.</p>
				<p>Wenn Sie uns persönliche Daten per E-Mail schicken &#8211; somit abseits dieser Webseite &#8211; können wir keine sichere Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten niemals unverschlüsselt per E-Mail zu übermitteln.</p>
				<p>Die Rechtsgrundlage besteht nach <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=311120078" target="_blank" rel="noopener noreferrer nofollow">Artikel 6  Absatz 1 a DSGVO</a> (Rechtmäßigkeit der Verarbeitung) darin, dass Sie uns die Einwilligung zur Verarbeitung der von Ihnen eingegebenen Daten geben. Sie können diesen Einwilligung jederzeit widerrufen &#8211; eine formlose E-Mail reicht aus, Sie finden unsere Kontaktdaten im Impressum.</p>

				<h4>Rechte laut Datenschutzgrundverordnung</h4>
				<p>Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die folgende Rechte zu:</p>
				<ul>
					<li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
					<li>Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)</li>
					<li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
					<li>Recht auf Benachrichtigung &#8211; Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)</li>
					<li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
					<li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
					<li>Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)</li>
				</ul>
				<p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich an die <a   href="https://www.bfdi.bund.de/DE/Datenschutz/Ueberblick/MeineRechte/Artikel/BeschwerdeBeiDatenschutzbehoereden.html?tid=311120078" target="_blank" rel="noopener noreferrer nofollow">Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</a> wenden.</p>

				<h4>Auswertung des Besucherverhaltens</h4>
				<p>In der folgenden Datenschutzerklärung informieren wir Sie darüber, ob und wie wir Daten Ihres Besuchs dieser Website auswerten. Die Auswertung der gesammelten Daten erfolgt in der Regel anonym und wir können von Ihrem Verhalten auf dieser Website nicht auf Ihre Person schließen.</p>
				<p>Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu widersprechen erfahren Sie in der folgenden Datenschutzerklärung.</p>

				<h4>TLS-Verschlüsselung mit https</h4>
				<p>Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&#038;tid=311120078" target="_blank" rel="noopener noreferrer nofollow">Artikel 25 Absatz 1 DSGVO</a>). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schloßsymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.</p>

				<h4>Google Fonts Lokal Datenschutzerklärung</h4>
				<p>Wir verwenden Google Fonts der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) auf unserer Webseite. Wir haben die Google-Schriftarten lokal, d.h. auf unserem Webserver &#8211; nicht auf den Servern von Google &#8211; eingebunden. Dadurch gibt es keine Verbindung zu Server von Google und somit auch keine Datenübertragung bzw. Speicherung.</p>

				<h5>Was sind Google Fonts?</h5>
				<p>Google Fonts (früher Google Web Fonts) ist ein interaktives Verzeichnis mit mehr als 800 Schriftarten, die die <a href="https://de.wikipedia.org/wiki/Google_LLC?tid=311120078" target="_blank" rel="noopener noreferrer nofollow">Google LLC</a> zur freien Verwendung bereitstellt. Mit Google Fonts könnte man die Schriften nutzen, ohne sie auf den eigenen Server hochzuladen. Doch um diesbezüglich jede Informationsübertragung zum Google-Server zu unterbinden, haben wir die Schriftarten auf unseren Server heruntergeladen. Auf diese Weise handeln wir datenschutzkonform und senden keine Daten an Google Fonts weiter.</p>
				<p>Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf <a href="https://developers.google.com/fonts/faq?tid=311120078" target="_blank" rel="noopener noreferrer nofollow">https://developers.google.com/fonts/faq?tid=311120078</a>.</p>

				<h4>Google Fonts Datenschutzerklärung</h4>
				<p>Wir verwenden Google Fonts der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) auf unserer Webseite.</p>
				<p>Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden bzw. ein Passwort hinterlegen. Weiters werden auch keine Cookies in Ihrem Browser gespeichert. Die Dateien (CSS, Schriftarten/Fonts) werden über die Google-Domains fonts.googleapis.com und fonts.gstatic.com angefordert. Laut Google sind die Anfragen nach CSS und Schriften vollkommen getrennt von allen anderen Google-Diensten. Wenn Sie ein Google-Konto haben, brauchen Sie keine Sorge haben, dass Ihre Google-Kontodaten, während der Verwendung von Google Fonts, an Google übermittelt werden. Google erfasst die Nutzung von CSS (Cascading Style Sheets) und der verwendeten Schriftarten und speichert diese Daten sicher. Wie die Datenspeicherung genau aussieht, werden wir uns noch im Detail ansehen.</p>

				<h4>Was sind Google Fonts?</h4>
				<p>Google Fonts (früher Google Web Fonts) ist ein interaktives Verzeichnis mit mehr als 800 Schriftarten, die die <a   href="https://de.wikipedia.org/wiki/Google_LLC?tid=311120078" target="_blank" rel="noopener noreferrer nofollow">Google LLC</a> zur freien Verwendung bereitstellt.</p>
				<p>Viele dieser Schriftarten sind unter der SIL Open Font License veröffentlicht, während andere unter der Apache-Lizenz veröffentlicht wurden. Beides sind freie Software-Lizenzen. Somit können wir sie frei verwenden, ohne dafür Lizenzgebühren zu zahlen.</p>

				<h4>Warum verwenden wir Google Fonts auf unserer Webseite?</h4>
				<p>Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen, und müssen sie nicht auf unserem eigenen Server hochladen. Google Fonts ist ein wichtiger Baustein, um die Qualität unserer Webseite hoch zu halten. Alle Google-Schriften sind automatisch für das Web optimiert und dies spart Datenvolumen und ist speziell für die Verwendung bei mobilen Endgeräten ein großer Vorteil. Wenn Sie unsere Seite besuchen, sorgt die niedrige Dateigröße für eine schnelle Ladezeit. Des Weiteren sind Google Fonts sogenannte sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme (Rendering) in verschiedenen Browsern, Betriebssystemen und mobilen Endgeräten können zu Fehlern führen. Solche Fehler können teilweise Texte bzw. ganze Webseiten optisch verzerren. Dank des schnellen Content Delivery Network (CDN) gibt es mit Google Fonts keine plattformübergreifenden Probleme. Google Fonts unterstützt alle gängigen Browser ( Google Chrome, Mozilla Firefox, Apple Safari, Opera)  und funktioniert zuverlässig auf den meisten modernen mobilen Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone, iPad, iPod).</p>
				<p>Wir verwenden die Google Fonts also, damit wir unser gesamtes Online-Service so schön und einheitlich wie möglich darstellen können. Nach dem Art. 6 Abs. 1 f lit. F DSGVO stellt das bereits ein „berechtigtes Interesse“ an der Verarbeitung von personenbezogenen Daten dar. Unter „berechtigtem Interesse“ versteht man in diesem Fall sowohl rechtliche als auch wirtschaftliche oder ideelle Interessen, die vom Rechtssystem anerkannt werden.</p>

				<h4>Welche Daten werden von Google gespeichert?</h4>
				<p>Wenn Sie unsere Webseite besuchen, werden die Schriften über einen Google-Server nachgeladen. Durch diesen externen Aufruf werden Daten an die Google-Server übermittelt. So erkennt Google auch, dass Sie bzw. Ihre IP-Adresse unsere Webseite besucht. Die Google Fonts API wurde entwickelt, um die Erfassung, Speicherung und Verwendung von Endnutzerdaten auf das zu reduzieren, was für eine effiziente Bereitstellung von Schriften nötig ist. API steht übrigens für „Application Programming Interface“ und dient unter anderem als Datenübermittler im Softwarebereich.</p>
				<p>Google Fonts speichert CSS- und Font-Anfragen sicher bei Google und ist somit geschützt. Durch die gesammelten Nutzungszahlen kann Google die Beliebtheit der Schriften feststellen. Die Ergebnisse veröffentlicht Google auf internen Analyseseiten, wie beispielsweise Google Analytics. Zudem verwendet Google auch Daten des eigenen Web-Crawlers, um festzustellen, welche Webseiten Google-Schriften verwenden. Diese Daten werden in der BigQuery-Datenbank von Google Fonts veröffentlicht. BigQuery ist ein Webservice von Google für Unternehmen, die große Datenmengen bewegen und analysieren wollen.</p>
				<p>Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage auch Informationen wie IP-Adresse, Spracheinstellungen, Bildschirmauflösung des Browsers, Version des Browsers und Name des Browsers automatisch an die Google-Server übertragen werden. Ob diese Daten auch gespeichert werden, ist nicht klar feststellbar bzw. wird von Google nicht eindeutig kommuniziert.</p>

				<h5>Wie lange und wo werden die Daten gespeichert?</h5>
				<p>Anfragen für CSS-Assets speichert Google einen Tag lang auf Ihren Servern, die hauptsächlich außerhalb der EU angesiedelt sind. Das ermöglicht uns, mithilfe eines Google-Stylesheets die Schriftarten zu nutzen. Ein Stylesheet ist eine Formatvorlage, über die man einfach und schnell z.B. das Design bzw. die Schriftart einer Webseite ändern kann.</p>
				<p>Die Font-Dateien werden bei Google ein Jahr gespeichert. Google verfolgt damit das Ziel, die Ladezeit von Webseiten grundsätzlich zu verbessern. Wenn Millionen von Webseiten auf die gleichen Schriften verweisen, werden sie nach dem ersten Besuch zwischengespeichert und erscheinen sofort auf allen anderen später besuchten Webseiten wieder. Manchmal aktualisiert Google Schriftdateien, um die Dateigröße zu reduzieren, die Abdeckung von Sprache zu erhöhen und das Design zu verbessern.</p>

				<h5>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h5>
				<p>Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können nicht einfach gelöscht werden. Die Daten werden beim Seitenaufruf automatisch an Google übermittelt. Um diese Daten vorzeitig löschen zu können, müssen Sie den Google-Support auf <a   href="https://support.google.com/?hl=de&amp;tid=311120078" target="_blank" rel="noopener noreferrer nofollow">https://support.google.com/?hl=de&amp;tid=311120078</a> kontaktieren. Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie unsere Seite nicht besuchen.</p>
				<p>Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf <a   href="https://developers.google.com/fonts/faq?tid=311120078" target="_blank" rel="noopener noreferrer nofollow">https://developers.google.com/fonts/faq?tid=311120078</a>. Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein, doch wirklich detaillierte Informationen über Datenspeicherung sind nicht enthalten. Es ist relativ schwierig (beinahe unmöglich), von Google wirklich präzise Informationen über gespeicherten Daten zu bekommen.</p>
				<p>Welche Daten grundsätzlich von Google erfasst werden und wofür diese Daten verwendet werden, können Sie auch auf <a href="https://policies.google.com/privacy?hl=de&amp;tid=311120078" target="_blank" rel="noopener noreferrer nofollow">https://www.google.com/intl/de/policies/privacy/</a> nachlesen.</p>

				<h4>Google Analytics Datenschutzerklärung</h4>
				<p>Wir verwenden auf dieser Website Google Analytics der Firma Google LLC (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) um Besucherdaten statistisch auszuwerten. Dabei verwendet Google Analytics zielorientierte Cookies.</p>

				<h4>Cookies von Google Analytics</h4>
				<ul>
					<li  >_ga
						<ul  >
						<li  >Ablaufzeit: 2 Jahre</li>
						<li  >Verwendung: Unterscheidung der Webseitenbesucher</li>
						<li  >Beispielhafter Wert: GA1.2.1326744211.152311120078</li>
						</ul>
					</li>
					<li  >_gid
						<ul  >
						<li  >Ablaufzeit: 24 Stunden</li>
						<li  >Verwendung: Unterscheidung der Webseitenbesucher</li>
						<li  >Beispielhafter Wert: GA1.2.1687193234.152311120078</li>
						</ul>
					</li>
					<li  >_gat_gtag_UA_&lt;property-id&gt;
						<ul  >
						<li  >Ablaufzeit: 1 Minute</li>
						<li  >Verwendung: Wird zum Drosseln der Anforderungsrate verwendet. Wenn Google Analytics über den Google Tag Manager bereitgestellt wird, erhält dieser Cookie den Namen _dc_gtm_ &lt;property-id&gt;.</li>
						<li  >Beispielhafter Wert: 1</li>
						</ul>
					</li>
				</ul>
				<p>Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter <a href="http://www.google.com/analytics/terms/de.html" target="_blank" rel="noopener noreferrer nofollow">http://www.google.com/analytics/terms/de.html</a> bzw. unter <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer nofollow">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p>

				<h4>Pseudonymisierung</h4>
				<p>
				Unser Anliegen im Sinne der DSGVO ist die Verbesserung unseres Angebotes und unseres Webauftritts. Da uns die Privatsphäre unserer Nutzer wichtig ist, werden die Nutzerdaten pseudonymisiert. Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des Art 6 EU-DSGVO Abs 1 lit a (Einwilligung) und/oder f (berechtigtes Interesse) der DSGVO.
				</p>

				<h4>Deaktivierung der Datenerfassung durch Google Analytics</h4>
				<p>
				Mithilfe des Browser-Add-ons zur Deaktivierung von Google Analytics-JavaScript (ga.js, analytics.js, dc.js) können Website-Besucher verhindern, dass Google Analytics ihre Daten verwendet.
				</p>
				<p>Sie können die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer nofollow">https://tools.google.com/dlpage/gaoptout?hl=de</a></p>
				<h4>Google Analytics Berichte zu demografischen Merkmalen und Interessen</h4>
				<p>Wir haben in Google Analytics die Funktionen für Werbeberichte eingeschaltet. Die Berichte zu demografischen Merkmalen und Interessen enthalten Angaben zu Alter, Geschlecht und Interessen. Damit können wir uns &#8211; ohne diese Daten einzelnen Personen zuordnen zu können &#8211; ein besseres Bild von unseren Nutzern machen. Mehr über die Werbefunktionen erfahren Sie <a href="https://support.google.com/analytics/answer/3450482?hl=de_AT&amp;utm_id=ad" target="_blank" rel="noopener noreferrer nofollow">auf https://support.google.com/analytics/answer/3450482?hl=de_AT&amp;utm_id=ad</a>.</p>
				<p>Sie können die Nutzung der Aktivitäten und Informationen Ihres Google Kontos unter “Einstellungen für Werbung” auf <a   href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer nofollow">https://adssettings.google.com/authenticated</a> per Checkbox beenden.</p>
				<p>Quelle: Erstellt mit dem <a title="Datenschutz Generator Deutschland" href="https://www.adsimple.de/datenschutz-generator/" target="_blank" rel="noopener noreferrer nofollow">Datenschutz Generator</a> von AdSimple in Kooperation mit <a href="https://www.hashtagmann.de" target="_blank" rel="noopener noreferrer nofollow">hashtagmann.de</a>
				</p>
            </div>
        </Modal>

	</Container>
</footer>
  );
}

export default Footer;
