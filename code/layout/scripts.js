import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The script component
 *
 * @disable-docs
 */
const Scripts = ({ _ID, _relativeURL }) => (
	<Fragment>
		<script type="text/javascript" src={ _relativeURL( `/assets/js/script.min.js`, _ID ) }/>
	</Fragment>
);

Scripts.propTypes = {};

Scripts.defaultProps = {};

export default Scripts;
