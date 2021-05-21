<?php
/**
 * Test_Functions
 *
 * @since   1.0.0
 * @package AJAX_Posts_Block
 */

use function AJAX_Posts_Block\get_can_user_edit_posts;
use function AJAX_Posts_Block\get_icon;
use function AJAX_Posts_Block\do_icon;

/**
 * Class Test_Functions
 *
 * @since   1.0.0
 * @package AJAX_Posts_Block
 */
class Test_Functions extends WP_UnitTestCase {

	/**
	 * Test get_can_user_edit_posts()
	 *
	 * @since 1.0.0
	 *
	 * @covers AJAX_Posts_Block\get_can_user_edit_posts()
	 */
	public function test_get_can_user_edit_posts() {

		$editor_id     = $this->factory->user->create( [ 'role' => 'editor' ] );
		$subscriber_id = $this->factory->user->create( [ 'role' => 'subscriber' ] );
		$og_id         = get_current_user_id();

		// Make sure editors can edit_posts.
		wp_set_current_user( $editor_id );

		$this->assertTrue(
			get_can_user_edit_posts(),
			'Editor can not edit_posts and may not be able to edit custom post meta.'
		);

		// Make sure subscribers can't edit_posts.
		wp_set_current_user( $subscriber_id );

		$this->assertFalse(
			get_can_user_edit_posts(),
			'Unauthorized user(s) can edit_posts! #UHOH'
		);

		// Restore original user.
		wp_set_current_user( $og_id );
	}

	/**
	 * Test get_icon()
	 *
	 * @since 1.0.0
	 *
	 * @covers AJAX_Posts_Block\get_icon()
	 */
	public function test_get_icon() {

		$this->assertStringEqualsFile(
			AJAX_POSTS_BLOCK_DIR . 'src/icons/loading.svg',
			get_icon( 'loading' ),
			'SVG icon source getter is failing.'
		);
	}

	/**
	 * Test do_icon()
	 *
	 * @since 1.0.0
	 *
	 * @covers AJAX_Posts_Block\do_icon()
	 */
	public function test_do_icon() {
		ob_start();
		do_icon( 'loading' );

		$this->assertStringEqualsFile(
			AJAX_POSTS_BLOCK_DIR . 'src/icons/loading.svg',
			ob_get_clean(),
			'SVG icon inliner is failing to load and output source.'
		);
	}
}
