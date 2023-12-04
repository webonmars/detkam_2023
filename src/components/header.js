import "../assets/css/paper-kit.css";
import "../assets/scss/index.scss";

import allTexts from '../data/allTexts.json';

import {
	Row,
	Col,
	Container
} from 'reactstrap';

// IMPORT MEDIA

import formImage from "../assets/img/form_header.svg";

const formStyle = {
	backgroundImage: 'url(' + formImage + ')',
	backgroundSize: "100% auto",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "top"
}

// DEFINIERE DIE VARIABELN FÜR TEXT-TEMPLATES
let data = allTexts[0].language.ru.header

let redHeadline = data.redHeadline ;
let headline = data.headline;
let subHeadline = data.subHeadline;

export default function Home() {

	return (
		<header className="header-global header-global-video bg-default h-100">
			<div className="bg-white">
				<Container>
					<Row>
						<Col lg="6" className="my-auto">
							<h2 className="mb-1"><strong className="text-danger">{redHeadline}</strong></h2>
							<h1 className="mt-0">{headline}</h1>
							<h3 className="montserat">{subHeadline}</h3>
							<br />
						</Col>
						<Col lg="6" className="mb-5 mt-4" style={formStyle}>
							<div className="height_9"></div>
							{/* <CustomForm  fontColor="white" fontColorHeader="white" lang={lang}/>*/}
						</Col>
					</Row>
				</Container>
			</div>
			<div className="overlay"></div>
			<video className="header-video" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
				<source src="/bg-video.mp4" type="video/mp4" />
			</video>
		</header>
	)
}
