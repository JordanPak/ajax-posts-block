<?php
/**
 * Test_Posts
 *
 * @package AJAX_Posts_Block
 */

use AJAX_Posts_Block\Posts;

/**
 * Class Test_Posts
 *
 * @package AJAX_Posts_Block
 */
class Test_Posts extends WP_UnitTestCase {

	/**
	 * Posts misc helper instance
	 *
	 * @var Blocks
	 */
	public $instance;

	/**
	 * Setup
	 */
	public function setUP() {
		parent::setUp();
		$this->instance = new Posts();
	}

	/**
	 * Test __construct()
	 *
	 * @covers AJAX_Posts_Block\Posts::__construct()
	 */
	public function test_construct() {
		$this->assertEquals( 10, has_action( 'init', [ $this->instance, 'do_meta_registration' ] ) );
	}
}
