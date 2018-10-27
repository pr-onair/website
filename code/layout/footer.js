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
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Footer.defaultProps = {};

export default Footer;
