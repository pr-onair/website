import { SVGSprite } from './../helper';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The homepage header component
 */
const HomepageHeader = ({ headline, nav, _relativeURL, _ID, _pages }) => (
	<section className="header section">
		<h1 className="headline js-scrollspytarget" id="hallo" tabIndex="0">{ headline }</h1>
		<div className="header-body">
			<svg className="header-icon" role="img">
				<title>Microfon</title>
				<use xlinkHref={ SVGSprite( `microphone`, _relativeURL, _ID ) }/>
			</svg>
			<svg className="header-icon" role="img">
				<title>Headset</title>
				<use xlinkHref={ SVGSprite( `headset`, _relativeURL, _ID ) }/>
			</svg>
			{/*<a className="js-scroll btn" href="#kontakt">Kontakt</a>*/}
			<svg className="header-icon" role="img">
				<title>Radio</title>
				<use xlinkHref={ SVGSprite( `radio`, _relativeURL, _ID ) }/>
			</svg>
		</div>
		<nav className="header-side js-scrollspy-wrapper">
			<ul className="list">
				{
					nav.map( ( page, i ) =>
						<li key={ i }>
							{
								page.name
									? <a className="js-scroll js-scrollspy" href={`#${ page.id }`}>{ page.name }</a>
									: <a href={`${ page.facebook }`} target="_blank" rel="noopener noreferrer">
											<svg role="img">
												<title>Facebook PR On Air</title>
												<use xlinkHref={ SVGSprite( `facebook`, _relativeURL, _ID ) }/>
											</svg>
										</a>
							}
						</li>
					)
				}
			</ul>
		</nav>
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
