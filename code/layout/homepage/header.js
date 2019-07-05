import { SVGSprite } from './../helper';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The homepage header component
 */
const HomepageHeader = ({ headline, nav, _relativeURL, _ID, _pages, _isDocs }) => {
	const newID = _isDocs ? `/1/2/3/${ _ID }` : _ID;

	return (
		<section className="header section">
			{
				_isDocs && <link href="https://fonts.googleapis.com/css?family=Quicksand:700" rel="stylesheet"/>
			}
			<h1 className="headline js-scrollspytarget" id="hallo" tabIndex="0">{ headline }</h1>
			<div className="header-body">
				<svg className="header-icon" role="img">
					<title>Microfon</title>
					<use xlinkHref={ SVGSprite( `microphone`, _relativeURL, newID ) }/>
				</svg>
				<svg className="header-icon" role="img">
					<title>Headset</title>
					<use xlinkHref={ SVGSprite( `headset`, _relativeURL, newID ) }/>
				</svg>
				{/*<a className="js-scroll btn" href="#kontakt">Kontakt</a>*/}
				<svg className="header-icon" role="img">
					<title>Radio</title>
					<use xlinkHref={ SVGSprite( `radio`, _relativeURL, newID ) }/>
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
													<use xlinkHref={ SVGSprite( `facebook`, _relativeURL, newID ) }/>
												</svg>
											</a>
								}
							</li>
						)
					}
				</ul>
			</nav>
			{
				_isDocs && <script type="text/javascript" src={ `../../../assets/js/script.min.js` }/>
			}
		</section>
	);
};

HomepageHeader.propTypes = {
	/**
	 * headline: Hallo, wir sind PR ON AIR
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * nav:
	 *   - id: hallo
	 *     name: Hallo
	 *   - id: uber-uns
	 *     name: Über uns
	 *   - id: dienstleistungen
	 *     name: Dienstleistungen
	 */
	nav: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			facebook: PropTypes.string,
		})
	).isRequired,
};

HomepageHeader.defaultProps = {};

export default HomepageHeader;
