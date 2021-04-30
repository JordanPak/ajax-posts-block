/**
 * Posts block save
 *
 * @since 1.0.0
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import icons from '../../../icons';

export default function save( { attributes } ) {
	const { num, types, categories, tags } = attributes;

	return (
		<div
			{ ...useBlockProps.save( {
				'data-num': num,
				'data-types': types.join( ',' ),
				'data-categories': categories.join( ',' ),
				'data-tags': tags.join( ',' ),
			} ) }
		>
			<p className="apb-loading">
				{ __( 'Loading', 'ajax-posts-block' ) }
				{ icons.loading() }
			</p>
		</div>
	);
}
