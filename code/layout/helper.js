import pkg from './../../package.json';

export const SVGSprite = ( item, _relativeURL, _ID ) => _relativeURL( `assets/svg/sprite.svg?v${ pkg.version }#${ item }`, _ID );
