<?php
/**
 * Misc. helper functions
 *
 * @since   1.0.0
 * @package AJAX_Posts_Block
 */

namespace AJAX_Posts_Block;

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
