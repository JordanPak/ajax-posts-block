import {
	activatePlugin,
	createNewPost,
	deactivatePlugin,
	enablePageDialogAccept,
	getEditedPostContent,
	insertBlock,
	trashAllPosts,
} from '@wordpress/e2e-test-utils';

describe( 'AJAX Posts Block', () => {
	// activate the plugin and go to a new post edit screen
	beforeEach( async () => {
		await activatePlugin( 'ajax-posts-block' );
		await createNewPost();
	} );

	// clear out new post dialogs
	beforeAll( async () => {
		await enablePageDialogAccept();
	} );

	// cleanup: deactivate plugin
	afterEach( async () => {
		await deactivatePlugin( 'ajax-posts-block' );
	} );

	it( 'Can be added', async () => {
		await insertBlock( 'Posts' );

		// make sure it was inserted
		expect(
			await page.$( '[data-type="ajax-posts-block/posts"]' )
		).not.toBeNull();

		// and that it matches the snapshot
		expect( await getEditedPostContent() ).toMatchSnapshot();
	} );
	} );
} );
