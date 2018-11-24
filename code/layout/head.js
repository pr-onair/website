import pkg from './../../package.json';
import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The partial component
 *
 * @disable-docs
 */
const Head = ({ description, _ID, _relativeURL, pagetitle }) => {
	const Styles = () => Fs.readFileSync( Path.normalize(`${ __dirname }/../css/head.min.css`), 'utf8' );

	return (
		<head>
			<title>{ pagetitle ? pagetitle : 'PR on Air' }</title>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<meta httpEquiv="x-ua-compatible" content="ie=edge"/>
			<meta name="robots" content="index, follow"/>
			<meta name="author" content="Dominik Wilkowski"/>
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=A07n9dnJnd"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=A07n9dnJnd"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=A07n9dnJnd"/>
			<link rel="manifest" href="/site.webmanifest?v=A07n9dnJnd"/>
			<link rel="mask-icon" href="/safari-pinned-tab.svg?v=A07n9dnJnd" color="#fc63b3"/>
			<meta name="msapplication-TileColor" content="#1a2441"/>
			<link rel="shortcut icon" href="/favicon.ico?v=A07n9dnJnd"/>
			<meta name="msapplication-TileColor" content="#1c2541"/>
			<meta name="theme-color" content="#ff0000"/>
			<meta property="og:image:height" content="1257"/>
			<meta property="og:image:width" content="2400"/>
			<meta property="og:description" content={ description }/>
			<meta property="og:title" content="PR on Air"/>
			<meta property="og:site_name" content="PR on Air"/>
			<meta property="og:url" content="https://TODO.com/"/>
			<meta property="og:image" content={`https://TODO.com/assets/img/og-image.jpg?v${ pkg.version }`}/>
			<meta property="og:image:height" content="1257"/>
			<meta property="og:image:width" content="2400"/>
			<meta name="twitter:card" content="summary_large_image"/>
			<meta name="twitter:title" content="PR on Air"/>
			<meta name="twitter:description" content={ description }/>
			<meta name="twitter:name" content="PR on Air"/>
			<meta name="twitter:image" content={`https://TODO.com/assets/img/og-image.jpg?v${ pkg.version }`}/>
			<style dangerouslySetInnerHTML={{ __html: Styles() }} />
			<link href="https://fonts.googleapis.com/css?family=Krub:700" rel="stylesheet"/>
			<link rel="stylesheet" href={_relativeURL(`/assets/css/site.min.css`, _ID)}/>
		</head>
	);
};

Head.propTypes = {};

Head.defaultProps = {};

export default Head;
