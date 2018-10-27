import { SVGSprite } from './../helper';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The homepage header component
 */
const HomepageHeader = ({ headline, _relativeURL, _ID }) => (
	<section className="header section">
		<h1 className="headline" id="hallo" tabIndex="0">{ headline }</h1>
		<div className="header-body">
			<svg className="header-icon" role="img">
				<title>Microfon</title>
				<use xlinkHref={ SVGSprite( `microphone`, _relativeURL, _ID ) }/>
			</svg>
			<a className="js-scroll btn" href="#kontakt">Kontakt</a>
			<svg className="header-icon" role="img">
				<title>Radio</title>
				<use xlinkHref={ SVGSprite( `radio`, _relativeURL, _ID ) }/>
			</svg>
		</div>
	</section>
);

HomepageHeader.propTypes = {
	/**
	 * headline: A mini-conf bringing together designers, design system lovers and front-end developers.
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

HomepageHeader.defaultProps = {};

export default HomepageHeader;
