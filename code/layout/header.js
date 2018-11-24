import { SVGSprite } from './helper';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The header component
 */
const Header = ({ nav, _relativeURL, _ID }) => (
	<header className="top" role="banner" id="top">
		<a className="top-icon" href={ _relativeURL( '/', _ID ) }>
			<svg role="img">
				<title>PR on Air logo</title>
				<use xlinkHref={ SVGSprite( `logo`, _relativeURL, _ID ) }/>
			</svg>
		</a>
		{
			nav && <nav>
				<ul className="list top-nav">
					{
						nav.map( ( page, i ) =>
							<li key={ i }>
								<a href={`${ _relativeURL( page.url, _ID ) }`}>{ page.name }</a>
							</li>
						)
					}
				</ul>
			</nav>
		}
	</header>
);

Header.propTypes = {
	/**
	 * nav:
	 *   - url: hallo
	 *     name: Hallo
	 *   - url: uber-uns
	 *     name: Über uns
	 *   - url: dienstleistungen
	 *     name: Dienstleistungen
	 */
	nav: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
};

Header.defaultProps = {};

export default Header;
