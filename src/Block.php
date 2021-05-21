<?php
/**
 * Abstraction of a block
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
 * Base class for registering and handling a block
 *
 * @since 1.0.0
 */
class Block {

	/**
	 * Internal block name
	 *
	 * @since 1.0.0
	 * @var   string
	 */
	protected $name;

	/**
	 * Set everything up
	 *
	 * @since 1.0.0
	 *
	 * @param string $name  Block name.
	 */
	public function __construct( $name = null ) {
		$this->name = $name ?: $this->name;

		add_action( 'init', [ $this, 'do_registration' ] );
	}

	/**
	 * Register the block with WordPress
	 *
	 * @since 1.0.0
	 */
	public function do_registration() {

		register_block_type(
			"ajax-posts-block/{$this->name}",
			[
				'editor_script' => Blocks::EDITOR_ASSET_HANDLE,
				'editor_style'  => Blocks::EDITOR_ASSET_HANDLE,
				'script'        => Blocks::ASSET_HANDLE,
				'style'         => Blocks::ASSET_HANDLE,
			]
		);
	}
}
