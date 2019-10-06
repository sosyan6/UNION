const unit = JSON.parse( require( 'fs' ).readFileSync( './unit.json', 'utf-8' ) );

module.exports.unitData = unit;
module.exports.reverseLookup = i => unit.filter( v => v.Member.indexOf( i ) != -1 );
module.exports.validateUnit  = u => unit.filter( v => v.Member.sort().toString() == u.sort().toString() );