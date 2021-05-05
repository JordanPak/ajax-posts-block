/**
 * Posts block
 *
 * @since 1.0.0
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { info as icon } from '@wordpress/icons';

import './style.scss';

import edit from './edit';
import save from './save';

registerBlockType( 'ajax-posts-block/posts', {
	apiVersion: 2,
	title: __( 'Posts', 'ajax-posts-block' ),
	description: __(
		'Display AJAX-pagable posts by category and/or tag.',
		'ajax-posts-block'
	),
	icon,
	category: 'widgets',
	keywords: [ __( 'posts' ), __( 'content' ), __( 'ajax' ) ],

	attributes: {
		num: {
			type: 'number',
			default: 6,
		},
		categories: {
			type: 'array',
			default: [],
		},
		tags: {
			type: 'array',
			default: [],
		},
		types: {
			type: 'array',
			default: [],
		},
	},

	edit,
	save,
} );
