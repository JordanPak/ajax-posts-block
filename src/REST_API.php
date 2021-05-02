<?php
/**
 * REST API endpoints handler
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
 * REST API endpoint extensions
 *
 * @since 1.0.0
 */
class REST_API {

	/**
	 * Hook everything in
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_filter( 'rest_post_query', [ $this, 'set_post_types' ], 10, 2 );
	}

	/**
	 * Adjust posts endpoint to accept post type arguments
	 *
	 * This has been modified slightly, but see #ironic WP Engine-owned blog
	 * article:
	 *
	 * @since 1.0.0
	 * @see   https://torquemag.io/2017/08/how-to-query-multiple-post-types-with-one-request-to-the-wordpress-rest-api/
	 *
	 * @param  array           $args    Arguments to be passed to WP_Query.
	 * @param  WP_REST_Request $request The REST API request.
	 * @return array           $args    Arguments to be passed to WP_Query.
	 */
	public function set_post_types( $args, $request ) {

		// Make sure we're only messing with our plugin's query.
		if ( empty( $request->get_param( 'apb_query' ) ) ) {
			return $args;
		}

		// Reset to an array we can work with.
		$args['post_type'] = [];

		// Check types if specific ones were selected.
		$types = array_filter( explode( ',', $request->get_param( 'type' ) ) );

		// If specific types were passed in, validate the object and add to the
		// args.
		if ( $types ) {
			foreach ( $types as $type ) {
				$type_object = get_post_type_object( $type );

				if ( $type_object && $type_object->show_in_rest ) {
					$args['post_type'][] = $type;
				}
			}
		} else {
			// Otherwise, get all "showing in REST", minus wp_block.
			$args['post_type'] = get_post_types( [ 'show_in_rest' => true ] );
			unset( $args['post_type']['wp_block'] );
		}

		return $args;
	}
}
