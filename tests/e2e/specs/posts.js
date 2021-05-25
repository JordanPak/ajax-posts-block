/**
 * Test Posts block in editor
 *
 * @since .0.0
 */

import {
	activatePlugin,
	createNewPost,
	deactivatePlugin,
	enablePageDialogAccept,
	getEditedPostContent,
	insertBlock,
	publishPost,
	trashAllPosts,
} from '@wordpress/e2e-test-utils';

/**
 * Create a demo post and page
 */
const createDemoPosts = async () => {
	await createNewPost( { postType: 'post', title: 'APB Demo Post' } );
	await publishPost();

	await createNewPost( { postType: 'page', title: 'APB Demo Page' } );
	await publishPost();
};

/**
 * Trash posts and pages
 */
const trashPosts = async () => {
	await trashAllPosts();
	await trashAllPosts( 'page' );
};

describe( 'AJAX Posts Block', () => {
	beforeEach( async () => {
		await activatePlugin( 'ajax-posts-block' );
	} );

	// make sure editor dialogs are skipped and posts/pages are reset
	beforeAll( async () => {
		await enablePageDialogAccept();
		await trashPosts();
	} );

	afterEach( async () => {
		await deactivatePlugin( 'ajax-posts-block' );
	} );

	afterAll( async () => {
		await trashPosts();
	} );

	it( 'Can be added', async () => {
		await createNewPost();
		await insertBlock( 'Posts' );

		// make sure it was inserted
		expect(
			await page.$( '[data-type="ajax-posts-block/posts"]' )
		).not.toBeNull();

		// and that it matches the snapshot
		expect( await getEditedPostContent() ).toMatchSnapshot();
	} );

	it( 'Displays the demo post and page', async () => {
		await createDemoPosts();
		await createNewPost();
		await insertBlock( 'Posts' );

		const postTitles = await page.$$( '.apb-post-title' );
		const postTitlesText = [];

		for ( let i = 0; i < postTitles.length; i++ ) {
			postTitlesText.push(
				await (
					await postTitles[ i ].getProperty( 'innerText' )
				 ).jsonValue()
			);
		}

		expect( postTitlesText ).toStrictEqual( [
			'APB Demo Page',
			'APB Demo Post',
		] );
	}, 45000 ); // Demo post takes a really, really, really long time :\
} );
