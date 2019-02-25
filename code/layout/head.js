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
			<link rel="apple-touch-icon" sizes="180x180" href={`/apple-touch-icon.png?${ pkg.version }`}/>
			<link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.png?${ pkg.version }`}/>
			<link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16.png?${ pkg.version }`}/>
			<link rel="manifest" href={`/site.webmanifest?${ pkg.version }`}/>
			<link rel="mask-icon" href={`/safari-pinned-tab.svg?${ pkg.version }`} color="#df542a"/>
			<meta name="msapplication-TileColor" content="#ffffff"/>
			<meta name="msapplication-TileImage" content={`/mstile-144x144.png/${ pkg.version }`}/>
			<link rel="shortcut icon" href={`/favicon.ico?${ pkg.version }`}/>
			<meta name="msapplication-TileColor" content="#1c2541"/>
			<meta name="theme-color" content="#ffffff"/>
			<meta property="og:image:height" content="1257"/>
			<meta property="og:image:width" content="2400"/>
			<meta property="og:description" content={ description }/>
			<meta property="og:title" content="PR on Air"/>
			<meta property="og:site_name" content="PR on Air"/>
			<meta property="og:url" content="https://http://pr-on-air.de/"/>
			<meta property="og:image" content={`https://pr-on-air.de/assets/img/og-image.jpg?v${ pkg.version }`}/>
			<meta property="og:image:height" content="1257"/>
			<meta property="og:image:width" content="2400"/>
			<meta name="twitter:card" content="summary_large_image"/>
			<meta name="twitter:title" content="PR on Air"/>
			<meta name="twitter:description" content={ description }/>
			<meta name="twitter:name" content="PR on Air"/>
			<meta name="twitter:image" content={`https://pr-on-air.de/assets/img/og-image.jpg?v${ pkg.version }`}/>
			<style dangerouslySetInnerHTML={{ __html: Styles() }} />
			<link href="https://fonts.googleapis.com/css?family=Quicksand:700" rel="stylesheet"/>
			<link rel="stylesheet" href={_relativeURL(`/assets/css/site.min.css`, _ID)}/>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-131813710-1"/>
			<script dangerouslySetInnerHTML={{ __html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'UA-131813710-1');
			` }} />
		</head>
	);
};

Head.propTypes = {};

Head.defaultProps = {};

export default Head;
