import pkg from './../../package.json';

/*
 * @disable-docs
 */
export const SVGSprite = ( item, _relativeURL, _ID ) => _relativeURL( `assets/svg/sprite.svg?v${ pkg.version }#${ item }`, _ID );
