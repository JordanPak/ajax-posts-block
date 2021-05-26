module.exports = {
	...require( '@wordpress/scripts/config/jest-unit.config' ),
	transformIgnorePatterns: [ '/node_modules/', '<rootDir>/e2e' ],
};
