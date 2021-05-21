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

	/**
	 * Test init()
	 *
	 * @covers AJAX_Posts_Block\Plugin::init()
	 */
	public function test_init() {
		$reflection_plugin = new ReflectionObject( $this->instance );
		$blocks_property   = $reflection_plugin->getProperty( 'blocks' );

		$blocks_property->setAccessible( true );
		$blocks_class = $blocks_property->getValue( $this->instance );

		$this->assertEquals( 'AJAX_Posts_Block\Blocks', get_class( $blocks_class ) );
	}
}
