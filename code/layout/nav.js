import { SVGSprite } from './helper';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The nav component
 */
const Nav = ({ nav, _relativeURL, _ID, _isDocs }) => {
	const newID = _isDocs ? `/1/2/3/${ _ID }` : _ID;

	return (
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
	);
};

Nav.propTypes = {
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

Nav.defaultProps = {};

export default Nav;
