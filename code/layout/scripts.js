import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The script component
 *
 * @disable-docs
 */
const Scripts = ({ _ID, _relativeURL }) => (
	<Fragment>
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-131813710-1"/>
		<script type="text/javascript" src={ _relativeURL( `/assets/js/script.min.js`, _ID ) }/>
	</Fragment>
);

Scripts.propTypes = {};

Scripts.defaultProps = {};

export default Scripts;
