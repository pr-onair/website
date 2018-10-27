import PropTypes from 'prop-types';
import Scripts from './scripts.js';
import Head from './head.js';
import React from 'react';

/*
 * The Page component
 */
const Page = ({
	pagetitle,
	header,
	main,
	body,
	footer,
	_pages,
	_relativeURL,
	_ID,
}) => (
	<html>
		<Head _ID={ _ID } _relativeURL={ _relativeURL } pagetitle={ pagetitle }/>

		<body className={ _ID }>
			{ header }

			<main>
				{ body ? null : <div className="row"><a href={ _relativeURL( '/', _ID ) }>← Back home</a></div> }
				{ main }
				{ body && body }
			</main>

			{ footer }

			<Scripts _ID={ _ID } _relativeURL={ _relativeURL }/>
		</body>
	</html>
);

Page.propTypes = {
	/**
	 * pagetitle: Homepage
	 */
	pagetitle: PropTypes.string.isRequired,

	/**
	 * header: (partials)(2)
	 */
	header: PropTypes.node.isRequired,

	/**
	 * main: (partials)(2)
	 */
	main: PropTypes.node,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

export default Page;
