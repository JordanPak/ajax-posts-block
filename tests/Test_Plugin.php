<?php
/**
 * Test_Plugin
 *
 * @package AJAX_Posts_Block
 */

use AJAX_Posts_Block\Plugin;

/**
 * Class Test_Plugin
 *
 * @package AJAX_Posts_Block
 */
class Test_Plugin extends WP_UnitTestCase {

	/**
	 * Plugin instance
	 *
	 * @var Plugin
	 */
	public $instance;

	/**
	 * Setup
	 */
	public function setUP() {
		parent::setUp();
		$this->instance = new Plugin();
		$this->instance->init();
	}


	// /**
	//  * Test init()
	//  *
	//  * @covers AJAX_Posts_Block\Plugin::init()
	//  */
	// public function test_init() {
	// 	$plugin_instance = new Plugin();
	// 	$plugin_instance->init();
	// 	var_dump( did_action( 'ajax_posts_block_loaded' ) );

	// 	// $this->assertEquals( 10,  )
	// }
}
