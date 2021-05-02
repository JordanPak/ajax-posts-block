<?php
/**
 * Editor blocks handler
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
 * Block registration and asset handling
 *
 * @since 1.0.0
 */
class Blocks {

	/**
	 * Block editor CSS/JS asset handle
	 *
	 * @since 1.0.0
	 * @var   string
	 */
	const EDITOR_ASSET_HANDLE = 'ajax-posts-block-editor';

	/**
	 * Block front end + editor CSS handle
	 *
	 * @since 1.0.0
	 * @var   string
	 */
	const ASSET_HANDLE = 'ajax-posts-block-blocks';

	/**
	 * Spin everything up
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'init', [ __CLASS__, 'do_asset_registration' ] ); // @todo don't make this static.
		add_action( 'enqueue_block_editor_assets', [ __CLASS__, 'enqueue_editor_assets' ] );

		new Block( 'posts' );
	}

	/**
	 * Register assets for blocks/editor to use
	 *
	 * @since 1.0.0
	 */
	public static function do_asset_registration() {
		$build_dir    = AJAX_POSTS_BLOCK_DIR . 'build';
		$build_url    = AJAX_POSTS_BLOCK_URL . 'build';
		$editor_asset = require "$build_dir/editor.asset.php";
		$public_asset = require "$build_dir/public.asset.php";

		// Register block editor JS.
		wp_register_script(
			self::EDITOR_ASSET_HANDLE,
			"$build_url/editor.js",
			$editor_asset['dependencies'],
			$editor_asset['version'],
			true
		);

		// Register editor-specific block styles.
		wp_register_style(
			self::EDITOR_ASSET_HANDLE,
			"$build_url/editor.css",
			[],
			filemtime( "$build_dir/editor.css" )
		);

		// Register front-end + editor block JS.
		wp_register_script(
			self::ASSET_HANDLE,
			"$build_url/public.js",
			$public_asset['dependencies'],
			$public_asset['version'],
			true
		);

		// Add some helper vars for the block.
		wp_localize_script(
			self::ASSET_HANDLE,
			'apbHelper',
			[
				'previous' => __( 'Older', 'ajax-posts-block' ),
				'next'     => __( 'Newer', 'ajax-posts-block' ),
			]
		);

		// Register front-end + editor block styles.
		wp_register_style(
			self::ASSET_HANDLE,
			"$build_url/style-editor.css",
			[],
			filemtime( "$build_dir/style-editor.css" )
		);
	}

	/**
	 * Enqueue editor assets
	 *
	 * @since 1.0.0
	 */
	public static function enqueue_editor_assets() {

		// Always enqueue editor script/styles since sidebar plugins aren't
		// registered in PHP.
		wp_enqueue_script( self::EDITOR_ASSET_HANDLE );
		wp_enqueue_style( self::EDITOR_ASSET_HANDLE );
	}
}
