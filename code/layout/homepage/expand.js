import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Section component
 */
const Expand = ({ headline, id, _body, _self, sections, _relativeURL, _parseMD, _ID }) => {
	const myself = _self.replace('/', '-').replace('.', '-');

	return (
		<section className={`section section-${ id }`}>
			<h2 className="section-headline js-scrollspytarget" id={ id } tabIndex="0">{ headline }</h2>
			<div className="section-content">
				{ _body }
			</div>
			<div className="expand-wrapper">
				{
					sections && sections.map( ( section, id ) =>
						<div className="expand-col" key={ id }>
							<img src={ _relativeURL( `/assets/img/${ section.img }`, _ID ) } alt={ section.title }/>
							<button className="btn expand-button js-expand" data-expand={`#section${ id }-${ myself }`} data-section={ myself }>
								+ { section.title }
							</button>
						</div>
					)
				}
			</div>
			{
				sections && sections.map( ( section, id ) =>
					<div key={ id } className={`expand-body js-expandable-${ myself }`} id={`section${ id }-${ myself }`}>
						{ _parseMD( section.content ) }
					</div>
				)
			}
		</section>
	);
};

Expand.propTypes = {
	/**
	 * headline: Section
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * id: uber-uns
	 */
	id: PropTypes.string,

	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Expand.defaultProps = {};

export default Expand;
