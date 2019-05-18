import PropTypes from 'prop-types';
import React from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ textalign, _body, _self }) => (
	<section className={`partial${ textalign === 'left' ? ' partial-left' : '' }`}>
		{ _body }
	</section>
);

Partial.propTypes = {
	/**
	 * textalign: center
	 */
	textalign: PropTypes.string,

	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
