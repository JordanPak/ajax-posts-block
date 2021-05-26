<?php
/**
 * PHPUnit bootstrap file
 *
 * @since   1.0.0
 * @package AJAX_Posts_Block
 */

$apb_tests_dir = getenv( 'WP_TESTS_DIR' );

if ( ! $apb_tests_dir ) {
	$apb_tests_dir = rtrim( sys_get_temp_dir(), '/\\' ) . '/wordpress-tests-lib';
}

if ( ! file_exists( $apb_tests_dir . '/includes/functions.php' ) ) {
	echo "Could not find $apb_tests_dir/includes/functions.php, have you run bin/install-wp-tests.sh ?" . PHP_EOL; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	exit( 1 );
}

// Give access to tests_add_filter() function.
require_once $apb_tests_dir . '/includes/functions.php';

/**
 * Manually load the plugin being tested.
 *
 * @since 1.0.0
 */
function apb_manually_load_plugin() {
	require dirname( dirname( __FILE__ ) ) . '/ajax-posts-block.php';
}
tests_add_filter( 'muplugins_loaded', 'apb_manually_load_plugin' );

// Start up the WP testing environment.
require $apb_tests_dir . '/includes/bootstrap.php';
