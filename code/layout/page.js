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
	description,
	_pages,
	_relativeURL,
	_ID,
}) => (
	<html>
		<Head _ID={ _ID } _relativeURL={ _relativeURL } pagetitle={ pagetitle } description={ description }/>

		<body className={ _ID }>
			{ header }

			<main>
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
	footer: PropTypes.node,

	/**
	 * description: This is x y and z
	 */
	description: PropTypes.string,
};

export default Page;
