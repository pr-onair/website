import React, { Fragment } from 'react';
import { SVGSprite } from './../helper';
import PropTypes from 'prop-types';


/**
 * The Section component
 */
const Section = ({ headline, map, id, phone, email, facebook, address1, address2, _body, _relativeURL, _ID }) => (
	<section className={`section section-${ id }`}>
		<h2 className="section-headline" id={ id } tabIndex="0">{ headline }</h2>
		<div className="section-content location">
			<svg role="img">
				<title>PR on Air logo</title>
				<use xlinkHref={ SVGSprite( `logo`, _relativeURL, _ID ) }/>
			</svg>
			<p>
				{ address1 && <Fragment>{ address1 }<br/></Fragment> }
				{ address2 && address2 }
			</p>
			{
				phone &&
					<a href={`tel:${ phone }`}>
						<svg className="texticon" role="img">
							<title>phone</title>
							<use xlinkHref={ SVGSprite( `phone`, _relativeURL, _ID ) }/>
						</svg>
						{ phone }
						<br/>
					</a>
			}
			{
				email &&
					<a href={`mailto:${ email }`}>
						<svg className="texticon" role="img">
							<title>email</title>
							<use xlinkHref={ SVGSprite( `email`, _relativeURL, _ID ) }/>
						</svg>
						{ email }
					</a>
			}
			{ facebook && <p>Wir bei <br/><a href={ facebook } target="_blank" rel="noopener noreferrer">Facebook</a></p> }
			{ _body && <div className="section-body">{ _body }</div> }
			{
				map && <iframe className="row-h content location-map" src={ map } width="100%" height="400" frameBorder="0" allowFullScreen></iframe>
			}
		</div>
	</section>
);

Section.propTypes = {
	/**
	 * headline: Section
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * id: uber-uns
	 */
	id: PropTypes.string,

	/**
	 * map: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.2400085515346!2d12.338510051650331!3d51.32510517950532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f77660d42175%3A0x4f54f5b153a701f7!2sHolbeinstra%C3%9Fe+29%2C+04229+Leipzig%2C+Germany!5e0!3m2!1sen!2sau!4v1543113166013
	 */
	map: PropTypes.string,

	/**
	 * phone: uber-uns
	 */
	phone: PropTypes.string,

	/**
	 * email: uber-uns
	 */
	email: PropTypes.string,

	/**
	 * facebook: uber-uns
	 */
	facebook: PropTypes.string,

	/**
	 * address1: uber-uns
	 */
	address1: PropTypes.string,

	/**
	 * address2: uber-uns
	 */
	address2: PropTypes.string,

	/**
	 * _body: [Impressum](/impressum)
	 */
	_body: PropTypes.node,
};

Section.defaultProps = {};

export default Section;
