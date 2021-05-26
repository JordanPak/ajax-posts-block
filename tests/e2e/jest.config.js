module.exports = {
	...require( '@wordpress/scripts/config/jest-e2e.config' ),
	transformIgnorePatterns: [ '/node_modules/' ],
};
