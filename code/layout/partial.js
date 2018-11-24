import PropTypes from 'prop-types';
import React from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ _body, _self }) => (
	<section className="partial">
		{ _body }
	</section>
);

Partial.propTypes = {
	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
