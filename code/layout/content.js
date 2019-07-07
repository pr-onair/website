import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Content component
 */
const Content = ({ headline, id, color, _body }) => (
	<section className={`section section-${ color }`}>
		<h2 className="section-headline" id={ id } tabIndex="0">{ headline }</h2>
		<div className="section-content">
			<div className="section-body">
				{ _body }
			</div>
		</div>
	</section>
);

Content.propTypes = {
	/**
	 * headline: Kontakt
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * id: uber-uns
	 */
	id: PropTypes.string,

	/**
	 * color: braun
	 */
	color: PropTypes.oneOf([ 'braun', 'gelb', 'orange', 'weiss', 'mint' ]),

	/**
	 * _body: (text)(7)
	 */
	_body: PropTypes.node.isRequired,
};

Content.defaultProps = {};

export default Content;
