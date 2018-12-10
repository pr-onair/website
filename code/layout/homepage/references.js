import { SVGSprite } from './../helper';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const ConditionalWrap = ({ condition, wrap, children }) => condition ? wrap( children ) : children;

/**
 * The Reference component
 */
const Reference = ({ headline, id, refs, _body, _relativeURL, _ID }) => (
	<section className={`section section-${ id }`}>
		<h2 className="section-headline js-scrollspytarget" id={ id } tabIndex="0">{ headline }</h2>
		<ul className="references list">
			{
				refs.map( ( ref, i ) => {
					let Wrapper = 'Fragment';
					if( ref.url ) Wrapper = 'a';

					return <li key={ i }>
						<ConditionalWrap condition={ ref.url } wrap={ children => <a href={ ref.url }>{ children }</a> }>
							{
								ref.svg
									? <svg role="img">
											<title>{ ref.name }</title>
											<use xlinkHref={ SVGSprite( ref.svg, _relativeURL, _ID ) }/>
										</svg>
									: <img src={ _relativeURL( `/assets/img/${ ref.img }`, _ID ) } alt={ ref.name }/>
							}
						</ConditionalWrap>
					</li>
				})
			}
		</ul>
	</section>
);

Reference.propTypes = {
	/**
	 * headline: Section
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * id: uber-uns
	 */
	id: PropTypes.string,

	/**
	 * refs:
	 *   - url: https://duckduckgo.com
	 *     name: Duck duck go
	 *     img: logo.png
	 *   - url: https://duckduckgo.com
	 *     name: Duck duck go
	 *     svg: logo
	 *   - url: https://duckduckgo.com
	 *     name: Duck duck go
	 *     img: logo2
	 */
	refs: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string,
			name: PropTypes.string.isRequired,
			img: PropTypes.string,
			svg: PropTypes.string,
		})
	).isRequired,

	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Reference.defaultProps = {};

export default Reference;
