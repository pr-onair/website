import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Section component
 */
const Expand = ({ headline, id, sections, _body, _self, _relativeURL, _parseMD, _ID, _isDocs }) => {
	const myself = _self.replace('/', '-').replace('.', '-');
	const newID = _isDocs ? `/1/2/3/${ _ID }` : _ID;

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
							<img src={ _relativeURL( `/assets/img/${ section.img }`, newID ) } alt={ section.title }/>
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
			{
				_isDocs && <script type="text/javascript" src={ `../../../assets/js/script.min.js` }/>
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
	 * sections:
	 *   - title: Hörfunk-PR
	 *     content: |
	 *       Some text
	 *     img: hoerfunk-pr.jpg
	 *   - title: Radiomaterndienst
	 *     content: |
	 *       Some other text
	 *     img: radiomaterndienst.jpg
	 *   - title: Sonderwerbeform
	 *     content: |
	 *       So much more text
	 *     img: sonderwerbeform.jpg
	 */
	sections: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
		})
	).isRequired,

	/**
	 * _body: (text)(1)
	 */
	_body: PropTypes.node.isRequired,
};

Expand.defaultProps = {};

export default Expand;
