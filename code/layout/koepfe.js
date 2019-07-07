import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The partial component
 */
const Partial = ({ top, bottom, _body, _self }) => (
	<Fragment>
		<section className="partial partial-top">
			{ _body }
		</section>
		<section>
			{ top }
		</section>
		<section className="section-orange">
			{ bottom }
		</section>
	</Fragment>
);

Partial.propTypes = {
	/**
	 * top: (partials)(1)
	 */
	top: PropTypes.node.isRequired,

	/**
	 * bottom: (partials)(1)
	 */
	bottom: PropTypes.node.isRequired,

	/**
	 * _body: (text)(1)
	 */
	_body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
