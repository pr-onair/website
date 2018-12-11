import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ top, bottom, _body, _self }) => (
	<Fragment>
		<section className="partial partial-top">
			{ _body }
		</section>
		<section>
			{ top }
		</section>
		<section className="section-referenzen">
			{ bottom }
		</section>
	</Fragment>
);

Partial.propTypes = {
	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
