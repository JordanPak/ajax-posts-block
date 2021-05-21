<?php
/**
 * Plugin Name: AJAX Posts Block
 * Plugin URI: https://wpengine.com/
 * Description: Editor block that displays a user-defined number of posts by category and/or tag.
 * Author: capital_w_dangit
 * Author URI: https://capital-w-dangit.test
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: ajax-posts-block
 *
 * @package AJAX_Posts_Block
 */

namespace AJAX_Posts_Block;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'AJAX_POSTS_BLOCK_VERSION', '1.0.0' );
define( 'AJAX_POSTS_BLOCK_DIR', plugin_dir_path( __FILE__ ) );
define( 'AJAX_POSTS_BLOCK_URL', plugin_dir_url( __FILE__ ) );

// Get autoloader and helper functions.
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/src/functions.php';

/**
 * Plugin wrapper
 *
 * @since 1.0.0
 */
class Plugin {

	/**
	 * The single instance of this class
	 *
	 * @since 1.0.0
	 * @var   Plugin
	 */
	protected static $instance;

	/**
	 * Blocks handler
	 *
	 * @since 1.0.0
	 * @var   Blocks
	 */
	public $blocks;

	/**
	 * REST API endpoint extension
	 *
	 * @since 1.0.0
	 * @var   REST_API
	 */
	public $rest_api;

	/**
	 * Post extension handler
	 *
	 * @since 1.0.0
	 * @var   Posts
	 */
	public $posts;

	/**
	 * Get main plugin instance.
	 *
	 * @since 1.0.0
	 * @see   instance()
	 *
	 * @return Plugin
	 */
	public static function instance() {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Spin up plugin
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'plugins_loaded', [ $this, 'init' ] );
		add_action( 'ajax_posts_block_activate', [ $this, 'init' ], 5 );
	}

	/**
	 * Do block and asset registration
	 *
	 * @since 1.0.0
	 */
	public function init() {
		$this->blocks   = new Blocks();
		$this->rest_api = new REST_API();
		$this->posts    = new Posts();

		do_action( 'ajax_posts_block_loaded' );
	}

	/**
	 * Handle activation tasks
	 *
	 * @since 1.0.0
	 */
	public function do_activate() {
		do_action( 'ajax_posts_block_activate' );
	}

	/**
	 * Handle deactivation tasks
	 *
	 * @since 1.0.0
	 */
	public function do_deactivate() {
		do_action( 'ajax_posts_block_deactivate' );
	}
}

/**
 * Get instance of main plugin class
 *
 * @since 1.0.0
 *
 * @return Plugin
 */
function instance() {
	return Plugin::instance();
}

// Instantiate plugin wrapper class.
$ajax_posts_block_plugin = instance();

// Register activation/deactivation stuff.
register_activation_hook( __FILE__, [ $ajax_posts_block_plugin, 'do_activate' ] );
register_deactivation_hook( __FILE__, [ $ajax_posts_block_plugin, 'do_deactivate' ] );
