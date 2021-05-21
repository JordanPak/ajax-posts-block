<?php
/**
 * Test_Posts
 *
 * @since   1.0.0
 * @package AJAX_Posts_Block
 */

use AJAX_Posts_Block\Posts;

/**
 * Class Test_Posts
 *
 * @since   1.0.0
 * @package AJAX_Posts_Block
 */
class Test_Posts extends WP_UnitTestCase {

	/**
	 * Posts misc helper instance
	 *
	 * @since 1.0.0
	 * @var   Blocks
	 */
	public $instance;

	/**
	 * Setup
	 *
	 * @since 1.0.0
	 */
	public function setUP() {
		parent::setUp();
		$this->instance = new Posts();
	}

	/**
	 * Test __construct()
	 *
	 * @since 1.0.0
	 *
	 * @covers AJAX_Posts_Block\Posts::__construct()
	 */
	public function test_construct() {
		$this->assertEquals( 10, has_action( 'init', [ $this->instance, 'do_meta_registration' ] ) );
	}

	/**
	 * Test do_meta_registration()
	 *
	 * @since 1.0.0
	 *
	 * @covers AJAX_Posts_Block\Posts::do_meta_registration()
	 */
	public function test_do_meta_registration() {
		$this->instance->do_meta_registration();

		$this->assertArrayHasKey(
			'apb_read_time',
			get_registered_meta_keys( 'post' ),
			'apb_read_time post meta key is not registered.'
		);
	}

	/**
	 * Make sure apb_read_time meta can be set and retreived
	 *
	 * We're going to use a page since it's more edge-casey than a normal post
	 * post.
	 *
	 * @since 1.0.0
	 *
	 * @covers AJAX_Posts_Block\Posts::do_meta_registration()
	 */
	public function test_read_time_post_meta() {

		// @see Pirates of the Caribbean.
		$post_id = $this->factory->post->create(
			[
				'post_type'    => 'page',
				'post_title'   => 'Why, thank you, Jack',
				'post_content' => 'No, the <em>monkey</em> Jack.',
				'meta_input'   => [
					'apb_read_time' => 100,
				],
			]
		);

		$this->assertSame(
			'100',
			get_post_meta( $post_id, 'apb_read_time', true ),
			'Page post\'s apb_read_time meta should be "100".'
		);
	}
}
