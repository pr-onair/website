import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Section component
 */
const Section = ({ headline, map, id, _body, _relativeURL, _ID }) => (
	<section className={`section section-${ id }`}>
		<h2 className="section-headline" id={ id } tabIndex="0">{ headline }</h2>
		<div className="section-content">
			{ _body }
		</div>
		<iframe className="row-h content location-map" src={ map } width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
	</section>
);

Section.propTypes = {
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

Section.defaultProps = {};

export default Section;
