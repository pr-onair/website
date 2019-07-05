import PropTypes from 'prop-types';
import React from 'react';


/**
 * The footer component
 */
const Footer = ({ _body }) => (
	<footer role="banner">
		{ _body }
	</footer>
);

Footer.propTypes = {
	/**
	 * _body: (text)(1)
	 */
	_body: PropTypes.node,
};

Footer.defaultProps = {};

export default Footer;
