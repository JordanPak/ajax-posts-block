<?php
/**
 * Test_REST_API
 *
 * @package AJAX_Posts_Block
 */

use AJAX_Posts_Block\REST_API;

/**
 * Class Test_REST_API
 *
 * @package AJAX_Posts_Block
 */
class Test_REST_API extends WP_UnitTestCase {

	/**
	 * REST server
	 *
	 * @var WP_Rest_Server
	 */
	protected $server;

	/**
	 * REST_API instance
	 *
	 * @var REST_API
	 */
	public $instance;

	/**
	 * Setup
	 */
	public function setUP() {
		parent::setUp();

		// Spin up REST server.
		global $wp_rest_server;

		$wp_rest_server = new \WP_REST_Server();
		$this->server   = $wp_rest_server;

		do_action( 'rest_api_init' );

		// Create our test instance.
		$this->instance = new REST_API();
	}

	/**
	 * Test __construct()
	 *
	 * @covers AJAX_Posts_Block\REST_API::__construct()
	 */
	public function test_construct() {
		$this->assertSame( 10, has_filter( 'rest_post_query', [ $this->instance, 'set_post_types' ] ) );
	}

	/**
	 * Test set_post_types()
	 *
	 * @covers AJAX_Posts_Block\REST_API::set_post_types()
	 */
	public function test_set_post_types() {

		// Make sure page post type isn't included by default.
		$default_request = new \WP_REST_Request( 'GET', '/wp/v2/posts' );
		$default_args    = $this->instance->set_post_types( [], $default_request );

		if ( ! empty( $default_args['post_type'] ) ) {
			$this->assertNotContains( 'page', $default_args['post_type'] );
		}

		// Make sure a non-default post type (page) is included when passing in
		// apb_query flag.
		$flagged_request = new \WP_REST_Request( 'GET', '/wp/v2/posts' );
		$flagged_request->set_param( 'apb_query', true );

		$flagged_args = $this->instance->set_post_types( [], $flagged_request );
		$this->assertContains( 'page', $flagged_args['post_type'] );
	}
}
