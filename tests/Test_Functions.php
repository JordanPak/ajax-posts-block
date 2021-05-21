<?php
/**
 * Test_Functions
 *
 * @package AJAX_Posts_Block
 */

use function AJAX_Posts_Block\get_can_user_edit_posts;
use function AJAX_Posts_Block\get_icon;
use function AJAX_Posts_Block\do_icon;

/**
 * Class Test_Functions
 *
 * @package AJAX_Posts_Block
 */
class Test_Functions extends WP_UnitTestCase {

	/**
	 * Test get_can_user_edit_posts()
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
}