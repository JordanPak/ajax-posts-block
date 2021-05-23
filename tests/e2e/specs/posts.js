import {
	activatePlugin,
	createNewPost,
	deactivatePlugin,
	insertBlock,
} from '@wordpress/e2e-test-utils';

describe( 'AJAX Posts Block', () => {
	// beforeEach( async () => {
	// 	jest.setTimeout( 25000 );
	// 	await activatePlugin( 'ajax-posts-block' );
	// 	// await createNewPost();
	// } );

	// afterEach( async () => {
	// 	await deactivatePlugin( 'ajax-posts-block' );
	// } );

	it( 'Can be added', async () => {
		await createNewPost();
		await insertBlock( 'Posts' );

		// make sure it was inserted
		expect(
			await page.$( '[data-type="ajax-posts-block/posts"]' )
		).not.toBeNull();

		// expect( 2 + 1 ).toEqual( 3 );
	} );
} );
