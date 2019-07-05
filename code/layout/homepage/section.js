import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Section component
 */
const Section = ({ headline, id, _body, _relativeURL, _ID }) => (
	<section className={`section section-${ id }`}>
		<h2 className="section-headline js-scrollspytarget" id={ id } tabIndex="0">{ headline }</h2>
		<div className="section-content">
			{ _body }
		</div>
	</section>
);

Section.propTypes = {
	/**
	 * headline: Text Section
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * id: uber-uns
	 */
	id: PropTypes.string,

	/**
	 * _body: (text)(5)
	 */
	_body: PropTypes.node.isRequired,
};

Section.defaultProps = {};

export default Section;
