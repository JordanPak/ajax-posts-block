<?php
/**
 * Misc. helper functions
 *
 * @since   1.0.0
 * @package AJAX_Posts_Block
 */

namespace AJAX_Posts_Block;

/**
 * Get a plugin template
 *
 * @since 1.0.0
 *
 * @param string $slug  Template slug (excluding .php).
 * @param array  $args  Template arguments (extracted to vars).
 */
function get_plugin_template( $slug, $args = [] ) {

	// Make vars for all the args.
	if ( ! empty( $args ) && is_array( $args ) ) {
		extract( $args ); // phpcs:ignore WordPress.PHP.DontExtract.extract_extract
	}

	include AJAX_POSTS_BLOCK_DIR . "/src/templates/{$slug}.php";
}

/**
 * Get a dynamic block template
 *
 * @since 1.0.0
 *
 * @param string $name  Block template part name (excluding .php).
 * @param array  $args  Template arguments (extracted to vars).
 */
function get_block_template( $name, $args = [] ) {
	ob_start();

	/**
	 * Hook: ajax_posts_block_before_block
	 *
	 * @param string $name Block template part name (excluding .php).
	 * @param array  $args Template arguments (extracted to vars).
	 */
	do_action( 'ajax_posts_block_before_block', $name, $args );

	get_plugin_template( $name, $args );

	/**
	 * Hook: ajax_posts_block_after_block
	 *
	 * @param string $name Block template part name (excluding .php).
	 * @param array  $args Template arguments (extracted to vars).
	 */
	do_action( 'ajax_posts_block_after_block', $name, $args );

	return ob_get_clean();
}

/**
 * Wrapper for edit_posts capability check
 *
 * @since 1.0.0
 *
 * @return bool
 */
function get_can_user_edit_posts() {
	return current_user_can( 'edit_posts' );
}

/**
 * Get the contents of an icon SVG
 *
 * @since 1.0.0
 *
 * @param  string $name  File name of icon in icons/.
 * @return string
 */
function get_icon( $name ) {
	return file_get_contents( AJAX_POSTS_BLOCK_DIR . "src/icons/{$name}.svg" ); // phpcs:ignore
}

/**
 * Output an SVG icon
 *
 * @since 1.0.0
 *
 * @param string $name  Icon file name.
 */
function do_icon( $name ) {
	echo get_icon( $name ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}
