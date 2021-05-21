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
	 * Test __construct()
	 *
	 * @covers AJAX_Posts_Block\Plugin::__construct()
	 */
	public function test_construct() {
		$this->assertEquals( 10, has_action( 'plugins_loaded', [ $this->instance, 'init' ] ) );
		$this->assertEquals( 5, has_action( 'ajax_posts_block_activate', [ $this->instance, 'init' ] ) );
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

		$this->assertEquals(
			'AJAX_Posts_Block\Blocks',
			get_class( $blocks_class ),
			'Main plugin class props are not all instantiated correctly.'
		);
	}
}
