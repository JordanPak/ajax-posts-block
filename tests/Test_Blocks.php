<?php
/**
 * Test_Blocks
 *
 * @package AJAX_Posts_Block
 */

use AJAX_Posts_Block\Blocks;

/**
 * Class Test_Blocks
 *
 * @package AJAX_Posts_Block
 */
class Test_Blocks extends WP_UnitTestCase {

	/**
	 * Blocks instance
	 *
	 * @var Blocks
	 */
	public $instance;

	/**
	 * Setup
	 */
	public function setUP() {
		parent::setUp();
		$this->instance = new Blocks();
	}

	/**
	 * Test __construct()
	 *
	 * @covers AJAX_Posts_Block\Blocks::__construct()
	 */
	public function test_construct() {

		// Check hooks.
		$this->assertEquals( 10, has_action( 'init', [ $this->instance, 'do_asset_registration' ] ) );
		$this->assertEquals( 10, has_action( 'enqueue_block_editor_assets', [ $this->instance, 'enqueue_editor_assets' ] ) );

		// Make sure "Posts" block is registered.
		$registry = WP_Block_Type_Registry::get_instance();
		$this->assertTrue( $registry->is_registered( 'ajax-posts-block/posts' ) );
	}
}
