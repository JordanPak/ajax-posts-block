<?php
/**
 * Test_REST_API
 *
 * @since   1.0.0
 * @package AJAX_Posts_Block
 */

use AJAX_Posts_Block\REST_API;

/**
 * Class Test_REST_API
 *
 * @since   1.0.0
 * @package AJAX_Posts_Block
 */
class Test_REST_API extends WP_UnitTestCase {

	/**
	 * REST server
	 *
	 * @since 1.0.0
	 * @var   WP_Rest_Server
	 */
	protected $server;

	/**
	 * REST_API instance
	 *
	 * @since 1.0.0
	 * @var   REST_API
	 */
	public $instance;

	/**
	 * Setup
	 *
	 * @since 1.0.0
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
	 * @since 1.0.0
	 *
	 * @covers AJAX_Posts_Block\REST_API::__construct()
	 */
	public function test_construct() {
		$this->assertSame( 10, has_filter( 'rest_post_query', [ $this->instance, 'set_post_types' ] ) );
	}

	/**
	 * Test set_post_types()
	 *
	 * @since 1.0.0
	 *
	 * @covers AJAX_Posts_Block\REST_API::set_post_types()
	 */
	public function test_set_post_types() {

		// Make sure page post type isn't included by default.
		$default_request = new \WP_REST_Request( 'GET', '/wp/v2/posts' );
		$default_args    = $this->instance->set_post_types( [], $default_request );

		if ( ! empty( $default_args['post_type'] ) ) {
			$this->assertNotContains(
				'page',
				$default_args['post_type'],
				'Improper post types are in /posts endpoint arguments.'
			);
		}

		// Make sure a non-default post type (page) is included when passing in
		// apb_query flag.
		$flagged_request = new \WP_REST_Request( 'GET', '/wp/v2/posts' );
		$flagged_request->set_param( 'apb_query', true );

		$flagged_args = $this->instance->set_post_types( [], $flagged_request );

		$this->assertContains(
			'page',
			$flagged_args['post_type'],
			'apb_query flag is not resulting in extra /posts endpoint post type arguments.'
		);
	}

	/**
	 * Test inclusion of posts of additional types in /posts query
	 *
	 * @since 1.0.0
	 *
	 * @covers AJAX_Posts_Block\REST_API::set_post_types()
	 */
	public function test_apb_query_posts_response() {

		// Insert a test post @see Pirates of the Caribbean.
		$this->factory->post->create(
			[
				'post_title'   => 'Why, thank you, Jack',
				'post_content' => 'No, the <em>monkey</em> Jack.',
			]
		);

		// Insert a test page.
		$this->factory->post->create(
			[
				'post_type'    => 'page',
				'post_title'   => "This isn't in /posts by default",
				'post_content' => "The /posts endpoint normally doesn't include pages.",
			]
		);

		// Make sure the page isn't in a normal /posts response.
		$default_request  = new \WP_REST_Request( 'GET', '/wp/v2/posts' );
		$default_response = $this->server->dispatch( $default_request );

		$this->assertSame( 200, $default_response->get_status() );
		$this->assertSame(
			0,
			count(
				wp_list_filter(
					$default_response->get_data(),
					[ 'slug' => 'this-isnt-in-posts-by-default' ]
				)
			),
			'Default /posts endpoint is including non-post types without the apb_query param.'
		);

		// Make sure the page IS in a /posts response with apb flag.
		$flagged_request = new \WP_REST_Request( 'GET', '/wp/v2/posts' );
		$flagged_request->set_param( 'apb_query', true );
		$flagged_response = $this->server->dispatch( $flagged_request );

		$this->assertSame( 200, $flagged_response->get_status() );
		$this->assertTrue(
			count(
				wp_list_pluck( $flagged_response->get_data(), 'type' )
			) > 1,
			'/posts endpoint is not including additional post types when supplied apb_query param.'
		);
	}
}
