<?php
/**
 * Test_AJAX_Posts_Block
 *
 * @package AJAX_Posts_Block
 */

use function AJAX_Posts_Block\instance;

/**
 * Class Test_AJAX_Posts_Block
 *
 * @package AJAX_Posts_Block
 */
class Test_AJAX_Posts_Block extends WP_UnitTestCase {

	/**
	 * Test instance()
	 *
	 * @covers AJAX_Posts_Block\instance()
	 */
	public function test_singleton() {
		$this->assertEquals( 'AJAX_Posts_Block\Plugin', get_class( instance() ) );

		// instance() should return the same Plugin instance.
		$this->assertEquals( instance(), instance() );
	}
}
