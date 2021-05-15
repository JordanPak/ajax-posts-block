<?php
/**
 * Misc. post post type adjustments/extensions
 *
 * @since   1.0.0
 * @package AJAX_Posts_Block
 */

namespace AJAX_Posts_Block;

// exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Post extensions handler
 *
 * @since 1.0.0
 */
class Posts {

	/**
	 * Hook everything in
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'init', [ $this, 'do_meta_registration' ] );
	}

	/**
	 * Register meta needed for custom blocks and sidebar plugins
	 *
	 * @since 1.0.0
	 */
	public function do_meta_registration() {

		register_post_meta(
			'',
			'apb_read_time',
			[
				'show_in_rest'  => true,
				'single'        => true,
				'type'          => 'number',
				'auth_callback' => __NAMESPACE__ . '\get_can_user_edit_posts',
			]
		);
	}
}
