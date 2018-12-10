import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ top, bottom, _body, _self }) => (
	<Fragment>
		<section className="partial-top">
			<div className="partial">
				{ _body }
			</div>
		</section>
		<section>
			<div className="partial">
				{ top }
			</div>
		</section>
		<section className="section-referenzen">
			<div className="partial">
				{ bottom }
			</div>
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
