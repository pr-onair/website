import { SVGSprite } from './../helper';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const ConditionalWrap = ({ condition, wrap, children }) => condition ? wrap( children ) : children;

/**
 * The Reference component
 */
const Reference = ({ headline, id, color, refs, _body, _relativeURL, _ID, _isDocs }) => {
	const newID = _isDocs ? `/1/2/3/${ _ID }` : _ID;

	return (
		<section className={`section section-referenzen section-${ color }`}>
			<h2 className="section-headline js-scrollspytarget" id={ id } tabIndex="0">{ headline }</h2>
			<ul className="references list">
				{
					refs
						.sort((a, b) => a.name.localeCompare(b.name, 'de-DE-u-co-phonebk', {sensitivity: 'base'}))
						.map( ( ref, i ) => {
							let Wrapper = 'Fragment';
							if( ref.url ) Wrapper = 'a';

							return <li key={ i }>
								<ConditionalWrap condition={ ref.url } wrap={ children => <a href={ ref.url }>{ children }</a> }>
									{
										ref.svg
											? <svg role="img">
													<title>{ ref.name }</title>
													<use xlinkHref={ SVGSprite( ref.svg, _relativeURL, newID ) }/>
												</svg>
											: <img src={ _relativeURL( `/assets/img/${ ref.img }`, newID ) } alt={ ref.name }/>
									}
								</ConditionalWrap>
							</li>
					})
				}
			</ul>
		</section>
	);
};

Reference.propTypes = {
	/**
	 * headline: Section
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * id: referenzen
	 */
	id: PropTypes.string,

	/**
	 * color: braun
	 */
	color: PropTypes.oneOf([ 'braun', 'gelb', 'orange', 'weiss', 'mint' ]),

	/**
	 * refs:
	 *   - name: Ubisoft
	 *     svg: ubisoft
	 *   - name: Take-Two
	 *     svg: take-two
	 *   - name: Oral B
	 *     svg: oralb
	 *   - name: MSC Kreuzfahrten
	 *     svg: msc-kreuzfahrten
	 *   - name: DGK
	 *     svg: dgk
	 *   - name: BWP
	 *     svg: bwp
	 *   - name: mymuesli
	 *     svg: mymuesli
	 *   - name: Ullstein
	 *     img: ullstein.png
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
